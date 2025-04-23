const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://ayandippaul284:1XIAdgATGPxB59Uo@cluster0.7eg3i8i.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongodb connection established");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB", error);
  });

app.listen(PORT, () => {
  console.log("Server is runing on port", PORT);
});
