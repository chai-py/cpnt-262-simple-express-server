const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

//static files from the 'public' dir
app.use(express.static(path.join(__dirname, "public")));

// Define route for the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define route for the about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Define a 404 fallback route for any other paths
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});