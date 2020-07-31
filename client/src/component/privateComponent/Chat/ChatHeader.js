import React from 'react'
import { useRecoilValue } from 'recoil'
import { activePerson } from '../../util/recoilState'
import LatterPicture from './LatterPicture'

function ChatHeader() {
    const getActivePerson = useRecoilValue(activePerson)
    return (
        <div>
            <div className="chat-header">
                {
                    getActivePerson.firstName?
                    <div className="chat-header-user">
                        <figure className="avatar">
                                {
                                    getActivePerson.img?
                                    <img src={require("../../dist/media/img/usuario-cli.jpg")} className="rounded-circle" alt="image" />
                                    :<LatterPicture width="43px" height="43px" fontSize="25px" firstName={getActivePerson.firstName}/>
                                }
                        </figure>
                        <div>
                            <h5 style={{ textTransform: 'capitalize' }}> {getActivePerson.firstName + ' ' + getActivePerson.lastName} </h5>
                            <small className="text-success">
                                <i>Active now</i>
                            </small>
                        </div>
                    </div>:''
                }
                <div className="chat-header-action">
                    {  getActivePerson.firstName?
                        <ul className="list-inline">
                            <li className="list-inline-item d-xl-none d-inline">
                                <a href="#" className="btn btn-outline-light mobile-navigation-button">
                                    <i data-feather="menu" />
                                </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="Transferir">
                                <a href="#" className="btn btn-outline-light tranferir " style={{padding:'6px 10px'}} data-toggle="modal" data-target="#transferir">
                                    <img src={require('../../media/iconImg/people.png')}/>
                                </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="Activar Bot">
                                <a href="#" className="btn btn-outline-light">
                                    <div className="img_active" />
                                </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="Voice call">
                                <a href="#" className="btn btn-outline-light text-success" data-toggle="modal" style={{padding:'6px 10px'}}  data-target="#call">
                                <img src={require('../../media/iconImg/phone.png')}/>
                                </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="Video call">
                                <a href="#"  className="btn btn-outline-light text-warning" data-toggle="modal" style={{padding:'6px 10px'}}  data-target="#videoCall">
                                <img src={require('../../media/iconImg/videoCall.png')}/>
                                </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="Perfil">
                                <a href="#" className="btn btn-outline-light" style={{padding:'6px 10px'}} data-navigation-target="contact-information">
                                <img src={require('../../media/iconImg/user.png')}/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" data-navigation-target="contact-information" className="dropdown-item">Profile</a>
                                    <a href="#" className="dropdown-item">Add to archive</a>
                                    <a href="#" className="dropdown-item">Delete</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item text-danger">Block</a>
                                </div>--&gt;
                            </li>
                        </ul>
                        :''
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
