const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost/blogdb")
  .then(() => console.log("connected"))
  .catch(() => console.log("Error"));

app.use(express.json());

// difference between call back and func() as parameter.
// TODO: return json and display somehting on browser
// if finished, create routes, models, contorllers folder &&
// start implementing blog entity.

const port = 5000;
app.listen(port, () => {
  console.log("listening");
});
