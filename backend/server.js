const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

const API_KEY = process.env.GNEWS_API_KEY;

app.get("/api/top-news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});