"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNetworkAddress = void 0;
const subnetMasks_1 = require("./subnetMasks");
const ipAdreses_1 = require("./ipAdreses");
function calculateNetworkAddress(ip, mask) {
    if (!subnetMasks_1.validateMask(mask) || !ipAdreses_1.validateIp(ip))
        return 'error';
    const parsedIp = ip.split('.');
    const jumps = subnetMasks_1.getDivisions(mask);
    const block = subnetMasks_1.getDivisionBlock(mask);
    let address = 0;
    while (true) {
        if (address <= parseInt(parsedIp[block]) && (address + jumps) > parseInt(parsedIp[block])) {
            break;
        }
        address += jumps;
    }
    let networkAdderss = '';
    for (let i = 0; i < parsedIp.length; i++) {
        if (i < block) {
            networkAdderss += parsedIp[i] + '.';
        }
        else if (i === block) {
            networkAdderss += address + '.';
        }
        else {
            networkAdderss += '0.';
        }
    }
    return networkAdderss.substring(0, networkAdderss.length - 1);
}
exports.calculateNetworkAddress = calculateNetworkAddress;
