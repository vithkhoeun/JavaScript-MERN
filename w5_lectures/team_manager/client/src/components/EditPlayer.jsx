import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const EditPlayer = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [onePlayer, setOnePlayer] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => setOnePlayer(res.data.player))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOnePlayer({
            ...onePlayer,
            [e.target.name]: e.target.value
        })
    }

    const editPlayer = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/players/${id}`, onePlayer)
            .then(res => navigate("/api/players"))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Edit Player</h1>
        <form action="" className="col-md-8 offset-2" onSubmit={editPlayer}>
            <div className="form-group">
                <label htmlFor='name'>Player Name: </label>
                <input type="text" name="name" id="name"className="form-control" value={onePlayer.name} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='position'>Preferred Position: </label>
                <input type="text"  name="preferredPosition" id="position" className="form-control" value={onePlayer.preferredPosition} onChange={changeHandler}/>
            </div>
            <button className="btn btn-info mt-3">Update Player</button>
        </form>
    </div>
  )
}

export default EditPlayer