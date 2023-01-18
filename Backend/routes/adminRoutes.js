const express = require("express");
const router = express.Router();

const { addMovie, updateMovie } = require("../controller/adminController");

router.post("/", addMovie);
router.post("/update", updateMovie);

module.exports = router;
