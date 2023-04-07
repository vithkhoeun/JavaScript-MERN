import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const OneProduct = (props) => {
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setOneProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])

    const deleteProduct =(e) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => setOneProduct(res.data.product))
            .catch(err => console.log(err))
        navigate("/api/product")
    }

    const navigateToEditProduct = (e) => {
        navigate(`/edit/${id}`)
    }
    return (
        <div>
            <h1>{oneProduct.title}</h1>
            <p>Price: {oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>

            <button className="btn btn-info" onClick={navigateToEditProduct}>Edit Player</button>
            <button className="btn btn-danger" onClick={deleteProduct}>Delete Player</button>
        </div>
      )
}

export default OneProduct