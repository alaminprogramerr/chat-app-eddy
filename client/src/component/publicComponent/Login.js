import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import Axios from 'axios'
const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const submitHandler=(event)=>{
        event.preventDefault()
        let obj = {email,password}
        Axios.post('/login',obj)
        .then(res=>{
            localStorage.setItem('eddy_app',res.data.token)
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
                        <img src={require('../dist/media/img/logo.png')} alt="" />
                    </div>
                    {/* ./ logo */}
                    <h5>Sign in</h5>
                    {error.massage?
                        <h5 className="text-warning">{error.massage}</h5>:''
                    }
                    {/* form */}
                    <form>
                        
                        <div className="form-group">
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email"className={error.email?"form-control is-invalid ":"form-control"} placeholder={error.email?error.email:"Email"}  />
                        </div>
                        <div className="form-group">
                            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className={error.password?"form-control is-invalid ":"form-control"}placeholder={error.password?error.password:"Password"} />
                        </div>
                        <div className="form-group d-flex justify-content-between">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" defaultChecked id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                            <Link to="/reset-password">Reset password</Link>
                        </div>
                        <button onClick={(event)=>submitHandler(event)} className="btn btn-primary btn-block">Sign in</button>
                        <hr />
                        <p className="text-muted">Login with your social media account.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-floating btn-facebook">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-floating btn-twitter">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-floating btn-dribbble">
                                    <i className="fa fa-dribbble" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-floating btn-linkedin">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-floating btn-google">
                                    <i className="fa fa-google" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-floating btn-behance">
                                    <i className="fa fa-behance" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-floating btn-instagram">
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <p className="text-muted">Don't have an account?</p>
                        <Link to="/register" className="btn btn-outline-light btn-sm">Register now!</Link>
                    </form>
                    {/* ./ form */}
                </div>
            </div>

        </div>
    )
}

export default Login
