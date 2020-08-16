(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/bluetooth-le/__ivy_ngcc__/ngx/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/bluetooth-le/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************/
/*! exports provided: BluetoothScanMode, BluetoothMatchMode, BluetoothMatchNum, BluetoothCallbackType, BluetoothLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothScanMode", function() { return BluetoothScanMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothMatchMode", function() { return BluetoothMatchMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothMatchNum", function() { return BluetoothMatchNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothCallbackType", function() { return BluetoothCallbackType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothLE", function() { return BluetoothLE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





var BluetoothScanMode;
(function (BluetoothScanMode) {
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_OPPORTUNISTIC"] = -1] = "SCAN_MODE_OPPORTUNISTIC";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_LOW_POWER"] = 0] = "SCAN_MODE_LOW_POWER";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_BALANCED"] = 1] = "SCAN_MODE_BALANCED";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_LOW_LATENCY"] = 2] = "SCAN_MODE_LOW_LATENCY";
})(BluetoothScanMode || (BluetoothScanMode = {}));
var BluetoothMatchMode;
(function (BluetoothMatchMode) {
    BluetoothMatchMode[BluetoothMatchMode["MATCH_MODE_AGRESSIVE"] = 1] = "MATCH_MODE_AGRESSIVE";
    BluetoothMatchMode[BluetoothMatchMode["MATCH_MODE_STICKY"] = 2] = "MATCH_MODE_STICKY";
})(BluetoothMatchMode || (BluetoothMatchMode = {}));
var BluetoothMatchNum;
(function (BluetoothMatchNum) {
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_ONE_ADVERTISEMENT"] = 1] = "MATCH_NUM_ONE_ADVERTISEMENT";
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_FEW_ADVERTISEMENT"] = 2] = "MATCH_NUM_FEW_ADVERTISEMENT";
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_MAX_ADVERTISEMENT"] = 3] = "MATCH_NUM_MAX_ADVERTISEMENT";
})(BluetoothMatchNum || (BluetoothMatchNum = {}));
var BluetoothCallbackType;
(function (BluetoothCallbackType) {
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_ALL_MATCHES"] = 1] = "CALLBACK_TYPE_ALL_MATCHES";
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_FIRST_MATCH"] = 2] = "CALLBACK_TYPE_FIRST_MATCH";
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_MATCH_LOST"] = 4] = "CALLBACK_TYPE_MATCH_LOST";
})(BluetoothCallbackType || (BluetoothCallbackType = {}));
var BluetoothLE = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BluetoothLE, _super);
    function BluetoothLE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothLE.prototype.initialize = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "initialize", { "successIndex": 0, "errorIndex": 2, "observable": true }, arguments); };
    BluetoothLE.prototype.enable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", { "callbackOrder": "reverse", "sync": true }, arguments); };
    BluetoothLE.prototype.disable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disable", { "callbackOrder": "reverse", "sync": true }, arguments); };
    BluetoothLE.prototype.getAdapterInfo = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAdapterInfo", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.startScan = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startScan", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.stopScan = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stopScan", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.retrieveConnected = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "retrieveConnected", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.bond = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "bond", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.unbond = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unbond", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.connect = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "connect", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.reconnect = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "reconnect", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.disconnect = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disconnect", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.close = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "close", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.discover = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "discover", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.services = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "services", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.characteristics = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "characteristics", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.descriptors = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "descriptors", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.read = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "read", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.subscribe = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "subscribe", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.unsubscribe = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unsubscribe", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.write = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "write", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.writeQ = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "writeQ", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.readDescriptor = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "readDescriptor", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.writeDescriptor = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "writeDescriptor", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.rssi = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "rssi", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.mtu = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "mtu", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.requestConnectionPriority = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestConnectionPriority", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isInitialized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isInitialized", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isScanning = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isScanning", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isBonded = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isBonded", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.wasConnected = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "wasConnected", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isConnected = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isConnected", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isDiscovered = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isDiscovered", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.requestPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermission", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isLocationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isLocationEnabled", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.requestLocation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestLocation", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.initializePeripheral = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "initializePeripheral", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.addService = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addService", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.removeService = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeService", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.removeAllServices = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeAllServices", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.startAdvertising = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startAdvertising", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.stopAdvertising = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stopAdvertising", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isAdvertising = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isAdvertising", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.respond = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "respond", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.notify = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "notify", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.encodedStringToBytes = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "encodedStringToBytes", { "sync": true }, arguments); };
    BluetoothLE.prototype.bytesToEncodedString = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "bytesToEncodedString", { "sync": true }, arguments); };
    BluetoothLE.prototype.stringToBytes = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stringToBytes", { "sync": true }, arguments); };
    BluetoothLE.prototype.bytesToString = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "bytesToString", { "sync": true }, arguments); };
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_OPPORTUNISTIC", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "SCAN_MODE_OPPORTUNISTIC"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "SCAN_MODE_OPPORTUNISTIC", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_LOW_POWER", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "SCAN_MODE_LOW_POWER"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "SCAN_MODE_LOW_POWER", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_BALANCED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "SCAN_MODE_BALANCED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "SCAN_MODE_BALANCED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_LOW_LATENCY", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "SCAN_MODE_LOW_LATENCY"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "SCAN_MODE_LOW_LATENCY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_MODE_AGGRESSIVE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "MATCH_MODE_AGGRESSIVE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "MATCH_MODE_AGGRESSIVE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_MODE_STICKY", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "MATCH_MODE_STICKY"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "MATCH_MODE_STICKY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_NUM_ONE_ADVERTISEMENT", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "MATCH_NUM_ONE_ADVERTISEMENT"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "MATCH_NUM_ONE_ADVERTISEMENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_NUM_FEW_ADVERTISEMENT", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "MATCH_NUM_FEW_ADVERTISEMENT"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "MATCH_NUM_FEW_ADVERTISEMENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_NUM_MAX_ADVERTISEMENT", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "MATCH_NUM_MAX_ADVERTISEMENT"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "MATCH_NUM_MAX_ADVERTISEMENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "CALLBACK_TYPE_ALL_MATCHES", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "CALLBACK_TYPE_ALL_MATCHES"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "CALLBACK_TYPE_ALL_MATCHES", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "CALLBACK_TYPE_FIRST_MATCH", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "CALLBACK_TYPE_FIRST_MATCH"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "CALLBACK_TYPE_FIRST_MATCH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "CALLBACK_TYPE_MATCH_LOST", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "CALLBACK_TYPE_MATCH_LOST"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "CALLBACK_TYPE_MATCH_LOST", value); },
        enumerable: true,
        configurable: true
    });
    BluetoothLE.pluginName = "BluetoothLE";
    BluetoothLE.plugin = "cordova-plugin-bluetoothle";
    BluetoothLE.pluginRef = "bluetoothle";
    BluetoothLE.repo = "https://github.com/randdusing/cordova-plugin-bluetoothle";
    BluetoothLE.install = "ionic cordova plugin add cordova-plugin-bluetoothle";
    BluetoothLE.installVariables = [];
    BluetoothLE.platforms = ["Android", "iOS"];
BluetoothLE.ɵfac = function BluetoothLE_Factory(t) { return ɵBluetoothLE_BaseFactory(t || BluetoothLE); };
BluetoothLE.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BluetoothLE, factory: function (t) { return BluetoothLE.ɵfac(t); } });
var ɵBluetoothLE_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BluetoothLE);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BluetoothLE, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return BluetoothLE;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmx1ZXRvb3RoLWxlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBMlZsQyxNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0FBQzVCLElBQUMsZ0dBQTRCLENBQUE7QUFBQyxJQUM3Qix1RkFBdUIsQ0FBQTtBQUFDLElBQ3hCLHFGQUFzQixDQUFBO0FBQUMsSUFDdkIsMkZBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQUxXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0FBQzdCLElBQUMsMkZBQXdCLENBQUE7QUFBQyxJQUN6QixxRkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUc3QjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7QUFDNUIsSUFBQyx1R0FBK0IsQ0FBQTtBQUFDLElBQ2hDLHVHQUErQixDQUFBO0FBQUMsSUFDaEMsdUdBQStCLENBQUE7QUFDakMsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0FBQ2hDLElBQUMsMkdBQTZCLENBQUE7QUFBQyxJQUM5QiwyR0FBNkIsQ0FBQTtBQUFDLElBQzlCLHlHQUE0QixDQUFBO0FBQzlCLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDO0FBQ0Q7QUFHVyxJQWtEc0IsK0JBQWlCO0FBQUM7QUFFOUI7QUFFVztBQUM1QixJQUdGLGdDQUFVLGFBQUMsTUFBbUI7QUFNckIsSUFJVCw0QkFBTTtBQU00QyxJQUlsRCw2QkFBTztBQU1xQyxJQU81QyxvQ0FBYztBQU1nQixJQVU5QiwrQkFBUyxhQUFDLE1BQWtCO0FBTUksSUFLaEMsOEJBQVE7QUFNTixJQU1GLHVDQUFpQixhQUFDLE1BQWdDO0FBTWhELElBWUYsMEJBQUksYUFBQyxNQUEyQjtBQU16QixJQU9QLDRCQUFNLGFBQUMsTUFBMkI7QUFNakMsSUFXRCw2QkFBTyxhQUFDLE1BQWtEO0FBTTdCLElBSzdCLCtCQUFTLGFBQUMsTUFBMkI7QUFNUCxJQU05QixnQ0FBVSxhQUFDLE1BQTJCO0FBTW5CLElBT25CLDJCQUFLLGFBQUMsTUFBMkI7QUFNdEIsSUFhWCw4QkFBUSxhQUFDLE1BQWlEO0FBTTlDLElBTVosOEJBQVEsYUFBQyxNQUFnRDtBQU10RCxJQU1ILHFDQUFlLGFBQUMsTUFBNEI7QUFLN0IsSUFNZixpQ0FBVyxhQUFDLE1BQXdCO0FBTWpDLElBS0gsMEJBQUksYUFBQyxNQUF3QjtBQU16QixJQU9KLCtCQUFTLGFBQUMsTUFBd0I7QUFNVixJQUt4QixpQ0FBVyxhQUFDLE1BQXdCO0FBS04sSUFPOUIsMkJBQUssYUFBQyxNQUFpQztBQUtiLElBTzFCLDRCQUFNLGFBQUMsTUFBaUM7QUFNdkMsSUFLRCxvQ0FBYyxhQUFDLE1BQWlDO0FBTXpDLElBTVAscUNBQWUsYUFBQyxNQUE2QjtBQU0xQixJQUtuQiwwQkFBSSxhQUFDLE1BQTJCO0FBTWpDLElBS0MseUJBQUcsYUFBQyxNQUF5QztBQUtULElBT3BDLCtDQUF5QixhQUFDLE1BQW1FO0FBTW5FLElBSTFCLG1DQUFhO0FBTUMsSUFJZCwrQkFBUztBQU1JLElBSWIsZ0NBQVU7QUFNTCxJQUtMLDhCQUFRLGFBQUMsTUFBMkI7QUFNNUIsSUFLUixrQ0FBWSxhQUFDLE1BQTJCO0FBTW5DLElBS0wsaUNBQVcsYUFBQyxNQUEyQjtBQU1wQyxJQUtILGtDQUFZLGFBQUMsTUFBMkI7QUFLTixJQUtsQyxtQ0FBYTtBQUtzQixJQU1uQyx1Q0FBaUI7QUFLa0IsSUFLbkMsdUNBQWlCO0FBS2tCLElBTW5DLHFDQUFlO0FBTVosSUFNSCwwQ0FBb0IsYUFBQyxNQUE2QjtBQU1mLElBS25DLGdDQUFVLGFBQUMsTUFHVjtBQUtVLElBTVgsbUNBQWEsYUFBQyxNQUEyQjtBQUszQixJQUtkLHVDQUFpQjtBQUs4QixJQVEvQyxzQ0FBZ0IsYUFBQyxNQUF5QjtBQU1uQyxJQUlQLHFDQUFlO0FBTUssSUFJcEIsbUNBQWE7QUFNVSxJQUt2Qiw2QkFBTyxhQUFDLE1BQXFCO0FBTXRCLElBT1AsNEJBQU0sYUFBQyxNQUFvQjtBQUtsQixJQU1ULDBDQUFvQixhQUFDLEtBQWE7QUFNekIsSUFLVCwwQ0FBb0IsYUFBQyxLQUFpQjtBQU1sQixJQUtwQixtQ0FBYSxhQUFDLEtBQWE7QUFNbEIsSUFLVCxtQ0FBYSxhQUFDLEtBQWlCO0FBS1IsMEJBQXZCLGdEQUF1QjtBQUFJO0FBSWxCO0FBSVY7QUFBMEI7QUFFM0I7QUFBUSwwQkFSTiw0Q0FBbUI7QUFBSTtBQUlqQjtBQUdJO0FBQ0s7QUFDRjtBQUNiLDBCQVJBLDJDQUFrQjtBQUFJO0FBSXBCO0FBR087QUFDSztBQUNaO0FBQVEsMEJBUFYsOENBQXFCO0FBQUk7QUFJcEI7QUFHSTtBQUNLO0FBQ1o7QUFBUSwwQkFQViw4Q0FBcUI7QUFBSTtBQUloQjtBQUdOO0FBQ0s7QUFBMkI7QUFDL0IsMEJBUEosMENBQWlCO0FBQUk7QUFHTDtBQUdRO0FBQ2I7QUFDTTtBQUFRLDBCQU56QixvREFBMkI7QUFBSTtBQUkxQjtBQUdFO0FBQ0s7QUFDVjtBQUFRLDBCQVBWLG9EQUEyQjtBQUFJO0FBSTFCO0FBR0k7QUFDSztBQUVYO0FBQVEsMEJBUlgsb0RBQTJCO0FBQUk7QUFJeEI7QUFJRztBQUEwQjtBQUEyQjtBQUFRLDBCQU52RSxrREFBeUI7QUFBSTtBQUl4QjtBQUUyRDtBQUEwQjtBQUEyQjtBQUFRLDBCQUo3SCxrREFBeUI7QUFBSTtBQUlKO0FBQWlHO0FBQTBCO0FBQTJCO0FBQVEsMEJBRnZMLGlEQUF3QjtBQUFJO0FBRXFEO0FBQWdHO0FBQTBCO0FBQTJCO0FBQVE7QUFBNEM7QUFBdUQ7QUFBMkM7QUFBbUY7QUFBaUY7QUFBdUM7SUFubkI1akIsV0FBVyx3QkFEdkIsVUFBVSxFQUFFLFFBQ0EsV0FBVzs7Ozs7MEJBQUU7QUFBQyxzQkF6YTNCO0FBQUUsRUF5YStCLGlCQUFpQjtBQUNqRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qIEF2YWlsYWJsZSBzdGF0dXMgb2YgZGV2aWNlICovXG5leHBvcnQgdHlwZSBTdGF0dXMgPVxuICB8ICdzY2FuU3RhcnRlZCdcbiAgfCAnc2NhblN0b3BwZWQnXG4gIHwgJ3NjYW5SZXN1bHQnXG4gIHwgJ2Nvbm5lY3RlZCdcbiAgfCAnZGlzY29ubmVjdGVkJ1xuICB8ICdib25kaW5nJ1xuICB8ICdib25kZWQnXG4gIHwgJ3VuYm9uZGVkJ1xuICB8ICdjbG9zZWQnXG4gIHwgJ3NlcnZpY2VzJ1xuICB8ICdkaXNjb3ZlcmVkJ1xuICB8ICdjaGFyYWN0ZXJpc3RpY3MnXG4gIHwgJ2Rlc2NyaXB0b3JzJ1xuICB8ICdyZWFkJ1xuICB8ICdzdWJzY3JpYmVkJ1xuICB8ICd1bnN1YnNjcmliZWQnXG4gIHwgJ3N1YnNjcmliZWRSZXN1bHQnXG4gIHwgJ3dyaXR0ZW4nXG4gIHwgJ3JlYWREZXNjcmlwdG9yJ1xuICB8ICd3cml0ZURlc2NyaXB0b3InXG4gIHwgJ3Jzc2knXG4gIHwgJ210dSdcbiAgfCAnY29ubmVjdGlvblByaW9yaXR5UmVxdWVzdGVkJ1xuICB8ICdlbmFibGVkJ1xuICB8ICdkaXNhYmxlZCdcbiAgfCAncmVhZFJlcXVlc3RlZCdcbiAgfCAnd3JpdGVSZXF1ZXN0ZWQnXG4gIHwgJ210dUNoYW5nZWQnXG4gIHwgJ25vdGlmeVJlYWR5J1xuICB8ICdub3RpZnlTZW50J1xuICB8ICdzZXJ2aWNlQWRkZWQnXG4gIHwgJ3NlcnZpY2VSZW1vdmVkJ1xuICB8ICdhbGxTZXJ2aWNlc1JlbW92ZWQnXG4gIHwgJ2FkdmVydGlzaW5nU3RhcnRlZCdcbiAgfCAnYWR2ZXJ0aXNpbmdTdG9wcGVkJ1xuICB8ICdyZXNwb25kZWQnXG4gIHwgJ25vdGlmaWVkJztcblxuLyoqIEF2YWlsYWJsZSBjb25uZWN0aW9uIHByaW9yaXRpZXMgKi9cbmV4cG9ydCB0eXBlIENvbm5lY3Rpb25Qcmlvcml0eSA9ICdsb3cnIHwgJ2JhbGFuY2VkJyB8ICdoaWdoJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbXMge1xuICAvKiogVGhlIGFkZHJlc3MvaWRlbnRpZmllciBwcm92aWRlZCBieSB0aGUgc2NhbidzIHJldHVybiBvYmplY3QgKi9cbiAgYWRkcmVzczogc3RyaW5nO1xuICAvKiogVGhlIHNlcnZpY2UncyBJRCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBlcmlwaGVyYWxQYXJhbXMge1xuICAvKiogU2hvdWxkIHVzZXIgYmUgcHJvbXB0ZWQgdG8gZW5hYmxlIEJsdWV0b290aCAqL1xuICByZXF1ZXN0PzogYm9vbGVhbjtcbiAgLyogQSB1bmlxdWUgc3RyaW5nIHRvIGlkZW50aWZ5IHlvdXIgYXBwLiBCbHVldG9vdGggQ2VudHJhbCBiYWNrZ3JvdW5kIG1vZGUgaXMgcmVxdWlyZWQgdG8gdXNlIHRoaXMsIGJ1dCBiYWNrZ3JvdW5kIG1vZGUgZG9lc24ndCBzZWVtIHRvIHJlcXVpcmUgc3BlY2lmeWluZyB0aGUgcmVzdG9yZUtleSAqL1xuICByZXN0b3JlS2V5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRQYXJhbXMgZXh0ZW5kcyBJbml0UGVyaXBoZXJhbFBhcmFtcyB7XG4gIC8qKiBTaG91bGQgY2hhbmdlIGluIEJsdWV0b290aCBzdGF0dXMgbm90aWZpY2F0aW9ucyBiZSBzZW50ICovXG4gIHN0YXR1c1JlY2VpdmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2FuUGFyYW1zIHtcbiAgLyogQW4gYXJyYXkgb2Ygc2VydmljZSBJRHMgdG8gZmlsdGVyIHRoZSBzY2FuIG9yIGVtcHR5IGFycmF5IC8gbnVsbC4gVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCBvbiBXaW5kb3dzIHBsYXRmb3JtIHlldCAqL1xuICBzZXJ2aWNlcz86IHN0cmluZ1tdO1xuICAvKiBUcnVlL2ZhbHNlIHRvIGFsbG93IGR1cGxpY2F0ZSBhZHZlcnRpc2VtZW50IHBhY2tldHMsIGRlZmF1bHRzIHRvIGZhbHNlIChpT1MpKi9cbiAgYWxsb3dEdXBsaWNhdGVzPzogYm9vbGVhbjtcbiAgLyoqIERlZmF1bHRzIHRvIExvdyBQb3dlci4gQXZhaWxhYmxlIGZyb20gQVBJMjEgLyBBUEkgMjMgKEFuZHJvaWQpICovXG4gIHNjYW5Nb2RlPzogQmx1ZXRvb3RoU2Nhbk1vZGU7XG4gIC8qKiBEZWZhdWx0cyB0byBBZ2dyZXNzaXZlLiBBdmFpbGFibGUgZnJvbSBBUEkyMyAoQW5kcm9pZCkgKi9cbiAgbWF0Y2hNb2RlPzogQmx1ZXRvb3RoTWF0Y2hNb2RlO1xuICAvKiogRGVmYXVsdHMgdG8gT25lIEFkdmVydGlzZW1lbnQuIEF2YWlsYWJsZSBmcm9tIEFQSTIzIChBbmRyb2lkKSAqL1xuICBtYXRjaE51bT86IEJsdWV0b290aE1hdGNoTnVtO1xuICAvKiogRGVmYXVsdHMgdG8gQWxsIE1hdGNoZXMuIEF2YWlsYWJsZSBmcm9tIEFQSTIxIC8gQVBJIDIzLiAoQW5kcm9pZCkgKi9cbiAgY2FsbGJhY2tUeXBlPzogQmx1ZXRvb3RoQ2FsbGJhY2tUeXBlO1xuICAvKiogVHJ1ZS9mYWxzZSB0byBzaG93IG9ubHkgY29ubmVjdGFibGUgZGV2aWNlcywgcmF0aGVyIHRoYW4gYWxsIGRldmljZXMgZXZlciBzZWVuLCBkZWZhdWx0cyB0byBmYWxzZSAoV2luZG93cykgKi9cbiAgaXNDb25uZWN0YWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZ5UGFyYW1zIHtcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyoqIENoYXJhY3RlcmlzdGljJ3MgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogQmFzZTY0IGVuY29kZWQgc3RyaW5nLCBudW1iZXIgb3Igc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uZFBhcmFtcyB7XG4gIC8qKiBUaGlzIGludGVnZXIgdmFsdWUgd2lsbCBiZSBpbmNyZW1lbnRlZCBldmVyeSByZWFkL3dyaXRlUmVxdWVzdGVkICovXG4gIHJlcXVlc3RJZDogbnVtYmVyO1xuICAvKiogYmFzZTY0IHN0cmluZyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgb2Zmc2V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlcmlzdGljUGFyYW1zIGV4dGVuZHMgUGFyYW1zIHtcbiAgLyoqIEFuIGFycmF5IG9mIGNoYXJhY3RlcmlzdGljIElEcyB0byBkaXNjb3ZlciBvciBlbXB0eSBhcnJheSAvIG51bGwgKi9cbiAgY2hhcmFjdGVyaXN0aWNzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvclBhcmFtcyBleHRlbmRzIFBhcmFtcyB7XG4gIC8qKiBUaGUgY2hhcmFjdGVyaXN0aWMncyBJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdGlvbkRlc2NyaXB0b3JQYXJhbXMgZXh0ZW5kcyBEZXNjcmlwdG9yUGFyYW1zIHtcbiAgLyoqIFRoZSBkZXNjcmlwdG9yJ3MgSUQgKi9cbiAgZGVzY3JpcHRvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXMgZXh0ZW5kcyBEZXNjcmlwdG9yUGFyYW1zIHtcbiAgLyogQmFzZTY0IGVuY29kZWQgc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qIFNldCB0byBcIm5vUmVzcG9uc2VcIiB0byBlbmFibGUgd3JpdGUgd2l0aG91dCByZXNwb25zZSwgYWxsIG90aGVyIHZhbHVlcyB3aWxsIHdyaXRlIG5vcm1hbGx5LiAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRlRGVzY3JpcHRvclBhcmFtcyBleHRlbmRzIERlc2NyaXB0b3JQYXJhbXMge1xuICAvKiogVGhlIGRlc2NyaXB0b3IncyBJRCAqL1xuICBkZXNjcmlwdG9yOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBzdHJpbmcsIG51bWJlciBvciBzdHJpbmcgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWR2ZXJ0aXNpbmdQYXJhbXMgPSBBZHZlcnRpc2luZ1BhcmFtc0FuZHJvaWQgfCBBZHZlcnRpc2luZ1BhcmFtc0lPUztcbmV4cG9ydCB0eXBlIEFkdmVydGlzZU1vZGUgPSAnYmFsYW5jZWQnIHwgJ2xvd0xhdGVuY3knIHwgJ2xvd1Bvd2VyJztcbmV4cG9ydCB0eXBlIFR4UG93ZXJMZXZlbCA9ICdoaWdoJyB8ICdsb3cnIHwgJ3VsdHJhbG93JyB8ICdtZWRpdW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkdmVydGlzaW5nUGFyYW1zQW5kcm9pZCB7XG4gIC8qKiBTZXJ2aWNlIFVVSUQgb24gQW5kcm9pZCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBtb2RlPzogQWR2ZXJ0aXNlTW9kZTtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIGNvbm5lY3RhYmxlPzogYm9vbGVhbjtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIHRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICB0eFBvd2VyTGV2ZWw/OiBUeFBvd2VyTGV2ZWw7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBtYW51ZmFjdHVyZXJJZD86IG51bWJlcjtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIG1hbnVmYWN0dXJlclNwZWNpZmljRGF0YT86IGFueTtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIGluY2x1ZGVEZXZpY2VOYW1lOiBib29sZWFuO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgaW5jbHVkZVR4UG93ZXJMZXZlbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZHZlcnRpc2luZ1BhcmFtc0lPUyB7XG4gIC8qKiBBcnJheSBvZiBzZXJ2aWNlIFVVSURzIG9uIGlPUyAqL1xuICBzZXJ2aWNlczogc3RyaW5nW107XG4gIC8qKiBkZXZpY2UncyBuYW1lICovXG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uSW5mbyB7XG4gIC8qKiBUaGUgZGV2aWNlJ3MgZGlzcGxheSBuYW1lICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIFRoZSBkZXZpY2UncyBhZGRyZXNzIC8gaWRlbnRpZmllciBmb3IgY29ubmVjdGluZyB0byB0aGUgb2JqZWN0ICovXG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VJbmZvIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXZpY2UncyBzdGF0dXMgKi9cbiAgc3RhdHVzOiBTdGF0dXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUlNTSSBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogc2lnbmFsIHN0cmVuZ3RoICovXG4gIHJzc2k6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNVFUgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyogbXR1IHZhbHVlICovXG4gIG10dTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvbmRlZFN0YXR1cyBleHRlbmRzIENvbW1vbkluZm8ge1xuICAvKiBCb25kZWQgc3RhdHVzKi9cbiAgaXNCb25kZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJldkNvbm5lY3Rpb25TdGF0dXMgZXh0ZW5kcyBDb21tb25JbmZvIHtcbiAgLyoqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZCAqL1xuICB3YXNDb25uZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VyckNvbm5lY3Rpb25TdGF0dXMgZXh0ZW5kcyBDb21tb25JbmZvIHtcbiAgLyoqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgY29ubmVjdGVkICovXG4gIGlzQ29ubmVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc2NvdmVyU3RhdHVzIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlJ3MgY2hhcmFjdGVyaXN0aWNzIGFuZCBkZXNjcmlwdG9ycyBoYXZlIGJlZW4gZGlzY292ZXJlZCAqL1xuICBpc0Rpc2NvdmVyZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhblN0YXR1cyBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogc2lnbmFsIHN0cmVuZ3RoICovXG4gIHJzc2k6IG51bWJlcjtcbiAgLyoqXG4gICAqIGFkdmVydGlzZW1lbnQgZGF0YSBpbiBlbmNvZGVkIHN0cmluZyBvZiBieXRlcywgdXNlIGJsdWV0b290aGxlLmVuY29kZWRTdHJpbmdUb0J5dGVzKCkgKEFuZHJvaWQpXG4gICAqIGFkdmVydGlzZW1lbnQgaGFzaCB3aXRoIHRoZSBrZXlzIChpT1MpXG4gICAqIGVtcHR5IChXaW5kb3dzKVxuICAgKi9cbiAgYWR2ZXJ0aXNlbWVudDpcbiAgICB8IHtcbiAgICAgICAgLyoqIEFuIGFycmF5IG9mIHNlcnZpY2UgVVVJRHMgKi9cbiAgICAgICAgc2VydmljZVV1aWRzOiBzdHJpbmdbXTtcbiAgICAgICAgLyoqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbmFtZSBvZiB0aGUgbWFudWZhY3R1cmVyIG9mIHRoZSBkZXZpY2UgKi9cbiAgICAgICAgbWFudWZhY3R1cmVyRGF0YTogc3RyaW5nO1xuICAgICAgICAvKiogQSBudW1iZXIgY29udGFpbmluZyB0aGUgdHJhbnNtaXQgcG93ZXIgb2YgYSBwZXJpcGhlcmFsICovXG4gICAgICAgIHR4UG93ZXJMZXZlbDogbnVtYmVyO1xuICAgICAgICAvKiogQW4gYXJyYXkgb2Ygb25lIG9yIG1vcmUgQ0JVVUlEIG9iamVjdHMsIHJlcHJlc2VudGluZyBDQlNlcnZpY2UgVVVJRHMgdGhhdCB3ZXJlIGZvdW5kIGluIHRoZSDigJxvdmVyZmxvd+KAnSBhcmVhIG9mIHRoZSBhZHZlcnRpc2VtZW50IGRhdGEgKi9cbiAgICAgICAgb3ZlcmZsb3dTZXJ2aWNlVXVpZHM6IHN0cmluZ1tdO1xuICAgICAgICAvKiogQSBib29sZWFuIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFkdmVydGlzaW5nIGV2ZW50IHR5cGUgaXMgY29ubmVjdGFibGUgKi9cbiAgICAgICAgaXNDb25uZWN0YWJsZTogYm9vbGVhbjtcbiAgICAgICAgLyoqIEFuIGFycmF5IG9mIG9uZSBvciBtb3JlIENCVVVJRCBvYmplY3RzLCByZXByZXNlbnRpbmcgQ0JTZXJ2aWNlIFVVSURzICovXG4gICAgICAgIHNvbGljaXRlZFNlcnZpY2VVdWlkczogc3RyaW5nW107XG4gICAgICAgIC8qIEEgZGljdGlvbmFyeSBjb250YWluaW5nIHNlcnZpY2Utc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBkYXRhICovXG4gICAgICAgIHNlcnZpY2VEYXRhOiBhbnk7XG4gICAgICAgIC8qIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxvY2FsIG5hbWUgb2YgYSBwZXJpcGhlcmFsICovXG4gICAgICAgIGxvY2FsTmFtZTogc3RyaW5nO1xuICAgICAgfVxuICAgIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2Uge1xuICAvKiogU2VydmljZSdzIHV1aWQgKi9cbiAgdXVpZDogc3RyaW5nO1xuICAvKiogQXJyYXkgb2YgY2hhcmFjdGVyaXN0aWNzICovXG4gIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJpc3RpYyB7XG4gIC8qIEFycmF5IG9mIGRlc2NyaXB0b3JzICovXG4gIGRlc2NyaXB0b3JzPzogRGVzY3JpcHRvcltdO1xuICAvKiogIENoYXJhY3RlcmlzdGljJ3MgdXVpZCAqL1xuICB1dWlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiAgQ2hhcmFjdGVyaXN0aWMncyBwcm9wZXJ0aWVzXG4gICAqICBJZiB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZCBhcyBhIGtleSwgdGhlIGNoYXJhY3RlcmlzdGljIGhhcyB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBwcm9wZXJ0aWVzPzoge1xuICAgIHdyaXRlPzogYm9vbGVhbjtcbiAgICBicm9hZGNhc3Q/OiBib29sZWFuO1xuICAgIGV4dGVuZGVkUHJvcHM/OiBib29sZWFuO1xuICAgIHdyaXRlV2l0aG91dFJlc3BvbnNlPzogYm9vbGVhbjtcbiAgICB3cml0ZU5vUmVzcG9uc2U/OiBib29sZWFuO1xuICAgIHNpZ25lZFdyaXRlPzogYm9vbGVhbjtcbiAgICByZWFkPzogYm9vbGVhbjtcbiAgICBub3RpZnk/OiBib29sZWFuO1xuICAgIGluZGljYXRlPzogYm9vbGVhbjtcbiAgICBhdXRoZW50aWNhdGVkU2lnbmVkV3JpdGVzPzogYm9vbGVhbjtcbiAgICBub3RpZnlFbmNyeXB0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGluZGljYXRlRW5jcnlwdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqXG4gICAqICBJZiB0aGUgcGVybWlzc2lvbiBpcyBkZWZpbmVkIGFzIGEga2V5LCB0aGUgY2hhcmFjdGVyIGhhcyB0aGF0IHBlcm1pc3Npb25cbiAgICovXG4gIHBlcm1pc3Npb25zPzoge1xuICAgIHJlYWQ/OiBib29sZWFuO1xuICAgIHJlYWRFbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHJlYWRFbmNyeXB0ZWRNSVRNPzogYm9vbGVhbjtcbiAgICB3cml0ZT86IGJvb2xlYW47XG4gICAgd3JpdGVTaWduZWQ/OiBib29sZWFuO1xuICAgIHdyaXRlU2lnbmVkTUlUTT86IGJvb2xlYW47XG4gICAgd3JpdGVFbmNyeXB0ZWRNSVRNPzogYm9vbGVhbjtcbiAgICByZWFkRW5jcnlwdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICB3cml0ZUVuY3J5cHRpb25SZXF1aXJlZD86IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvciB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2UgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIERldmljZSdzIHNlcnZpY2VzICovXG4gIHNlcnZpY2VzOiBTZXJ2aWNlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZXMgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIEFycmF5IG9mIHNlcnZpY2UgVVVJRFMgKi9cbiAgc2VydmljZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JzIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBDaGFyYWN0ZXJpc3RpYydzIFVVSUQgKi9cbiAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyogQXJyYXkgb2YgZGVzY3JpcHRvciBVVUlEcyAqL1xuICBkZXNjcmlwdG9yczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0aW9uUmVzdWx0IGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBDaGFyYWN0ZXJpc3RpYyBVVUlEICovXG4gIGNoYXJhY3RlcmlzdGljOiBzdHJpbmc7XG4gIC8qKiBTZXJ2aWNlJ3MgVVVJRCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBzdHJpbmcgb2YgYnl0ZXMgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmliZVJlc3VsdCBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogQ2hhcmFjdGVyaXN0aWMgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogU2VydmljZSdzIFVVSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JSZXN1bHQgZXh0ZW5kcyBPcGVyYXRpb25SZXN1bHQge1xuICBkZXNjcmlwdG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWNzIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBTZXJ2aWNlJ3MgaWQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiBBcnJheSBvZiBjaGFyYWN0ZXJpc3RpYyBvYmplY3RzKi9cbiAgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRpYWxpemVSZXN1bHQge1xuICAvKiogRGV2aWNlJ3Mgc3RhdHVzICovXG4gIHN0YXR1czogU3RhdHVzO1xuICAvKiogVGhlIGFkZHJlc3MvaWRlbnRpZmllciBwcm92aWRlZCBieSB0aGUgc2NhbidzIHJldHVybiBvYmplY3QgKi9cbiAgYWRkcmVzczogc3RyaW5nO1xuICAvKiogU2VydmljZSdzIFVVSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiogQ2hhcmFjdGVyaXN0aWMgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogVGhpcyBpbnRlZ2VyIHZhbHVlIHdpbGwgYmUgaW5jcmVtZW50ZWQgZXZlcnkgcmVhZC93cml0ZVJlcXVlc3RlZCAqL1xuICByZXF1ZXN0SWQ6IG51bWJlcjtcbiAgLyoqIE9mZnNldCB2YWx1ZSAqL1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgLyoqIG10dSB2YWx1ZSAqL1xuICBtdHU6IG51bWJlcjtcbiAgLyoqIEJhc2U2NCBlbmNvZGVkIHN0cmluZyBvZiBieXRlcyAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhTY2FuTW9kZSB7XG4gIFNDQU5fTU9ERV9PUFBPUlRVTklTVElDID0gLTEsXG4gIFNDQU5fTU9ERV9MT1dfUE9XRVIgPSAwLFxuICBTQ0FOX01PREVfQkFMQU5DRUQgPSAxLFxuICBTQ0FOX01PREVfTE9XX0xBVEVOQ1kgPSAyLFxufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhNYXRjaE1vZGUge1xuICBNQVRDSF9NT0RFX0FHUkVTU0lWRSA9IDEsXG4gIE1BVENIX01PREVfU1RJQ0tZID0gMixcbn1cblxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoTWF0Y2hOdW0ge1xuICBNQVRDSF9OVU1fT05FX0FEVkVSVElTRU1FTlQgPSAxLFxuICBNQVRDSF9OVU1fRkVXX0FEVkVSVElTRU1FTlQgPSAyLFxuICBNQVRDSF9OVU1fTUFYX0FEVkVSVElTRU1FTlQgPSAzLFxufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhDYWxsYmFja1R5cGUge1xuICBDQUxMQkFDS19UWVBFX0FMTF9NQVRDSEVTID0gMSxcbiAgQ0FMTEJBQ0tfVFlQRV9GSVJTVF9NQVRDSCA9IDIsXG4gIENBTExCQUNLX1RZUEVfTUFUQ0hfTE9TVCA9IDQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3Ige1xuICBjb2RlOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGFwdGVySW5mbyB7XG4gIG5hbWU6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuICBpc0VuYWJsZWQ6IGJvb2xlYW47XG4gIGlzU2Nhbm5pbmc6IGJvb2xlYW47XG4gIGlzRGlzY292ZXJhYmxlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJsdWV0b290aExFXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGhhcyB0aGUgbW9zdCBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBCbHVldG9vdGggTEUgZGV2aWNlcyBvbiBBbmRyb2lkLCBpT1MgYW5kIHBhcnRpYWxseSBXaW5kb3dzLlxuICogSXQncyBhIHdyYXAgYXJvdW5kIFtyYW5kZHVzaW5nL2NvcmRvdmEtcGx1Z2luLWJsdWV0b290aGxlXShodHRwczovL2dpdGh1Yi5jb20vcmFuZGR1c2luZy9jb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGhsZS9ibG9iL21hc3Rlci9yZWFkbWUubWQpIGNvcmRvdmEgcGx1Z2luIGZvciBJb25pYy5cbiAqIEl0IHN1cHBvcnRzIHBlcmlwaGVyYWwgKiphbmQqKiBjZW50cmFsIG1vZGVzIGFuZCBjb3ZlcnMgbW9zdCBvZiB0aGUgQVBJIG1ldGhvZHMgYXZhaWxhYmxlIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJsdWV0b290aExFIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibHVldG9vdGgtbGUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIGJsdWV0b290aGxlOiBCbHVldG9vdGhMRSwgcHVibGljIHBsdDogUGxhdGZvcm0pIHtcbiAqXG4gKiAgdGhpcy5wbHQucmVhZHkoKS50aGVuKChyZWFkeVNvdXJjZSkgPT4ge1xuICpcbiAqICAgIGNvbnNvbGUubG9nKCdQbGF0Zm9ybSByZWFkeSBmcm9tJywgcmVhZHlTb3VyY2UpO1xuICpcbiAqICAgIHRoaXMuYmx1ZXRvb3RobGUuaW5pdGlhbGl6ZSgpLnRoZW4oYmxlID0+IHtcbiAqICAgICAgY29uc29sZS5sb2coJ2JsZScsIGJsZS5zdGF0dXMpIC8vIGxvZ3MgJ2VuYWJsZWQnXG4gKiAgICB9KTtcbiAqXG4gKiAgIH0pO1xuICogfVxuICpcbiAqIGBgYFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCbHVldG9vdGhMRScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJsdWV0b290aGxlJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2JsdWV0b290aGxlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JhbmRkdXNpbmcvY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RobGUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RobGUnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmx1ZXRvb3RoTEUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBAbmFtZSBpbml0aWFsaXplXG4gICAqIEluaXRpYWxpemUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2VcbiAgICogQHBhcmFtIHtJbml0UGFyYW1zfSBbcGFyYW1zXVxuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8eyBzdGF0dXM6ICdlbmFibGVkJyB8ICdkaXNhYmxlZCd9Pil9IFRoZSBjYWxsYmFjayB0aGF0IGlzIHBhc3NlZCBpbml0aWFsaXplIHN0YXR1cyAoZW5hYmxlZC9kaXNhYmxlZClcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAyLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGluaXRpYWxpemUocGFyYW1zPzogSW5pdFBhcmFtcyk6IE9ic2VydmFibGU8eyBzdGF0dXM6ICdlbmFibGVkJyB8ICdkaXNhYmxlZCcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlbmFibGUgKEFuZHJvaWQpXG4gICAqIEVuYWJsZSBCbHVldG9vdGggb24gdGhlIGRldmljZS4gQW5kcm9pZCBzdXBwb3J0IG9ubHlcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIHN5bmM6IHRydWUgfSlcbiAgZW5hYmxlKCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlIChBbmRyb2lkKVxuICAgKiBEaXNhYmxlIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlLiBBbmRyb2lkIHN1cHBvcnQgb25seVxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgc3luYzogdHJ1ZSB9KVxuICBkaXNhYmxlKCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBnZXRBZGFwdGVySW5mbyAoQW5kcm9pZClcbiAgICogUmV0cmlldmUgdXNlZnVsIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIGFkZHJlc3MsIG5hbWUsIGFuZCB2YXJpb3VzIHN0YXRlcyAoaW5pdGlhbGl6ZWQsIGVuYWJsZWQsIHNjYW5uaW5nLCBkaXNjb3ZlcmFibGUpLlxuICAgKiBUaGlzIGNhbiBiZSB2ZXJ5IHVzZWZ1bCB3aGVuIHRoZSBnZW5lcmFsIHN0YXRlIG9mIHRoZSBhZGFwdGVyIGhhcyBiZWVuIGxvc3QsIGFuZCB3ZSB3b3VsZCBvdGhlcndpc2UgbmVlZCB0byBnbyB0aHJvdWdoIGEgc2VyaWVzIG9mIGNhbGxiYWNrcyB0byBnZXQgdGhlIGNvcnJlY3Qgc3RhdGUgKGZpcnN0IGluaXRpYWxpemVkLCB0aGVuIGVuYWJsZWQsIHRoZW4gaXNTY2FubmluZywgYW5kIHNvIGZvcnRoKS5cbiAgICogVGhlIHJlc3VsdCBvZiB0aGlzIG1ldGhvZCBhbGxvd3MgdXMgdG8gdGFrZSBidXNpbmVzcyBsb2dpYyBkZWNpc2lvbnMgd2hpbGUgYXZvaWRpbmcgYSBsYXJnZSBwYXJ0IG9mIHRoZSBjYWxsYmFjayBoZWxsLlxuICAgKiBDdXJyZW50bHkgdGhlIGRpc2NvdmVyYWJsZSBzdGF0ZSBkb2VzIG5vdCBoYXZlIGFueSByZWxldmFuY2UgYmVjYXVzZSB0aGVyZSBpcyBubyBcInNldERpc2NvdmVyYWJsZVwiIGZ1bmN0aW9uYWxpdHkgaW4gcGxhY2UuIFRoYXQgbWF5IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBZGFwdGVySW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBnZXRBZGFwdGVySW5mbygpOiBQcm9taXNlPEFkYXB0ZXJJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0YXJ0U2NhblxuICAgKiBTY2FuIGZvciBCbHVldG9vdGggTEUgZGV2aWNlcy5cbiAgICogU2luY2Ugc2Nhbm5pbmcgaXMgZXhwZW5zaXZlLCBzdG9wIGFzIHNvb24gYXMgcG9zc2libGUuIFRoZSBDb3Jkb3ZhIGFwcCBzaG91bGQgdXNlIGEgdGltZXIgdG8gbGltaXQgdGhlIHNjYW4gaW50ZXJ2YWwuXG4gICAqIEFuZHJvaWQgQVBJID49IDIzIHJlcXVpcmVzIEFDQ0VTU19DT0FSU0VfTE9DQVRJT04gcGVybWlzc2lvbnMgdG8gZmluZCB1bnBhaXJlZCBkZXZpY2VzLlxuICAgKiBQZXJtaXNzaW9ucyBjYW4gYmUgcmVxdWVzdGVkIGJ5IHVzaW5nIHRoZSBoYXNQZXJtaXNzaW9uIGFuZCByZXF1ZXN0UGVybWlzc2lvbiBmdW5jdGlvbnMuXG4gICAqIEFuZHJvaWQgQVBJID49IDIzIGFsc28gcmVxdWlyZXMgbG9jYXRpb24gc2VydmljZXMgdG8gYmUgZW5hYmxlZC4gVXNlIGlzTG9jYXRpb25FbmFibGVkIHRvIGRldGVybWluZSB3aGV0aGVyIGxvY2F0aW9uIHNlcnZpY2VzIGFyZSBlbmFibGVkLlxuICAgKiBJZiBub3QgZW5hYmxlZCwgdXNlIHJlcXVlc3RMb2NhdGlvbiB0byBwcm9tcHQgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHNldHRpbmdzIHBhZ2UuXG4gICAqIEBwYXJhbSB7U2NhblBhcmFtc30gcGFyYW1zIFNjYW4gcGFyYW1zXG4gICAqIEByZXR1cm5zIHsoT2JzZXJ2YWJsZTwgU2NhblN0YXR1cyA+KX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHN0YXJ0U2NhbihwYXJhbXM6IFNjYW5QYXJhbXMpOiBPYnNlcnZhYmxlPFNjYW5TdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RvcFNjYW5cbiAgICogU3RvcCBzY2FuIGZvciBCbHVldG9vdGggTEUgZGV2aWNlcy4gU2luY2Ugc2Nhbm5pbmcgaXMgZXhwZW5zaXZlLCBzdG9wIGFzIHNvb24gYXMgcG9zc2libGVcbiAgICogVGhlIGFwcCBzaG91bGQgdXNlIGEgdGltZXIgdG8gbGltaXQgdGhlIHNjYW5uaW5nIHRpbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtzdGF0dXM6ICdzY2FuU3RvcHBlZCd9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHN0b3BTY2FuKCk6IFByb21pc2U8eyBzdGF0dXM6ICdzY2FuU3RvcHBlZCcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXRyaWV2ZUNvbm5lY3RlZFxuICAgKiBSZXRyaWV2ZWQgcGFpcmVkIEJsdWV0b290aCBMRSBkZXZpY2VzLiBJbiBpT1MsIGRldmljZXMgdGhhdCBhcmUgXCJwYWlyZWRcIiB0byB3aWxsIG5vdCByZXR1cm4gZHVyaW5nIGEgbm9ybWFsIHNjYW4uXG4gICAqIENhbGxiYWNrIGlzIFwiaW5zdGFudFwiIGNvbXBhcmVkIHRvIGEgc2Nhbi5cbiAgICogQHBhcmFtIHt7IHNlcnZpY2VzOiBzdHJpbmdbXSB9fSBBbiBhcnJheSBvZiBzZXJ2aWNlIElEcyB0byBmaWx0ZXIgdGhlIHJldHJpZXZhbCBieS4gSWYgbm8gc2VydmljZSBJRHMgYXJlIHNwZWNpZmllZCwgbm8gZGV2aWNlcyB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGRldmljZXM6IERldmljZUluZm9bXSB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJldHJpZXZlQ29ubmVjdGVkKHBhcmFtcz86IHsgc2VydmljZXM/OiBzdHJpbmdbXSB9KTogUHJvbWlzZTx7IGRldmljZXM6IERldmljZUluZm9bXSB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGJvbmQgKEFuZHJvaWQpXG4gICAqIEJvbmQgd2l0aCBhIGRldmljZS5cbiAgICogVGhlIGRldmljZSBkb2Vzbid0IG5lZWQgdG8gYmUgY29ubmVjdGVkIHRvIGluaXRpYXRlIGJvbmRpbmcuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtcyBUaGUgYWRkcmVzcy9pZGVudGlmaWVyIHByb3ZpZGVkIGJ5IHRoZSBzY2FuJ3MgcmV0dXJuIG9iamVjdFxuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8eyBzdGF0dXM6IERldmljZUluZm8gfT4pfVxuICAgKiBzdWNjZXNzOlxuICAgKiAgICBUaGUgZmlyc3Qgc3VjY2VzcyBjYWxsYmFjayBzaG91bGQgYWx3YXlzIHJldHVybiB3aXRoIHN0YXR1cyA9PSBib25kaW5nLlxuICAgKiAgICBJZiB0aGUgYm9uZCBpcyBjcmVhdGVkLCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gYWdhaW4gd2l0aCBzdGF0dXMgPT0gYm9uZGVkLlxuICAgKiAgICBJZiB0aGUgYm9uZGluZyBwb3B1cCBpcyBjYW5jZWxlZCBvciB0aGUgd3JvbmcgY29kZSBpcyBlbnRlcmVkLCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gYWdhaW4gd2l0aCBzdGF0dXMgPT0gdW5ib25kZWQuXG4gICAqIGVycm9yOlxuICAgKiAgICBUaGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgYm9uZChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdW5ib25kIChBbmRyb2lkKVxuICAgKiBVbmJvbmQgd2l0aCBhIGRldmljZS4gVGhlIGRldmljZSBkb2Vzbid0IG5lZWQgdG8gYmUgY29ubmVjdGVkIHRvIGluaXRpYXRlIGJvbmRpbmcuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmd9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogRGV2aWNlSW5mbyB9Pn1cbiAgICogICAgc3VjY2VzczogVGhlIHN1Y2Nlc3MgY2FsbGJhY2sgc2hvdWxkIGFsd2F5cyByZXR1cm4gd2l0aCBzdGF0dXMgPT0gdW5ib25kZWQsIHRoYXQgaXMgcGFzc2VkIHdpdGggZGV2aWNlIG9iamVjdFxuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgdW5ib25kKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8eyBzdGF0dXM6IERldmljZUluZm8gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBjb25uZWN0XG4gICAqIENvbm5lY3QgdG8gYSBCbHVldG9vdGggTEUgZGV2aWNlXG4gICAqIEBwYXJhbSBjb25uZWN0U3VjY2VzcyBUaGUgc3VjY2VzcyBjYWxsYmFjayB0aGF0IGlzIHBhc3NlZCB3aXRoIGRldmljZSBvYmplY3RcbiAgICogQHBhcmFtIGNvbm5lY3RFcnJvciAgIFRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbm5lY3Qgb3BlcmF0aW9uIGZhaWxzXG4gICAqIEBwYXJhbSBwYXJhbXMgICAgICAgICBUaGUgYWRkcmVzcy9pZGVudGlmaWVyXG4gICAqXG4gICAqIEBwYXJhbSB7e2FkZHJlc3M6IHN0cmluZywgYXV0b0Nvbm5lY3Q6IGJvb2xlYW59fSBwYXJhbXNcbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+KX1cbiAgICogICAgc3VjY2VzczogZGV2aWNlIG9iamVjdCB3aXRoIHN0YXR1c1xuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgY29ubmVjdChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nOyBhdXRvQ29ubmVjdD86IGJvb2xlYW4gfSk6IE9ic2VydmFibGU8RGV2aWNlSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZWNvbm5lY3RcbiAgICogUmVjb25uZWN0IHRvIGEgcHJldmlvdXNseSBjb25uZWN0ZWQgQmx1ZXRvb3RoIGRldmljZVxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmd9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8RGV2aWNlSW5mbz4pfVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb25uZWN0KHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IE9ic2VydmFibGU8RGV2aWNlSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNjb25uZWN0XG4gICAqIERpc2Nvbm5lY3QgZnJvbSBhIEJsdWV0b290aCBMRSBkZXZpY2UuXG4gICAqICAgICAgICAgICAgICBOb3RlOiBJdCdzIHNpbXBsZXIgdG8ganVzdCBjYWxsIGNsb3NlKCkuIFN0YXJ0aW5nIHdpdGggaU9TIDEwLCBkaXNjb25uZWN0aW5nIGJlZm9yZSBjbG9zaW5nIHNlZW1zIHJlcXVpcmVkIVxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmd9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXZpY2VJbmZvPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGRpc2Nvbm5lY3QocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxEZXZpY2VJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGNsb3NlXG4gICAqIENsb3NlL2Rpc3Bvc2UgYSBCbHVldG9vdGggTEUgZGV2aWNlLlxuICAgKiBQcmlvciB0byAyLjcuMCwgeW91IG5lZWRlZCB0byBkaXNjb25uZWN0IHRvIHRoZSBkZXZpY2UgYmVmb3JlIGNsb3NpbmcsIGJ1dCB0aGlzIGlzIG5vIGxvbmdlciB0aGUgY2FzZS5cbiAgICogU3RhcnRpbmcgd2l0aCBpT1MgMTAsIGRpc2Nvbm5lY3RpbmcgYmVmb3JlIGNsb3Npbmcgc2VlbXMgcmVxdWlyZWQhXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcgfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlSW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBjbG9zZShwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBQcm9taXNlPERldmljZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGlzY292ZXJcbiAgICogRGlzY292ZXIgYWxsIHRoZSBkZXZpY2VzIHNlcnZpY2VzLCBjaGFyYWN0ZXJpc3RpY3MgYW5kIGRlc2NyaXB0b3JzLlxuICAgKiBEb2Vzbid0IG5lZWQgdG8gYmUgY2FsbGVkIGFnYWluIGFmdGVyIGRpc2Nvbm5lY3RpbmcgYW5kIHRoZW4gcmVjb25uZWN0aW5nLlxuICAgKiBJZiB1c2luZyBpT1MsIHlvdSBzaG91bGRuJ3QgdXNlIGRpc2NvdmVyIGFuZCBzZXJ2aWNlcy9jaGFyYWN0ZXJpc3RpY3MvZGVzY3JpcHRvcnMgb24gdGhlIHNhbWUgZGV2aWNlLlxuICAgKiBUaGVyZSBzZWVtcyB0byBiZSBhbiBpc3N1ZSB3aXRoIGNhbGxpbmcgZGlzY292ZXIgb24gaU9TOCBkZXZpY2VzLCBzbyB1c2Ugd2l0aCBjYXV0aW9uLlxuICAgKiBPbiBzb21lIEFuZHJvaWQgdmVyc2lvbnMsIHRoZSBkaXNjb3ZlcmVkIHNlcnZpY2VzIG1heSBiZSBjYWNoZWQgZm9yIGEgZGV2aWNlLlxuICAgKiBTdWJzZXF1ZW50IGRpc2NvdmVyIGV2ZW50cyB3aWxsIG1ha2UgdXNlIG9mIHRoaXMgY2FjaGUuXG4gICAqIElmIHlvdXIgZGV2aWNlJ3Mgc2VydmljZXMgY2hhbmdlLCBzZXQgdGhlIGNsZWFyQ2FjaGUgcGFyYW1ldGVyIHRvIGZvcmNlIEFuZHJvaWQgdG8gcmUtZGlzY292ZXIgc2VydmljZXMuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcsIGNsZWFyQ2FjaGU6IGJvb2xlYW4gfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlPn1cbiAgICogICAgc3VjY2VzczogZGV2aWNlIG9iamVjdCAoY29udGFpbnMgYXJyYXkgb2Ygc2VydmljZSBvYmplY3RzKVxuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgZGlzY292ZXIocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZzsgY2xlYXJDYWNoZT86IGJvb2xlYW4gfSk6IFByb21pc2U8RGV2aWNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlcnZpY2VzIChpT1MpXG4gICAqIERpc2NvdmVyIHRoZSBkZXZpY2UncyBzZXJ2aWNlcy5cbiAgICogTm90IHByb3ZpZGluZyBhbiBhcnJheSBvZiBzZXJ2aWNlcyB3aWxsIHJldHVybiBhbGwgc2VydmljZXMgYW5kIHRha2UgbG9uZ2VyIHRvIGRpc2NvdmVyLiBpT1Mgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmcsIHNlcnZpY2VzOiBzdHJpbmdbXX19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZXJ2aWNlcz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBzZXJ2aWNlcyhwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nOyBzZXJ2aWNlcz86IHN0cmluZ1tdIH0pOiBQcm9taXNlPFNlcnZpY2VzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGNoYXJhY3RlcmlzdGljcyAoaU9TKVxuICAgKiBEaXNjb3ZlciB0aGUgc2VydmljZSdzIGNoYXJhY3RlcmlzdGljcy5cbiAgICogTm90IHByb3ZpZGluZyBhbiBhcnJheSBvZiBjaGFyYWN0ZXJpc3RpY3Mgd2lsbCByZXR1cm4gYWxsIGNoYXJhY3RlcmlzdGljcyBhbmQgdGFrZSBsb25nZXIgdG8gZGlzY292ZXIuIGlPUyBzdXBwb3J0IG9ubHkuXG4gICAqIEBwYXJhbSB7Q2hhcmFjdGVyaXN0aWNQYXJhbXN9IHBhcmFtcyBDaGFyYWN0ZXJpc3RpYyBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBjaGFyYWN0ZXJpc3RpY3M6IENoYXJhY3RlcmlzdGljcyB9Pn0gVGhlIHNlcnZpY2UgaWQgYW5kIGFuIEFycmF5IG9mIGNoYXJhY3RlcmlzdGljc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgY2hhcmFjdGVyaXN0aWNzKHBhcmFtczogQ2hhcmFjdGVyaXN0aWNQYXJhbXMpOiBQcm9taXNlPHsgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY3MgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXNjcmlwdG9ycyAoaU9TKVxuICAgKiBEaXNjb3ZlciB0aGUgY2hhcmFjdGVyaXN0aWMncyBkZXNjcmlwdG9ycy4gaU9TIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHtEZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBkZXNjcmlwdG9yczogRGVzY3JpcHRvcnMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBkZXNjcmlwdG9ycyhwYXJhbXM6IERlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPHsgZGVzY3JpcHRvcnM6IERlc2NyaXB0b3JzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVhZFxuICAgKiBSZWFkIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWMgb25jZVxuICAgKiBAcGFyYW0ge0Rlc2NyaXB0b3JQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVhZChwYXJhbXM6IERlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdWJzY3JpYmVcbiAgICogU3Vic2NyaWJlIHRvIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWMuXG4gICAqIE9uY2UgYSBzdWJzY3JpcHRpb24gaXMgbm8gbG9uZ2VyIG5lZWRlZCwgZXhlY3V0ZSB1bnN1YnNjcmliZSBpbiBhIHNpbWlsYXIgZmFzaGlvbi5cbiAgICogVGhlIENsaWVudCBDb25maWd1cmF0aW9uIGRlc2NyaXB0b3Igd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHdyaXR0ZW4gdG8gZW5hYmxlIG5vdGlmaWNhdGlvbi9pbmRpY2F0aW9uIGJhc2VkIG9uIHRoZSBjaGFyYWN0ZXJpc3RpYydzIHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7RGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE9wZXJhdGlvblJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzdWJzY3JpYmUocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogT2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdW5zdWJzY3JpYmVcbiAgICogVW5zdWJzY3JpYmUgdG8gYSBwYXJ0aWN1bGFyIHNlcnZpY2UncyBjaGFyYWN0ZXJpc3RpYy5cbiAgICogQHBhcmFtIHtEZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8VW5zdWJzY3JpYmVSZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgdW5zdWJzY3JpYmUocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxVbnN1YnNjcmliZVJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB3cml0ZSAobGltaXRhdGlvbiBvbiBpT1MsIHJlYWQgYmVsb3cpXG4gICAqIFdyaXRlIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWNcbiAgICogTm90ZTogbm8gY2FsbGJhY2sgd2lsbCBvY2N1ciBvbiB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIG9uIGlPUy5cbiAgICogQHBhcmFtIHtXcml0ZUNoYXJhY3RlcmlzdGljUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8T3BlcmF0aW9uUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHdyaXRlKHBhcmFtczogV3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtcyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHdyaXRlIChsaW1pdGF0aW9uIG9uIGlPUywgcmVhZCBiZWxvdylcbiAgICogV3JpdGUgUXVpY2sgLyBRdWV1ZSwgdXNlIHRoaXMgbWV0aG9kIHRvIHF1aWNrbHkgZXhlY3V0ZSB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIGNvbW1hbmRzIHdoZW4gd3JpdGluZyBtb3JlIHRoYW4gMjAgYnl0ZXMgYXQgYSB0aW1lLlxuICAgKiBOb3RlOiBubyBjYWxsYmFjayB3aWxsIG9jY3VyIG9uIHdyaXRlIHdpdGhvdXQgcmVzcG9uc2Ugb24gaU9TLlxuICAgKiBAcGFyYW0ge1dyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgd3JpdGVRKHBhcmFtczogV3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtcyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlYWREZXNjcmlwdG9yXG4gICAqIFJlYWQgYSBwYXJ0aWN1bGFyIGNoYXJhY3RlcmlzdCdzIGRlc2NyaXB0b3JcbiAgICogQHBhcmFtIHtPcGVyYXRpb25EZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGVzY3JpcHRvclJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZWFkRGVzY3JpcHRvcihwYXJhbXM6IE9wZXJhdGlvbkRlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPERlc2NyaXB0b3JSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgd3JpdGVEZXNjcmlwdG9yXG4gICAqIFdyaXRlIGEgcGFydGljdWxhciBjaGFyYWN0ZXJpc3RpYydzIGRlc2NyaXB0b3IuIFVuYWJsZSB0byB3cml0ZSBjaGFyYWN0ZXJpc3RpYyBjb25maWd1cmF0aW9uIGRpcmVjdGx5IHRvIGtlZXAgaW4gbGluZSB3aXRoIGlPUyBpbXBsZW1lbnRhdGlvbi5cbiAgICogSW5zdGVhZCB1c2Ugc3Vic2NyaWJlL3Vuc3Vic2NyaWJlLCB3aGljaCB3aWxsIGF1dG9tYXRpY2FsbHkgZW5hYmxlL2Rpc2FibGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0ge1dyaXRlRGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERlc2NyaXB0b3JSZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgd3JpdGVEZXNjcmlwdG9yKHBhcmFtczogV3JpdGVEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxEZXNjcmlwdG9yUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJzc2lcbiAgICogUmVhZCBSU1NJIG9mIGEgY29ubmVjdGVkIGRldmljZS4gUlNTSSBpcyBhbHNvIHJldHVybmVkIHdpdGggc2Nhbm5pbmcuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPCBSU1NJID59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByc3NpKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8UlNTST4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBtdHUgKEFuZHJvaWQsIEFuZHJvaWQgNSspXG4gICAqIFNldCBNVFUgb2YgYSBjb25uZWN0ZWQgZGV2aWNlLiBBbmRyb2lkIG9ubHkuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcsIG10dTogbnVtYmVyIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTwgTVRVID59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBtdHUocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZzsgbXR1PzogbnVtYmVyIH0pOiBQcm9taXNlPE1UVT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXF1ZXN0Q29ubmVjdGlvblByaW9yaXR5IChBbmRyb2lkLCBBbmRyb2lkIDUrKVxuICAgKiBSZXF1ZXN0IGEgY2hhbmdlIGluIHRoZSBjb25uZWN0aW9uIHByaW9yaXR5IHRvIGltcHJvdmUgdGhyb3VnaHB1dCB3aGVuIHRyYW5zZmVyIGxhcmdlIGFtb3VudHMgb2YgZGF0YSB2aWEgQkxFLlxuICAgKiBBbmRyb2lkIHN1cHBvcnQgb25seS4gaU9TIHdpbGwgcmV0dXJuIGVycm9yLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nLCBjb25uZWN0aW9uUHJpb3JpdHk6IENvbm5lY3Rpb25Qcmlvcml0eSB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlSW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0Q29ubmVjdGlvblByaW9yaXR5KHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmc7IGNvbm5lY3Rpb25Qcmlvcml0eTogQ29ubmVjdGlvblByaW9yaXR5IH0pOiBQcm9taXNlPERldmljZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNJbml0aWFsaXplZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYWRhcHRlciBpcyBpbml0aWFsaXplZC4gTm8gZXJyb3IgY2FsbGJhY2suIFJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBpc0luaXRpYWxpemVkKCk6IFByb21pc2U8eyBpc0luaXRpYWxpemVkOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNFbmFibGVkXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBhZGFwdGVyIGlzIGVuYWJsZWQuIE5vIGVycm9yIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaXNFbmFibGVkOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8eyBpc0VuYWJsZWQ6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc1NjYW5uaW5nXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBhZGFwdGVyIGlzIHNjYW5uaW5nLiBObyBlcnJvciBjYWxsYmFjay4gUmV0dXJucyB0cnVlIG9yIGZhbHNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaXNTY2FubmluZzogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzU2Nhbm5pbmcoKTogUHJvbWlzZTx7IGlzU2Nhbm5pbmc6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0JvbmRlZCAoQW5kcm9pZClcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSBpcyBib25kZWQgb3Igbm90LCBvciBlcnJvciBpZiBub3QgaW5pdGlhbGl6ZWQuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCb25kZWRTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNCb25kZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxCb25kZWRTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgd2FzQ29ubmVjdGVkXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZCwgb3IgZXJyb3IgaWYgbm90IGluaXRpYWxpemVkLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQcmV2Q29ubmVjdGlvblN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICB3YXNDb25uZWN0ZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxQcmV2Q29ubmVjdGlvblN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Nvbm5lY3RlZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlIGlzIGNvbm5lY3RlZCwgb3IgZXJyb3IgaWYgbm90IGluaXRpYWxpemVkIG9yIG5ldmVyIGNvbm5lY3RlZCB0byBkZXZpY2VcbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8Q3VyckNvbm5lY3Rpb25TdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNDb25uZWN0ZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxDdXJyQ29ubmVjdGlvblN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Rpc2NvdmVyZWRcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSdzIGNoYXJhY3RlcmlzdGljcyBhbmQgZGVzY3JpcHRvcnMgaGF2ZSBiZWVuIGRpc2NvdmVyZWQsIG9yIGVycm9yIGlmIG5vdCBpbml0aWFsaXplZCBvciBub3QgY29ubmVjdGVkIHRvIGRldmljZS5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlzY292ZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNEaXNjb3ZlcmVkKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8RGlzY292ZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGFzUGVybWlzc2lvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIERldGVybWluZSB3aGV0aGVyIGNvYXJzZSBsb2NhdGlvbiBwcml2aWxlZ2VzIGFyZSBncmFudGVkIHNpbmNlIHNjYW5uaW5nIGZvciB1bnBhaXJlZCBkZXZpY2VzIHJlcXVpcmVzIGl0IGluIEFuZHJvaWQgQVBJIDIzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaGFzUGVybWlzc2lvbjogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTx7IGhhc1Blcm1pc3Npb246IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXF1ZXN0UGVybWlzc2lvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIFJlcXVlc3QgY29hcnNlIGxvY2F0aW9uIHByaXZpbGVnZXMgc2luY2Ugc2Nhbm5pbmcgZm9yIHVucGFpcmVkIGRldmljZXMgcmVxdWlyZXMgaXQgaW4gQW5kcm9pZCBBUEkgMjMuXG4gICAqIFdpbGwgcmV0dXJuIGFuIGVycm9yIGlmIGNhbGxlZCBvbiBpT1Mgb3IgQW5kcm9pZCB2ZXJzaW9ucyBwcmlvciB0byA2LjAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcmVxdWVzdFBlcm1pc3Npb246IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHsgcmVxdWVzdFBlcm1pc3Npb246IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0xvY2F0aW9uRW5hYmxlZCAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIERldGVybWluZSBpZiBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZCBvciBub3QuIExvY2F0aW9uIFNlcnZpY2VzIGFyZSByZXF1aXJlZCB0byBmaW5kIGRldmljZXMgaW4gQW5kcm9pZCBBUEkgMjNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBpc0xvY2F0aW9uRW5hYmxlZDogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzTG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8eyBpc0xvY2F0aW9uRW5hYmxlZDogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlcXVlc3RMb2NhdGlvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIFByb21wdCBsb2NhdGlvbiBzZXJ2aWNlcyBzZXR0aW5ncyBwYWdlcy4gcmVxdWVzdExvY2F0aW9uIHByb3BlcnR5IHJldHVybnMgd2hldGhlciBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogTG9jYXRpb24gU2VydmljZXMgYXJlIHJlcXVpcmVkIHRvIGZpbmQgZGV2aWNlcyBpbiBBbmRyb2lkIEFQSSAyMy5cbiAgICogQHJldHVybnMge1Byb21pc2U8eyByZXF1ZXN0TG9jYXRpb246IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0TG9jYXRpb24oKTogUHJvbWlzZTx7IHJlcXVlc3RMb2NhdGlvbjogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGluaXRpYWxpemVQZXJpcGhlcmFsXG4gICAqIEluaXRpYWxpemUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2UuIE11c3QgYmUgY2FsbGVkIGJlZm9yZSBhbnl0aGluZyBlbHNlLlxuICAgKiBDYWxsYmFjayB3aWxsIGNvbnRpbnVvdXNseSBiZSB1c2VkIHdoZW5ldmVyIEJsdWV0b290aCBpcyBlbmFibGVkIG9yIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge0luaXRQZXJpcGhlcmFsUGFyYW1zfSBbcGFyYW1zXVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbml0aWFsaXplUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGluaXRpYWxpemVQZXJpcGhlcmFsKHBhcmFtcz86IEluaXRQZXJpcGhlcmFsUGFyYW1zKTogT2JzZXJ2YWJsZTxJbml0aWFsaXplUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGFkZFNlcnZpY2VcbiAgICogQWRkIGEgc2VydmljZSB3aXRoIGNoYXJhY3RlcmlzdGljcyBhbmQgZGVzY3JpcHRvcnMuIElmIG1vcmUgdGhhbiBvbmUgc2VydmljZSBpcyBhZGRlZCwgYWRkIHRoZW0gc2VxdWVudGlhbGx5XG4gICAqIEBwYXJhbSB7eyBzZXJ2aWNlOiBzdHJpbmcsIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXSB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzZXJ2aWNlOiBzdHJpbmcsIHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgYWRkU2VydmljZShwYXJhbXM6IHtcbiAgICBzZXJ2aWNlOiBzdHJpbmc7XG4gICAgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY1tdO1xuICB9KTogUHJvbWlzZTx7IHNlcnZpY2U6IHN0cmluZzsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW1vdmVTZXJ2aWNlXG4gICAqIFJlbW92ZSBhIHNlcnZpY2VcbiAgICogQHBhcmFtIHt7IHNlcnZpY2U6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzZXJ2aWNlOiBzdHJpbmcsIHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVtb3ZlU2VydmljZShwYXJhbXM6IHsgc2VydmljZTogc3RyaW5nIH0pOiBQcm9taXNlPHsgc2VydmljZTogc3RyaW5nOyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbW92ZUFsbFNlcnZpY2VzXG4gICAqIFJlbW92ZSBhbGwgc2VydmljZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlbW92ZUFsbFNlcnZpY2VzKCk6IFByb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0YXJ0QWR2ZXJ0aXNpbmcgKGRpZmZlcmVudCBiZWhhdmlvciBvbiBBbmRyb2lkL2lPUywgcmVhZCBiZWxvdylcbiAgICogU3RhcnQgYWR2ZXJ0aXNpbmcgYXMgYSBCTEUgZGV2aWNlLlxuICAgKiBOb3RlOiBUaGlzIG5lZWRzIHRvIGJlIGltcHJvdmVkIHNvIHNlcnZpY2VzIGNhbiBiZSB1c2VkIGZvciBib3RoIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogT24gaU9TLCB0aGUgYWR2ZXJ0aXNpbmcgZGV2aWNlcyBsaWtlcyB0byByZW5hbWUgaXRzZWxmIGJhY2sgdG8gdGhlIG5hbWUgb2YgdGhlIGRldmljZSwgaS5lLiBSYW5kJyBpUGhvbmVcbiAgICogQHBhcmFtIHtBZHZlcnRpc2luZ1BhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBzdGFydEFkdmVydGlzaW5nKHBhcmFtczogQWR2ZXJ0aXNpbmdQYXJhbXMpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdG9wQWR2ZXJ0aXNpbmdcbiAgICogU3RvcCBhZHZlcnRpc2luZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgc3RvcEFkdmVydGlzaW5nKCk6IFByb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQWR2ZXJ0aXNpbmdcbiAgICogRGV0ZXJtaW5lIGlmIGFwcCBpcyBhZHZlcnRpc2luZyBvciBub3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNBZHZlcnRpc2luZygpOiBQcm9taXNlPHsgc3RhdHVzOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVzcG9uZFxuICAgKiBSZXNwb25kIHRvIGEgcmVhZCBvciB3cml0ZSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7UmVzcG9uZFBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXNwb25kKHBhcmFtczogUmVzcG9uZFBhcmFtcyk6IFByb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG5vdGlmeVxuICAgKiBVcGRhdGUgYSB2YWx1ZSBmb3IgYSBzdWJzY3JpcHRpb24uIEN1cnJlbnRseSBhbGwgc3Vic2NyaWJlZCBkZXZpY2VzIHdpbGwgcmVjZWl2ZSB1cGRhdGUuXG4gICAqIERldmljZSBzcGVjaWZpYyB1cGRhdGVzIHdpbGwgYmUgYWRkZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICogSWYgc2VudCBlcXVhbHMgZmFsc2UgaW4gdGhlIHJldHVybiB2YWx1ZSwgeW91IG11c3Qgd2FpdCBmb3IgdGhlIHBlcmlwaGVyYWxNYW5hZ2VySXNSZWFkeVRvVXBkYXRlU3Vic2NyaWJlcnMgZXZlbnQgYmVmb3JlIHNlbmRpbmcgbW9yZSB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge05vdGlmeVBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMsIHNlbnQ6IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBub3RpZnkocGFyYW1zOiBOb3RpZnlQYXJhbXMpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXM7IHNlbnQ6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlbmNvZGVkU3RyaW5nVG9CeXRlc1xuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBmcm9tIGEgY2hhcmFjdGVyaXN0aWMgb3IgZGVzY3JpcHRvciB2YWx1ZSBpbnRvIGEgdWludDhBcnJheSBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7VWludDhBcnJheX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBlbmNvZGVkU3RyaW5nVG9CeXRlcyh2YWx1ZTogc3RyaW5nKTogVWludDhBcnJheSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGJ5dGVzVG9FbmNvZGVkU3RyaW5nXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGEgdW5pdDhBcnJheSB0byBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBmb3IgYSBjaGFyYWN0ZXJpYyBvciBkZXNjcmlwdG9yIHdyaXRlXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnl0ZXNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvRW5jb2RlZFN0cmluZyh2YWx1ZTogVWludDhBcnJheSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0cmluZ1RvQnl0ZXNcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBzdHJpbmcgdG8gYnl0ZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtVaW50OEFycmF5fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0cmluZ1RvQnl0ZXModmFsdWU6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBieXRlc1RvU3RyaW5nXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGJ5dGVzIHRvIGEgc3RyaW5nLlxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb1N0cmluZyh2YWx1ZTogVWludDhBcnJheSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFNDQU5fTU9ERV9PUFBPUlRVTklTVElDOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfTE9XX1BPV0VSOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfQkFMQU5DRUQ6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFNDQU5fTU9ERV9MT1dfTEFURU5DWTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTU9ERV9BR0dSRVNTSVZFOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBNQVRDSF9NT0RFX1NUSUNLWTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTlVNX09ORV9BRFZFUlRJU0VNRU5UOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBNQVRDSF9OVU1fRkVXX0FEVkVSVElTRU1FTlQ6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE1BVENIX05VTV9NQVhfQURWRVJUSVNFTUVOVDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ0FMTEJBQ0tfVFlQRV9BTExfTUFUQ0hFUzogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ0FMTEJBQ0tfVFlQRV9GSVJTVF9NQVRDSDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ0FMTEJBQ0tfVFlQRV9NQVRDSF9MT1NUOiBudW1iZXI7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************************/
/*! exports provided: BluetoothSerial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothSerial", function() { return BluetoothSerial; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





var BluetoothSerial = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BluetoothSerial, _super);
    function BluetoothSerial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothSerial.prototype.connect = function (macAddress_or_uuid) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "connect", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "disconnect" }, arguments); };
    BluetoothSerial.prototype.connectInsecure = function (macAddress) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "connectInsecure", { "platforms": ["Android"], "observable": true, "clearFunction": "disconnect" }, arguments); };
    BluetoothSerial.prototype.disconnect = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disconnect", {}, arguments); };
    BluetoothSerial.prototype.write = function (data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "write", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.available = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "available", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.read = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "read", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.readUntil = function (delimiter) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "readUntil", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.subscribe = function (delimiter) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "subscribe", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    BluetoothSerial.prototype.subscribeRawData = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "subscribeRawData", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "unsubscribeRawData" }, arguments); };
    BluetoothSerial.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clear", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.list = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "list", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.isEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.isConnected = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isConnected", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.readRSSI = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "readRSSI", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.showBluetoothSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showBluetoothSettings", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.enable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.discoverUnpaired = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "discoverUnpaired", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.setDeviceDiscoveredListener = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDeviceDiscoveredListener", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "clearDeviceDiscoveredListener" }, arguments); };
    BluetoothSerial.prototype.setName = function (newName) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setName", { "platforms": ["Android"], "sync": true }, arguments); };
    BluetoothSerial.prototype.setDiscoverable = function (discoverableDuration) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDiscoverable", { "platforms": ["Android"], "sync": true }, arguments); };
    BluetoothSerial.pluginName = "BluetoothSerial";
    BluetoothSerial.repo = "https://github.com/don/BluetoothSerial";
    BluetoothSerial.plugin = "cordova-plugin-bluetooth-serial";
    BluetoothSerial.pluginRef = "bluetoothSerial";
    BluetoothSerial.platforms = ["Android", "iOS", "Windows Phone 8"];
BluetoothSerial.ɵfac = function BluetoothSerial_Factory(t) { return ɵBluetoothSerial_BaseFactory(t || BluetoothSerial); };
BluetoothSerial.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BluetoothSerial, factory: function (t) { return BluetoothSerial.ɵfac(t); } });
var ɵBluetoothSerial_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BluetoothSerial);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BluetoothSerial, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return BluetoothSerial;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmx1ZXRvb3RoLXNlcmlhbC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUNsQztBQUcwQixJQWtDVyxtQ0FBaUI7QUFBQztBQUU5QjtBQUNzQztBQUFNLElBUW5FLGlDQUFPLGFBQUMsa0JBQTBCO0FBT2xDLElBT0EseUNBQWUsYUFBQyxVQUFrQjtBQVM5QixJQUFKLG9DQUFVO0FBS2lCLElBTzNCLCtCQUFLLGFBQUMsSUFBUztBQU1ILElBS1osbUNBQVM7QUFNbUMsSUFLNUMsOEJBQUk7QUFNTSxJQU1WLG1DQUFTLGFBQUMsU0FBaUI7QUFNZixJQVFaLG1DQUFTLGFBQUMsU0FBaUI7QUFRMUIsSUFLRCwwQ0FBZ0I7QUFTZSxJQUUvQiwrQkFBSztBQU9OLElBSUMsOEJBQUk7QUFNOEIsSUFLbEMsbUNBQVM7QUFNZ0MsSUFLekMscUNBQVc7QUFNaUIsSUFLNUIsa0NBQVE7QUFNb0IsSUFLNUIsK0NBQXFCO0FBUXRCLElBR0MsZ0NBQU07QUFNb0MsSUFLMUMsMENBQWdCO0FBS21FLElBUW5GLHFEQUEyQjtBQVNmLElBR1osaUNBQU8sYUFBQyxPQUFlO0FBSUEsSUFNdkIseUNBQWUsYUFBQyxvQkFBNEI7QUFFNEM7QUFBb0Q7QUFBcUU7QUFBZ0U7QUFBbUQ7SUF4T3pULGVBQWUsd0JBRDNCLFVBQVUsRUFBRSxRQUNBLGVBQWU7Ozs7OzBCQUFFO0FBQUMsMEJBeEMvQjtBQUFFLEVBd0NtQyxpQkFBaUI7QUFDckQsU0FEWSxlQUFlO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBCbHVldG9vdGggU2VyaWFsXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZW5hYmxlcyBzZXJpYWwgY29tbXVuaWNhdGlvbiBvdmVyIEJsdWV0b290aC4gSXQgd2FzIHdyaXR0ZW4gZm9yIGNvbW11bmljYXRpbmcgYmV0d2VlbiBBbmRyb2lkIG9yIGlPUyBhbmQgYW4gQXJkdWlubyAobm90IEFuZHJvaWQgdG8gQW5kcm9pZCBvciBpT1MgdG8gaU9TKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmx1ZXRvb3RoU2VyaWFsIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibHVldG9vdGgtc2VyaWFsL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibHVldG9vdGhTZXJpYWw6IEJsdWV0b290aFNlcmlhbCkgeyB9XG4gKlxuICpcbiAqIC8vIFdyaXRlIGEgc3RyaW5nXG4gKiB0aGlzLmJsdWV0b290aFNlcmlhbC53cml0ZSgnaGVsbG8gd29ybGQnKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICpcbiAqIC8vIEFycmF5IG9mIGludCBvciBieXRlc1xuICogdGhpcy5ibHVldG9vdGhTZXJpYWwud3JpdGUoWzE4NiwgMjIwLCAyMjJdKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICpcbiAqIC8vIFR5cGVkIEFycmF5XG4gKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDQpO1xuICogZGF0YVswXSA9IDB4NDE7XG4gKiBkYXRhWzFdID0gMHg0MjtcbiAqIGRhdGFbMl0gPSAweDQzO1xuICogZGF0YVszXSA9IDB4NDQ7XG4gKiB0aGlzLmJsdWV0b290aFNlcmlhbC53cml0ZShkYXRhKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICpcbiAqIC8vIEFycmF5IEJ1ZmZlclxuICogdGhpcy5ibHVldG9vdGhTZXJpYWwud3JpdGUoZGF0YS5idWZmZXIpLnRoZW4oc3VjY2VzcywgZmFpbHVyZSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCbHVldG9vdGhTZXJpYWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Rvbi9CbHVldG9vdGhTZXJpYWwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGgtc2VyaWFsJyxcbiAgcGx1Z2luUmVmOiAnYmx1ZXRvb3RoU2VyaWFsJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhTZXJpYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGEgQmx1ZXRvb3RoIGRldmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFjQWRkcmVzc19vcl91dWlkIElkZW50aWZpZXIgb2YgdGhlIHJlbW90ZSBkZXZpY2VcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gU3Vic2NyaWJlIHRvIGNvbm5lY3QsIHVuc3Vic2NyaWJlIHRvIGRpc2Nvbm5lY3QuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNjb25uZWN0JyxcbiAgfSlcbiAgY29ubmVjdChtYWNBZGRyZXNzX29yX3V1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgaW5zZWN1cmVseSB0byBhIEJsdWV0b290aCBkZXZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hY0FkZHJlc3MgSWRlbnRpZmllciBvZiB0aGUgcmVtb3RlIGRldmljZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBTdWJzY3JpYmUgdG8gY29ubmVjdCwgdW5zdWJzY3JpYmUgdG8gZGlzY29ubmVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2Rpc2Nvbm5lY3QnLFxuICB9KVxuICBjb25uZWN0SW5zZWN1cmUobWFjQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdCBmcm9tIHRoZSBjb25uZWN0ZWQgZGV2aWNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGRhdGEgdG8gdGhlIHNlcmlhbCBwb3J0XG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIEFycmF5QnVmZmVyIG9mIGRhdGFcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2Ugd2hlbiBkYXRhIGhhcyBiZWVuIHdyaXR0ZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICB3cml0ZShkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgZGF0YSBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjb250YWlucyB0aGUgYXZhaWxhYmxlIGJ5dGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgfSlcbiAgYXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgZnJvbSB0aGUgYnVmZmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHdpdGggZGF0YSBmcm9tIHRoZSBidWZmZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICByZWFkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgZnJvbSB0aGUgYnVmZmVyIHVudGlsIGl0IHJlYWNoZXMgYSBkZWxpbWl0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlbGltaXRlciBzdHJpbmcgdGhhdCB5b3Ugd2FudCB0byBzZWFyY2ggdW50aWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICByZWFkVW50aWwoZGVsaW1pdGVyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYmUgbm90aWZpZWQgd2hlbiBkYXRhIGlzIHJlY2VpdmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgdGhlIHN0cmluZyB5b3Ugd2FudCB0byB3YXRjaCBmb3JcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gcmV0dXJucyBhbiBvYnNlcnZhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmUnLFxuICB9KVxuICBzdWJzY3JpYmUoZGVsaW1pdGVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYmUgbm90aWZpZWQgd2hlbiBkYXRhIGlzIHJlY2VpdmVkXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYW4gb2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmVSYXdEYXRhJyxcbiAgfSlcbiAgc3Vic2NyaWJlUmF3RGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgZGF0YSBpbiBidWZmZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2Ugd2hlbiBjb21wbGV0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0cyBib25kZWQgZGV2aWNlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gIH0pXG4gIGxpc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0cyBpZiBibHVldG9vdGggaXMgZW5hYmxlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gIH0pXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnRzIHRoZSBjb25uZWN0aW9uIHN0YXR1c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gIH0pXG4gIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBSU1NJIGZyb20gdGhlIGNvbm5lY3RlZCBwZXJpcGhlcmFsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgfSlcbiAgcmVhZFJTU0koKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgQmx1ZXRvb3RoIHNldHRpbmdzIG9uIHRoZSBkZXZpY2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICBzaG93Qmx1ZXRvb3RoU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgfSlcbiAgZW5hYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2NvdmVyIHVucGFpcmVkIGRldmljZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICBkaXNjb3ZlclVucGFpcmVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBiZSBub3RpZmllZCBvbiBCbHVldG9vdGggZGV2aWNlIGRpc2NvdmVyeS4gRGlzY292ZXJ5IHByb2Nlc3MgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB0aGUgYGRpc2NvdmVyVW5wYWlyZWRgIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2NsZWFyRGV2aWNlRGlzY292ZXJlZExpc3RlbmVyJyxcbiAgfSlcbiAgc2V0RGV2aWNlRGlzY292ZXJlZExpc3RlbmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGh1bWFuIHJlYWRhYmxlIGRldmljZSBuYW1lIHRoYXQgaXMgYnJvYWRjYXN0ZWQgdG8gb3RoZXIgZGV2aWNlc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3TmFtZSBEZXNpcmVkIG5hbWUgb2YgZGV2aWNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXROYW1lKG5ld05hbWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogTWFrZXMgdGhlIGRldmljZSBkaXNjb3ZlcmFibGUgYnkgb3RoZXIgZGV2aWNlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlzY292ZXJhYmxlRHVyYXRpb24gRGVzaXJlZCBudW1iZXIgb2Ygc2Vjb25kcyBkZXZpY2Ugc2hvdWxkIGJlIGRpc2NvdmVyYWJsZSBmb3JcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldERpc2NvdmVyYWJsZShkaXNjb3ZlcmFibGVEdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7fVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Nivel de Glucosa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div *ngFor=\"let gluc of glucose\">\n    <p>{{gluc.data}}</p>\n  </div> -->\n  <section *ngIf=\"deviceInfo\">\n    <ion-card>\n      <ion-card-content>\n        <div *ngIf=\"actualBatteryValue\" class=\"batteryLevel\">\n          <ion-icon *ngIf=\"actualBatteryValue <= 5\" name=\"battery-dead-outline\"></ion-icon>\n          <ion-icon *ngIf=\"actualBatteryValue <= 50 && actualBatteryValue > 5\" name=\"battery-half-outline\"></ion-icon>\n          <ion-icon *ngIf=\"actualBatteryValue > 50\" name=\"battery-full-outline\"></ion-icon>\n          <span>{{actualBatteryValue}}</span>\n        </div>\n        <div class=\"measure\">\n          <h1>{{actualValue}}</h1>\n          <span>mg/dL</span>\n        </div>\n        <div class=\"previousMeasure\">\n          <span *ngIf=\"penultimalValue\">Lectura anterior: {{penultimalValue.data}} mg/dL</span>\n          <span *ngIf=\"!penultimalValue\">Lectura anterior: Pendiente leer prox. dato</span>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"openGraph()\" expand=\"block\" >\n            <ion-icon slot=\"start\" expand=\"full\" src=\"assets/img/chart.svg\"></ion-icon>\n            Gráfica\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"showDeviceInfo()\" expand=\"block\" >\n            <ion-icon slot=\"start\" expand=\"full\" name=\"information-circle-outline\"></ion-icon>\n            Información\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n  <section *ngIf=\"!deviceInfo\" class=\"noDeviceContainer\">\n    <div class=\"noDevice\">\n      <ion-thumbnail>\n        <img src=\"assets/img/bad.svg\" />\n      </ion-thumbnail>\n      <p>Actualmente no tienes un dispositivo vinculado, por favor conecta uno dando click en \"Configurar dispositivo\".</p>\n    </div>\n    <ion-button (click)=\"go2Config()\" expand=\"block\" shape=\"round\">\n      <ion-icon slot=\"start\" name=\"construct-outline\"></ion-icon>\n      Configurar dispositivo\n    </ion-button>\n  </section>\n</ion-content>");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.17.1
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['title', 'titleText', 'text', 'html', 'footer', 'icon', 'hideClass', 'customClass', 'allowOutsideClick', 'allowEscapeKey', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'showCloseButton', 'closeButtonHtml', 'closeButtonAriaLabel', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep', 'onClose', 'onAfterClose', 'onDestroy'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);

    if (typeof resolveValue !== 'undefined') {
      resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
      resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
    } else {
      resolveValue = {
        isDismissed: true,
        isConfirmed: false
      };
    } // Resolve Swal promise


    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.17.1';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_bluetooth_le_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/bluetooth-le/ngx */ "./node_modules/@ionic-native/bluetooth-le/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");











