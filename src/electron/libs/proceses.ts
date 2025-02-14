import { execSync } from "node:child_process";
import { ProcessInfoType } from "../../../types.js";
function getProcessesInfo(): ProcessInfoType[] {
  try {
    // Run the shell command synchronously
    const stdout = execSync(
      `echo "PID USER %CPU %MEM" && top -b -n 1 | tail -n +8 | head -n 4 | awk '{print $1, $2, $9, $10}'`,
      { encoding: "utf-8" } // Ensure the output is a string
    );

    // Split the output into lines
    const lines = stdout.trim().split("\n");

    // Extract the data rows (remaining lines)
    const details = lines.slice(1).map(line => line.trim().split(/\s+/));

    // Map each row to a ProcessInfoType object
    const output: ProcessInfoType[] = details.map(row => {
      const [PID, USER, CPU, MEM] = row;
      return {
        PID: PID || "",
        USER: USER || "",
        "%CPU": CPU || "",
        "%MEM": MEM || "",
      };
    });

    return output;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("An unknown error occurred.");
    }
    return [];
  }
}

export default getProcessesInfo;