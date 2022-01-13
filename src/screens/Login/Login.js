import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Modal, TextField, Stack} from '@mui/material';
import color from '@material-ui/core/colors/amber';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const button = {
  width: 64,
  height: 32,
  variant: 'contained',
  color: 'black',
  bgcolor: 'background.paper',
  border: '2px solid #000',
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={button} onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2"> */}
          <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off">
          <TextField id="filled-basic" label="Username*" variant="filled" />
          <TextField id="filled-basic" label="Password*" variant="filled" />
          <Button variant="contained" onClick={props.ifLoginClicked} >LOGIN</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}