import React from 'react';
// import { makeStyles } from '@mui/styles';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';



const MaintenanceToaster = ({ open, onClose, variant }) => {


  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000} // Set to null for indefinite duration
      onClose={onClose}
    >
      <SnackbarContent
        message={
          <span id="maintenance-toaster">
            "Under Maintenance"
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={onClose} >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default MaintenanceToaster;
