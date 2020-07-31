import React, { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import MicNoneIcon from '@material-ui/icons/MicNone';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { Input } from '@material-ui/core';
import {useRecoilState,useRecoilValue} from 'recoil'
import {sendSmsInfo,activePerson,userInfo,activeConversation} from '../../util/recoilState'

const ChatFooter = ({sendSms}) => {
    const getActivePerson=useRecoilValue(activePerson)
    const getUserInfo=useRecoilValue(userInfo)
    const [getSendSmsInfo,setSendSmsInfo]=useRecoilState(sendSmsInfo)    
    const [getActiveConversation,setActiveConversation]=useRecoilState(activeConversation)
    const smsInfoSetter=(event)=>{
        event.preventDefault()

        function currentTimeFind() {
            var date = new Date()
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
        let obj={
            time:currentTimeFind(),
            text:event.target.value,
            from:getUserInfo.email,
            to:getActivePerson.email
        }
        setSendSmsInfo(obj)
    }
    
    return (
        <div>
            <div className="chat-footer">
                
                    {
                        getActivePerson.firstName?   
                        
                        <form>
                            <div>
                                <button className="btn btn-light mr-3" data-toggle="tooltip" title="Emoji" type="button">
                                    <SentimentVerySatisfiedIcon />
                                </button>
                            </div>
                            <Input type="text" className="form-control" placeholder="Write a message." onChange={(event)=>{smsInfoSetter(event)}} />
                            <div className="form-buttons">
                                <button className="btn btn-light" data-toggle="tooltip" title="Add files" type="button">
                                    <AttachFileIcon style={{ transform: 'rotate(45deg)' }} />
                                </button>
                                <button className="btn btn-light" data-toggle="tooltip" title="Send a voice record" type="button">
                                    <MicNoneIcon />
                                </button>
                                <button className="btn btn-primary" onClick={()=>sendSms()} type="submit">
                                    <SendIcon />
                                </button>
                            </div>
                        </form>
                        :''
                    }
            </div>
        </div>
    )
}

export default ChatFooter
