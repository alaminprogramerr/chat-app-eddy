import React, { useEffect, useState, useRef } from 'react'
import MainNav from './MainNav'
import NavGroup from './NavGroup'
import ChatHeader from './ChatHeader'
import ChatSidebar from './ChatSidebar'
import FrendSidebar from './FrendSidebar'
import FevorateSidebar from './FevorateSidebar'
import ArchiveSidebar from './ArchiveSidebar'
import ProfileSidebar from './ProfileSidebar'
import ChatFooter from './ChatFooter'
import Massages from './Massages'
import AudioCallModal from './AudioCallModal'
import VideoCallingModal from './VideoCallingModal'
import AddFreindModal from './AddFreindModal'
import GroupCreateModal from './GroupCreateModal'
import ProfileSettingModal from './ProfileSettingModal'
import EditProfileModal from './EditProfileModal'
import TransfarModal from './TransfarModal'
import decoder from 'jwt-decode'
import io from 'socket.io-client'
import { useRecoilState, useRecoilValue } from 'recoil'
import { activeUser, sendSmsInfo, userInfo, activeConversation,socketUsers,allLastSms } from '../../util/recoilState'
import './reDesign.css'
import ClientModal from './ClientModal'
import AllModal from './AllModal'



const Index = () => {
    const [currentConversation, setCurrentConversation] = useState([])
    
    
    const [activeUsers, setActiveUser] = useRecoilState(activeUser)
    const getSendSmsInfo = useRecoilValue(sendSmsInfo)
    const getUserInfo = useRecoilValue(userInfo)
    const getActiveUser = useRecoilValue(activeUser)
    const [getter, setActiveConversation] = useRecoilState(activeConversation)
    const getActiveConversation=useRecoilValue(activeConversation)
    const [getSocketUsers,setSocketUsers]=useRecoilState(socketUsers)
    const [getAllLastSms,setAllLastSms]=useRecoilState(allLastSms)
    let socket = useRef()




    useEffect(() => {
        socket.current = io.connect('/')
        setTimeout(() => {
            socket.current.emit('sendInfo', { email: decoder(window.localStorage.getItem('eddy_app')).email })
        }, 2000);

        socket.current.on('getAllActiveUsers', (data => {
            setAllLastSms(data.allLastSms)
            let dbUsers = data.dbUsers ? data.dbUsers : []
            let socketUser = data.socketUser ? data.socketUser : []
            console.log('last sms are ',getAllLastSms)
            setActiveUser(dbUsers)
            setSocketUsers(socketUser)
        }))

        socket.current.on('getConversation', data => {
            setActiveConversation(data)
        })
    }, [window.location.href])
    const SendSms = () => {
        socket.current.emit('sendSms', getSendSmsInfo)
        setActiveConversation([...getActiveConversation,getSendSmsInfo])
        socket.current.emit('reqAllLastSms',{name:'alamin'})
        console.log(getActiveConversation)
    }
    useEffect(()=>{
        const myConversation=getActiveConversation
        socket.current.on('acceptSms', data => {
            let updatedConversation=[...myConversation,data]
            setActiveConversation(updatedConversation)
            
        })
        socket.current.on('sendAllLastSms',data=>{
            setAllLastSms(data.allLastSms)
        })
    })
    const reqConversation = (to) => {
        socket.current.emit('reqConversation', { from: getUserInfo.email, to: to })
    }

    return (
        <div>
            <div>
                <ClientModal/>
                <AllModal/>
                <AudioCallModal />
                <VideoCallingModal />
                <AddFreindModal />
                <GroupCreateModal />
                <ProfileSettingModal />
                <EditProfileModal />
                <TransfarModal />
                <MainNav />
                <div className="layout">
                    <nav className="navigation">
                        <NavGroup />
                    </nav>
                    <div className="content">
                        <div className="sidebar-group">
                            <ChatSidebar activeUser={activeUser} reqConversation={reqConversation} />
                            <FrendSidebar />
                            <FevorateSidebar />
                            <ArchiveSidebar />
                        </div>
                        <div className="chat">
                            <ChatHeader />
                            <Massages />
                            <ChatFooter sendSms={SendSms} />
                        </div>
                    </div>
                    <div className="sidebar-group">
                        <ProfileSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index