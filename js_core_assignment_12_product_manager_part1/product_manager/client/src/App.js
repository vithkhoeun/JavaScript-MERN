import logo from './logo.svg';
import './App.css';
import ProductForm from './controllers/ProductForm';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
  axios.get("localhost:8000/api/product/")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <ProductForm />
    </div>
  );
}

export default App;
