import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface CustomizedSnackbarsProps {
  open: boolean;
  duration: number;
  severity: string;
  message: string;
  onChange: () => void;
}

export default function CustomizedSnackbars({
  open: propOpen,
  duration,
  severity,
  message,
  onChange
}: CustomizedSnackbarsProps) {
  const [open, setOpen] = React.useState(propOpen);

  React.useEffect(() => {
    setOpen(propOpen);
  }, [propOpen]);

  const vertical: 'top' | 'bottom' = 'bottom';
  const horizontal: 'left' | 'center' | 'right' = 'left';

  const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    onChange();
  };

  const handleAlertClose = (event: React.SyntheticEvent) => {
    setOpen(false);
    onChange();
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={open}
        autoHideDuration={duration}
        onClose={handleSnackbarClose}
      >
        {/* <Alert onClose={handleAlertClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert> */}
      </Snackbar>
    </Stack>
  );
}
