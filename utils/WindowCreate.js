'use strict';

const { BrowserWindow } = require('electron');

// default windows settings
const defaultProps = {
  width: 1200,
  height: 800,
  minWidth: 800,
  minHeight: 600,
  center: true,
  frame: false,
  show: false,
  backgroundColor: '#212121',
  icon: __dirname + '\\..\\assets\\images\\icon\\appicon.png',
  webPreferences: {
    // webSecurity: false,
    nodeIntegration: true
  }
};


class WindowCreate extends BrowserWindow {
  constructor(file, windowSettings) {
    // console.log(windowSettings);
    // console.log('[FILE]', file.file);

    // // const fileURL = ...file;
    // // console.log(defaultProps);
    const settings = {
      ...defaultProps,
      ...windowSettings
    };
    const fileURL = file.file;
    super({ ...settings });
    // console.log(this);
    // console.log('[settings]', settings);

    this.loadFile(fileURL);
    // this.loadURL(fileURL);
    this.webContents.openDevTools();

    this.once('ready-to-show', () => {
      this.show();
    });
  }
}
// console.log(WindowCreate);

module.exports = WindowCreate;
