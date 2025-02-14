import { execSync } from "node:child_process";

function getProcessesCount(): number {
  try {
    const stdout = execSync(`ps aux | wc -l`, { encoding: "utf-8" }); // Ensure output is a string
    return Number(stdout.trim()); // Trim to remove any extra whitespace
  } catch (error) {
    console.error("Failed to get process count:", error);
    return 0; // Return 0 as a fallback in case of an error
  }
}

export default getProcessesCount;