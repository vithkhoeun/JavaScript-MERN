import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';


const AllStores = (props) => {

  const {id} = useParams();
  const [store, setStore] = useState ([]);
  const [oneStore, setOneStore] = useState ([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/store')
        .then(res => setStore(res.data.stores))
        .catch(err => console.log(err))
}, [])

  const navigateToCreateStore = (e) => {
    navigate('/api/store')
  }

  const deleteStore =(id) => {
    axios.delete(`http://localhost:8000/api/store/${id}`)
        .then(res => {
            const filteredStores = store.filter(store => store._id != id)
            setStore(filteredStores)
        })
        .catch(err => console.log(err))
}

  return (
    <div>
      <Navbar />
      <h1>Store Finder</h1>
      <p>Find stores in your area!</p>
        <table className="col-md-6 offset-3">
            <thead>
                <tr>
                    <th>Store Name</th>
                    <th>Store Number</th>
                    <th>Open</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {store.map((store) => {
                    return (
                        <tr key={store._id}>
                            <td><Link to={`/${store._id}`}>{store.store}</Link></td>
                            <td>{store.storeNumber}</td>
                            <td>{store.open}</td>
                            <td><button className="btn btn-danger mt-3" onClick={() => deleteStore(store._id)}>Delete</button></td>
                        </tr>
                    )
                  })}
            </tbody>
        </table>
                  <button className="btn btn-info" onClick={navigateToCreateStore}>Can't find your store?</button>
    </div>
  )
}

export default AllStores