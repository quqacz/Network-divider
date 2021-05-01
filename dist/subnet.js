"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divadeNetwork = exports.calculateBroadcastAddress = exports.calculateNetworkAddress = void 0;
const networkMask_1 = require("./networkMask");
const ipAdreses_1 = require("./ipAdreses");
function calculateNetworkAddress(ip, mask) {
    if (!networkMask_1.validateMask(mask) || !ipAdreses_1.validateIp(ip))
        return 'error';
    const parsedIp = ip.split('.');
    const jumps = networkMask_1.getDivisions(mask);
    const block = networkMask_1.getDivisionBlock(mask);
    let address = 0;
    while (true) {
        if (address <= parseInt(parsedIp[block]) && (address + jumps) > parseInt(parsedIp[block])) {
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
        address += jumps;
    }
}
exports.calculateNetworkAddress = calculateNetworkAddress;
function calculateBroadcastAddress(ip, mask) {
    if (!networkMask_1.validateMask(mask) || !ipAdreses_1.validateIp(ip))
        return 'error';
    const parsedIp = ip.split('.');
    const jumps = networkMask_1.getDivisions(mask);
    const block = networkMask_1.getDivisionBlock(mask);
    let address = 0;
    while (true) {
        if (address < parseInt(parsedIp[block]) && (address + jumps) >= parseInt(parsedIp[block])) {
            let networkAdderss = '';
            for (let i = 0; i < parsedIp.length; i++) {
                if (i < block) {
                    networkAdderss += parsedIp[i] + '.';
                }
                else if (i === block) {
                    networkAdderss += (address + jumps - 1) + '.';
                }
                else {
                    networkAdderss += '255.';
                }
            }
            return networkAdderss.substring(0, networkAdderss.length - 1);
        }
        address += jumps;
    }
}
exports.calculateBroadcastAddress = calculateBroadcastAddress;
function divadeNetwork(ip, mask, ...addressecCount) {
    if (!ipAdreses_1.validateIp(ip) || !networkMask_1.validateMask(mask)) {
        return 'Network mask or IP adress error';
    }
    const count = addressecCount.reduce((total, addresses) => { return total += addresses; }, 0);
    if (!networkMask_1.validateHostsCount(mask, count)) {
        return 'To many hosts for that subnet mask';
    }
    let dividedNetwork = [];
    let currentIp = ip, netMask, network, broadcast;
    addressecCount.sort(function (a, b) { return b - a; });
    for (let i = 0; i < addressecCount.length; i++) {
    }
    return 'good';
}
exports.divadeNetwork = divadeNetwork;
