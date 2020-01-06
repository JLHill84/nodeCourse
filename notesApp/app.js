const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes.js");

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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "remove the note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
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
  handler(argv) {
    console.log("note title: " + argv.title);
    console.log("note body: " + argv.body);
  }
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    console.log("listing all the notes");
  }
});

yargs.parse();
