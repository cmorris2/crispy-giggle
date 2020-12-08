import '../App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateSpotlightVideo } from '../graphql/subscriptions';


function Video(props) {

  return (
    <div className="videoPlayer">
      <div id="videoID">
      <iframe key={props.link} id="player" type="text/html" width="640" height="390"
        src={props.link}
        frameborder="0" title="videoTitle"></iframe>
      </div>
    </div>
  );
}


export default Video