import {validateMask, getDivisions, getDivisionBlock, validateHostsCount, getMaskForNumberOfHosts} from './networkMask'
import {validateIp, getNextIpAddress} from './ipAdreses'

type Network = {
    networkAddress: string,
    broadcastAddress: string,
    mask: string,
    hosts: string[]
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
        if(address < parseInt(parsedIp[block]) && (address + jumps) >= parseInt(parsedIp[block])){
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

function divadeNetwork(ip: string, mask: string, ...addressecCount: number[]):Network[] | string{
    if(!validateIp(ip) || !validateMask(mask)){
        return 'Network mask or IP adress error';
    }

    const count = addressecCount.reduce((total, addresses)=> { return total += addresses}, 0);
    if(!validateHostsCount(mask, count)){
        return 'To many hosts for that subnet mask';
    }
    let dividedNetwork: Network[] = [];
    let currentIp: string | void = ip, netMask, network, broadcast;
    addressecCount.sort(function(a, b){return b-a});
    for(let i = 0; i < addressecCount.length; i++){
    }

    return 'good';
}
export {calculateNetworkAddress, calculateBroadcastAddress, divadeNetwork};