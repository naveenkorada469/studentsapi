const express = require("express");

const app = express();

const productRoutes = require("./routes/productRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/products", productRoutes);

// PORT
const PORT = process.env.PORT || 5000;

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});