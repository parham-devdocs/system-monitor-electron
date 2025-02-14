import osUtils from "os-utils";
import os from "os";
import { BrowserWindow } from "electron";
export function PollResources(mainWindow:BrowserWindow) {
    
    setInterval(async() => {
        getCpuUsage()
        const cpuUsage=await getCpuUsage()
        const ramUsage=getRamUsage()
        const {cpuModel,totalMemoryGB}=getStaticData()
        mainWindow.webContents.send("statistics",({cpuUsage,ramUsage,cpuModel,totalMemoryGB}))
        console.log({cpuUsage,ramUsage,cpuModel,totalMemoryGB})
    }, 400);
}

function getCpuUsage() {
return new Promise(resolve=>{
    osUtils.cpuUsage(resolve)
})
}

function getRamUsage() {
  
      return 1-osUtils.freememPercentage()
   
    }

    function getStaticData(){
        const cpuModel=os.cpus()[0].model;
        const totalMemoryGB=Math.floor(osUtils.totalmem()/1024);
        return{cpuModel,totalMemoryGB}
    }
