import logo from './logo.svg';
import './App.css';
import PersonCard from './components.jsx/PersonCard';

function App() {
  return (
    <div className="App">
      <h1> Person Card</h1>
      <PersonCard lastName={"Robinson"} firstName={"Joel"} age={53} hair={"Dark Brown"}/>
      <PersonCard lastName={"Smith"} firstName={"John"} age={88} hair={"Brown"}/>
      <PersonCard lastName={"Fillmore"} firstName={"Milard"} age={50} hair={"Brown"}/>
      <PersonCard lastName={"Smith"} firstName={"Maria"} age={62} hair={"Brown"}/>
    </div>
  );
}

export default App;
