"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ipAdreses_1 = require("./ipAdreses");
test('check 0.0.0.0 ip adress', () => {
    let value = ipAdreses_1.validateIp('0.0.0.0');
    expect(value).toBe(false);
});
test('check 0.0.0.1 ip adress', () => {
    let value = ipAdreses_1.validateIp('0.0.0.1');
    expect(value).toBe(false);
});
test('check 1.0.0.0 ip adress', () => {
    let value = ipAdreses_1.validateIp('1.0.0.0');
    expect(value).toBe(true);
});
test('check -1.0.0.0 ip adress', () => {
    let value = ipAdreses_1.validateIp('-1.0.0.0');
    expect(value).toBe(false);
});
test('check 260.0.0.0 ip adress', () => {
    let value = ipAdreses_1.validateIp('260.0.0.0');
    expect(value).toBe(false);
});
test('check 10.10.10.-0 ip adress', () => {
    let value = ipAdreses_1.validateIp('10.10.10.-0');
    expect(value).toBe(false);
});
test('check 10.10.10.0 ip adress', () => {
    let value = ipAdreses_1.validateIp('10.10.10.0');
    expect(value).toBe(true);
});
test('check 10.10.10.-0. ip adress', () => {
    let value = ipAdreses_1.validateIp('10.10.10.-0.');
    expect(value).toBe(false);
});
test('check 10.10..-0 ip adress', () => {
    let value = ipAdreses_1.validateIp('10.10..-0');
    expect(value).toBe(false);
});
test('check 1.10.4.0 ip adress', () => {
    let value = ipAdreses_1.validateIp('1.10.4.0');
    expect(value).toBe(true);
});
test('check 255.255.255.255 ip adress', () => {
    let value = ipAdreses_1.validateIp('255.255.255.255');
    expect(value).toBe(true);
});
test('check 255.255.255.-1 ip adress', () => {
    let value = ipAdreses_1.validateIp('255.255.255.-1');
    expect(value).toBe(false);
});
test('check a.b.c.d ip adress', () => {
    let value = ipAdreses_1.validateIp('a.b.c.d');
    expect(value).toBe(false);
});
test('check 17.255.0.0 ip adress', () => {
    let value = ipAdreses_1.validateIp('17.255.0.0');
    expect(value).toBe(true);
});
test('check .... ip adress', () => {
    let value = ipAdreses_1.validateIp('....');
    expect(value).toBe(false);
});
test('check empty ip adress', () => {
    let value = ipAdreses_1.validateIp('');
    expect(value).toBe(false);
});
test('check 01.1.1.1 ip adress', () => {
    let value = ipAdreses_1.validateIp('01.1.1.1');
    expect(value).toBe(false);
});
test('check 101.001.1.1 ip adress', () => {
    let value = ipAdreses_1.validateIp('101.001.1.1');
    expect(value).toBe(false);
});
