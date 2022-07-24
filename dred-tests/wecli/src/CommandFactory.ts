import { Command } from "./commands/Command";
import { ErrorCommand } from "./commands/ErrorCommand";
import { HelpCommand } from "./commands/HelpCommand";
import { HiCommand } from "./commands/HiCommand";
import { StatusCommand } from "./commands/StatusCommand";

export class CommandFactory {
    getCommand(commandName: string): Command {
        switch (commandName) {
            case "hi":
                return new HiCommand();
            case "status":
                return new StatusCommand();
            case "help":
                return new HelpCommand();
            default:
                return new ErrorCommand();
        }
    }
}