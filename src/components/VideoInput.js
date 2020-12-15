import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import { updateSpotlightVideo as updateSpotlightVideoMutation } from '../graphql/mutations';
const axios = require("axios");
const { duration } = require("moment");
const moment = require("moment");



function VideoInput(props){
    const initialFormState = { name: '', videoId: '', id:props.id, duration:'' }
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
      if (formData.duration){
        console.log(formData.duration)
        API.graphql({ query: updateSpotlightVideoMutation, variables: { input: formData } });
        setFormData(initialFormState);
      }
      return () => {
      }
    }, [formData]);

    async function addVideo() {
        if (!formData.name || !formData.videoId) return;
        formData.id = props.id
        await getDuration(formData.videoId)
       // await API.graphql({ query: updateSpotlightVideoMutation, variables: { input: formData } });
       // setFormData(initialFormState);
      }

    async function getDuration(videoId){
      let ytURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&part=snippet&key=AIzaSyCQM-OHSTDBvHSBqSNdBS5QgbSKYOr_B9o`
      console.log(ytURL)
      axios
        .get(ytURL)
        .then(function (response) {
          console.log(response)
          var durationSecs = moment.duration(response.data.items[0].contentDetails.duration).asSeconds()
          console.log(durationSecs)
          console.log(formData)
          setFormData({...formData, 'duration':durationSecs})
        })
    }

    return (
        <div className="App">
          <h1>Change the video for others to enjoy!</h1>
          <input
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            placeholder="Video name"
            value={formData.name}
          />
          <input
            onChange={e => setFormData({ ...formData, 'videoId': e.target.value})}
            placeholder="Video Id"
            value={formData.videoId}
          />
          <button onClick={addVideo}>Add Video</button>
        </div>
      );

}

export default VideoInput