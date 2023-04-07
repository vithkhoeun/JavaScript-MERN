import logo from './logo.svg';
import './App.css';
import Fairy from './components.jsx/Fairy';

function App() {
  return (
    <div className="App">
      <h1>Cupid's Matching Stats</h1>
      <Fairy fairyName={"Greg"} fairyColor={"Blue"} fairyBowType={"Crossbow"} fairyMatches={20}/>
      <Fairy fairyName={"Gray"} fairyColor={"Purple"} fairyBowType={"Compound"} fairyMatches={7}/>
      <Fairy fairyName={"Kat"} fairyColor={"Green"} fairyBowType={"Recurve"} fairyMatches={100}/>
    </div>
  );
}

export default App;
