const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    requred: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  reply: [
    {
      //There can be 'n' number of reply in a post, so every reply should have a user and what exactly the reply is
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      content: {
        type: String,
        requred: true,
      },
      cretedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  cretedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
