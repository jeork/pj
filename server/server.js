const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Handle all other routes by serving the React app's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
