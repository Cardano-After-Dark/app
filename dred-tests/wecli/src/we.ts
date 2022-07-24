import {CommandFactory} from "./CommandFactory"
import * as readline from 'readline';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(
    chalk.red(
        figlet.textSync('we', {horizontalLayout: 'full'})
    )
);

const args = process.argv;
const userArgs = args.slice(2);
// log all CLI arguments
console.log(userArgs);

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Do you want to listen or send a message? [l/s]', (ans) => {
    switch(ans.toLowerCase()){
        case 'l':
            console.log('Listen');
            break;
        case 's': 
            console.log('Send message');
            break;
        default:
            console.log('Invalid answer');
    }
    rl.close();
});

// the help guide
const helpGuide = function () {
    const helpText = `
      we is a friendly CLI!
      usage:
       we <command>
       commands can be:
       hi:       used to welcome to the user
       help:     used to print the usage guide
    `;
    console.log(helpText);
};
// if user doesn't enter any words (just types 'we')
if (userArgs.length == 0) {
    helpGuide();
} else {
    const factoryObject = new CommandFactory();
    const commandObject = factoryObject.getCommand(userArgs[0]);
    commandObject.run();
}