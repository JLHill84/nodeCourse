const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "add a note",
  handler: () => {
    console.log("adding that note");
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
