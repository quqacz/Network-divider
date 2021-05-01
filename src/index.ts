import {calculateNetworkAddress, calculateBroadcastAddress, divadeNetwork} from './subnet';
import {getNextIpAddress} from './ipAdreses';


console.log(divadeNetwork('10.10.0.0', '255.255.128.0', 300,17,8,12,127,142))
console.log(calculateBroadcastAddress('10.10.10.255', '255.128.0.0'));

console.log(getNextIpAddress('255.255.255.253'));
console.log('end');