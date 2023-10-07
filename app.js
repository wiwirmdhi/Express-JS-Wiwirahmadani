const express = require('express');
const sequelize = require('./db');
const Actor = require('./models/Actor');

const app = express();

// Middleware untuk mengizinkan parsing JSON
app.use(express.json());

// Routes
app.get('/films', async (req, res) => {
  // Tampilkan data seluruh list film
  // Implementasi query sesuai kebutuhan
});

app.get('/films/:id', async (req, res) => {
  const filmId = req.params.id;
  // Tampilkan data film tertentu berdasarkan id
  // Implementasi query sesuai kebutuhan
});

app.get('/categories', async (req, res) => {
  // Tampilkan data list category
  // Implementasi query sesuai kebutuhan
});

app.get('/films/category/:category', async (req, res) => {
  const category = req.params.category;
  // Tampilkan data list film berdasarkan category
  // Implementasi query sesuai kebutuhan
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server berjalan di port ${PORT}`);
  await sequelize.authenticate();
  console.log('Terhubung ke database MySQL');
});
