import React from 'react'

const outMassage = () => {
    return (
        <div>
            
            <div className="message-item outgoing-massage">
                <div className="message-avatar">
                <figure className="avatar">
                    <img src="./dist/media/img/agente.jpg" className="rounded-circle" alt="image" />
                </figure>
                <div>
                    <h5>Byrom Guittet</h5>
                    <div className="time">11:59 PM</div>
                </div>
                </div>
                <div className="message-content message-file">
                <div className="file-icon">
                    <i className="fa fa-file-pdf-o" />
                </div>
                <div>
                    <div>important_documents.pdf <i className="text-muted small">(50KB)</i></div>
                    <ul className="list-inline">
                    <li className="list-inline-item mb-0"><a href="#">Download</a></li>
                    <li className="list-inline-item mb-0"><a href="#">View</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default outMassage
