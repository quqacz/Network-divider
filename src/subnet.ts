import {validateMask, getDivisions, getDivisionBlock, validateHostsCount, getMaskForNumberOfHosts} from './networkMask'
import {validateIp, getNextIpAddress} from './ipAdreses'

type Network = {
    networkAddress: string,
    broadcastAddress: string,
    mask: string,
    hosts: string[],
    comment?: string
}

function calculateNetworkAddress(ip: string, mask: string): string{
    if(!validateMask(mask) || !validateIp(ip))
        return 'error';
    const parsedIp = ip.split('.');
    const jumps = getDivisions(mask);
    const block = getDivisionBlock(mask);
    let address = 0;
    while(true){
        if(address <= parseInt(parsedIp[block]) && (address + jumps) > parseInt(parsedIp[block])){
            let networkAdderss = '';
            for(let i = 0; i < parsedIp.length; i++){
                if(i < block){
                    networkAdderss += parsedIp[i]+'.';
                }else if(i === block){
                    networkAdderss += address+'.';
                }else{
                    networkAdderss += '0.'
                }
            }
            return networkAdderss.substring(0, networkAdderss.length - 1);
        }
        address += jumps;
    }
}

function calculateBroadcastAddress(ip: string, mask: string): string{
    if(!validateMask(mask) || !validateIp(ip))
        return 'error';
    const parsedIp = ip.split('.');
    const jumps = getDivisions(mask);
    const block = getDivisionBlock(mask);
    let address = 0;
    while(true){
        if(address <= parseInt(parsedIp[block]) && (address + jumps) > parseInt(parsedIp[block])){
            let networkAdderss = '';
            for(let i = 0; i < parsedIp.length; i++){
                if(i < block){
                    networkAdderss += parsedIp[i]+'.';
                }else if(i === block){
                    networkAdderss += (address + jumps - 1)+'.';
                }else{
                    networkAdderss += '255.'
                }
            }
            return networkAdderss.substring(0, networkAdderss.length - 1);
        }
        address += jumps;
    }  
}

function divadeNetwork(ip: string, mask: string, ...addressecCount: number[]):Network[]{
    if(!validateIp(ip) || !validateMask(mask)){
        console.log(validateIp(ip), validateMask(mask))
        return [{networkAddress: 'undefined', broadcastAddress: 'undefined', mask: 'undefined', hosts: [], comment: 'Mask error or ip address error'}];
    }

    const count = addressecCount.reduce(function(total, val){
        return total + (Number.isNaN(Number(val)) ? 0 : Number(val));

    }, 0);
    if(!validateHostsCount(mask, count)){
        return [{networkAddress: 'undefined', broadcastAddress: 'undefined', mask: 'undefined', hosts: [], comment: 'To many hosts for that mask'}]
    }
    let dividedNetwork: Network[] = [];
    let currentIp = ip, netMask, network, broadcast;
    addressecCount.sort(function(a, b){return b-a});
    for(let i = 0; i < addressecCount.length; i++){
        let hosts: string[] = [];
        netMask = getMaskForNumberOfHosts(addressecCount[i]);
        network = calculateNetworkAddress(currentIp, netMask);
        broadcast = calculateBroadcastAddress(currentIp, netMask);
        currentIp = network;
        for(let j = 0; j < addressecCount[i]; j++){
            currentIp = getNextIpAddress(currentIp);
            hosts.push(currentIp);
        }
        dividedNetwork.push({networkAddress: network, broadcastAddress: broadcast, mask: netMask, hosts: hosts});
        currentIp = getNextIpAddress(broadcast);
    }

    return dividedNetwork;
}

function printNetwork(newtwork: Network[]): void{
    for(let i = 0; i < newtwork.length; i++){
        console.log(`Network address: ${newtwork[i].networkAddress}; Broadcast address: ${newtwork[i].broadcastAddress}; Network mask ${newtwork[i].mask}`)
        if(newtwork[i].comment)
            console.log(newtwork[i].comment);
        for(let j = 0; j < newtwork[i].hosts.length; j++){
            console.log(`   ${newtwork[i].hosts[j]}`);
        }
    }
}
export {calculateNetworkAddress, calculateBroadcastAddress, divadeNetwork, printNetwork, Network};