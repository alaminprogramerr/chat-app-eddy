import React from 'react'

const ChatSidebar = () => {
    return (
        <div>
            
        <div id="chats" className="sidebar active">
        <header>
            <span>Chats</span>
            <ul className="list-inline">
            <li className="list-inline-item" data-toggle="tooltip" title="New group">
                <a className="btn btn-outline-light" href="#" data-toggle="modal" data-target="#newGroup">
                <i data-feather="users" />
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn btn-outline-light" data-toggle="tooltip" title="New chat" href="#" data-navigation-target="friends">
                <i data-feather="plus-circle" />
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
            <input type="text" className="form-control" placeholder="Search chats" />
        </form>
        <div className="sidebar-body">
            <ul className="list-group list-group-flush">
            <li className="list-group-item open-chat">
                <div>
                <figure className="avatar">
                    <img src={require('../../dist/media/img/whatsaap.jpg')} className="rounded-circle" alt="image" />
                </figure>
                </div>
                <div className="users-list-body">
                <div>
                    <h5>Alamin Hossen</h5>
                    <p>first sms 😃</p>
                </div>
                <div className="users-list-action">
                    <small className="text-muted">11:05 AM</small>
                    <div className="action-toggle">
                    <div className="dropdown">
                        <a data-toggle="dropdown" href="#">
                        <i data-feather="more-horizontal" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Open</a>
                        <a href="#" data-navigation-target="contact-information" className="dropdown-item">Profile</a>
                        <a href="#" className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item text-danger">Delete</a>
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

export default ChatSidebar
