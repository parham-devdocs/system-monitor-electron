import os from "os";

function getUserInfo() {
    const userInfo = os.userInfo(); // Get user information <button class="citation-flag" data-index="4">
return {
    uid:userInfo.uid,
    gid:userInfo.gid,
    username:userInfo.username,
    shell:userInfo.shell
}
}

export default getUserInfo