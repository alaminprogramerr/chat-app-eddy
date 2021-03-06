import React from 'react'

const FevorateSidebar = () => {
    return (
        <div>
            
        <div id="favorites" className="sidebar">
        <header>
            <span>Favorites</span>
            <ul className="list-inline">
            <li className="list-inline-item d-xl-none d-inline">
                <a href="#" className="btn btn-outline-light text-danger sidebar-close">
                <i data-feather="x" />
                </a>
            </li>
            </ul>
        </header>
        <form>
            <input type="text" className="form-control" placeholder="Search favorites" />
        </form>
        <div className="sidebar-body">
            <ul className="list-group list-group-flush users-list">
            <li className="list-group-item">
                <div className="users-list-body">
                <div>
                    <h5>Jennica Kindred</h5>
                    <p>I know how important this file is to you. You can trust me ;)</p>
                </div>
                <div className="users-list-action">
                    <div className="action-toggle">
                    <div className="dropdown">
                        <a data-toggle="dropdown" href="#">
                        <i data-feather="more-horizontal" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Open</a>
                        <a href="#" className="dropdown-item">Remove favorites</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            </ul>
        </div>
        </div>
        </div>
    )
}

export default FevorateSidebar
