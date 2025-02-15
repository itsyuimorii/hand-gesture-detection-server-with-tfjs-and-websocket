const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendHandGestureNotification: () => ipcRenderer.send("send-hand-gesture-notification"),
});
