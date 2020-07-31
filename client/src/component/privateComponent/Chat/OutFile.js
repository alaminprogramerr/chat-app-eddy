import React from 'react'
import {useRecoilValue} from 'recoil'
import {userInfo} from '../../util/recoilState'
import  LatterPicture from './LatterPicture'
const OutFile = () => {
    const getUserInfo=useRecoilValue(userInfo)
    return (
        <div>
            <div className="message-item outgoing-massage " style={{ marginLeft: 'auto' ,textAlign:'right'}}>
                <div className="message-avatar">
                    <div style={{ marginLeft: 'auto' }}>
                        <h5 style={{textTransform:'capitalize'}}>{getUserInfo.firstName+' '+getUserInfo.lastName}</h5>
                        <div className="time">11:59 PM</div>
                    </div>
                    <figure className="avatar" style={{marginLeft:'15px'}}>
                        {
                            getUserInfo.img?
                            <img src={require("../../dist/media/img/usuario-cli.jpg")} className="rounded-circle" alt="image" />
                            :<LatterPicture width="43px" height="43px" fontSize="25px" firstName={getUserInfo.firstName}/>
                        }
                    </figure>
                </div>
                <div className="message-content message-file" style={{backgroundColor:'rgb(189 211 230)'}}>
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

export default OutFile
