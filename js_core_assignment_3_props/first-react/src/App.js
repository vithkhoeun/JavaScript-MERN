import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Robinson"}
        firstName={"Joel"}
        age={53}
        hair={"Dark Brown"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"JOhn"}
        age={88}
        hair={"Brown"}
      />
      <PersonCard
        lastName={"Fillmore"}
        firstName={"Milard"}
        age={50}
        hair={"Brown"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"Maria"}
        age={62}
        hair={" Brown"}
      />
    </div>
  );
}

export default App;
