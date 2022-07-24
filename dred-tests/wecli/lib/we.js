"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommandFactory_1 = require("./CommandFactory");
const readline = __importStar(require("readline"));
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
clear();
console.log(chalk.red(figlet.textSync('we', { horizontalLayout: 'full' })));
const args = process.argv;
const userArgs = args.slice(2);
// log all CLI arguments
console.log(userArgs);
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Do you want to listen or send a message? [l/s]', (ans) => {
    switch (ans.toLowerCase()) {
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
}
else {
    const factoryObject = new CommandFactory_1.CommandFactory();
    const commandObject = factoryObject.getCommand(userArgs[0]);
    commandObject.run();
}
