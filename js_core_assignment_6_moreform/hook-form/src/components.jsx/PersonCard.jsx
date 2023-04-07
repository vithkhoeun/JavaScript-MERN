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
                { // Ternary operator                   // true                                             // false
                            firstName && firstName.length < 2 ? <p className="text-danger">First Name must be 2 or more characters long</p>: ""
                        }
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Last Name:</label>
                <input type="text" className="form-control" onChange={(e)=>{setLastName(e.target.value)}}/>
                { // Ternary operator                   // true                                             // false
                            lastName && lastName.length < 2 ? <p className="text-danger">Last Name must be 2 or more characters long</p>: ""
                        }
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">E-mail: </label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
                { // Ternary operator                   // true                                             // false
                            email && email.length < 5 ? <p className="text-danger">Email must be 2 or more characters long</p>: ""
                        }
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Password:</label>
                <input type="password" name="" id="" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                { // Ternary operator                   // true                                             // false
                            password && password.length < 8 ? <p className="text-danger">Password must be 8 or more characters long</p>: ""
                        }
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Confirm Password:</label>
                <input type="password" name="" id="" className="form-control" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                {confirmPassword && confirmPassword.length < 8 ? <p className="text-danger">Password must be 8 or more characters long</p>: ""
                }
                {password != confirmPassword ? <p className="text-danger">Password must match</p>: ""
                }
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
        </form>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
    </div>
  )
}

export default PersonCard