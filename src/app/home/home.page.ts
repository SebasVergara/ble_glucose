import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { GraphComponent } from '../components/graph/graph.component';
import Swal from 'sweetalert2';

const GLUCOSE_SERVICE = '6E400001-B5A3-F393-E0A9-E50E24DCCA9E';
const GLUCOSE_CHARACTERISTIC = '6E400003-B5A3-F393-E0A9-E50E24DCCA9E';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  devices: any[] = [];
  readFun: any;
  peripheral: any;
  glucose: any;
  deviceId: any;
  actualValue: any;
  actualBatteryValue: any;
  penultimalValue: any;
  deviceInfo: any;
  constructor(
    private ble: BLE,
    private ngzone: NgZone,
    private router: Router,
    private toastController: ToastController,
    private storage: Storage,
    private firestore: AngularFirestore,
    private modalController: ModalController,
  ) {
    this.glucose = new Array();
    this.actualValue = 0.00;
    // this.actualBatteryValue = 4;
    // this.actualValue = 'glucose:2.26&batery_level:99.99';
    // this.glucose.push({data: 'glucose:2.06&batery_level:99.99'})
    // this.glucose.push({data: 'glucose:2.16&batery_level:99.99'})
    // this.glucose.push({data: 'glucose:2.26&batery_level:99.99'})
    // // if (document.URL.indexOf("?") > 0) {
    //   // let splitURL = document.URL.split("?");
    //   let splitParams = this.actualValue.split("&");
    //   for (let index = 0; index < splitParams.length; index++) {
    //     let singleURLParam = splitParams[index].split(':')
    //     console.log(singleURLParam);
    //     switch (singleURLParam[0]) {
    //       case 'glucose':
    //         this.actualValue = singleURLParam[1];
    //         break;
    //       case 'batery':
    //         // this.actualValue = singleURLParam[1];
    //         break;
    //     }
    //   }
      
      // console.log(splitParams);
      // this.ref = singleURLParam[1];
      
    // }
    // this.glucose.push({data: '2.16'})
    // this.glucose.push({data: '2.26'})
    // this.penultimalValue = this.glucose[this.glucose.length - 2];

  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.storage.get('device').then((device) => {
      if (device) {
        this.deviceInfo = device;
        // alert(JSON.stringify(id))
        this.autoconnect(device.id);
      } else {

      }
    })
  }
  autoconnect(id) {
    this.ble.autoConnect(id, data => {
      this.presentToast('Conectando al dispositivo y solicitando lectura');
      this.onConnected(id);
      this.devices = [];
    }, (err) => {
      // this.presentToast('Dispositivo desconectado');
      clearInterval(this.readFun);
    })
  }
  // ArrayBuffer to readable value
  bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      color: 'dark',
      duration: 4000
    });
    toast.present();
  }
  onConnected(id) {
    this.ble.requestMtu(id, 128).then(() => {
      // alert('MTU');
      this.ble.startNotification(id, GLUCOSE_SERVICE, GLUCOSE_CHARACTERISTIC).subscribe(
        data => {
          this.onGlucoseChange(data)
        },
        () => this.presentToast('Error notificando al dispositivo')
      )
  
      this.deviceId = id;
      this.readData()
    }).catch(() => {
      // alert('MTU')
    });
    

  }
  readData() {
    // this.ble.requestMtu(this.peripheral.id, 19).then(() => {
    //   alert('MTU')
    // }).catch(() => {
    //   alert('MTU')
    // });
    // Read the current value of the temperature characteristic

    this.ble.read(this.peripheral.id, GLUCOSE_SERVICE, GLUCOSE_CHARACTERISTIC).then(
      data => this.onGlucoseChange(data),
      () => {
        // alert('Unexpected Error')
      }
    )
  }
  onGlucoseChange(buffer: ArrayBuffer) {

    this.ngzone.run(() => {
      // alert(this.bytesToString(buffer))
      let splitParams = this.bytesToString(buffer).split("&");
      for (let index = 0; index < splitParams.length; index++) {
        let singleURLParam = splitParams[index].split(':')
        console.log(singleURLParam);
        switch (singleURLParam[0]) {
          case 'glucose':
            this.actualValue = singleURLParam[1];
            break;
          case 'batery_level':
            this.actualBatteryValue = parseInt(singleURLParam[1], 10);
            // this.actualValue = singleURLParam[1];
            break;
        }
      }
      this.firestore.collection('user_1').add({glucose: this.actualValue, created: new Date() })
      // this.firestore.collection('glucose').doc('user_1').set({data: {glucose: this.actualValue, created: new Date()} })
      // this.actualValue = this.bytesToString(buffer)
      this.glucose.push({ data: this.actualValue })
      this.penultimalValue = this.glucose[this.glucose.length - 2];
      // alert(JSON.stringify(this.glucose));
    });

  }
  onClick() {
    var max = 3,
    min = 1 ,
    random = (Math.random() * (max - min) + min).toFixed(2);
    console.log(random);
    this.actualValue = random;
    console.log();
    var key = Date.now().toString();
    var obj = {};
    obj[key] = {glucose: this.actualValue, created: new Date()};
    var label = Date.now().toString();
    // this.firestore.collection('glucose').doc('user_1')
    // this.firestore.collection('glucose').doc('user_1').set(obj)
    this.firestore.collection('user_1').add({glucose: random, created: new Date() })
  }
  async openGraph() {
    const modal = await this.modalController.create({
      component: GraphComponent,
      componentProps: {
      },
      cssClass: 'modal-block',
      keyboardClose: true,
      backdropDismiss: false,
      showBackdrop: true,
      mode: 'ios',
    });
    modal.onDidDismiss().then((data:any) => {
    })
    return await modal.present();
  }
  showDeviceInfo() {
    if (this.deviceInfo) {
      Swal.fire({
        // icon: 'success',
        html: '<div><p><strong>Nombre:</strong>'+this.deviceInfo.name+'</p></div><div><p><strong>ID:</strong>'+this.deviceInfo.id+'</p></div>',
        // timer: 3000,
        showConfirmButton: true,
        heightAuto: false
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No hay un dispositivo vinculado, por favor vincula uno.',
        // timer: 3000,
        showConfirmButton: true,
        heightAuto: false
      }).then(() => {
        this.router.navigate(['config'], { queryParams: {  }, skipLocationChange: false });
      })
    }
  }
  go2Config() {
    this.router.navigate(['config'], { queryParams: {  }, skipLocationChange: false });
  }
}
