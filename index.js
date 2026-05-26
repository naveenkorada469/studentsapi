const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
 const dns=require("dns");
 dns.setServers(["8.8.8.8","1.1.1.1"]);

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();


// MIDDLEWARE

app.use(cors());
app.use(express.json());


// HOME ROUTE

app.get("/", (req, res) => {

  res.send("API Running Successfully");

});


// AUTH ROUTES

app.use("/api/auth", authRoutes);


// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URL)

.then(() => {

  console.log("MongoDB Connected ✅");

  app.listen(process.env.PORT, () => {

    console.log(
      `Server Running On Port ${process.env.PORT}`
    );

  });

})

.catch((error) => {

  console.log("MongoDB Connection Error ❌");

  console.log(error);

});