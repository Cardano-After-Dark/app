"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandFactory = void 0;
const ErrorCommand_1 = require("./commands/ErrorCommand");
const HelpCommand_1 = require("./commands/HelpCommand");
const HiCommand_1 = require("./commands/HiCommand");
const StatusCommand_1 = require("./commands/StatusCommand");
class CommandFactory {
    getCommand(commandName) {
        switch (commandName) {
            case "hi":
                return new HiCommand_1.HiCommand();
            case "status":
                return new StatusCommand_1.StatusCommand();
            case "help":
                return new HelpCommand_1.HelpCommand();
            default:
                return new ErrorCommand_1.ErrorCommand();
        }
    }
}
exports.CommandFactory = CommandFactory;
