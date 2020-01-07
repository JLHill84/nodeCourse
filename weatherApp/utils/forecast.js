const request = require("request");

const keys = require('./key');

const forecast = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/${keys.weather}/${lat},${lng}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (response.body.error) {
      callback("unable to find that city", undefined);
    } else {
      callback(
        undefined,
        console.log(
            response.body.daily.data[0].summary +
            " The temp is: " +
            response.body.currently.temperature +
            " degrees, with a " +
            response.body.currently.precipProbability +
            "% chance of rain."
        )
      );
    }
  });
};

module.exports = forecast;
