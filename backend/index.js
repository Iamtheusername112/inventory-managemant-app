const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // Assuming db/index.js is in the same directory as server.js

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3500;

// Connect to the database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
