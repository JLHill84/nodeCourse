const yargs = require("yargs");
const chalk = require("chalk");

const getNotes = require("./notes");

// expirment with version changing
yargs.version("1.1.0");

// adding various commands: add, remove, list, read

yargs.command({
  command: "add",
  describe: "add a new note",
  handler: () => {
    console.log("add a new note");
  }
});

yargs.command({
  command: "remove",
  describe: "delete a note",
  handler: () => {
    console.log(chalk.red("deleting note"));
  }
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: () => {
    console.log(chalk.blue("show me the notes"));
  }
});

yargs.command({
  command: "read",
  describe: "read a specific note",
  handler: () => {
    console.log(chalk.blue("read your note bud"));
  }
});
