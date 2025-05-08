require("dotenv").config();
const { Pool } = require("pg");

const checkAndCreateDb = async () => {
  const tempPool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: "postgres", // connect to default system db
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  const dbName = process.env.DB_NAME;

  try {
    const res = await tempPool.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName]
    );

    if (res.rowCount === 0) {
      console.log(`Database "${dbName}" does not exist. Creating...`);
      await tempPool.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database "${dbName}" created successfully.`);
    } else {
      console.log(`Database "${dbName}" already exists.`);
    }
  } catch (err) {
    console.error("Error checking/creating database:", err);
  } finally {
    await tempPool.end();
  }
};

module.exports = checkAndCreateDb;
