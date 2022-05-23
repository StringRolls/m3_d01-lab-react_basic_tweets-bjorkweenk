import "./App.css";
import Tweet from './components/Tweet';


function App() {
  return (
    <div className="App">
      <Tweet tweet={ tweetsArray [0]} {props.profile} {props.timestamp} />
    </div>
  );
}

export default App;
