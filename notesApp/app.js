const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes.js");

yargs.version("1.2.2");

// making some commands: add, remove, read, and list

yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe: "title of note",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("note title: " + argv.title);
    console.log("note body: " + argv.body);
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
  builder: {
    title: {
      describe: "title of note",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("note title: " + argv.title);
    console.log("note body: " + argv.body);
  }
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function() {
    console.log("listing all the notes");
  }
});

yargs.parse();
