import React, { useState } from "react";
import "./AppHeader.css";
//UI import
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from "@material-ui/core";

function AppHeader() {
  return (
    <div className="AppHeader">
      <AppBar position="static" className="mainBar" elevation={0}  style={{backgroundColor: 'white', borderStyle: 'inset', borderTop: '0'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="black"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className="title" variant="h6" noWrap>
            우리
          </Typography>
          <div className="section">
            <Button style={{marginRight: '10px'}}>로그인</Button>
            <Button variant="outlined" style={{marginRight: '10px', marginLeft: '10px'}}>SIGN UP</Button>
            <IconButton aria-label="show 4 new mails" color="black" style={{marginRight: '10px', marginLeft: '10px'}}>
              <Badge badgeContent={3} color="secondary"> 
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="black">
                <PersonIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default AppHeader;