const fs = require("fs");

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
    console.log("added a fresh note");
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
