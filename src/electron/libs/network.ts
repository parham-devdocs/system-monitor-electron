import { networkInterfaces } from "os";

function getNetworkInfo() {
    const interfaces = networkInterfaces();
    const wlo1 = interfaces.wlo1 && Array.isArray(interfaces.wlo1) && interfaces.wlo1[0]; // Safely access the first entry of wlo1 <button class="citation-flag" data-index="6">

    if (wlo1) {
        const { address, netmask, mac, family } = wlo1;
        return {
           
                address,
                netmask,
                mac,
                family
            
        };
    } else {
        console.log("Interface 'wlo1' is not available or does not have any assigned addresses.");
        return {
            wlo1: null
        };
    }
}

export default getNetworkInfo;