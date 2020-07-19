import React from 'react'
import './style.css'
const Login = () => {
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
                    {/* form */}
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username or email" required autofocus />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                        <div className="form-group d-flex justify-content-between">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" defaultChecked id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                            <a href="./reset-password.html">Reset password</a>
                        </div>
                        <button className="btn btn-primary btn-block">Sign in</button>
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
                        <a href="./register.html" className="btn btn-outline-light btn-sm">Register now!</a>
                    </form>
                    {/* ./ form */}
                </div>
            </div>

        </div>
    )
}

export default Login
