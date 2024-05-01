const express = require("express");
const handlers = require("./handlers.js");

const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('public'));

app.get("/", (req, res) => {
  res.render("layouts/index");
});

app.use(handlers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
