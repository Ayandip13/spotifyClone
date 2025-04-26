const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;
const cors = require("cors");
// app.use(cors());
app.use(
  cors({
    origin: "*", // or specify your React Native app's origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
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

const User = require("./models/user.model.js");
const Post = require("./models/post.model.js");

//endpoint to register a user into the backend

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    //create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    //generate and store verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the user to the database
    await newUser.save();

    //send the verification email to the user
    sendverificationEmail(newUser.email, newUser.verificationToken);

    res.status(200).json({
      message:
        "Registration successfull, Please check your email for verification",
    });
  } catch (error) {
    console.log("Error registering the user", error);
    res.status(500).json({ message: "Error registering the user" });
  }
});

const sendverificationEmail = async (email, verificationToken) => {
  //create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ayandippaul284@gmail.com",
      pass: "iosc bfzi yluk qusc",
    },
  });

  //compose the email message

  const mailOptions = {
    from: "threads.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify the email http://192.168.0.103:3000/verify/${verificationToken}`,
  };

  //now send the email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error sending the email", error);
  }
};

//Now we need to define the endpoint, that if the user press on the link then we need to verify the user
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token; //this is how we are getting the token
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(404).json({ message: "Invalid Token" });
    }

    user.verified = true; //cause the `verified` was false in default case and we'll marked as true after user click on that link
    user.verificationToken = undefined; //because we don't need that anymore
    await user.save();

    res.status(200).json({ message: "Email verification successfull" });
  } catch (error) {
    console.log("Error getting the token", error);
    res.status(500).json({ message: "Email verification failed" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    // check password
    if (user.password !== password) {
      console.log("Passwords DO NOT MATCH!"); // Add this
      return res.status(401).json({ message: "Invalid password" });
    }

    // optional: check if user is verified
    if (!user.verified) {
      return res
        .status(403)
        .json({ message: "Please verify your email first" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
    res.status(200).json({ token });
  } catch (error) {
    console.log("Detailed login error:", error.message, error.stack);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
});
