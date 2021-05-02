import {validateMask, getDivisions} from './networkMask';

test('maska 0.0.0.0', ()=>{
    let resoult = validateMask('0.0.0.0');
    expect(resoult).toBe(false);
})
test('maska ', ()=>{
    let resoult = validateMask('');
    expect(resoult).toBe(false);
})
test('maska ....', ()=>{
    let resoult = validateMask('....');
    expect(resoult).toBe(false);
})
test('maska a.b.c.d', ()=>{
    let resoult = validateMask('a.b.c.d');
    expect(resoult).toBe(false);
})
test('maska 128.0.0.-0', ()=>{
    let resoult = validateMask('128.0.0.-0');
    expect(resoult).toBe(false);
})
test('maska 128.128.0.0', ()=>{
    let resoult = validateMask('128.128.0.0');
    expect(resoult).toBe(false);
})
test('maska 0.0.0.1', ()=>{
    let resoult = validateMask('0.0.0.1');
    expect(resoult).toBe(false);
})
test('maska 255.255.255.255', ()=>{
    let resoult = validateMask('255.255.255.255');
    expect(resoult).toBe(false);
})
test('maska 128.0.0.0.0', ()=>{
    let resoult = validateMask('128.0.0.0.0');
    expect(resoult).toBe(false);
})
test('maska ', ()=>{
    let resoult = validateMask('');
    expect(resoult).toBe(false);
})
test('maska 129.0.0.0', ()=>{
    let resoult = validateMask('129.0.0.0');
    expect(resoult).toBe(false);
})
test('maska 128.0.0.0', ()=>{
    let resoult = validateMask('128.0.0.0');
    expect(resoult).toBe(true);
})
test('maska 255.255.224.0', ()=>{
    let resoult = validateMask('255.255.224.0');
    expect(resoult).toBe(true);
})