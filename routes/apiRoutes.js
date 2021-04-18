const { notes } = require("../db/db.json");
const router = require("express").Router();
var shortid = require('shortid');

const { findbyId, createNewNote, validateNote } = require("../db/records");


router.get("/notes", (req, res) => {
  let results = notes;
  // Read the db.json file and return all saved notes as JSON.
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = shortid.generate(); //notes.length.toString();
  //console.log(req.body.id);
  if (!validateNote(req.body)) {
    res.status(400).send("Each note needs a title and text.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
  //console.log(notes)
});

router.get("/notes:id", (req, res) => {
  const result = findbyId(req.params.id, notes);
  if (result) {
    console.log(result);
    res.json(result);
  } else {
    res.send(404);
  }
});


module.exports = router;
