import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';

const EditStore = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [oneStore, setOneStore] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then(res => setOneStore(res.data.store))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOneStore({
            ...oneStore,
            [e.target.name]: e.target.value
        })
    }

    const editStore = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/store/${id}`, oneStore)
            .then(res => navigate(`/${id}`))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <Navbar />
        <h1>Edit Store</h1>
        <form action="" className="col-md-8 offset-2" onSubmit={editStore}>
            <div className="form-group">
                <label htmlFor='store'>Store Name: </label>
                <input type="text" name="store" id="store"className="form-control" value={oneStore.store} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='storeNumber'>Store Number: </label>
                <input type="text"  name="storeNumber" id="storeNumber" className="form-control" value={oneStore.storeNumber} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='open'>Open: </label>
                <input type="text"  name="open" id="open" className="form-control" value={oneStore.open} onChange={changeHandler}/>
            </div>
            <button className="btn btn-info mt-3">Update Store</button>
        </form>
    </div>
  )
  }
export default EditStore