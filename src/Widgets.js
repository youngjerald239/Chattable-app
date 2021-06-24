import React from 'react'
import "./Widgets.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"

function Widgets() {
    return (
        <div className="widgets">
           <div className="widgets__input">
            <SearchRoundedIcon className="widgets__searchIcon"/>
            <input placeholder="Search Chattable" type="text"/>
           </div>
           <div className="widgets__widgetContainer">
               <h2>What's on your mind?</h2>
               <TwitterTweetEmbed tweetId={"1407409199378751491"}/>
               <TwitterTimelineEmbed sourceType="profile" screenName="Toritoomuch" options={{height:600}}/>
               <TwitterShareButton url={"https://twitter.com/ToriTooMuch?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1407409199378751491%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2FToriTooMuch2Fstatus2F1407409199378751491widget%3DTweet"} options={{text:"#reactjs is awesome", via:"Jerald Young"}}/>
           </div>
        </div>
    )
}

export default Widgets
