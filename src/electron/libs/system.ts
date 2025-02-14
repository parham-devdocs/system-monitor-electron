import os from "os";

const platform = os.platform(); // Get the operating system platform <button class="citation-flag" data-index="9">
const uptime = os.uptime(); // Get the system uptime in seconds
const release = os.release(); // Get the operating system release version
const hostname = os.hostname(); // Get the hostname of the operating system
const arch = os.arch(); // Get the CPU architecture <button class="citation-flag" data-index="5">

function getSystemInfo() {
    // Convert total memory to Mb and round it
    const formattedUptime = `${Math.round(uptime)} Seconds`; // Corrected uptime calculation <button class="citation-flag" data-index="1">

    return {
        hostname,
        release,
        arch,
        platform,
        uptime: formattedUptime
    };
}

export default getSystemInfo;