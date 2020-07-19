import React from 'react'
import './style.css'
const ResetPassword = () => {
    return (
        <div>
            <div className="form-wrapper">
                {/* logo */}
                <div className="logo">
                    <img src={require("../dist/media/img/logo.png")} alt="" />
                </div>
                {/* ./ logo */}
                <h5>Reset password</h5>
                {/* form */}
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username or email" required autofocus />
                    </div>
                    <button className="btn btn-primary btn-block">Submit</button>
                    <hr />
                    <p className="text-muted">Take a different action.</p>
                    <a href="./register.html" className="btn btn-sm btn-outline-light mr-1">Register now!</a>
    or
    <a href="./login.html" className="btn btn-sm btn-outline-light ml-1">Login!</a>
                </form>
                {/* ./ form */}
            </div>
            {/* Bundle */}
            {/* App scripts */}

        </div>
    )
}

export default ResetPassword
