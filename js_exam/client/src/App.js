import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewStore from './controllers/NewStore';
import AllStores from './controllers/AllStores';
import OneStore from './controllers/OneStore';
import EditStore from './controllers/EditStore';


function App() {
  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }, [])

  return (
    <div className="App">
      <Routes>
        <Route element = {<NewStore />} path = "api/store/" />
        <Route element = {<AllStores />} path = "/" />
        <Route element = {<OneStore />} path = "/:id" />
        <Route element = {<EditStore />} path = "/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
