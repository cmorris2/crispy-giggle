import '../App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateSpotlightVideo } from '../graphql/subscriptions';


function RealtimeButton(props) {

  return (
    <div className="hr">
      <div className="alert">
        <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </div>
  );
}


export default RealtimeButton