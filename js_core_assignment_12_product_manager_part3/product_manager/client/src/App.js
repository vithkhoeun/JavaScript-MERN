import './App.css';
import ProductForm from './controllers/ProductForm';
import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllProduct from './controllers/AllProduct';
import OneProduct from './controllers/OneProduct';
import EditProduct from './controllers/EditProduct';
import Navbar from './controllers/Navbar';

function App() {

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/")
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }, [])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element = {<ProductForm />} path = "/" />
        <Route element = {<AllProduct />} path = "api/product" />
        <Route element = {<OneProduct />} path = "/:id" />
        <Route element = {<EditProduct />} path = "/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
