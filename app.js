const express = require("express");
const handlers = require("./handlers.js");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("layouts/index");
});
app.get("/home", (req, res) => {
  res.render("components/home");
});

app.use(handlers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
