const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/v1/products", require("./routes/productsRouter"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
