const express = require('express');
const fs= require('fs');
const path = require('path')
const app = express();


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});