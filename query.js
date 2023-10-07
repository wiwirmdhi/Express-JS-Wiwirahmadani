const db = require("./db"); // Import modul koneksi database

module.exports = {
  getAllFilms: async () => {
    try {
      const films = await db.any("SELECT * FROM film");
      return films;
    } catch (error) {
      throw error;
    }
  },

  getFilmById: async (filmId) => {
    try {
      const film = await db.oneOrNone(
        "SELECT * FROM film WHERE film_id = $1",
        filmId
      );
      return film;
    } catch (error) {
      throw error;
    }
  },

  getAllCategories: async () => {
    try {
      const categories = await db.any("SELECT * FROM category");
      return categories;
    } catch (error) {
      throw error;
    }
  },

  getFilmsByCategory: async (categoryId) => {
    try {
      const films = await db.any(
        "SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_category WHERE category_id = $1)",
        categoryId
      );
      return films;
    } catch (error) {
      throw error;
    }
  },
};
