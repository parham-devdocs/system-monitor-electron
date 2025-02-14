import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron",{
    subscribeStatistics:(callback:(statistics:any)=>void)=>{
        ipcRenderer.on("statistics",(_,stats)=>{
          
callback({stats})
        })
    },
   

})