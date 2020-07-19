import React from 'react'

const LockScreen = () => {
    return (
        <div>
            <div className="form-wrapper">
                {/* logo */}
                <div className="logo">
                    <img src={require("../dist/media/img/logo.png")} alt="" />
                </div>
                {/* ./ logo */}
                <h5>Enter your password</h5>
                {/* form */}
                <form>
                    <div className="form-group d-flex align-items-center">
                        <div className="mr-3">
                            <figure className="mb-4 avatar">
                                <img src="http://via.placeholder.com/128X128" className="rounded-circle" />
                            </figure>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" required autofocus />
                    </div>
                    <button className="btn btn-primary btn-block">Sign in</button>
                    <hr />
                    <a href="./login.html" className="btn btn-sm btn-outline-light ml-1">Sign out</a>
                </form>
                {/* ./ form */}
            </div>
            {/* Bundle */}
            {/* App scripts */}

        </div>
    )
}

export default LockScreen
