import '../App.css';


function NoVideosPlaying(props) {

  return (
    <div className="hr">
      <div className="alertLive">
        <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Nothing currently playing!</strong> Play a video for everyone to watch!
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </div>
  );
}


export default NoVideosPlaying