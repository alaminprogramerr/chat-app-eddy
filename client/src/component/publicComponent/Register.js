import  React, { useState } from 'react'
import Axios from 'axios'
import {Link } from 'react-router-dom'
import './style.css'
const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, seTlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const submitHandler=(event)=>{
        event.preventDefault()
        let obj = {firstName,lastName,email,password}
        Axios.post('/register',obj)
        .then(res=>{
            window.location.href='/login'
        })
        .catch(err=>{
            setError(err.response.data)
        })
    }
    
    return (
        <div>
            <div className="form-membership">
                <div className="form-wrapper">
                    {/* logo */}
                    <div className="logo">
                        <img src={require("../dist/media/img/logo.png")} alt="" />
                    </div>
                    {/* ./ logo */}
                    <h5>Create account</h5>
                    {error.massage?
                        <h5 className="text-warning">{error.massage}</h5>:''
                    }
                    {/* form */}
                    <div>
                        <div className="form-group">
                            <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} className={error.firstName?"form-control is-invalid ":"form-control"} placeholder={error.firstName?error.firstName:"First name"} />
                        </div>
                        <div className="form-group">
                            <input onChange={(e)=>{seTlastName(e.target.value)}} type="text" className={error.lastName?"form-control is-invalid":"form-control"} placeholder={error.lastName?error.lastName:"Last name"}  />
                        </div>
                        <div className="form-group">
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email"className={error.email?"form-control is-invalid ":"form-control"} placeholder={error.email?error.email:"Email"}  />
                        </div>
                        <div className="form-group">
                            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className={error.password?"form-control is-invalid ":"form-control"}placeholder={error.password?error.password:"Password"} />
                        </div>
                        <button onClick={(event)=>{submitHandler(event)}} className="btn btn-primary btn-block">Register</button>
                        <hr />
                        <p className="text-muted">Already have an account?</p>
                        <Link to="/login" className="btn btn-outline-light btn-sm">Sign in!</Link>
                    </div>
                    {/* ./ form */}
                </div>
            </div>
        </div>
    )
}

export default Register
