const request = require("request");

const keys = require("./key.js");
// const weatherURL = `https://api.darksky.net/forecast/${keys.weather}/${cityLat},${cityLng}`;
const mapsURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/houston.json?access_token=${keys.maps}&limit=1`;

let cityLat;
let cityLng;
let cityName;

request({ url: mapsURL, json: true }, (error, response) => {
  if (error) {
    console.log("there was a problem contacting the geolocation API");
  } else if (response.body.error || response.body.features.length === 0) {
    console.log("bad input, couldn't find that location");
    return;
  } else {
    console.log(response.body.features[0].geometry.coordinates);
    cityLat = response.body.features[0].geometry.coordinates[1];
    cityLng = response.body.features[0].geometry.coordinates[0];
    cityName = response.body.features[0].place_name;

    request(
      {
        url: `https://api.darksky.net/forecast/${keys.weather}/${cityLat},${cityLng}`,
        json: true
      },
      (error, response) => {
        if (error) {
          console.log("error communicating with DarkSky API");
        } else {
          console.log(
            cityName +
              ". " +
              response.body.daily.data[0].summary +
              " The temp is: " +
              response.body.currently.temperature +
              " degrees, with a " +
              response.body.currently.precipProbability +
              "% chance of rain."
          );
        }
      }
    );
  }
});
