const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const dupeNote = notes.find(note => note.title === title);

  if (!dupeNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);

    // hot dog that's alotta power
    debugger;

    console.log(chalk.greenBright("added a fresh note"));
  } else {
    console.log(chalk.redBright("note with that title already exists"));
  }
};

const saveNotes = notes => {
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

const removeNote = title => {
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.greenBright("your saved notes"));

  notes.forEach(note => {
    console.log(chalk.yellowBright(note.title));
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.yellowBright(note.body));
  } else {
    console.log(chalk.redBright("no note with that title"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
