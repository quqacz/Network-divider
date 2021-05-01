import {validateMask, getDivisions} from './networkMask';

test('maska 0.0.0.0', ()=>{
    let resoult = validateMask('0.0.0.0');
    expect(resoult).toBe(false);
})
test('maska 0.128.0.0', ()=>{
    let resoult = validateMask('0.128.0.0');
    expect(resoult).toBe(false);
})
test('maska 255.128.0.0', ()=>{
    let resoult = validateMask('255.128.0.0');
    expect(resoult).toBe(true);
})
test('maska 255.255.255.255', ()=>{
    let resoult = validateMask('255.255.255.255');
    expect(resoult).toBe(false);
})
test('maska -255.255.255.255', ()=>{
    let resoult = validateMask('-255.255.255.255');
    expect(resoult).toBe(false);
})
test('maska 255..255.255', ()=>{
    let resoult = validateMask('255..255.255');
    expect(resoult).toBe(false);
})
test('maska ....', ()=>{
    let resoult = validateMask('....');
    expect(resoult).toBe(false);
})
test('maska 255.255.255.253', ()=>{
    let resoult = validateMask('255.255.255.253');
    expect(resoult).toBe(false);
})
test('maska 255.251.255.253', ()=>{
    let resoult = validateMask('255.251.255.253');
    expect(resoult).toBe(false);
})

test('podział 128.0.0.0', ()=>{
    let resoult = getDivisions('128.0.0.0');
    expect(resoult).toBe(128);
})
test('podział 255.192.0.0', ()=>{
    let resoult = getDivisions('255.192.0.0');
    expect(resoult).toBe(64);
})
test('podział 255.255.224.0', ()=>{
    let resoult = getDivisions('255.255.224.0');
    expect(resoult).toBe(32);
})
test('podział 255.255.255.255', ()=>{
    let resoult = getDivisions('255.255.255.255');
    expect(resoult).toBe(0);
})