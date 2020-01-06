const request = require("request");

const keys = require("./key.js");
cityLat = 0.0;
cityLng = 0.0;
// const weatherURL = `https://api.darksky.net/forecast/${keys.weather}/${cityLat},${cityLng}`;
const mapsURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Sacramento.json?access_token=${keys.maps}&limit=1`;

request({ url: mapsURL, json: true }, (error, response) => {
  console.log(response.body.features[0].geometry.coordinates);
  cityLat = response.body.features[0].geometry.coordinates[1];
  cityLng = response.body.features[0].geometry.coordinates[0];
});

request(
  {
    url: `https://api.darksky.net/forecast/${keys.weather}/${cityLat},${cityLng}`,
    json: true
  },
  (error, response) => {
    console.log(
      response.body.daily.data[0].summary +
        " The temp is: " +
        response.body.currently.temperature +
        " degrees, with a " +
        response.body.currently.precipProbability +
        "% chance of rain."
    );
  }
);
