import React from 'react'
import "./Chatbox.css"
import {Avatar, Button} from "@material-ui/core"

function Chatbox() {
    return (
        <div className="chatbox">
            <form>
                <div className="chatbox__input">
                    <Avatar src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/105337597_3183482085064983_2756361960060597087_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IRnMJBEJyrsAX-PjvUU&_nc_ht=scontent-ort2-2.xx&oh=9ad33df29db9024d263845c66d0b6b8c&oe=60D944CD"/> 
                    <input placeholder="What's on your mind?" type="text"/>
                    
                </div>
                <input className="chatBox__imageInput" placeholder="Enter image url" type="text"/>
                <Button className="chatbox__chatButton">
                    Chat
                </Button>
            </form>
        </div>
    )
}

export default Chatbox
