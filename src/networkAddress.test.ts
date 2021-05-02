import {calculateNetworkAddress} from './subnet'

test('ip: 10.10.10.10, maska: 255.255.255.0', ()=>{
    let resoult = calculateNetworkAddress('10.10.10.10', '255.255.255.0');
    expect(resoult).toBe('10.10.10.0');
})
test('ip: 10.10.0.10, maska: 255.255.255.0', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.10', '255.255.255.0');
    expect(resoult).toBe('10.10.0.0');
})
test('ip: 10.10.0.128, maska: 255.255.255.128', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.128', '255.255.255.128');
    expect(resoult).toBe('10.10.0.128');
})
test('ip: 10.10.0.127, maska: 255.255.255.128', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.127', '255.255.255.128');
    expect(resoult).toBe('10.10.0.0');
})
test('ip: 10.10.0.255, maska: 255.255.255.128', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.255', '255.255.255.128');
    expect(resoult).toBe('10.10.0.128');
})
test('ip: 10.10.0.255, maska: 255.255.255.128', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.255', '255.255.255.128');
    expect(resoult).toBe('10.10.0.128');
})
test('ip: 10.10.0.0, maska: 255.255.255.192', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.0', '255.255.255.192');
    expect(resoult).toBe('10.10.0.0');
})
test('ip: 10.10.0.63, maska: 255.255.255.192', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.63', '255.255.255.192');
    expect(resoult).toBe('10.10.0.0');
})
test('ip: 10.10.0.64, maska: 255.255.255.192', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.64', '255.255.255.192');
    expect(resoult).toBe('10.10.0.64');
})
test('ip: 10.10.0.127, maska: 255.255.255.192', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.127', '255.255.255.192');
    expect(resoult).toBe('10.10.0.64');
})
test('ip: 10.10.0.129, maska: 255.255.255.192', ()=>{
    let resoult = calculateNetworkAddress('10.10.0.129', '255.255.255.192');
    expect(resoult).toBe('10.10.0.128');
})
test('ip: 1.1.1.1, maska: 255.255.255.192', ()=>{
    let resoult = calculateNetworkAddress('1.1.1.1', '255.255.255.192');
    expect(resoult).toBe('1.1.1.0');
})