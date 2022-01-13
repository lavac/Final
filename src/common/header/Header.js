import React, {useEffect, useState} from "react";
import BasicModal from '../../screens/Login/Login';
import Button from '@mui/material/Button';

import logo from "../../assets/logo.svg";

import "./header.css";


const button = {
  width: 64,
  height: 32,
  variant: 'contained',
  color: 'black',
  bgcolor: 'background.paper',
  border: '2px solid #000',
};

const bookShow = {
  width: 120,
  height: 32
};


class Header extends React.Component {

  constructor(props)
  {
      super(props);

      this.state = {isLoggedIn : false};

      this.ifLoginClicked = this.ifLoginClicked.bind(this);
      this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked()
  {
      this.setState({isLoggedIn : true});
      // this.setState({isTryingToLog : true});

  }

  ifLogoutClicked()
  {
      this.setState({isLoggedIn : false});
  }
  

  render() {
  return (

    <div>
      <header>
        <div className="header">
          <img className="logo" src={logo}/>
          <div className="header-right">
                {
                    (this.state.isLoggedIn)? <div className="loggedInState">
                    <Button sx={bookShow} variant="contained">BOOK SHOW</Button>
                    {/* <Logout clickFunc = {this.ifLogoutClicked} /> */}
                    <Button sx={button} variant="contained" onClick={this.ifLogoutClicked} >LOGOUT</Button>

                    </div>:
                      <BasicModal ifLoginClicked = {this.ifLoginClicked}/>
                } 
          </div>
        </div>
      </header>
      <div className="upcomingMovies"> Upcoming Movies </div>
    </div>

  )
  }
}

export default Header;