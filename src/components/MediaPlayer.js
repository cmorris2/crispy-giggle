import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../graphql/mutations';
import { updateSpotlightVideo as updateSpotlightVideoMutation} from '../graphql/mutations';
import { listSpotlightVideos } from '../graphql/queries';
import { createSpotlightVideo as createSpotlightVideoMutation } from '../graphql/mutations';
import { onUpdateSpotlightVideo } from '../graphql/subscriptions';
import Video from './video'
import RealtimeIndicator from './RealtimeIndicator'
import YouTube from 'react-youtube';
import VideoInput from './VideoInput'

const initialSpotlightVideo = { name: '', description: '', id: '', beginAt:'', link:"" }
const initialStatus = "realtime"
const initialVideoSettings = {autoplay: 1, mute:1}
//realtime, notRealtime, noVideosPlaying

function MediaPlayer(props) {
  const [spotlightVideo, setSpotlightVideo] = useState(initialSpotlightVideo)
  const [status, setStatus] = useState(initialStatus)
  const [videoSettings, setVideoSettings] = useState(initialVideoSettings)
  
  //const [formData, setFormData] = useState(initialFormState);


   useEffect(() => {
    const subscription = API.graphql(
           graphqlOperation(onUpdateSpotlightVideo)
       ).subscribe({
           next: ({ provider, value }) => {
             console.log("subscription UPDATE!")
             console.log(value)
             setSpotlightVideo(value.data.onUpdateSpotlightVideo)
             setStatus("realtime")
             }  
   });

   fetchSpotlightVideo();

   return () => {
      subscription.unsubscribe();
   }
  
  }, []);

  //  async function updateSpotlightVideo() {
  //    if (!formData.name || !formData.videoId) return;
  //    console.log(spotlightVideo)
  //    await API.graphql({ query: updateSpotlightVideoMutation, variables: { input: formData } });
  //    setSpotlightVideo([ ...spotlightVideo, formData ]);
  //    setFormData(initialFormState);
  //  }

  // async function createSpotlightVideo() {
  //   if (!formData.name || !formData.videoId) return;
  //   console.log(spotlightVideo)
  // //  await API.graphql({ query: createSpotlightVideoMutation, variables: { input: formData } });
  // //  setSpotlightVideo([ ...spotlightVideo, formData ]);
  //   setFormData(initialFormState);
  // }

   async function fetchSpotlightVideo() {
     const apiData = await API.graphql({ query: listSpotlightVideos });
     console.log(apiData.data.listSpotlightVideos.items[0].link);
     setSpotlightVideo(apiData.data.listSpotlightVideos.items[0])
   }

   function updateRealtime(){
     console.log("you are not watching in real time")
     setStatus("notRealtime")
   }


   function _onReady(event) {
    // access to player in all event handlers via event.target
    console.log("READY!!!!!")
    console.log(event)
    let videoInfo = event.target.getVideoData();
    console.log(videoInfo)
  }

  function onPlay(event){
    console.log("on play triggered! Setting autoplay and mute")
    let asdf = event.target.getVideoData()
    console.log(asdf)
    setVideoSettings({autoplay: 1, mute:1})
  }

  function onPause(){
    //compare beginAt with time frame on video for accuracy
    console.log("Paused!")
    setStatus("notRealtime")
  }

  if (!spotlightVideo.beginAt && status !== "noVideosPlaying"){
    setStatus("noVideosPlaying")
  }

  return (
    <div className="videoPlayer">
      <RealtimeIndicator beginAt={spotlightVideo.beginAt}/>
      <Video 
        key={spotlightVideo.updatedAt}
        videoId={spotlightVideo.videoId}
        beginAt={spotlightVideo.beginAt}
        lastUpdate={spotlightVideo.updatedAt}
        onPlay={onPlay}
        onPause={onPause}
        onReady={_onReady}
        autoplay={videoSettings.autoplay}
        mute={videoSettings.mute}
        />
      <VideoInput 
        id={spotlightVideo.id}/>
    </div>
  );
}


export default MediaPlayer