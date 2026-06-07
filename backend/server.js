const express = require("express");
const cors = require("cors");
const axios = require("axios");
const connectDB = require("./config/db");
const Bookmark = require("./model/Bookmark");
const Parser = require("rss-parser");
const parser = new Parser();

require("dotenv").config();

const app = express();

const uniqueArticles = articles.filter(
  (article, index, self) =>
    index ===
    self.findIndex(
      (a) => a.url === article.url
    )
);

app.use(cors());
app.use(express.json());
const formatArticles = (items) => {
  return items.map((item) => ({
    title: item.title,
    description:
      item.contentSnippet ||
      item.content ||
      "No description available",
    url: item.link,
    image: item.enclosure?.url || null,
    pubDate: item.pubDate,
  }));
};
connectDB();

app.get("/api/rss-news", async (req, res) => {
  try {
    const bbc = await parser.parseURL(
      "https://feeds.bbci.co.uk/news/rss.xml"
    );

    const hindu = await parser.parseURL(
      "https://www.thehindu.com/news/feeder/default.rss"
    );

    const ndtv = await parser.parseURL(
      "https://feeds.feedburner.com/ndtvnews-top-stories"
    );

    const articles = [
      ...bbc.items,
      ...hindu.items,
      ...ndtv.items,
    ].map((item) => ({
      title: item.title,
      description:
        item.contentSnippet ||
        item.content ||
        "No description available",
      url: item.link,
      image: item.enclosure?.url || null,
      pubDate: item.pubDate,
    }));

    articles.sort(
      (a, b) =>
        new Date(b.pubDate) -
        new Date(a.pubDate)
    );

    res.json({
      articles,
    });
  } catch (error) {
    console.log(error);

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
    const hindu = await parser.parseURL(
      "https://www.thehindu.com/news/feeder/default.rss"
    );

    const ndtv = await parser.parseURL(
      "https://feeds.feedburner.com/ndtvnews-top-stories"
    );

    const articles = [
      ...formatArticles(hindu.items),
      ...formatArticles(ndtv.items),
    ];

    articles.sort(
      (a, b) =>
        new Date(b.pubDate) -
        new Date(a.pubDate)
    );

    res.json({
      articles: articles.slice(0, 50),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/world", async (req, res) => {
  try {
    const bbc = await parser.parseURL(
      "https://feeds.bbci.co.uk/news/world/rss.xml"
    );

    const articles = formatArticles(
      bbc.items
    );

    res.json({
      articles: articles.slice(0, 50),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();

    const bbc = await parser.parseURL(
      "https://feeds.bbci.co.uk/news/rss.xml"
    );

    const hindu = await parser.parseURL(
      "https://www.thehindu.com/news/feeder/default.rss"
    );

    const ndtv = await parser.parseURL(
      "https://feeds.feedburner.com/ndtvnews-top-stories"
    );

    const articles = [
      ...bbc.items,
      ...hindu.items,
      ...ndtv.items,
    ]
      .map((item) => ({
        title: item.title,
        description:
          item.contentSnippet ||
          item.content ||
          "No description available",
        url: item.link,
        image: item.enclosure?.url || null,
        pubDate: item.pubDate,
      }))
      .filter(
        (article) =>
          article.title
            ?.toLowerCase()
            .includes(query) ||
          article.description
            ?.toLowerCase()
            .includes(query)
      );

    res.json({
      articles,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/upsc", async (req, res) => {
  try {
    const bbc = await parser.parseURL(
      "https://feeds.bbci.co.uk/news/world/rss.xml"
    );

    const hindu = await parser.parseURL(
      "https://www.thehindu.com/news/feeder/default.rss"
    );

    const articles = [
      ...formatArticles(bbc.items),
      ...formatArticles(hindu.items),
    ];

    res.json({
      articles: articles.slice(0, 50),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/nta", async (req, res) => {
  try {
    const hindu = await parser.parseURL(
      "https://www.thehindu.com/education/feeder/default.rss"
    );

    const articles = formatArticles(
      hindu.items
    );

    res.json({
      articles: articles.slice(0, 50),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});