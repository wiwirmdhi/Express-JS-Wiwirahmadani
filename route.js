const db = require("./db");

module.exports = {
  getAllFilms: async (req, res) => {
    try {
      const films = await db.any("SELECT * FROM film");
      res.json(films);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan" });
    }
  },

  getFilmById: async (req, res) => {
    const { id } = req.params;
    try {
      const film = await db.oneOrNone(
        "SELECT * FROM film WHERE film_id = $1",
        id
      );
      if (film) {
        res.json(film);
      } else {
        res.status(404).json({ error: "Film tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan" });
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await db.any("SELECT * FROM category");
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan" });
    }
  },

  getFilmsByCategory: async (req, res) => {
    const { categoryId } = req.params;
    try {
      const films = await db.any(
        "SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_category WHERE category_id = $1)",
        categoryId
      );
      res.json(films);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan" });
    }
  },
};
