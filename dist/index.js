"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subnet_1 = require("./subnet");
const ipAdreses_1 = require("./ipAdreses");
console.log(subnet_1.divadeNetwork('10.10.0.0', '255.255.128.0', 300, 17, 8, 12, 127, 142));
console.log(subnet_1.calculateBroadcastAddress('10.10.10.255', '255.128.0.0'));
console.log(ipAdreses_1.getNextIpAddress('255.255.255.253'));
console.log('end');
