import si from "systeminformation";
import { StorageInfo } from "../../../types.js";

function getStorageInfo(): Promise<StorageInfo[]> {
  return new Promise<StorageInfo[]>((resolve, reject) => {
    si.fsSize()
      .then((storage: any[]) => {
        try {
          // Filter for the root partition (mount point '/')
          const disk = storage.filter(item => item.mount === "/");

          // Map relevant data into the desired format
          const storageObject: StorageInfo[] = disk.map(({ size, available, used }) => ({
            size,
            available,
            used,
          }));

          // Resolve the promise with the storage object
          resolve(storageObject);
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

export default getStorageInfo;