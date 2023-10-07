const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Query untuk menampilkan data
const query = require("./query");

// Routing untuk menampilkan data
const route = require("./route");

app.get("/films", route.getAllFilms);
app.get("/films/:id", route.getFilmById);
app.get("/categories", route.getAllCategories);
app.get("/films/category/:categoryId", route.getFilmsByCategory);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
