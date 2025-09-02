const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// const PORT = process.env.PORT || 3000;
app.get("/", async (req, res) => {
  res.json("welcome to my app");
});
