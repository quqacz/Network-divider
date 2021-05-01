declare type Network = {
    networkAddress: string;
    broadcastAddress: string;
    mask: string;
    hosts: string[];
};
declare function calculateNetworkAddress(ip: string, mask: string): string;
declare function calculateBroadcastAddress(ip: string, mask: string): string;
declare function divadeNetwork(ip: string, mask: string, ...addressecCount: number[]): Network[] | string;
export { calculateNetworkAddress, calculateBroadcastAddress, divadeNetwork };
