import React from 'react'
import Header from "../../common/header/Header";

import UpcomingList from "./upcomingMovies";
import Filter from "./Filter";
import MovieList from "./movieList";

import "./Homepage.css"


class HomePage extends React.Component {


  render() {
    return (

      <div>

        <Header></Header>
        <UpcomingList></UpcomingList>
        <br /> 
        <div className="Parent">
          <div className="child1">
            <MovieList></MovieList>
          </div>
          <div className="child2">
            <Filter></Filter>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;
