import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [product, setProduct] = useState ({
        product: "",
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
        if (product.product.length <2) {
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
        <h1>Add Product</h1>
        <form action="" className="col-md-6 offset-2" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='product'>Product Name: </label>
                <input type="text" className="form-control" name="product" id="product" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='price'>Product Price: </label>
                <input type="text" className="form-control" name="price" id="price" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='description'>Product Decription: </label>
                <input type="text" className="form-control" name="description" id="description" onChange={onChangeHandler}/>
            </div>
            <button className="btn btn-info" mt-3>Submit</button>
        </form>
    </div>
    )
}

export default ProductForm