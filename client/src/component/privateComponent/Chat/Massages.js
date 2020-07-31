import React, { useRef, useEffect } from 'react'
import OutFile from './OutFile'
import IncommingFile from './IncommingFile'
import OutSms from './OutSms'
import InMassage from './InMassage'

import {useRecoilValue} from 'recoil'
import {activePerson,activeConversation,userInfo,socketUsers} from '../../util/recoilState'


const Massages = () => {
    const getActivePerson=useRecoilValue(activePerson)
    const getActiveConversation=useRecoilValue(activeConversation)
    const getUserInfo=useRecoilValue(userInfo)

    useEffect(()=>{
        if(getActiveConversation.length>0){
            let scMassage=document.getElementById('scMassage')
            scMassage.scrollTop=scMassage.scrollHeight
        }
    })





    return (
        <div className="messages" id="scMassage">
            {
                getActivePerson.firstName?    
                <div>    
                    {
                        getActiveConversation.map(singleSms=>{
                            return(
                                <>
                                    {
                                        singleSms.from===getUserInfo.email?
                                        <OutSms textInfo={singleSms}/>:
                                        <InMassage textInfo={singleSms}/>
                                    }
                                </>
                            )
                        })
                    }
                </div>:
                <div style={{textAlign:'center'}}>
                    <img src={require('../../media/img/select_user.png')}/>
                </div>
            }
        </div>
    )
}

export default Massages
