import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  readFun: any;
  bleData: any;
  constructor(
    private ble: BLE,
  ) {
    this.bleData = {};
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    console.log('Hello World')
    if (document.URL.indexOf("?") > 0) {
      let splitURL = document.URL.split("?");
      let splitParams = splitURL[1].split("&");
      splitParams.forEach(param => {
        var paramData = (param.split('='));
        switch (paramData[0]) {
          case 'id':
            this.bleData['id']= paramData[1];
            break;
          case 'uuid':
            this.bleData['uuid']= paramData[1];
            break;
          case 'char':
            this.bleData['char']= paramData[1];
            break;
          default:
            break;
        }
      });
    }
    this.read(this.bleData.id, this.bleData.uuid, this.bleData.char);
  }
  read(id, uuid, char) {
    var self = this;
    this.readFun = setInterval(function () {
      self.ble.read(id, uuid, char).then((buffer) => {
        alert(JSON.stringify(self.bytesToString(buffer)));
      }, (err) => { 
        alert('error reading')
      })
    }, 5000)
  }
  ionViewWillLeave() {
    clearInterval(this.readFun);
  }
  bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
}
