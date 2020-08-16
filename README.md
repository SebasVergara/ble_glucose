# Ionic APP for ESP32 Bluetooth for glucose

Hybrid APP built with Ionic v5, for get glucose level from an ESP32 device connected with a glucose sensor, sending data through bluetooth BLE.

## Installation

Please use doc of [ionic](https://ionicframework.com/docs/) documentation.

First get `node_module` folder with:

```bash
npm install
```

## Usage

For visualize on browser, run 

```bash
ionic serve
```
Please note that only run on Android or iOS.
For add Android run:

```bash
ionic cordova platform add android
```
For add iOS run:
```bash
ionic cordova platform add ios
```

## Notes
ESP32 are sending data with next format:

```bash
glucose:'#'&battery_level:'#'
```

You can change it. The MTU are changed to 128 bytes, so you can use it.

## License
[MIT](https://choosealicense.com/licenses/mit/)
