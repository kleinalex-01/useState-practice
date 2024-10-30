import logo from './logo.svg';
import './App.css';
import Jokes from './Components/Jokes';

function App() {
  return (
    <>
    <Jokes setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it." />
    <Jokes setup="Why do fathers take an extra pair of socks when they go golfing?" punchline="In case they get a hole in one!" />
    <Jokes setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus." />
    </>
  );
}

export default App;
