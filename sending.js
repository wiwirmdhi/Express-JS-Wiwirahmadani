const db = require("./db");

async function seedData() {
  try {
    // Seed 5 data ke dalam tabel actor
    const actors = [
      { first_name: "Wiwi", last_name: "Rahmadani" },
      { first_name: "Wahyu", last_name: "Rahmadana" },
      { first_name: "Iqbal", last_name: "Rahmadan" },
      { first_name: "Zakky", last_name: "Mubarak" },
      { first_name: "Wafiq", last_name: "Azizah" },

      // Tambahkan data
    ];

    await db.none("INSERT INTO actor(first_name, last_name) VALUES($1, $2)", [
      actors[0].first_name,
      actors[0].last_name,
    ]);

    await db.none("INSERT INTO actor(first_name, last_name) VALUES($1, $2)", [
      actors[1].first_name,
      actors[1].last_name,
    ]);

    await db.none("INSERT INTO actor(first_name, last_name) VALUES($1, $2)", [
      actors[2].first_name,
      actors[2].last_name,
    ]);

    await db.none("INSERT INTO actor(first_name, last_name) VALUES($1, $2)", [
      actors[3].first_name,
      actors[3].last_name,
    ]);

    await db.none("INSERT INTO actor(first_name, last_name) VALUES($1, $2)", [
      actors[4].first_name,
      actors[4].last_name,
    ]);

    // Periksa
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    db.$pool.end();
  }
}

seedData();
