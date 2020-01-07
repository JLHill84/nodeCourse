const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast");

const searchName = process.argv[2];

if (!searchName) {
  console.log("provide search term");
} else {
  geocode(searchName, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.lat, data.lng, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.cityName);
      console.log(forecastData);
    });
  });
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// this was my solo attempt, and it worked fine but i went ahead and got back in synch
// with the course for continuity's sake

// const weatherURL = `https://api.darksky.net/forecast/${keys.weather}/${cityLat},${cityLng}`;
// const mapsURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(cityName)}.json?access_token=${keys.maps}&limit=1`;

// geocoding request top level, weather request nested since it relies on coords
// request({ url: mapsURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("there was a problem contacting the geolocation API");
//   } else if (response.body.error || response.body.features.length === 0) {
//     console.log("bad input, couldn't find that location");
//     return;
//   } else {
//     console.log(response.body.features[0].geometry.coordinates);
//     cityLat = response.body.features[0].geometry.coordinates[1];
//     cityLng = response.body.features[0].geometry.coordinates[0];
//     cityName = response.body.features[0].place_name;

//     request(
//       {
//         url: `https://api.darksky.net/forecast/${keys.weather}/${cityLat},${cityLng}`,
//         json: true
//       },
//       (error, response) => {
//         if (error) {
//           console.log("error communicating with DarkSky API");
//         } else {
//           console.log(
//             cityName +
//               ". " +
//               response.body.daily.data[0].summary +
//               " The temp is: " +
//               response.body.currently.temperature +
//               " degrees, with a " +
//               response.body.currently.precipProbability +
//               "% chance of rain."
//           );
//         }
//       }
//     );
//   }
// });
