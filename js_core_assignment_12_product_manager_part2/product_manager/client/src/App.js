import './App.css';
import ProductForm from './controllers/ProductForm';
import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllProduct from './controllers/AllProduct';
import OneProduct from './controllers/OneProduct';

function App() {

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/")
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }, [])

  return (
    <div className="App">
      <Routes>
        <Route element = {<ProductForm />} path = "/" />
        <Route element = {<AllProduct />} path = "api/product" />
        <Route element = {<OneProduct />} path = "/:id" />
      </Routes>
    </div>
  );
}

export default App;
