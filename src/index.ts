import {divadeNetwork, Network, printNetwork} from './subnet';
import * as inquirer from 'inquirer';

enum Commands {
    Ip = 'Insert ip address',
    Mask = 'Insert network mask',
    Add = 'Add network for hosts',
    Calculate = 'Calculate network division',
    Reset = 'Clear entered data',
    Show = 'Show divided Network',
    Quit = 'Quit'
}

type NetworkData = {
    ip: string,
    mask: string,
    hosts: number[]
}

let networkData: NetworkData = {
    ip: '',
    mask: '',
    hosts: []
}

let network: Network[] = [];

function displayNetworkData(){
    console.log(`Ip address: ${networkData.ip}; network mask: ${networkData.mask}`);
    for(let i = 0; i < networkData.hosts.length; i++){
        console.log(`   Network ${i}: ${networkData.hosts[i]}`);
    }
}

function promptAddIp(): void{
    console.clear();
    inquirer.prompt({type: 'input', name: 'addIp', message: 'Enter Ip address'})
        .then((ip)=> { if(ip['addIp'] !== '') networkData.ip = ip['addIp'];
        promptMenu();
    });
}
function promptAddMask(): void{
    console.clear();
    inquirer.prompt({type: 'input', name: 'addMask', message: 'Enter network mask'})
        .then(mask=> { if(mask['addMask'] !== '') networkData.mask = mask['addMask'];
        promptMenu();
    });
}

function promptAddHosts(): void{
    console.clear();
    inquirer.prompt({type: 'input', name: 'addHosts', message: 'Enter number of hosts in the network'})
        .then(hosts=> { if(hosts['addHosts'] > 0) networkData.hosts.push(hosts['addHosts'] as number); 
        promptMenu();
    });
}

function delay(){
    inquirer.prompt({type: 'input', name: 'delay', message: 'Press Enter to contoinue'})
        .then(del=> {
        promptMenu();
    });
}

function reset(){
    networkData.ip = '';
    networkData.mask = '';
    networkData.hosts.length = 0;
    network.length = 0;
    promptMenu();
}

function promptMenu(){
    console.clear();
    displayNetworkData();
    inquirer.prompt({
        type: 'list',
        name: 'commands',
        message: 'Chose options',
        choices: Object.values(Commands)
    }).then(answers=>{
        switch(answers['commands']){
            case Commands.Ip:
                promptAddIp();
                break;
            case Commands.Mask:
                promptAddMask();
                break;
            case Commands.Add:
                promptAddHosts()
                break;
            case Commands.Calculate:
                network = divadeNetwork(networkData.ip, networkData.mask, ...networkData.hosts);
                printNetwork(network);
                delay();
                break;
            case Commands.Show:
                printNetwork(network);
                delay();
                break;
            case Commands.Reset:
                reset();
                break;
        }
    })
}

promptMenu();