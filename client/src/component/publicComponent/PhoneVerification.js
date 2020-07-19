import React from 'react'

const PhoneVerification = () => {
    return (
        <div>
            <div className="form-wrapper">
                {/* logo */}
                <div className="logo">
                    <img src={require("../dist/media/img/logo.png")} alt="" />
                </div>
                {/* ./ logo */}
                <h5>Enter code</h5>
                <p className="text-muted">Write the confirmation code that came to your phone in the box below.</p>
                {/* form */}
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control text-center" placeholder="_ _ _ _ _" autofocus />
                    </div>
                    <button className="btn btn-primary btn-block">Confirm Code</button>
                    <hr />
                    <p className="text-muted">Take a different action.</p>
                    <a href="./register.html" className="btn btn-sm btn-outline-light mr-1">Register now!</a>or
                    <a href="./login.html" className="btn btn-sm btn-outline-light ml-1">Login!</a>
                </form>
            </div>
        </div>
    )
}

export default PhoneVerification
