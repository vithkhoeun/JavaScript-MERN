import React, {useState} from 'react'
import axios from 'axios'
import AllProduct from './AllProduct'

const ProductForm = () => {
    const [product, setProduct] = useState ({
        title: "",
        price: "",
        description: ""
    })
    const [errors, setErrors] = useState({})

    const onChangeHandler =(e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })  
    }

    const formValidator = () => {
        let isValid= true
        if (product.title.length <2) {
            return false
        }
        if (product.price.length <1 ) {
            return false
        }
        if (product.description.length <2 ) {
            return false
        }
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/product/', product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }
    return (
    <div>
        <h1 className="col-md-6 offset-2">Add Product</h1>
        <form action="" className="col-md-6 offset-2" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='title'>Product Name: </label>
                <input type="text" className="form-control" name="title" id="title" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='price'>Product Price: </label>
                <input type="text" className="form-control" name="price" id="price" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='description'>Product Decription: </label>
                <input type="text" className="form-control" name="description" id="description" onChange={onChangeHandler}/>
            </div>
            <button className="btn btn-info mt-4" >Submit</button>
        </form>
        <AllProduct/>
    </div>
    
    )
}

export default ProductForm