import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import { SubscriptionsOutlinedIcon } from '@material-ui/icons/SubscriptionsOutlined';


function Header() {
    return (
        <div className="header">
            <div className="header__left"></div>
                <img
                    src="https://upload.wikimedia.org/
                    wikipedia/commons/thumb/5/51/
                    Facebook_f_logo_%282019%29.svg/
                    1200px-Facebook_f_logo_%282019%29.svg.png_"
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                </div>
            <div className="header__center">
                <div className="header__option">
                    <i className="fab fa-font-awesome-flag"></i>
                </div> 
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div> 
                <div className="header__option">
                    <StoreOutlinedIcon fontSize="large" />    
                </div> 
                <div className="header__option">
                    <SupervisorAccountOutlinedIcon fontSize="large" />    
                </div> 
            </div>
            <div className="header__right">
                <Avatar alt="logo192" src="/public/logo192.png" />
                <h4>ssssangha</h4>  
            </div> 
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>        
        </div>
    )
}

export default Header
