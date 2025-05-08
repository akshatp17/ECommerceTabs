const pool = require("../db");

const postProduct = async (req, res) => {
  const { title, description, price, image_url } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO products (title, description, price, image_url)
         VALUES ($1, $2, $3, $4)
         RETURNING *;`,
      [title, description, price, image_url]
    );

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error("Error inserting product:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products;");
    res.status(200).json({ success: true, products: result.rows });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const getProducts = async (req, res) => {
  const { title } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE title ILIKE $1;",
      [`%${title}%`]
    );
    res.status(200).json({ success: true, products: result.rows });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = {
  postProduct,
  getAllProducts,
  getProducts,
};