let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
        providers: [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__["BLE"], _ionic_native_bluetooth_le_ngx__WEBPACK_IMPORTED_MODULE_8__["BluetoothLE"], _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__["BluetoothSerial"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  padding: 0 0.5rem;\n}\n\nion-card {\n  --background: #d1daff;\n}\n\nion-card .measure {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card .measure h1 {\n  font-size: calc(7vw + 7vh);\n}\n\nion-card .measure span {\n  margin-left: 1rem;\n}\n\nion-card .previousMeasure {\n  font-size: calc(1.125vw + 1.125vh);\n}\n\n.batteryLevel {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.batteryLevel span {\n  font-size: calc(1vw + 1vh);\n}\n\n.batteryLevel span:after {\n  content: \"%\";\n}\n\n.noDeviceContainer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.noDevice {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.noDevice ion-thumbnail {\n  --size: calc(15vw + 15vh);\n}\n\n.noDevice p {\n  font-style: italic;\n  text-align: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rYWlyL0RvY3VtZW50cy9hcHBzL2JsZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7QUNFRjs7QURERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FERkk7RUFDRSwwQkFBQTtBQ0lOOztBREZJO0VBQ0UsaUJBQUE7QUNJTjs7QURERTtFQUNFLGtDQUFBO0FDR0o7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURGRTtFQUNFLDBCQUFBO0FDSUo7O0FESEk7RUFDRSxZQUFBO0FDS047O0FEREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREpFO0VBQ0UseUJBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAwLjVyZW07XG59XG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2QxZGFmZjtcbiAgLm1lYXN1cmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoN3Z3ICsgN3ZoKTtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cbiAgLnByZXZpb3VzTWVhc3VyZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuMTI1dncgKyAxLjEyNXZoKTtcbiAgfVxufVxuLmJhdHRlcnlMZXZlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMXZoKTtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiJVwiO1xuICAgIH1cbiAgfVxufVxuLm5vRGV2aWNlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub0RldmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IGNhbGMoMTV2dyArIDE1dmgpO1xuICB9XG4gIHAge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbn1cbiIsImlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2QxZGFmZjtcbn1cbmlvbi1jYXJkIC5tZWFzdXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY2FyZCAubWVhc3VyZSBoMSB7XG4gIGZvbnQtc2l6ZTogY2FsYyg3dncgKyA3dmgpO1xufVxuaW9uLWNhcmQgLm1lYXN1cmUgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuaW9uLWNhcmQgLnByZXZpb3VzTWVhc3VyZSB7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjEyNXZ3ICsgMS4xMjV2aCk7XG59XG5cbi5iYXR0ZXJ5TGV2ZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5iYXR0ZXJ5TGV2ZWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyAxdmgpO1xufVxuLmJhdHRlcnlMZXZlbCBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCIlXCI7XG59XG5cbi5ub0RldmljZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ub0RldmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vRGV2aWNlIGlvbi10aHVtYm5haWwge1xuICAtLXNpemU6IGNhbGMoMTV2dyArIDE1dmgpO1xufVxuLm5vRGV2aWNlIHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/graph/graph.component */ "./src/app/components/graph/graph.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);










const GLUCOSE_SERVICE = '6E400001-B5A3-F393-E0A9-E50E24DCCA9E';
const GLUCOSE_CHARACTERISTIC = '6E400003-B5A3-F393-E0A9-E50E24DCCA9E';
let HomePage = class HomePage {
    constructor(ble, ngzone, router, toastController, storage, firestore, modalController) {
        this.ble = ble;
        this.ngzone = ngzone;
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.firestore = firestore;
        this.modalController = modalController;
        this.devices = [];
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
            }
            else {
            }
        });
    }
    autoconnect(id) {
        this.ble.autoConnect(id, data => {
            this.presentToast('Conectando al dispositivo y solicitando lectura');
            this.onConnected(id);
            this.devices = [];
        }, (err) => {
            // this.presentToast('Dispositivo desconectado');
            clearInterval(this.readFun);
        });
    }
    // ArrayBuffer to readable value
    bytesToString(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                color: 'dark',
                duration: 4000
            });
            toast.present();
        });
    }
    onConnected(id) {
        this.ble.requestMtu(id, 128).then(() => {
            // alert('MTU');
            this.ble.startNotification(id, GLUCOSE_SERVICE, GLUCOSE_CHARACTERISTIC).subscribe(data => {
                this.onGlucoseChange(data);
            }, () => this.presentToast('Error notificando al dispositivo'));
            this.deviceId = id;
            this.readData();
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
        this.ble.read(this.peripheral.id, GLUCOSE_SERVICE, GLUCOSE_CHARACTERISTIC).then(data => this.onGlucoseChange(data), () => {
            // alert('Unexpected Error')
        });
    }
    onGlucoseChange(buffer) {
        this.ngzone.run(() => {
            // alert(this.bytesToString(buffer))
            let splitParams = this.bytesToString(buffer).split("&");
            for (let index = 0; index < splitParams.length; index++) {
                let singleURLParam = splitParams[index].split(':');
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
            this.firestore.collection('user_1').add({ glucose: this.actualValue, created: new Date() });
            // this.firestore.collection('glucose').doc('user_1').set({data: {glucose: this.actualValue, created: new Date()} })
            // this.actualValue = this.bytesToString(buffer)
            this.glucose.push({ data: this.actualValue });
            this.penultimalValue = this.glucose[this.glucose.length - 2];
            // alert(JSON.stringify(this.glucose));
        });
    }
    onClick() {
        var max = 3, min = 1, random = (Math.random() * (max - min) + min).toFixed(2);
        console.log(random);
        this.actualValue = random;
        console.log();
        var key = Date.now().toString();
        var obj = {};
        obj[key] = { glucose: this.actualValue, created: new Date() };
        var label = Date.now().toString();
        // this.firestore.collection('glucose').doc('user_1')
        // this.firestore.collection('glucose').doc('user_1').set(obj)
        this.firestore.collection('user_1').add({ glucose: random, created: new Date() });
    }
    openGraph() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_7__["GraphComponent"],
                componentProps: {},
                cssClass: 'modal-block',
                keyboardClose: true,
                backdropDismiss: false,
                showBackdrop: true,
                mode: 'ios',
            });
            modal.onDidDismiss().then((data) => {
            });
            return yield modal.present();
        });
    }
    showDeviceInfo() {
        if (this.deviceInfo) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                // icon: 'success',
                html: '<div><p><strong>Nombre:</strong>' + this.deviceInfo.name + '</p></div><div><p><strong>Nombre:</strong>' + this.deviceInfo.id + '</p></div>',
                // timer: 3000,
                showConfirmButton: true,
                heightAuto: false
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                icon: 'error',
                title: 'No hay un dispositivo vinculado, por favor vincula uno.',
                // timer: 3000,
                showConfirmButton: true,
                heightAuto: false
            }).then(() => {
                this.router.navigate(['config'], { queryParams: {}, skipLocationChange: false });
            });
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map