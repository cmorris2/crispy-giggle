import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../graphql/mutations';
import { updateSpotlightVideo as updateSpotlightVideoMutation} from '../graphql/mutations';
import { listSpotlightVideos } from '../graphql/queries';
import { createSpotlightVideo as createSpotlightVideoMutation } from '../graphql/mutations';

const initialSpotlightVideo = { name: '', description: '', id: '', beginAt:'45' }
const initialFormState = { videoId: '', name: '' }

function MediaPlayer(props) {
  const [spotlightVideo, setSpotlightVideo] = useState(initialSpotlightVideo)
  const [formData, setFormData] = useState(initialFormState);

  var beginAt = "start=" + spotlightVideo.beginAt
  var url = "http://www.youtube.com/embed/5WU7oGiwiao?enablejsapi=1&origin=http://example.com&autoplay=1&autoplay='1'&mute=1&" + beginAt

  useEffect(() => {
    fetchSpotlightVideo();  
  }, []);

  //  async function updateSpotlightVideo() {
  //    if (!formData.name || !formData.videoId) return;
  //    console.log(spotlightVideo)
  //    await API.graphql({ query: updateSpotlightVideoMutation, variables: { input: formData } });
  //    setSpotlightVideo([ ...spotlightVideo, formData ]);
  //    setFormData(initialFormState);
  //  }

  async function createSpotlightVideo() {
    if (!formData.name || !formData.videoId) return;
    console.log(spotlightVideo)
  //  await API.graphql({ query: createSpotlightVideoMutation, variables: { input: formData } });
  //  setSpotlightVideo([ ...spotlightVideo, formData ]);
    setFormData(initialFormState);
  }

  async function fetchSpotlightVideo() {
    const apiData = await API.graphql({ query: listSpotlightVideos });
    console.log(apiData);
    setSpotlightVideo(apiData.data.listSpotlightVideos.items);
  }





  return (
    <div className="videoPlayer">
      <div id="videoID">
      <iframe id="player" type="text/html" width="640" height="390"
        src={url}
        frameborder="0" title="videoTitle"></iframe>
      </div>
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
      <button onClick={createSpotlightVideo}>Add video</button>
    </div>
  );
}

 // var beginAt = "start=" + props.beginAt
 // var url = "http://www.youtube.com/embed/5WU7oGiwiao?enablejsapi=1&origin=http://example.com&autoplay=1&autoplay='1'&mute=1&" + beginAt
 // console.log(url)
 // return (
 //   <div className="App">
 //     <div id="videoID">
 //     <iframe id="player" type="text/html" width="640" height="390"
 //       src={url}
 //       frameborder="0" title="videoTitle"></iframe>
  //    </div>
  //  </div>
  //);

export default MediaPlayer