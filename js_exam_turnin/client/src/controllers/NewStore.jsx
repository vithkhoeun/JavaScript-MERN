import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import Navbar from './Navbar';

const NewStore = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [oneStore, setOneStore] = useState({})
  
  const [store, setStore] = useState ({
    store: "",
    storeNumber: "",
    open: ""
  })
  
  const [errors, setErrors] = useState({})
  
  const onChangeHandler =(e) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value
    })  
  }
  
    
    const formValidator = () => {
      let isValid= true
      if (store.store.length <3) {
        alert("Store name must be at least 3 characters")
        return false
      }
      if (store.storeNumber < 1 ) {
        alert("Store number must be greater than 0")
        return false
      }
      return isValid
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if (formValidator()) {
        axios.post(`http://localhost:8000/api/store/`, store)
        .then(res => navigate("/"))
        .catch(err => console.log(err))
      }
      else{
          setErrors({
              store: "Must be at least 3 Characters long",
              storeNumber: "Must be greater than 0"
            })
          }
        }
        
  return (
    <div>
      <Navbar />
      <h1>Store Finder</h1>
      <h1 className="col-md-6 offset-3">Add a New Store</h1>
      <form action="" className="col-md-6 offset-3" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor='store'>Store Name: </label>
            <input type="text" className="form-control" name="store" id="store" onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
            <label htmlFor='storeNumber'>Store Number: </label>
            <input type="text" className="form-control" name="storeNumber" id="storeNumber" onChange={onChangeHandler}/>
        </div>
        <div className="form-group">
            <label htmlFor='open'>Open: </label>
            <input type="string" className="form-control" name="open" id="open" onChange={onChangeHandler}/>
        </div>
        <button className="btn btn-info mt-4" >Submit</button>
      </form>
    </div>
  )
}
export default NewStore