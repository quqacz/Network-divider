"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIp = void 0;
function validateIp(ip) {
    const segments = ip.split('.');
    if (segments[0] === '0' || segments.length !== 4) {
        return false;
    }
    for (let i = 0; i < segments.length; i++) {
        if (segments[i] === '') {
            return false;
        }
        if (segments[i].length > 1 && segments[i][0] === '0')
            return false;
        if (!parseInt(segments[i]) && parseInt(segments[i]) !== 0) {
            return false;
        }
        if (parseInt(segments[i]) > 255)
            return false;
        if (segments[i] === '-0' || parseInt(segments[i]) < 0) {
            return false;
        }
    }
    return true;
}
exports.validateIp = validateIp;
