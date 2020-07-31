import React from 'react'
import LatterPicture from './LatterPicture'
import {activePerson} from '../../util/recoilState'
import {useRecoilValue} from 'recoil'
const InMassage = ({textInfo}) => {
    const  getActivePerson=useRecoilValue(activePerson)
    return (
        <div>
            <div className="message-item incomming-Massage">
                <div className="message-avatar">
                    
                <figure className="avatar">
                        {
                            getActivePerson.img?
                            <img src={require("../../dist/media/img/usuario-cli.jpg")} className="rounded-circle" alt="image" />
                            :<LatterPicture width="43px" height="43px" fontSize="25px" firstName={getActivePerson.firstName}/>
                        }
                </figure>
                <div>
                    <h5 style={{textTransform:'capitalize'}}>{getActivePerson.firstName+' '+getActivePerson.lastName}</h5>
                    <div className="time"> {textInfo.time} <i className="ti-double-check text-info" /></div>
                </div>
                </div>
                <div className="message-content"> {textInfo.text} </div>
            </div>
        </div>
    )
}

export default InMassage
