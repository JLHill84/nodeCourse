const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/weather", (req, res) => {
  res.send([{ forecast: "weather page", location: "all the weather" }]);
});

app.listen(3000, () => {
  console.log("server running on 3k");
});
