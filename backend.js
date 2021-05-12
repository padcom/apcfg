const url = require('url')
const path = require('path')
const development = require('electron-is-dev')
const { app, ipcMain, BrowserWindow } = require('electron')
const { MavEsp8266 } = require('node-mavlink')
const { minimal, common, ardupilotmega, uavionix, icarous } = require('node-mavlink')


let window = null

async function initializeSystemRequests() {
  ipcMain.on('system.properties', event => {
    event.sender.send('system.properties', {
      os: {
        type: require('os').type(),
        version: process.getSystemVersion()
      },
      versions: process.versions
    })
  })
}

async function initializeFrontendBuildProcess() {
  if (development) {
    const { createServer } = require('vite')
    const server = await createServer({})
    await server.listen()
  }
}

async function initializeMainWindow() {
  window = new BrowserWindow({
    icon: path.join(app.getAppPath(), './', 'build/icons/128x128.png'),
    webPreferences: {
      devTools: true,
      // we're interacting directly with classes that are node.js specific...
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
    }
  })
  window.maximize()
  if (development) {
    window.webContents.openDevTools()
    window.loadURL('http://localhost:3000')
  } else {
    // window.setMenu(null)
    // window.webContents.openDevTools()
    window.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: "file:",
        slashes: true
      })
    )
  }
}

app.on('ready', async () => {
  // await initializeMavlink()
  await initializeSystemRequests()
  await initializeFrontendBuildProcess()
  await initializeMainWindow()
})
