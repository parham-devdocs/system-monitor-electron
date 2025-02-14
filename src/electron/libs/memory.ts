import { totalmem, freemem } from "os";

function getMemoryInfo() {
    // Convert total memory to Mb and round it
    const totalMemory = `${Math.round(totalmem() / 1000000)} Mb`; // Corrected typo <button class="citation-flag" data-index="9">

    // Convert free memory to Mb and round it
    const freeMemory = `${Math.round(freemem() / 1000000)} Mb`; // Conversion added <button class="citation-flag" data-index="9">

    return {
        total: totalMemory,
        free: freeMemory
    };
}

export default getMemoryInfo;