const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// making some paths
const pubDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// handlebars, views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// which directory for static? you know
app.use(express.static(pubDirPath));

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
    name: "Joshua Hill",
    message: "Let's see if this is working as intended."
  });
});

app.get("/weather", (req, res) => {
  res.send([{ forecast: "weather page", location: "all the weather" }]);
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: '404: Help Section',
    name: "Joshua Hill",
    message: "Couldn't find your help docs"
  });
});

app.get("*", (req, res) => {
  res.render('404', {
    title: '404',
    name: "Joshua Hill",
    message: "ERROR...ERROR"
  })
});

app.listen(3000, () => {
  console.log("server running on 3k");
});
