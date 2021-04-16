const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//adding express middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello ",
  });
});

//default response to user for requets not found

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
