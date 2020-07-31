import React from 'react'
import { userInfo } from "../../util/recoilState";
import { useRecoilValue } from "recoil";
import LatterPicture from './LatterPicture';
const OutSms = ({textInfo}) => {
    const getUserInfo=useRecoilValue(userInfo)
    return (
        <div>
            <div className="message-item outgoing-massage " style={{ marginLeft: 'auto' ,textAlign:'right'}}>
                <div className="message-avatar">
                    <div style={{ marginLeft: 'auto' }}>
                        <h5 style={{textTransform:'capitalize'}}>{getUserInfo.firstName+' '+getUserInfo.lastName}</h5>
                        <div className="time">{textInfo.time}</div>
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
                    <div>
                        <div><p style={{textAlign:'left'}}> {textInfo.text} </p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutSms
