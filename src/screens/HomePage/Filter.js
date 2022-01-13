import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {TextField, Button, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuItem from '@material-ui/core/MenuItem';
const button = {
  width: 504,
  height: 32
};
  export default function Filter() {
    return (
  <Card sx={{ minWidth: 275, margin: 'theme.spacing.unit', maxWidth: 240}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: "blue" }} gutterBottom>
        FIND MOVIES BY:
         </Typography>
         <Stack>
         <TextField id="filled-basic" label="Movie Name" variant="filled" />
         <InputLabel id="demo-simple-select-label">Genres</InputLabel>
       <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           label="Genres"
         >
           <MenuItem value={10}>Comedy</MenuItem>
           <MenuItem value={20}>Romantic</MenuItem>
           <MenuItem value={30}>Thriller</MenuItem>
           <MenuItem value={40}>Horror</MenuItem>
       </Select>
       <InputLabel id="demo-simple-select-label">Artists</InputLabel>

       <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           label="Artists"
         >
           <MenuItem value={10}>Stephanie Sigman</MenuItem>
           <MenuItem value={20}>Leonardo DiCaprio</MenuItem>
           <MenuItem value={30}>Matthew McConaughey</MenuItem>
           <MenuItem value={40}>Anne Hathaway</MenuItem>
       </Select>

       <TextField hiddenLabel type="date" label="Release Date Start" variant="filled" />
       <TextField hiddenLabel type="date" label="Release Date End" variant="filled" />
       </Stack>
      </CardContent>
      <CardActions>
      <Button sx={button} variant="contained" color="primary">APPLY</Button>
      </CardActions>
    </Card>
    );
}
