const axios = require("axios");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );

    res.status(200).json(response.data);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// GET SINGLE PRODUCT
const getProductById = async (req, res) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${req.params.id}`
    );

    res.status(200).json(response.data);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

// CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
      }
    );

    res.status(201).json({
      message: "Product created successfully",
      data: response.data,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const response = await axios.put(
      `https://fakestoreapi.com/products/${req.params.id}`,
      {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
      }
    );

    res.status(200).json({
      message: "Product updated successfully",
      data: response.data,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${req.params.id}`
    );

    res.status(200).json({
      message: "Product deleted successfully",
      data: response.data,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};