const express = require("express");
const path = require("path");
 const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();

const PORT = process.env.PORT || 3000;
//adding express middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)


//default response to user for requets not found

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
