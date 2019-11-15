// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const remote = require('electron').remote;

console.log('[NOLOADED]', new Date().getMilliseconds());

// initialise when document has loaded
window.addEventListener('DOMContentLoaded', () => {
  console.log('[DOMLOADED]', new Date().getMilliseconds());
  handleWindowControls();
});

function handleWindowControls() {
  let window ;

  // get all buttons to control
  const minButton = document.getElementById('min-button'),
    maxButton = document.getElementById('max-button'),
    restoreButton = document.getElementById('restore-button'),
    closeButton = document.getElementById('close-button');

  // check window to set appropriate button
  toggleMaxRestoreButton();

  // ADD EVENT LISTENERS

  // minimize window
  minButton.addEventListener('click', () => {
    window = remote.getCurrentWindow();
    window.minimize();
  });

  // maximize window
  maxButton.addEventListener('click', () => {
    window = remote.getCurrentWindow();
    window.maximize();
  });

  // unmaximize window
  restoreButton.addEventListener('click', () => {
    window = remote.getCurrentWindow();
    window.unmaximize();
  });

  // close window
  closeButton.addEventListener('click', () => {
    window = remote.getCurrentWindow();
    window.close();
  });

  // call function when window change 
  window.on('maximize', toggleMaxRestoreButton);
  window.on('unmaximize', toggleMaxRestoreButton);

  // check if window is maximize or not
  // display button
  function toggleMaxRestoreButton() {
    window = remote.getCurrentWindow();
    let isMaximized = window.isMaximized();
    console.log(isMaximized);
    if (isMaximized) {
      maxButton.style.display = 'none';
      restoreButton.style.display = 'flex';
    } else {
      maxButton.style.display = 'flex';
      restoreButton.style.display = 'none';
    }
  }
}
