import React from 'react'

const ArchiveSidebar = () => {
    return (
        <div>
            
        <div id="archived" className="sidebar">
        <header>
            <span>Archived</span>
            <ul className="list-inline">
            <li className="list-inline-item d-xl-none d-inline">
                <a href="#" className="btn btn-outline-light text-danger sidebar-close">
                <i data-feather="x" />
                </a>
            </li>
            </ul>
        </header>
        <form>
            <input type="text" className="form-control" placeholder="Search archived" />
        </form>
        <div className="sidebar-body">
            <ul className="list-group list-group-flush users-list">
            <li className="list-group-item">
                <figure className="avatar">
                <span className="avatar-title bg-secondary rounded-circle">M</span>
                </figure>
                <div className="users-list-body">
                <div>
                    <h5>Mercedes Pllu</h5>
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
                        <a href="#" className="dropdown-item">Restore</a>
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

export default ArchiveSidebar
