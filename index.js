const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Testing</h1>");
});

app.listen(`${process.env.PORT}`, (req, res) => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
