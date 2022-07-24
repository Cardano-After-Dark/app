"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCommand = void 0;
class HelpCommand {
    run() {
        const helpText = `
      we is a friendly CLI!
      usage:
       we <command>
       commands can be:
       hi:       used to welcome to the user
       help:     used to print the usage guide
     `;
        console.log(helpText);
    }
}
exports.HelpCommand = HelpCommand;
