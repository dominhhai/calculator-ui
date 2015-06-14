var app = require('app')
var BrowserWindow = require('browser-window')
var Menu = require('menu')
var Tray = require('tray')
var path = require('path')

require('crash-reporter').start()

var mainWindow = null

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

var appIcon = null

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 400, height: 600 })

  mainWindow.loadUrl('file://' + __dirname + '/index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // tray
  var iconPath = path.join(__dirname, 'IconTemplate.png')
  appIcon = new Tray(iconPath);
  // var contextMenu = Menu.buildFromTemplate([
  //   { label: 'Item1', type: 'radio' },
  //   { label: 'Item2', type: 'radio' },
  //   { label: 'Item3', type: 'radio', checked: true },
  //   { label: 'Item4', type: 'radio' },
  // ]);
  appIcon.setToolTip('Open/ Close');
  // appIcon.setContextMenu(contextMenu);

})
