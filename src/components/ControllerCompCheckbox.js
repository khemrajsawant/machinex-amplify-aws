import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { Fragment } from "react";
import FormHeader from "./FormHeader";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
export default function ControllerCompCheckbox({ control, disabled, label, form, defaultvalue = false, helpertext, nameprop, required = false }) {
    const asciiArray = [79, 77, 32, 73, 78, 68, 85, 83, 84, 82, 73, 69, 83];
    const cname = String.fromCharCode(...asciiArray);
    return (_jsxs(Fragment, { children: [_jsx(FormHeader, { headerName: label.replace(/_/g, " "), headerkind: "regular" }), disabled && form === "EMPLOYEE_MASTER" ? (_jsx("span", { children: defaultvalue.toString() })) : (_jsxs(FormControl, { error: Boolean(helpertext), children: [_jsx(Controller, { render: ({ field }) => (_jsx(Checkbox, { ...field, defaultChecked: defaultvalue, disabled: disabled })), name: nameprop, control: control, defaultValue: defaultvalue, rules: { required } }), helpertext && _jsx(FormHelperText, { children: helpertext })] }))] }));
}
