import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "", role: "" })

  let navigate = useNavigate;

  const handleSubmit = async (ele) => {
    ele.preventDefault();  //Synthetic event
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password, role: credentials.role }));
    const response = await fetch("http://localhost:5000/user", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password, role: credentials.role })
    })
    // const result = await response.JSON()
    console.log(response);

    if (!response) {
      alert("Enter Valid Credentials...")
    }

    if(response){
      navigate('/');
    }
  }

  // Validation part goes here in between


  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })

  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label for="role" className="form-label">Role</label>
            <select className='m-2 h-100 bg-dark-primary' name='role' value={credentials.role} onChange={onChange}>
              <option value="owner">Owner</option>
              <option value="customer">Customer</option>
            </select>


          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/signup" className='m-3 btn btn-danger'>New User</Link>
        </form>
      </div>
    </div>
  )
}

export default Login