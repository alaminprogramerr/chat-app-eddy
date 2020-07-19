import React from 'react'
import './style.css'
const Register = () => {
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
                    {/* form */}
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Firstname" required autofocus />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Lastname" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                        <button className="btn btn-primary btn-block">Register</button>
                        <hr />
                        <p className="text-muted">Already have an account?</p>
                        <a href="./login.html" className="btn btn-outline-light btn-sm">Sign in!</a>
                    </form>
                    {/* ./ form */}
                </div>
            </div>
        </div>
    )
}

export default Register
