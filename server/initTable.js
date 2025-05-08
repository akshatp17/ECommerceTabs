const pool = require("./db"); // this connects to the actual app DB

const ensureProductsTable = async () => {
  try {
    // Check if the table exists
    const result = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'products'
      );
    `);

    const exists = result.rows[0].exists;

    if (!exists) {
      console.log("Creating 'products' table...");

      await pool.query(`
        CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          price TEXT NOT NULL,
          image_url TEXT NOT NULL
        );
      `);

      console.log("'products' table created successfully.");
    } else {
      console.log("'products' table already exists.");
    }
  } catch (err) {
    console.error("Error ensuring products table:", err);
  }
};

module.exports = ensureProductsTable;
