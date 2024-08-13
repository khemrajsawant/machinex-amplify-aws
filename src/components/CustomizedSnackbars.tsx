import * as React from 'react';
import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {

    const [open, setOpen] = React.useState(
       props.open,
   
      );
 
      const vertical = 'bottom'
      const horizontal = 'left'

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'autoHideDuration') {
      return;
    }

    setOpen(false);
    props.onChange()
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar anchorOrigin={{ vertical, horizontal }}  key={vertical + horizontal} open={open} autoHideDuration={props.duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
        {props.message}
        </Alert>
      </Snackbar>

    </Stack>
  );
}