const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    url: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Bookmark",
  bookmarkSchema
);