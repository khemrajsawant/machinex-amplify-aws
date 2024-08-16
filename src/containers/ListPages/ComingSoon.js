import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
export default function ComingSoon(props) {
    const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
    const [notification, setNotification] = React.useState({ open: false, severity: 'error', message: "Failed", duration: 0 });
    const [enableSave, setEnableSave] = React.useState(true);
    return (_jsxs("div", { children: ["    ", _jsx(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: _jsx("h3", { children: "Coming Soon" }) })] }));
}
