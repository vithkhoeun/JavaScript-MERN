import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const EditProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setOneProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOneProduct({
            ...oneProduct,
            [e.target.name]: e.target.value
        })
    }

    const editProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, oneProduct)
            .then(res => navigate("/api/product"))
            .catch(err => console.log(err))
    }
  return (
    <div>
        <h1>Edit Product</h1>
        <form action="" className="col-md-6 offset-2" onSubmit={editProduct}>
            <div className="form-group">
                <label htmlFor='title'>Product Name: </label>
                <input type="text" className="form-control" value={oneProduct.title} name="title" id="title" onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='price'>Product Price: </label>
                <input type="text" className="form-control" value={oneProduct.price} name="price" id="price" onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='description'>Product Decription: </label>
                <input type="text" className="form-control" value={oneProduct.description} name="description" id="description" onChange={changeHandler}/>
            </div>
            <button className="btn btn-info" mt-3>Submit</button>
        </form>
    </div>
  )
}

export default EditProduct