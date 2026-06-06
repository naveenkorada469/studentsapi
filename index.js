const express = require("express");
const cors = require("cors");
const axios = require("axios");
const productRouter = require("./routes/productRouter");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const connectDb = require("./config/db");

const userRouter = require("./routes/productRouter");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/products", productRouter);

// Database Connection
connectDb();

// Routes
app.use("/", userRouter);

// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Backend Server Running</h1>");
});
// API Routes
app.use("/api", userRouter);


// Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});