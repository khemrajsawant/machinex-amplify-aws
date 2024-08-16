import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return _jsx(MuiAlert, { elevation: 6, ref: ref, variant: "filled", ...props });
});
export default function CustomizedSnackbars({ open: propOpen, duration, severity, message, onChange }) {
    const [open, setOpen] = React.useState(propOpen);
    React.useEffect(() => {
        setOpen(propOpen);
    }, [propOpen]);
    const vertical = 'bottom';
    const horizontal = 'left';
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        onChange();
    };
    const handleAlertClose = (event) => {
        setOpen(false);
        onChange();
    };
    return (_jsx(Stack, { spacing: 2, sx: { width: '100%' }, children: _jsx(Snackbar, { anchorOrigin: { vertical, horizontal }, open: open, autoHideDuration: duration, onClose: handleSnackbarClose }, vertical + horizontal) }));
}
