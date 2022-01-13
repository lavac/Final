import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

function SingleLineGridList(props) {
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
      <GridList className={classes.gridList} cols={6}>
        {movies.map(movie => (
          <GridListTile key={movie.id}>
            <a href={movie.wiki_url}>
            <img width="250px" src={movie.poster_url} alt={movie.title} />
            </a>
            <GridListTileBar
              title={movie.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);