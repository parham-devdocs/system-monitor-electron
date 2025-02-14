// ProcessInfoType with optional fields
export type ProcessInfoType = {
    PID?: string | undefined;
    USER?: string | undefined;
    "%CPU"?: string | undefined; // Use quotes for keys with special characters
    "%MEM"?: string | undefined;
  };
  
  // SystemDataType with optional fields
  export type SystemDataType = {
    hostname?: string | undefined;
    platform?: string | undefined;
    arch?: string | undefined;
    release?: string | undefined;
  };
  
  // CpuDataType with optional fields
  export type CpuDataType = {
    model?: string | undefined;
    minSpeed?: string |undefined
    maxSpeed?:string | undefined
    avgSpeed?:string|undefined
    coresSpeed?:string[] |undefined
    temperature?: string | undefined
  };
  
  // MemoryDataType with optional fields
  export type MemoryDataType = {
    "total memory"?: string | undefined;
    "free memory"?: string | undefined;
  };
  
  // NetworkDataType with optional fields
  export type NetworkDataType = {
    mac?: string | undefined;
    family?: string | undefined;
    address?: string | undefined;
    netmask?: string | undefined;
  };
  
  // UserDataType with optional fields
  export type UserDataType = {
    uid?: number | undefined;
    gid?: number | undefined;
    shell?: string | undefined;
    username?: string | undefined;
  };
  
  export  type   StorageInfo = {
size?:number|undefined
available?:number |undefined
used?:number |undefined
  }
  export type BatteryInfo={
    percent?:number
    remainingTime?:string
    connected?:boolean
  }
  // Info type combining all other types
  export type Info = {
    systemData?: SystemDataType | undefined;
    cpuData?: CpuDataType | undefined;
    memoryData?: MemoryDataType | undefined;
    network?: NetworkDataType | undefined;
    userInfo?: UserDataType | undefined;
    processInfo?: {
      topProcesses?: ProcessInfoType[] | undefined; // Array of ProcessInfoType
      processCount?: number | undefined;
    } | undefined;
    storageInfo?: StorageInfo[] | undefined
    batteryInfo?:BatteryInfo | undefined
  };