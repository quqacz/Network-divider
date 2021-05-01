type Mask = {
    mask: string,
    numberOfHosts: number
}

const masks: Mask[] = [
    {mask: '128.0.0.0', numberOfHosts: 2147483646},
    {mask: '192.0.0.0', numberOfHosts: 1073741822},
    {mask: '224.0.0.0', numberOfHosts: 536870910},
    {mask: '240.0.0.0', numberOfHosts: 268435454},
    {mask: '248.0.0.0', numberOfHosts: 134217726},
    {mask: '252.0.0.0', numberOfHosts: 67108862},
    {mask: '254.0.0.0', numberOfHosts: 33554430},
    {mask: '255.0.0.0', numberOfHosts: 16777214},
    {mask: '255.128.0.0', numberOfHosts: 8388606},
    {mask: '255.192.0.0', numberOfHosts: 4194302},
    {mask: '255.224.0.0', numberOfHosts: 2097150},
    {mask: '255.240.0.0', numberOfHosts: 1048574},
    {mask: '255.248.0.0', numberOfHosts: 524286},
    {mask: '255.252.0.0', numberOfHosts: 262142},
    {mask: '255.254.0.0', numberOfHosts: 131070},
    {mask: '255.255.0.0', numberOfHosts: 65534},
    {mask: '255.255.128.0', numberOfHosts: 32766},
    {mask: '255.255.192.0', numberOfHosts: 16382},
    {mask: '255.255.224.0', numberOfHosts: 8190},
    {mask: '255.255.240.0', numberOfHosts: 4094},
    {mask: '255.255.248.0', numberOfHosts: 2046},
    {mask: '255.255.252.0', numberOfHosts: 1022},
    {mask: '255.255.254.0', numberOfHosts: 510},
    {mask: '255.255.255.0', numberOfHosts: 254},
    {mask: '255.255.255.128', numberOfHosts: 126},
    {mask: '255.255.255.192', numberOfHosts: 62},
    {mask: '255.255.255.224', numberOfHosts: 30},
    {mask: '255.255.255.240', numberOfHosts: 14},
    {mask: '255.255.255.248', numberOfHosts: 6},
    {mask: '255.255.255.252', numberOfHosts: 2}
]

const divisions: Mask[] = [
    {mask: '0', numberOfHosts: 256},
    {mask: '128', numberOfHosts: 128},
    {mask: '192', numberOfHosts: 64},
    {mask: '224', numberOfHosts: 32},
    {mask: '240', numberOfHosts: 16},
    {mask: '248', numberOfHosts: 8},
    {mask: '252', numberOfHosts: 4}
]

function validateMask(checkedMask: string): boolean {
    for(let i = 0; i < masks.length; i++){
        if(checkedMask === masks[i].mask)
            return true;
    }
    return false;
}

function validateHostsCount(checkedMask: string, count: number): boolean{
    for(let i = 0; i < masks.length; i++){
        if(checkedMask === masks[i].mask && count >= masks[i].numberOfHosts)
            return true;
    }
    return false;
}

function getDivisions(mask: string): number{
    const blocks = mask.split('.');
    let block;
    for(let i = 0; i < blocks.length; i++){
        if(blocks[i] !== '255'){
            block = blocks[i];
            break;
        }
    }
    for(let i = 0; i < divisions.length; i++){
        if(block === divisions[i].mask)
            return divisions[i].numberOfHosts;
    }
    return 0;
}

function getDivisionBlock(mask: string): number{
    const blocks = mask.split('.');
    for(let i = 0; i < blocks.length; i++){
        if(blocks[i] !== '255'){
            return i;
        }
    }
    return 0;
}
export {validateMask, getDivisions, getDivisionBlock};