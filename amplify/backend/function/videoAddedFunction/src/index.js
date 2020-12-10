const axios = require("axios");
const moment = require("moment");

exports.handler = function(event, _, callback) {
  let apiUrl = `http://numbersapi.com/`;
  let day = moment().format("D");
  let month = moment().format("M");
  let factOfTheDay = apiUrl + month + "/" + day;

  console.log("Got an Invoke Request.");
  console.log(event);

  axios
    .get(factOfTheDay)
    .then(response => callback(null, response.data))
    .catch(err => callback(err));
};