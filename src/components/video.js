import '../App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateSpotlightVideo } from '../graphql/subscriptions';


function Video(props) {

  let link = "http://www.youtube.com/embed/" + props.link + "?enablejsapi=1&origin=https://dev.d1h2d6d3rovfin.amplifyapp.com&autoplay=1&autoplay='1'&mute=1&&start=" + props.beginAt
  console.log(link)

  return (
    <div className="videoPlayer">
      <div id="videoID">
      <iframe key={link} id="player" type="text/html" width="640" height="390"
        src={link}
        frameborder="0" title="videoTitle"></iframe>
      </div>
    </div>
  );
}


export default Video