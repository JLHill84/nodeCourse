const request = require("request");

const keys = require('./key');

const geocode = (cityName, callback) => {
  const mapsURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    cityName
  )}.json?access_token=${keys.maps}&limit=1`;

  request({ url: mapsURL, json: true }, (error, response) => {
    if (error) {
      callback("could not connect friend", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find that city, please try again", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        cityName: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
