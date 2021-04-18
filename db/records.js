const fs = require("fs");
const path = require('path');
const {notes} = require("./db.json");

function createNewNote(body, notesArray) {
    const note = body;
    
    console.log(notesArray)
    console.log(note)
    notesArray.push(note);
    //wriying the info to the db
    fs.writeFileSync(
        path.join(__dirname, "./db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
        );
        //return finished code to post to route
        return console.log("A new note has been added: "+note.title);;
    }
    
function findbyId(id, notesArray) {
      const result = notesArray.filter((note) => note.id === id)[0];
      return result;
    }

function validateNote(note) {
  if (!note.title) {
    return false;
  }
  if (!note.text) {
    return false;
  }
  return true;
}

module.exports = { findbyId, createNewNote, validateNote };
