// electron.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const WebSocket = require('ws');

// const isDev = process.env.NODE_ENV === 'development';
const isDev = true;
let mainWindow;

// ** Initialize WebSocket Server Inside Electron **
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
  console.log('Client connected to WebSocket');
  ws.on('error', console.error);
  ws.on('message', (data) => {
    console.log('Received:', data);
    sendHandGestureNotification();
  });
  ws.send('Welcome to the WebSocket server!');
});

// ** Function to Send Notifications to All Clients **
function sendHandGestureNotification() {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      console.log("sendHandGestureNotification")
      client.send("Sending notification to clients");
    }
  });
}

// ** Create Electron Window **
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Keep if needed, otherwise set to false for security
      preload: __dirname + "/preload.js",
    },
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  mainWindow.on('closed', () => (mainWindow = null));
}

// ** Electron App Lifecycle **
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("send-hand-gesture-notification", sendHandGestureNotification)
console.log('WebSocket Server running on ws://localhost:8081');
