require("dotenv").config();
const Movie = require("../models/movieModel");
const asyncHandler = require("express-async-handler");

// #######################
// #######################
// #######################

const addMovie = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add The Required Fields");
  }

  const {
    title,
    genere,
    director,
    writer,
    actors,
    language,
    award,
    production,
    poster,
  } = req.body;

  const movie = await Movie.create({
    title,
    genere,
    director,
    writer,
    actors,
    language,
    award,
    production,
    poster,
  });

  return res.status(201).json(movie);
});

// #######################
// #######################
// #######################

const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(400);
    throw new Error("Movie Not Found");
  }

  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedMovie);
});

module.exports = {
  addMovie,
  updateMovie,
};
