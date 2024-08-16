import { jsx as _jsx } from "react/jsx-runtime";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function FormHeader(props) {
    const typeheader = props.headerkind ? props.headerkind : 'medium';
    if (typeheader == 'medium') {
        return (_jsx(Typography, { children: _jsx(Box, { sx: [{ "fontWeight": 600, m: 0.1, fontSize: "1rem", p: 1.2, borderRadius: "1rem", backgroundColor: "#e0f2f1", width: "100%" }, { textDecoration: 'underline' }, { textTransform: "capitalize" }], children: props.headerName }) }));
    }
    else if (typeheader == 'regular') {
        return (_jsx(Typography, { children: _jsx(Box, { sx: [{ "fontWeight": 500, m: 0.1, fontSize: "0.875rem" }, { textTransform: "capitalize" }], children: props.headerName }) }));
    }
    else if (typeheader == 'pageheader') {
        return (_jsx(Box, { sx: [{ "fontWeight": 600, py: "0.6rem", paddingLeft: "0.5rem", textJustify: "center", m: 0.1, fontSize: "1.2rem", color: "#002d80", borderRadius: "0.25rem", backgroundColor: "#e0f2f1", width: "100%" }, { textTransform: "capitalize" }], children: props.headerName }));
    }
}
