import { Avatar } from "@material-ui/core";
import React from "react"
import "./MessageSender.css";

function MessageSender() {

/** this preventDefault() prevents HIDDEN BUTTON from being displayed */
const handleSubmit = e =>  {
    e.preventDefault();
}

    return <div className="messageSender">
        <div className="messageSender__top">
            <Avatar />
            <form>
                <input
                    className="messageSender__input"
                    placeholder={'What is on your mind'}
                />
                <input placeholder="image URL (optional" />  
                <button onClick={handleSubmit} type="submit">
                    Hidden Buttton
                </button>          
            </form>
        </div>
        <div className="messageSender__bottom">
        
        
        </div>
    
    
    
    
    </div>
}

export default MessageSender;

