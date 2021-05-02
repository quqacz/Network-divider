function validateIp(ip: string): boolean{
    const segments = ip.split('.');
    if(segments[0] === '0' || segments.length !== 4){
        return false;
    }
    for(let i = 0; i < segments.length; i++){
        if(segments[i] === ''){
            return false;
        }
        if(segments[i].length > 1 && segments[i][0] === '0')
            return false;
        if(!parseInt(segments[i]) && parseInt(segments[i]) !== 0){
            return false;
        }
        if(parseInt(segments[i]) > 255)
            return false;
        if(segments[i] === '-0' || parseInt(segments[i]) < 0){
            return false;
        }
    }
    return true;
}

function getNextIpAddress(ip: string): string{
    if(!validateIp(ip))
        return '';
    
    const address = ip.split('.');
    for(let i = address.length - 1; i >= 0; i--){
        if(parseInt(address[i]) < 255) {
            address[i] = (parseInt(address[i]) + 1).toString();
            break;
        }else if(address[i] === '255'){
            address[i] = '0';
        }
    }

    let addressToRerurn = address.join('.');
    if(!validateIp(addressToRerurn))
        return '';

    return addressToRerurn;

}
export {validateIp, getNextIpAddress};