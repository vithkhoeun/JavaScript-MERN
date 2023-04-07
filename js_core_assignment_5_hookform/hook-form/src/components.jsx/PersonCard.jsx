import React, {useState} from 'react'

const PersonCard = () => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
    };
  return (
    <div>
        <form action="" className="form col-md-4 mx-auto" onSubmit={createUser}>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">First Name:</label>
                <input type="text" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Last Name:</label>
                <input type="text" className="form-control" onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">E-mail: </label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Password:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Confirm Password:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
        </form>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Password: {password}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default PersonCard