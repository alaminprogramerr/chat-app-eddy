import React from 'react'

function ChatHeader() {
    return (
        <div>
        <div className="chat-header">
        <div className="chat-header-user">
            <figure className="avatar">
            <a href="#" data-navigation-target="contact-information">
                <img src="./dist/media/img/agente.jpg" className="rounded-circle" alt="image" />
            </a>
            </figure>
            <div>
            <h5>Byrom Guittet</h5>
            <small className="text-success">
                <i>writing...</i>
            </small>
            </div>
        </div>
        <div className="chat-header-action">
            <ul className="list-inline">
            <li className="list-inline-item d-xl-none d-inline">
                <a href="#" className="btn btn-outline-light mobile-navigation-button">
                <i data-feather="menu" />
                </a>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" title="Transferir">
                <a href="#" className="btn btn-outline-light tranferir" data-toggle="modal" data-target="#transferir">
                <i data-feather="users" />
                </a>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" title="Activar Bot">
                <a href="#" className="btn btn-outline-light">
                <div className="img_active" />
                </a>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" title="Voice call">
                <a href="#" className="btn btn-outline-light text-success" data-toggle="modal" data-target="#call">
                <i data-feather="phone" />
                </a>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" title="Video call">
                <a href="#" className="btn btn-outline-light text-warning" data-toggle="modal" data-target="#videoCall">
                <i data-feather="video" />
                </a>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" title="Perfil">
                <a href="#" className="btn btn-outline-light" data-navigation-target="contact-information">
                <i data-feather="user" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                <a href="#" data-navigation-target="contact-information" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Add to archive</a>
                <a href="#" className="dropdown-item">Delete</a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item text-danger">Block</a>
                </div>
                --&gt;
            </li>
            </ul>
        </div>
        </div>
        </div>
    )
}

export default ChatHeader
