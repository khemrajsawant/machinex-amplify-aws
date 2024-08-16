import { jsx as _jsx } from "react/jsx-runtime";
// import { makeStyles } from '@mui/styles';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
const MaintenanceToaster = ({ open, onClose, variant }) => {
    return (_jsx(Snackbar, { anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, open: open, autoHideDuration: 6000, onClose: onClose, children: _jsx(SnackbarContent, { message: _jsx("span", { id: "maintenance-toaster", children: "\"Under Maintenance\"" }), action: [
                _jsx(IconButton, { "aria-label": "close", color: "inherit", onClick: onClose, children: _jsx(CloseIcon, {}) }, "close"),
            ] }) }));
};
export default MaintenanceToaster;
