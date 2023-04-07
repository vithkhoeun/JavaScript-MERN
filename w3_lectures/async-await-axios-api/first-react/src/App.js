import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useSyncExternalStore } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  // runs side-effects
  // useEffect(() => {}, [])

//            FETCH

  // useEffect(() => {
  //   fetch('https://reqres.in/api/users?page=2')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setUsers(data.data)
  //   })
  //   .catch(err=> console.log(err))
  // }, [])

  //          AXIOS - NPM INSTALL AXIOS 

  // useEffect(() => {
  //   axios.get('https://reqres.in/api/users?page=2')
  //   .then(response => {
  //     console.log(response.data.data)})
  //   .catch(err => console.log(err))
  // }, [])

  //          USING ASYNC AWAIT

const apiCall = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2')
    console.log(response.data.data)
    setUsers(response.data.data)
  } catch (error) {
    console.log(error)
  }
}

//            USING ASYNC AWAIT IN USEEFFECT

// useEffect(() => {
//   const apiCall = async () => {
//     try {
//       const response = await axios.get('https://reqres.in/api/users?page=2')
//       console.log(response.data.data)
//       setUsers(response.data.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   apiCall()
// }, [])

  return (
    <div className="App">
      {/* <button onClick={apiCall}>Click Here</button> */}
      {
        users.map(user => {
          return <div key={user.id}>
            <h1>{user.first_name} {user.last_name}</h1>
            <img src={user.avatar} alt="user avatar" />
          </div>
        })
      }
    </div>
  );
}

export default App;
