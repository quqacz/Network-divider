import {divadeNetwork, Network, printNetwork} from './subnet';


let net = divadeNetwork('10.10.0.0', '255.255.255.128', 16,8,4,2,2);
printNetwork(net);
console.log('end');