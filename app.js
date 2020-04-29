const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  geocode(address, (err, geocodeData) => {
    if (err) {
      return console.log(err);
    }

    forecast(
      geocodeData.latitude,
      geocodeData.longitude,
      (err, forecastData) => {
        if (err) {
          return console.log(err);
        }

        console.log(geocodeData);
        console.log(forecastData);
      }
    );
  });
}
