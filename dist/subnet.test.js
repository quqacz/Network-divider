"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subnet_1 = require("./subnet");
test('adres: 10.10.10.10, maska: 255.255.255.0', () => {
    const resoult = subnet_1.calculateNetworkAddress('10.10.10.10', '255.255.255.0');
    expect(resoult).toBe('10.10.10.0');
});
