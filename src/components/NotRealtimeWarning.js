import '../App.css';


function NotRealTimeWarning(props) {

  return (
    <div className="hr">
      <div className="alert">
        <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Not real time!</strong> Refresh to watch in real time
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </div>
  );
}


export default NotRealTimeWarning