import React from 'react'
import './reDesign.css'
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
const Index = () => {
    return (
        <div>
            <div> 
                <AudioCallModal/>
                <VideoCallingModal/>
                <AddFreindModal/>
                <GroupCreateModal/>
                <ProfileSettingModal/>
                <EditProfileModal/>
                <TransfarModal/>
                <MainNav/>
                <div className="layout">
                    <nav className="navigation">
                        <NavGroup/>          
                    </nav>
                    <div className="content">
                        <div className="sidebar-group">
                            <ChatSidebar/>
                            <FrendSidebar/>
                            <FevorateSidebar/>
                            <ArchiveSidebar/>
                        </div>
                        <div className="chat">
                            <ChatHeader/>
                            <Massages/>
                            <ChatFooter/>
                        </div>
                    </div>
                    <div className="sidebar-group">
                        <ProfileSidebar/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Index