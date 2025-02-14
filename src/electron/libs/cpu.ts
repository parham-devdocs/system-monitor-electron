import si from "systeminformation";
import { cpus } from "os";
import { CpuDataType } from "../../../types.js";

function getCpuInfo(): Promise<CpuDataType> {
  const cpu = cpus()[0]; // Get CPU info from Node.js os module

  return Promise.all([si.cpuCurrentSpeed(), si.cpuTemperature()]) // Wait for both promises
    .then(([speedResult, tempResult]) => {
      try {
        // Format the coresSpeed array by appending " GHz" to each core speed
        const formatedCores = speedResult.cores.map((core) => `${core} GHz`);

        // Construct the CPU object using the results
        const cpuObject: CpuDataType = {
          maxSpeed: `${speedResult.max} GHz`, // Convert max speed to GHz
          minSpeed: `${speedResult.min} GHz`, // Convert min speed to GHz
          avgSpeed: `${speedResult.avg} GHz`, // Convert avg speed to GHz
          model: cpu.model, // CPU model from Node.js os module
          coresSpeed: formatedCores, // Formatted speeds of individual cores
          temperature: `${tempResult.main}°C`, // Main CPU temperature
        };

        return cpuObject; // Return the constructed CPU object
      } catch (error) {
        // Handle errors during data processing
        throw new Error("Error processing CPU data: " + (error as Error).message);
      }
    })
    .catch((error) => {
      // Handle errors fetching CPU information
      throw new Error("Error fetching CPU information: " + error.message);
    });
}

export default getCpuInfo;