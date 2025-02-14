import si from "systeminformation";
import { BatteryInfo } from "../../../types.js";

function getBatteryInfo(){
  return new Promise<BatteryInfo>((resolve, reject) => {
    si.battery()
      .then((res) => {
        try {
       
            const batteryObject:BatteryInfo={}
            batteryObject.connected=res.acConnected
            batteryObject.percent=res.percent
            batteryObject.remainingTime=`${res.timeRemaining} min`

            resolve(batteryObject)
          // Resolve the promise with the storage object
        //   resolve(storageObject);
        } catch (error) {
          // Reject the promise if an error occurs during processing
          reject(new Error("Error processing storage data: " + (error as Error).message));
        }
      })
      .catch((error) => {
        // Reject the promise if si.fsSize() fails
        reject(new Error("Error fetching storage information: " + error.message));
      });
  });
}

export default getBatteryInfo;