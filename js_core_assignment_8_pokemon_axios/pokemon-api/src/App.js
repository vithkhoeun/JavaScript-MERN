import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [pokeApiData, setpokeApiData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        console.log(response.data.results);
        setpokeApiData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <ul>
        {
          pokeApiData.map((pokemon, index)=>{
            return (<li key={index}>{pokemon.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;