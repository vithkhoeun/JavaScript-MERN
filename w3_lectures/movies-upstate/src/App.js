import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Display from './components/Display';
import { useState } from 'react'

function App() {

  const [movieList, setMovieList] = useState([]);

  return (
    <div className="App">
      <h1>Please fill out this form!</h1>
      <Movie movieList={movieList} setMovieList={setMovieList}/>
      <Display movieList={movieList}/>
    </div>
  );
}

export default App;
