
import { BrowserWindow } from "electron";
import getBatteryInfo from "./libs/battery.js";
import getCpuUsage from "./libs/cpu.js";
import getMemoryUsage from "./libs/memory.js";
import getNetworkData from "./libs/network.js";
import getProcesesData from "./libs/proceses.js";
import getProcessCounts from "./libs/processCount.js";
import getStorageUsage from "./libs/storage.js";
import getSystemInfo from "./libs/system.js";
import getUserInfo from "./libs/userInfo.js";
export function PollResources(mainWindow:BrowserWindow) {
    
    setInterval(async() => {
        
        const batteryUsage=await getBatteryInfo()
const cpuUsage=await getCpuUsage()
const memoryUsage= getMemoryUsage()
const processData=getProcesesData()
const networkData=getNetworkData()
const numberOfProcesses=getProcessCounts()
const storageUsage=await getStorageUsage()
const systemInfo=getSystemInfo()
const userInfo=getUserInfo()

        mainWindow.webContents.send("statistics",({batteryUsage,cpuUsage,memoryUsage,processData,numberOfProcesses,storageUsage,systemInfo,userInfo,networkData}))
    }, 400);
}