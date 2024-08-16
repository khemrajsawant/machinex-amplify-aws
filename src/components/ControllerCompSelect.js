import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import FormHeader from "./FormHeader";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
export default function ControllerCompSelectField(props) {
    const { control, items, disabled, label, nameprop, helpertext } = props;
    return (_jsxs(React.Fragment, { children: [_jsx(FormHeader, { headerName: label.replace(/_/g, " "), headerkind: "regular" }), _jsx(FormControl, { error: !!helpertext, sx: { width: (theme) => theme.spacing(10), height: (theme) => theme.spacing(2) }, children: _jsx(Controller, { render: ({ field, fieldState: { error } }) => (_jsxs(_Fragment, { children: [_jsx(Select, { ...field, disabled: disabled, error: !!error, children: items.map((item) => (_jsx(MenuItem, { value: item, children: item }, item))) }), error && _jsx(FormHelperText, { children: helpertext })] })), name: nameprop, control: control, defaultValue: "", rules: { required: true } }) })] }));
}
