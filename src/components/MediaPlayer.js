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

const initialSpotlightVideo = { name: '', description: '', id: '', beginAt:'', link:"" }
//const initialFormState = { videoId: '', name: '' }

function MediaPlayer(props) {
  const [spotlightVideo, setSpotlightVideo] = useState(initialSpotlightVideo)
  
  //const [formData, setFormData] = useState(initialFormState);


   useEffect(() => {
    const subscription = API.graphql(
           graphqlOperation(onUpdateSpotlightVideo)
       ).subscribe({
           next: ({ provider, value }) => {
             console.log("subscription UPDATE!")
             console.log(value.data.onUpdateSpotlightVideo)
             setSpotlightVideo(value.data.onUpdateSpotlightVideo)
             }  
   });

   fetchSpotlightVideo();

   return () => {
      console.log("unsubbing hopefully");
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


  //   const subscription = API.graphql(
  //     graphqlOperation(onUpdateSpotlightVideo)
  // ).subscribe({
  //     next: ({ provider, value }) => {
  //       console.log("subscription UPDATE!")
  //       console.log(value.data.onUpdateSpotlightVideo)
  //       }
  // });






  return (
    <div className="videoPlayer">
      <Video  link={spotlightVideo.link}/>
    </div>
  );
}


export default MediaPlayer