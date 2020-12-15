import '../App.css';


function RealTimeWarning(props) {

  return (
    <div className="hr">
      <div className="alertLive">
        <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Real time!</strong> You are watching in real time
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </div>
  );
}


export default RealTimeWarning