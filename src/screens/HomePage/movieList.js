import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from "../../assets/logo.svg";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1500,
    height: 450,
  },
});


function ImageGridList(props) {
  const { classes } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  
    fetch("http://localhost:8085/api/v1/movies")
    .then((response) => response.json())
        .then(response => {
          setMovies(response.movies);
        })
  }, []);

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {movies.map(movie => (
          <GridListTile key={movie.id}>
             <a href={movie.wiki_url}>
            <img src={movie.poster_url} alt={movie.title} />
            </a>
            <GridListTileBar
              title={movie.title}
              subtitle={<span>Release Date: {movie.release_date}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
