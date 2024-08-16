import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function CustomizedBackdrop(props) {
    const [open, setOpen] = React.useState(props.open);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'autoHideDuration') {
            return;
        }
        // Your logic here
    };
    setOpen(false);
    // props.onChange()
    return (_jsx(Stack, { spacing: 2, sx: { width: '100%' }, children: _jsx(Backdrop, { sx: { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }, open: open, transitionDuration: 1000, children: _jsx(CircularProgress, { color: "inherit" }) }) }));
}
