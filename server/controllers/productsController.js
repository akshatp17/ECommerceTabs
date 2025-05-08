const pool = require("../db");

const postProduct = async (req, res) => {
  res.status(201).json({ message: "Product added successfully" });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "All products fetched successfully" });
};
const getProducts = async (req, res) => {
  res.status(200).json({ message: "Products fetched successfully" });
};

module.exports = {
  postProduct,
  getAllProducts,
  getProducts,
};
