import '../App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateSpotlightVideo } from '../graphql/subscriptions';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';



function Video(props) {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: props.beginAt
    },
  };

  return (
    <div className="videoPlayer">
      <YouTube 
        videoId={props.link} 
        opts={opts}
        onPause={props.onPause}/>
    </div>
  );
}


export default Video