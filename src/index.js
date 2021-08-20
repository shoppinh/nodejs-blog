const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname, "public")));

//Body middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//HTTP logger

app.use(morgan("combined"));
//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
//Tin tuc view
app.get("/tin-tuc", (req, res) => {
  res.render("news");
});
//Home view
app.get("/", (req, res) => {
  res.render("home");
});

//Search view
app.get("/search", (req, res) => {
  console.log(req.query);
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("");
});
app.listen(port, () => console.log(`Example app listen on ${port}`));
