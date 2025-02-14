import { contextBridge, ipcRenderer } from "electron";
import { IpcRenderer } from "electron";
contextBridge.exposeInMainWorld("electron",{
    subscribeStatistics:(callback:(statistics:any)=>void)=>{
        ipcRenderer.on("statistics",(_,stats)=>{
callback({stats})
        })
    },
    getStaticData:()=>console.log("static")

})