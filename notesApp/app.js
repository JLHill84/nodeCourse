const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes.js");

yargs.version("1.2.2");

// making some commands: add, remove, read, and list

yargs.command({
  command: "add",
  describe: "add a note",
  handler: function() {
    console.log("note added");
  }
});

yargs.command({
  command: "remove",
  describe: "remove the note",
  handler: function() {
    console.log("removed the note");
  }
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function() {
    console.log("reading the note");
  }
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function() {
    console.log("listing all the notes");
  }
});

console.log(yargs.argv);
