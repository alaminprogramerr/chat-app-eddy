import React, { useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { activeUser, activePerson, userInfo, socketUsers,allLastSms } from '../../util/recoilState'
import LatterPicture from './LatterPicture'



const ChatSidebar = ({ reqConversation }) => {
    const activeUsers = useRecoilValue(activeUser)
    const [getActivePerson, setActivePerson] = useRecoilState(activePerson)
    const getUserInfo = useRecoilValue(userInfo)
    const getSocketUsers = useRecoilValue(socketUsers)
    const getAllLastSms=useRecoilValue(allLastSms)

    const setActive = (singleUserInfo) => {
        setActivePerson(singleUserInfo)
        console.log(getActivePerson)
        reqConversation(singleUserInfo.email)
    }



    const findActiveUser = (email) => {
        let x= getSocketUsers.find((ssu) => {
            return ssu.email === email
        })
        if(x){
            return true
        }else{
            return false
        }
    }
    const findLastSms=(rendomEmail)=>{
        // console.log('all last sms are ' ,getAllLastSms)
        let res=''
        getAllLastSms.forEach(single=>{
            let email=single.between.split(rendomEmail)[0]
            if(email===getUserInfo.email){
                console.log('single user sms ' , single.sms.text)
                res=single.sms.text
            }            
        })
        return res
    }
    return (
        <div>
            <div id="chats" className="sidebar active">
                <header>
                    <span>Chats</span>
                    <ul className="list-inline">
                        <li className="list-inline-item" data-toggle="tooltip" title="New group">
                            <a className="btn btn-outline-light" href="#" data-toggle="modal" data-target="#newGroup">
                                <i data-feather="users" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-outline-light" data-toggle="tooltip" title="New chat" href="#" data-navigation-target="friends">
                                <i data-feather="plus-circle" />
                            </a>
                        </li>
                        <li className="list-inline-item d-xl-none d-inline">
                            <a href="#" className="btn btn-outline-light text-danger sidebar-close">
                                <i data-feather="x" />
                            </a>
                        </li>
                    </ul>
                </header>
                <form>
                    <input type="text" className="form-control" placeholder="Search chats" />
                </form>
                <div className="sidebar-body">
                    <ul className="list-group list-group-flush ">
                        {
                            activeUsers.map((singleUserInfo,key) => {
                                return (
                                    <>
                                        {getUserInfo.email === singleUserInfo.email ? "" :
                                            <>
                                                {/* {key===0 && getUserInfo.email !==singleUserInfo.email?setActive(singleUserInfo):''} */}
                                                {/* {key===1 && !getActivePerson.firstName?'':setActive(singleUserInfo)} */}
                                                {findActiveUser(singleUserInfo.email)?
                                                <li style={{borderTop:'1px  solid white'}} className="list-group-item open-chat myActiveUser" onClick={() => { setActive(singleUserInfo) }}>
                                                    <div>
                                                        <figure className="avatar">
                                                            {
                                                                singleUserInfo.img ?
                                                                    <img src={require('../../dist/media/img/whatsaap.jpg')} className="rounded-circle" alt="image" />
                                                                    : <LatterPicture status={true} firstName={singleUserInfo.firstName} width="43px" height="43px" fontSize="34px" />
                                                            }
                                                        </figure>
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h5 style={{ textTransform: 'capitalize' }}><span> {singleUserInfo.firstName} </span> <span> {singleUserInfo.lastName} </span> </h5>
                                                            <p> {console.log(findLastSms(singleUserInfo.email))} </p>
                                                        </div>
                                                        <div className="users-list-action">
                                                            <small className="text-muted">11:05 AM</small>
                                                            <div className="action-toggle">
                                                                <div className="dropdown">
                                                                    <a data-toggle="dropdown" href="#">
                                                                        <i data-feather="more-horizontal" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item">Open</a>
                                                                        <a href="#" data-navigation-target="contact-information" className="dropdown-item">Profile</a>
                                                                        <a href="#" className="dropdown-item">Add to archive</a>
                                                                        <div className="dropdown-divider" />
                                                                        <a href="#" className="dropdown-item text-danger">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>:
                                                
                                                <li style={{borderTop:'1px  solid white'}} className="list-group-item open-chat myActiveUser" onClick={() => { setActive(singleUserInfo) }}>
                                                    <div>
                                                        <figure className="avatar">
                                                            {
                                                                singleUserInfo.img ?
                                                                    <img src={require('../../dist/media/img/whatsaap.jpg')} className="rounded-circle" alt="image" />
                                                                    : <LatterPicture status={false} firstName={singleUserInfo.firstName} width="43px" height="43px" fontSize="34px" />
                                                            }
                                                        </figure>
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h5 style={{ textTransform: 'capitalize' }}><span> {singleUserInfo.firstName} </span> <span> {singleUserInfo.lastName} </span> </h5>
                                                            <p> { findLastSms(singleUserInfo.email)} </p>
                                                        </div>
                                                        <div className="users-list-action">
                                                            <small className="text-muted">11:05 AM</small>
                                                            <div className="action-toggle">
                                                                <div className="dropdown">
                                                                    <a data-toggle="dropdown" href="#">
                                                                        <i data-feather="more-horizontal" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item">Open</a>
                                                                        <a href="#" data-navigation-target="contact-information" className="dropdown-item">Profile</a>
                                                                        <a href="#" className="dropdown-item">Add to archive</a>
                                                                        <div className="dropdown-divider" />
                                                                        <a href="#" className="dropdown-item text-danger">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                }
                                            </>
                                        }
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChatSidebar
