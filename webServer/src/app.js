const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Homepage",
    name: "Joshua Hill"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    name: "Joshua Hill"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    message: "Let's see if this is working as intended."
  });
});

app.get("/weather", (req, res) => {
  res.send([{ forecast: "weather page", location: "all the weather" }]);
});

app.listen(3000, () => {
  console.log("server running on 3k");
});
