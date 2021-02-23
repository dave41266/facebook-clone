import React from 'react'
import "./Feed.css";
import MessageSender from "./MessageSender"
import StoryReel from "./StoryReel";

function Feed() {
    return (
        <div classname="feed">
             <StoryReel />
             <MessageSender />
        </div>
    )
}

export default Feed;

