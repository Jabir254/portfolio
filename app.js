const express = require("express");

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('layouts/main')
})

app.get('/404', (req, res) => {
  res.render("views/404")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
