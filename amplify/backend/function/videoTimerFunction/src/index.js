const axios = require("axios");
const moment = require("moment");



exports.handler =  async function(event, context) {
  let updatedAt = event.source.updatedAt
  let duration = event.source.duration
  let updatedAtDateTime = new Date(updatedAt)
  let currentTime = new Date();
  console.log(event)
  console.log(typeof currentTime);
  let diff = Math.abs(updatedAtDateTime - currentTime)/1000
  let diffSecs = Math.floor(diff)
  console.log(diffSecs)

  if (diffSecs > duration){
    return null
  }
  return diffSecs
  }
