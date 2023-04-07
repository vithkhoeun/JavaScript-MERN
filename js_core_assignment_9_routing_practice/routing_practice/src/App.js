import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:word" element={<ParamsComponent/>} />
        <Route exact path="/:word/:color/:backgroundColor" element={<ParamsComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
