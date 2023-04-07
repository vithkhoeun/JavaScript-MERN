import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';

const OneStore = (props) => {
    const {id} = useParams();
    const [oneStore, setOneStore] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then(res => setOneStore(res.data.store))
            .catch(err => console.log(err))
    }, [])

    const deleteStore =(e) => {
        axios.delete(`http://localhost:8000/api/store/${id}`)
            .then(res => setOneStore(res.data.store))
            .catch(err => console.log(err))
        navigate("/")
    }

    const navigateToEditStore = (e) => {
        navigate(`/edit/${id}`)
    }
    return (
        <div>
            <Navbar />
            <h1>{oneStore.store}</h1>
            <p>Store Number: {oneStore.storeNumber}</p>
            <p>Open: {oneStore.open}</p>

            <button className="btn btn-info" onClick={navigateToEditStore}>Edit Store</button>
            <button className="btn btn-danger" onClick={deleteStore}>Delete Store</button>
        </div>
      )
}

export default OneStore