'use strict';

const { BrowserWindow } = require('electron');

// default windows settings
const defaultProps = {
  width: 1200,
  width: 1200,
  height: 900,
  minWidth: 800,
  minHeight: 600,
  frame: false,
  show: false,
  backgroundColor: '#212121',
  webPreferences: {
    // webSecurity: false,
    nodeIntegration: true
  }
};

class WindowCreate extends BrowserWindow {
  constructor({ file, ...windowSettings }) {
    // console.log(windowSettings);
    // console.log(defaultProps);
    super({ ...defaultProps, ...windowSettings });
    
    this.loadFile('renderer/' + file);
    this.webContents.openDevTools();

    this.once('ready-to-show', () => {
      this.show();
    });
  }
}
// console.log(WindowCreate);

module.exports = WindowCreate;
