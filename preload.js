const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendHandGestureNotification: (gestureData) => ipcRenderer.send("send-hand-gesture-notification", gestureData),
});
