const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
    },

    genere: {
      type: [String],
    },

    director: {
      type: [String],
    },

    writer: {
      type: [String],
    },

    actors: {
      type: [String],
    },

    language: {
      type: [String],
    },

    award: {
      type: [String],
    },

    production: {
      type: [String],
    },

    poster: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
