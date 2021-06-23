import React from 'react'
import "./Sidebar.css"
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div>
           <div className="sidebar">
               {/* Chattable icon */}
            <QuestionAnswerTwoToneIcon/>
               
            <SidebarOption/>
            <SidebarOption/>
            <SidebarOption/>
            <SidebarOption/>
               {/* SidebarOption */}
               {/* SidebarOption */}
               {/* SidebarOption */}
               {/* SidebarOption */}
               {/* SidebarOption */}
               {/* SidebarOption */}

               {/* Button -> Chat */}
           </div> 
        </div>
    )
}

export default Sidebar
