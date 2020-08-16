import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  devices:any[] = [];
  readFun: any;
  peripheral: any;
  glucose: any;
  connecting: any;
  constructor(
    private ble: BLE,
    private ngzone: NgZone,
    private toastController: ToastController,
    private storage: Storage,
    private router: Router
  ) { 
    this.connecting = {}
  }

  ngOnInit() {
  }
  ionViewDidEnter () {
    this.scan();
  }
  scan() {
    this.devices = [];
    this.glucose = new Array();
    this.ble.scan([], 10).subscribe( (devices) => {
      this.ngzone.run( () => {
        this.devices.push(devices);
      })
    }, (err) => {
      this.devices.push({name: 'Macbook', id: 'AA:BB:CC:DD:EE:FF'});
      this.devices.push({name: 'Headset', id: 'AA:BB:CC:DD:EE:FF'});
      this.devices.push({name: 'Celular', id: 'AA:BB:CC:DD:EE:FF'});
    })
  }
  autoconnect(id, idx, device) {
    this.connecting = {}
    this.connecting[idx] = true;
    this.ble.autoConnect(id, data => {
      this.presentToast('Dispositivo Conectado!');
      this.connecting[idx] = false;
      this.storage.set('device', device).then(() => {
        this.router.navigate(['home'], { queryParams: {  }, skipLocationChange: false });
      })
      // this.storage.set('device', id).then(() => {
      //   this.router.navigate(['home'], { queryParams: {  }, skipLocationChange: false });
      // });
    }, (err) => {
      this.connecting[idx] = false;
      clearInterval(this.readFun);
    })
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
}
