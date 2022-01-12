import React from 'react'
import Header from "../../common/header/Header";

import UpcomingList from "./upcomingMovies";
import MovieList from "./movieList";


class Filter extends React.Component {
  render() {
    return (
      <div className="login">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>EMail</p>
            <input type="text"/>
          </label>
          <label>
            <p>Password</p>
            <input type="password"/>
          </label>
        </form>
      </div>
    )
  }
}

export default Filter;

