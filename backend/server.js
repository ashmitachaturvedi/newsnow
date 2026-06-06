const express = require("express");
const cors = require("cors");
const axios = require("axios");
const connectDB = require("./config/db");
const Bookmark = require("./model/Bookmark");
const Parser = require("rss-parser");
const parser = new Parser();

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.get("/api/rss-news", async (req, res) => {
  try {
    const feed = await parser.parseURL(
      "https://feeds.bbci.co.uk/news/rss.xml"
    );

    const articles = feed.items.map((item) => ({
      title: item.title,
      description: item.contentSnippet,
      url: item.link,
      image: null,
    }));

    res.json({
      articles,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/api/bookmarks", async (req, res) => {
  try {
    const bookmark = await Bookmark.create(req.body);

    res.status(201).json(bookmark);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/bookmarks", async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();

    res.json(bookmarks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/api/bookmarks/:id", async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);

    res.json({
      message: "Bookmark deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const API_KEY = process.env.GNEWS_API_KEY;

app.get("/api/top-news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch news" });
  }
});

app.get("/api/india", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch India news" });
  }
});

app.get("/api/world", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch world news" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.q;

    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to search news" });
  }
});

app.get("/api/upsc", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=UPSC&lang=en&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch UPSC news" });
  }
});

app.get("/api/nta", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=NTA OR JEE OR NEET&lang=en&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch NTA news" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});