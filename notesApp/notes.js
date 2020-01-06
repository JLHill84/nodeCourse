const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return "My notes, friend";
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const dupeNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (dupeNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.greenBright("added a fresh note"));
  } else {
    console.log("note with that title already exists");
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const notesArr = notes.filter(function(note) {
    return note.title !== title;
  });
  if (notes.length > notesArr.length) {
    saveNotes(notesArr);
    console.log(chalk.greenBright("note removed"));
  } else {
    console.log(chalk.redBright("no note found with that title"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
