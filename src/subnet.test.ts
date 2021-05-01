import {calculateNetworkAddress} from './subnet'

test('adres: 10.10.10.10, maska: 255.255.255.0', ()=>{
    const resoult = calculateNetworkAddress('10.10.10.10', '255.255.255.0');
    expect(resoult).toBe('10.10.10.0');
})