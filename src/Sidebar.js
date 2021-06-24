import React from 'react'
import "./Sidebar.css"
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';
import SidebarOption from './SidebarOption';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import BookmarkBorderTwoToneIcon from '@material-ui/icons/BookmarkBorderTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';

function Sidebar() {
    return (
        <div>
           <div className="sidebar">
               {/* Chattable icon */}
            <QuestionAnswerTwoToneIcon/>
               
            <SidebarOption Icon={HomeWorkTwoToneIcon} text="Home"/>
            <SidebarOption Icon={SearchTwoToneIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneTwoToneIcon} text="Notifications"/>
            <SidebarOption Icon={MailTwoToneIcon} text="Email"/>
            <SidebarOption Icon={BookmarkBorderTwoToneIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltTwoToneIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityTwoToneIcon} text="User"/>
            <SidebarOption Icon={MoreHorizTwoToneIcon} text="More"/>
               {/* SidebarOption */}
               {/* SidebarOption */}

               {/* Button -> Chat */}
           </div> 
        </div>
    )
}

export default Sidebar
