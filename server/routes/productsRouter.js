const express = require("express");
const router = express.Router();

const {
  postProduct,
  getAllProducts,
  getProducts,
} = require("../controllers/productsController");

router.route("/").get(getAllProducts).post(postProduct);
router.route("/:keyword").get(getProducts);

module.exports = router;
