import '../App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateSpotlightVideo } from '../graphql/subscriptions';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';



function Video(props) {

  console.log("rendering video component: ")
  console.log(props)

  return (
    <div className="videoPlayer">
      <YouTube 
        key={props.lastUpdate}
        videoId={props.videoId}
        id={props.lastUpdate}
        onPlay={props.onPlay}
        onPause={props.onPause}
        onReady={props.onReady}
        opts={{
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: props.autoplay,
            start: props.beginAt,
            mute: 1
          },
        }}
        />
    </div>
  );
}


export default Video