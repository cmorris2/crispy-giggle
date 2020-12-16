const moment = require("moment");



exports.handler =  async function(event, context) {
  console.log("videoTimer function triggerred")
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
    //video is over
    return null
  }
  return diffSecs
  }
