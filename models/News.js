const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    exerpt: { type: String, required: true },
    author: { type: String, default: "Anonymous" },
    image: { type: String }, // URL for an image
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
