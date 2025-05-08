const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const checkAndCreateDb = require("./initDB");
const ensureProductsTable = require("./initTable");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/v1/products", require("./routes/productsRouter"));

checkAndCreateDb().then(async () => {
  await ensureProductsTable(); // ensure table exists before app starts

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
