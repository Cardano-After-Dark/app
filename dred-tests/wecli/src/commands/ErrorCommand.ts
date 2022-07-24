import { Command } from "./Command";

export class ErrorCommand implements Command {
    run(): void {
        console.log(`Sorry! No keywords found. Please type 'Help' to see what I can help you with :)`);
    }
}