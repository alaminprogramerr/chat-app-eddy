import React from 'react'

const InMassage = () => {
    return (
        <div>
            <div className="message-item incomming-Massage">
                <div className="message-avatar">
                <figure className="avatar">
                    <img src="./dist/media/img/usuario-cli.jpg" className="rounded-circle" alt="image" />
                </figure>
                <div>
                    <h5>Mirabelle Tow</h5>
                    <div className="time">01:20 PM <i className="ti-double-check text-info" /></div>
                </div>
                </div>
                <div className="message-content">
                Hello how are you?
                </div>
            </div>
        </div>
    )
}

export default InMassage
