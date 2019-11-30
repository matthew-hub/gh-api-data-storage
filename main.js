'use strict';

const { app, ipcMain } = require('electron');
const path = require('path');

const WindowCreate = require('./utils/WindowCreate');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

function initiWindowApp() {
  let appWindow = new WindowCreate({
    // file: 'https://matthew-hub.github.io/snake/'
    file: 'renderer/index.html'
  });
  // Emitted when the window is closed.
  appWindow.on('closed', () => {
    console.log('Closed');
    appWindow = null;
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', initiWindowApp);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
