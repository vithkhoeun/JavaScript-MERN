import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const AllProduct = () => {
    const [product, setProduct] = useState ([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data.products))
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h1 className="col-md-6 offset-2">All Product</h1>
        <table className="col-md-6 offset-2">
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product) => {
                    return (
                        <tr key={product._id}>
                            <td><Link to={`/${product._id}`}>{product.title}</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default AllProduct