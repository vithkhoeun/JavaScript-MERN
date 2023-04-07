import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'>Go Back Home</Link></li>
        </ul>
    </div>
  )
}

export default Navbar