const express = require("express");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.send("Welcome");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
