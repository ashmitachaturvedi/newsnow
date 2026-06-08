const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    image: String,

    url: {
      type: String,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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