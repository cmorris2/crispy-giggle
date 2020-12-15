import '../App.css';
import NotRealtime from './NotRealtimeWarning'
import Realtime from './RealtimeWarning'
import NoVideosPlaying from './NoVideosPlaying'


function RealtimeIndicator(props) {

  console.log(props)
  if (!props.beginAt){
    return <NoVideosPlaying />
  }
  return <Realtime />
}


export default RealtimeIndicator