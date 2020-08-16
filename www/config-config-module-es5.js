function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfigConfigPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-back title=\"Configurar dispositivo\"></app-header-back>\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons (click)=\"goBack()\" slot=\"start\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Configurar dispositivo</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-card (click)=\"autoconnect(device.id, i, device)\" *ngFor=\"let device of devices; let i = index\">\n    <ion-card-content>\n      <div>\n        <ion-icon slot=\"start\" name=\"bluetooth-outline\"></ion-icon>\n      </div>\n      <div>\n        <p>{{device.name || 'Unknown'}}</p>\n        <p>{{device.id}}</p>\n      </div>\n      <ion-spinner *ngIf=\"connecting[i]\" slot=\"end\" name=\"lines\"></ion-spinner>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-button (click)=\"scan()\" expand=\"block\" shape=\"round\">\n      Escanear\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/config/config-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/config/config-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ConfigPageRoutingModule */

  /***/
  function srcAppConfigConfigRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPageRoutingModule", function () {
      return ConfigPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config.page */
    "./src/app/config/config.page.ts");

    var routes = [{
      path: '',
      component: _config_page__WEBPACK_IMPORTED_MODULE_3__["ConfigPage"]
    }];

    var ConfigPageRoutingModule = function ConfigPageRoutingModule() {
      _classCallCheck(this, ConfigPageRoutingModule);
    };

    ConfigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfigPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/config/config.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/config/config.module.ts ***!
    \*****************************************/

  /*! exports provided: ConfigPageModule */

  /***/
  function srcAppConfigConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function () {
      return ConfigPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _config_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./config-routing.module */
    "./src/app/config/config-routing.module.ts");
    /* harmony import */


    var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./config.page */
    "./src/app/config/config.page.ts");
    /* harmony import */


    var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/ble/ngx */
    "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var ConfigPageModule = function ConfigPageModule() {
      _classCallCheck(this, ConfigPageModule);
    };

    ConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _config_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigPageRoutingModule"]],
      declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]],
      providers: [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__["BLE"]]
    })], ConfigPageModule);
    /***/
  },

  /***/
  "./src/app/config/config.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/config/config.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigConfigPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0.75rem 1rem;\n  padding: 0rem 1rem;\n}\nion-card ion-card-content {\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\nion-card ion-card-content p {\n  margin: 0.75em 0;\n}\nion-card ion-card-content div:nth-child(1) {\n  flex: 1 1 15%;\n  font-size: calc(3vw + 3vh);\n  display: flex;\n  justify-content: center;\n}\nion-card ion-card-content div:nth-child(2) {\n  flex: 1 1 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rYWlyL0RvY3VtZW50cy9hcHBzL2JsZS9zcmMvYXBwL2NvbmZpZy9jb25maWcucGFnZS5zY3NzIiwic3JjL2FwcC9jb25maWcvY29uZmlnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VOO0FERE07RUFDRSxnQkFBQTtBQ0dSO0FEQVE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNFVjtBREFRO0VBQ0UsYUFBQTtBQ0VWIiwiZmlsZSI6InNyYy9hcHAvY29uZmlnL2NvbmZpZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwLjc1cmVtIDFyZW07XG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMC43NWVtIDA7XG4gICAgICB9XG4gICAgICBkaXYge1xuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMSAxIDE1JTtcbiAgICAgICAgICBmb250LXNpemU6IGNhbGMoM3Z3ICsgM3ZoKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmbGV4OiAxIDEgODUlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMC43NXJlbSAxcmVtO1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMC43NWVtIDA7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGRpdjpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAxIDEgMTUlO1xuICBmb250LXNpemU6IGNhbGMoM3Z3ICsgM3ZoKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGRpdjpudGgtY2hpbGQoMikge1xuICBmbGV4OiAxIDEgODUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/config/config.page.ts":
  /*!***************************************!*\
    !*** ./src/app/config/config.page.ts ***!
    \***************************************/

  /*! exports provided: ConfigPage */

  /***/
  function srcAppConfigConfigPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPage", function () {
      return ConfigPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/ble/ngx */
    "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ConfigPage = /*#__PURE__*/function () {
      function ConfigPage(ble, ngzone, toastController, storage, router) {
        _classCallCheck(this, ConfigPage);

        this.ble = ble;
        this.ngzone = ngzone;
        this.toastController = toastController;
        this.storage = storage;
        this.router = router;
        this.devices = [];
        this.connecting = {};
      }

      _createClass(ConfigPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.scan();
        }
      }, {
        key: "scan",
        value: function scan() {
          var _this = this;

          this.devices = [];
          this.glucose = new Array();
          this.ble.scan([], 10).subscribe(function (devices) {
            _this.ngzone.run(function () {
              _this.devices.push(devices);
            });
          }, function (err) {
            _this.devices.push({
              name: 'Macbook',
              id: 'AA:BB:CC:DD:EE:FF'
            });

            _this.devices.push({
              name: 'Headset',
              id: 'AA:BB:CC:DD:EE:FF'
            });

            _this.devices.push({
              name: 'Celular',
              id: 'AA:BB:CC:DD:EE:FF'
            });
          });
        }
      }, {
        key: "autoconnect",
        value: function autoconnect(id, idx, device) {
          var _this2 = this;

          this.connecting = {};
          this.connecting[idx] = true;
          this.ble.autoConnect(id, function (data) {
            _this2.presentToast('Dispositivo Conectado!');

            _this2.connecting[idx] = false;

            _this2.storage.set('device', device).then(function () {
              _this2.router.navigate(['home'], {
                queryParams: {},
                skipLocationChange: false
              });
            }); // this.storage.set('device', id).then(() => {
            //   this.router.navigate(['home'], { queryParams: {  }, skipLocationChange: false });
            // });

          }, function (err) {
            _this2.connecting[idx] = false;
            clearInterval(_this2.readFun);
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: msg,
                      mode: 'ios',
                      color: 'dark',
                      duration: 4000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ConfigPage;
    }();

    ConfigPage.ctorParameters = function () {
      return [{
        type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./config.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./config.page.scss */
      "./src/app/config/config.page.scss"))["default"]]
    })], ConfigPage);
    /***/
  }
}]);
//# sourceMappingURL=config-config-module-es5.js.map