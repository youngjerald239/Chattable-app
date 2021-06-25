import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatTwoToneIcon from '@material-ui/icons/RepeatTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
})  {
    return (
        <div className= "post">
          <div className="post__avatar">
          <Avatar src={avatar}/> 
          </div>  
          <div className="post__body">
              <div className="post__header">
                  <div className="post__headerText">
                      <h3>{displayName}{""} <span className="post__headerSpecial">
                          {verified && <VerifiedUserTwoToneIcon className="post__badge"/>}@{username}
                      </span></h3>
                  </div>
                  <div className="post__headerDescription">
                      <p>{text}</p>
                  </div>
              </div>
              <img src={image} alt=""/>
              <div className="post__footer">
                  <ChatBubbleOutlineRoundedIcon fontSize="small"/>
                  <RepeatTwoToneIcon fontSize="small"/>
                  <FavoriteTwoToneIcon fontSize="small"/>
                  <PublishRoundedIcon fontSize="small"/>
              </div>
          </div>
        </div>
    )
}

export default Post
