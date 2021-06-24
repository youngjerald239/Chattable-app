import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    likes,
    reply
})  {
    return (
        <div className= "post">
          <div className="post__avatar">
          <Avatar src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/105337597_3183482085064983_2756361960060597087_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IRnMJBEJyrsAX-PjvUU&_nc_ht=scontent-ort2-2.xx&oh=9ad33df29db9024d263845c66d0b6b8c&oe=60D944CD"/> 
          </div>  
          <div className="post__body">
              <div className="post__header">
                  <div className="post__headerText">
                      <h3>Jerald Young <span>
                          <VerifiedUserTwoToneIcon className="post__badge"/>
                      </span></h3>
                  </div>
                  <div className="post__headerDescription">
                      <p>Lets build more websites together. Wouldn't mind teaming up!</p>
                  </div>
              </div>
              <img src="https://media2.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt=""/>
          </div>
        </div>
    )
}

export default Post
