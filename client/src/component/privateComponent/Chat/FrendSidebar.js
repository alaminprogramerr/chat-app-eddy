import React from 'react'

const FrendSidebar = () => {
    return (
        <div>
            
        <div id="friends" className="sidebar">
        <header>
            <span>Friends</span>
            <ul className="list-inline">
            <li className="list-inline-item" data-toggle="tooltip" title="Add friends">
                <a className="btn btn-outline-light" href="#" data-toggle="modal" data-target="#addFriends">
                <i data-feather="user-plus" />
                </a>
            </li>
            <li className="list-inline-item d-xl-none d-inline">
                <a href="#" className="btn btn-outline-light text-danger sidebar-close">
                <i data-feather="x" />
                </a>
            </li>
            </ul>
        </header>
        <form>
            <input type="text" className="form-control" placeholder="Search friends" />
        </form>
        <div className="sidebar-body">
            <ul className="list-group list-group-flush">
            <li className="list-group-item" data-navigation-target="chats">
                <div>
                <figure className="avatar avatar-state-warning">
                    <span className="avatar-title bg-secondary rounded-circle">A</span>
                </figure>
                </div>
                <div className="users-list-body">
                <div>
                    <h5>Aline McShee</h5>
                    <p>Marketing Assistant</p>
                </div>
                <div className="users-list-action">
                    <div className="action-toggle">
                    <div className="dropdown">
                        <a data-toggle="dropdown" href="#">
                        <i data-feather="more-horizontal" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">New chat</a>
                        <a href="#" data-navigation-target="contact-information" className="dropdown-item">Profile</a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item text-danger">Block</a>
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

export default FrendSidebar
