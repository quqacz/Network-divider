import {validateMask, getDivisions, getDivisionBlock} from './subnetMasks'
import {validateIp} from './ipAdreses'

function calculateNetworkAddress(ip: string, mask: string): string{
    if(!validateMask(mask) || !validateIp(ip))
        return 'error';
    const parsedIp = ip.split('.');
    const jumps = getDivisions(mask);
    const block = getDivisionBlock(mask);
    let address = 0;
    while(true){
        if(address <= parseInt(parsedIp[block]) && (address + jumps) > parseInt(parsedIp[block])){
            break;
        }
        address += jumps;
    }
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

export {calculateNetworkAddress};