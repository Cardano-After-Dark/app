import { Command } from "./Command";

export class HiCommand implements Command {
  run(): void {
    console.log(`Welcome to we CLI!`);
  }
}