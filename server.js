const express = require("express");
const PORT = process.env.PORT || 3001;
const { notes } =require('./db/db.json')
const app = express();

//adding express middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


function findbyId(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

app.get("/api/notes:id", (req, res) => {
  const result = findbyId(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

function createNewAnimal(body, notesArray) {
  const animal = body;
  notesArray.push(animal);
  //wriying the info to the db
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  //return finished code to post to route

  return note;
}

app.post("./api/notes", (req, res) => {
  req.body.id = notes.length.toString();
  console.log(req.body);

  const note = createNewAnimal(req.body, notes);
  res.json(req.body);
});



//default response to user for requets not found

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
