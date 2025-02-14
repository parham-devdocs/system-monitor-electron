import { app } from "electron";
import Path from "path";
import { isDev } from "./utils.js";


export function pathResolver() {
    
    return Path.join(app.getAppPath(),isDev()?".":"..","/dist-electron/preload.cjs")
}