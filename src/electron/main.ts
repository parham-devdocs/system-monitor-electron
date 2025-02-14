import { BrowserWindow,app } from "electron";
import {join} from "path";
import { isDev } from "./utils.js";
import { PollResources } from "./resourceManage.js";
import { pathResolver } from "./pathResolver.js";
app.on("ready",()=>{
    const mainWindow=new BrowserWindow({
        webPreferences:{preload:pathResolver()}
    })
    if (isDev()) {

        mainWindow.loadURL("http://localhost:5123")
    }
    else{
        mainWindow.loadFile( join( app.getAppPath(),"/dist-react/index.html"))

    }
PollResources(mainWindow)
})

