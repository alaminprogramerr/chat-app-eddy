import React from 'react'

const outGoingImage = () => {
    return (
        <div>
            <div className="message-item">
                <div className="message-avatar">
                <figure className="avatar">
                <img src={require("../../dist/media/img/agente.jpg")} className="rounded-circle" alt="image" />
                </figure>
                <div>
                    <h5>Byrom Guittet</h5>
                    <div className="time">11:05 AM</div>
                </div>
                </div>
                <div className="message-content">
                I sent you all the files. Good luck with 😃
                </div>
            </div>
        </div>
    )
}

export default outGoingImage
