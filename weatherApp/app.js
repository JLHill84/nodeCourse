const request = require("request");

const key = require("./key.js");
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233`;

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.daily.data[0].summary +
      " The temp is: " +
      response.body.currently.temperature +
      " degrees, with a " +
      response.body.currently.precipProbability +
      "% chance of rain."
  );
});
