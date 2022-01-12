import React, {useEffect, useState} from "react";

import logo from "../../assets/logo.svg";

import "./header.css";


const Screen = (props) => {

  return (

    <div>
      <header>
        <div className="header">
          <img className="logo" src={logo}/>
          <div className="header-right">
            <a className="active" href="#home">Login</a>
          </div>
        </div>


      </header>
      <div className="upcomingMovies"> Upcoming Movies </div>
    </div>

  )

}


export default Screen;