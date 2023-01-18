require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const user = require("./routes/userRoutes");
const admin = require("./routes/adminRoutes");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", user);
app.use("/api/v1/admin", admin);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, console.log(`app started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
