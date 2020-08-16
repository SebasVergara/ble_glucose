(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-device-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>device</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/device/device-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/device/device-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DevicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageRoutingModule", function() { return DevicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device.page */ "./src/app/device/device.page.ts");




const routes = [
    {
        path: '',
        component: _device_page__WEBPACK_IMPORTED_MODULE_3__["DevicePage"]
    }
];
let DevicePageRoutingModule = class DevicePageRoutingModule {
};
DevicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DevicePageRoutingModule);



/***/ }),

/***/ "./src/app/device/device.module.ts":
/*!*****************************************!*\
  !*** ./src/app/device/device.module.ts ***!
  \*****************************************/
/*! exports provided: DevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageModule", function() { return DevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-routing.module */ "./src/app/device/device-routing.module.ts");
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device.page */ "./src/app/device/device.page.ts");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");








let DevicePageModule = class DevicePageModule {
};
DevicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _device_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevicePageRoutingModule"]
        ],
        declarations: [_device_page__WEBPACK_IMPORTED_MODULE_6__["DevicePage"]],
        providers: [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__["BLE"]]
    })
], DevicePageModule);



/***/ }),

/***/ "./src/app/device/device.page.scss":
/*!*****************************************!*\
  !*** ./src/app/device/device.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9kZXZpY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/device/device.page.ts":
/*!***************************************!*\
  !*** ./src/app/device/device.page.ts ***!
  \***************************************/
/*! exports provided: DevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePage", function() { return DevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");



let DevicePage = class DevicePage {
    constructor(ble) {
        this.ble = ble;
        this.bleData = {};
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('Hello World');
        if (document.URL.indexOf("?") > 0) {
            let splitURL = document.URL.split("?");
            let splitParams = splitURL[1].split("&");
            splitParams.forEach(param => {
                var paramData = (param.split('='));
                switch (paramData[0]) {
                    case 'id':
                        this.bleData['id'] = paramData[1];
                        break;
                    case 'uuid':
                        this.bleData['uuid'] = paramData[1];
                        break;
                    case 'char':
                        this.bleData['char'] = paramData[1];
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
                alert('error reading');
            });
        }, 5000);
    }
    ionViewWillLeave() {
        clearInterval(this.readFun);
    }
    bytesToString(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }
};
DevicePage.ctorParameters = () => [
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"] }
];
DevicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./device.page.scss */ "./src/app/device/device.page.scss")).default]
    })
], DevicePage);



/***/ })

}]);
//# sourceMappingURL=device-device-module-es2015.js.map