import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/api/product'>Home</Link></li>
                <li><Link to='/'>Create New Product</Link></li>
            </ul>
        </div>
      )
    }

export default Navbar