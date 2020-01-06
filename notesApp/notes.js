const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "My notes, friend";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const dupeNotes = notes.filter(note => {
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
    console.log(chalk.redBright("note with that title already exists"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesArr = notes.filter(note => {
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
