const axios = require("axios");
const { duration } = require("moment");
const moment = require("moment");

exports.handler = function(event, _, callback) {
  let vidId = event.source.videoId;
  let ytURL = `https://www.googleapis.com/youtube/v3/videos?id=${vidId}&part=contentDetails&part=snippet&key=AIzaSyCQM-OHSTDBvHSBqSNdBS5QgbSKYOr_B9o`

  console.log("videoAdded function triggerred")

  console.log(event);

    axios
    .get(ytURL)
    .then(function (response) {
      var durationSecs = moment.duration(response.data.items[0].contentDetails.duration).asSeconds();
      console.log("seconds calculated = " + durationSecs)
      callback(null, 3)
    })
    .catch(err => callback(err));
};