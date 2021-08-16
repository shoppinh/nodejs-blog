const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));
app.get("/tin-tuc", (req, res) => {
  var a = 3;
  return res.send("hello world");
});

app.listen(port, () => console.log(`Example app listen on ${port}`));
