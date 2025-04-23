const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: ture,
  },
  email: {
    type: String,
    required: ture,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
  },
  joinedDate: {
    type: Date,
    default: Date.now,
  },
  sentFollowRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  recivedFollowRequest: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
});

const User = mongoose.models("User", userSchema);

module.exports = User;
