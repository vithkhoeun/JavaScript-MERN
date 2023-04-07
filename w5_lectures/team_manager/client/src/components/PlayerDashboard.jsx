import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

const PlayerDashboard = () => {

    const [players, setPlayers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data.players))
            .catch(err => console.log(err))
    }, [])

    const navigateToPlayerForm = () => {
        navigate('/api/players/create')
    }

    const deletePlayer =(id) => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                const filteredPlayers = players.filter(player => player._id != id)
                setPlayers(filteredPlayers)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Team Manager</h1>
        <table className="col-md-6 mx-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Preferred Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i) => {
                    return (
                        <tr key={player._id}>
                            <td><Link to={`/api/players/${player._id}`}>{player.name}</Link></td>
                            <td>{player.preferredPosition}</td>
                            <td><button className="btn btn-danger mt-3" onClick={() => deletePlayer(player._id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button className="btn btn-info mt-3"onClick={navigateToPlayerForm}>Create Player</button>
    </div>
  )
}

export default PlayerDashboard