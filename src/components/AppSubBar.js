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

function AppSubBar() {
  return (
    <div className="AppSubBar">
      <AppBar position="static" className="subBar" elevation={0} style={{backgroundColor: 'white', borderStyle: 'inset', borderTop: '0', minHeight: '66.4px'}}>
        <Toolbar>
          <Button color="black" className="tools"><h4 className="btn-text">우리의 리뷰</h4></Button>
          <Button color="black" className="tools"><h4 className="btn-text">우리의 장터</h4></Button>
          <Button color="black" className="tools"><h4 className="btn-text">우리의 꿀팁</h4></Button>
        </Toolbar>
      </AppBar>
      <div style={{width: 'auto', textAlign: 'center'}}>우리와 함께 삶의 질을 높여보세요</div>
    </div>
  );
}




export default AppSubBar;