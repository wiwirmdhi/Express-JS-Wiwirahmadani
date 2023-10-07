const db = require("./db");

async function migrateDatabase() {
  try {
    // Migrasi database
    await db.none("ALTER TABLE actor ADD COLUMN age INT");

    console.log("Database migrated successfully");
  } catch (error) {
    console.error("Error migrating database:", error);
  } finally {
    db.$pool.end();
  }
}

migrateDatabase();
