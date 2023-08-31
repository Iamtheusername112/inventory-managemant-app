const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3500;

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
