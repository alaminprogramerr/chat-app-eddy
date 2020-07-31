import React from 'react'
import {userInfo} from '../../util/recoilState'
import {useRecoilValue,useRecoilState} from 'recoil'
import { Link } from 'react-router-dom'
import LatterPicture from './LatterPicture'
import {profileDisplay} from '../../util/recoilState'

const NavGroup = () => {
    const getUserInfo =useRecoilValue(userInfo)
    const [getProfileDisplay, setProfileDisplay]=useRecoilState(profileDisplay)



    const toggleProfileDisplay=()=>{
        setProfileDisplay(!getProfileDisplay)
    }
    const logout = () => {
        window.localStorage.removeItem('eddy_app')
        window.location.href = '/login'
    }
    return (
        <div>

            <div className="nav-group">
                <ul>
                    <li>
                        <a className="active" data-navigation-target="chats" href="#" data-toggle="tooltip" title="Chats" data-placement="right">
                            <span className="badge badge-warning" />
                            <i data-feather="message-circle" />
                        </a>
                    </li>
                    <li>
                        <a data-navigation-target="friends" href="#" data-toggle="tooltip" title="Friends" data-placement="right">
                            <span className="badge badge-danger" />
                            <i data-feather="user" />
                        </a>
                    </li>
                    <li>
                        <a data-navigation-target="favorites" data-toggle="tooltip" title="Favorites" data-placement="right" href="#">
                            <i data-feather="star" />
                        </a>
                    </li>
                    <li>
                        <a data-navigation-target="archived" href="#" data-toggle="tooltip" title="Archived" data-placement="right">
                            <i data-feather="archive" />
                        </a>
                    </li>
                    
                    <li className="brackets">
                        <a  href="#" data-toggle="modal" data-target="#clients">
                            <i data-feather="settings" />
                        </a>
                    </li>
                    




                    <li>
                        <a href="#" className="dark-light-switcher" data-toggle="tooltip" title="Dark mode" data-placement="right">
                            <i data-feather="moon" />
                        </a>
                    </li>
                    <li data-toggle="tooltip" title="User menu" data-placement="right">
                        <a href="./login.html" data-toggle="dropdown">
                            <figure className="avatar">
                                {
                                    userInfo.img?<img src={require("../../dist/media/img/agente.jpg")} className="rounded-circle" alt="image" />
                                    :<LatterPicture status={true} width="46px" height="46px" fontSize="35px" firstName={getUserInfo.firstName}/>
                                }
                            </figure>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#editProfileModal">Editprofile</a>
                            <a href="#" className="dropdown-item" data-navigation-target="contact-information" onClick={()=>{toggleProfileDisplay()}}>Profile</a>
                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#settingModal">Settings</a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item text-danger" onClick={() => { logout() }}>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavGroup
