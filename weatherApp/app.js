const request = require("request");

const url =
  "https://api.darksky.net/forecast/98af64341bc90d255fb89c5c421300c5/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  console.log(JSON.parse(response.body).currently);
});
