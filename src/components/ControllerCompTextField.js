import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";
import FormHeader from "./FormHeader";
import { CircularProgress } from "@mui/material";
const ControllerComTextField = (props) => {
    const { control, disabled = false, loading = false, defaultvalue = '', label, customStyles = {}, helpertext = '', nameprop, required = false, form = '' } = props;
    const asciiArray = [79, 77, 32, 73, 78, 68, 85, 83, 84, 82, 73, 69, 83];
    const cname = String.fromCharCode(...asciiArray);
    const baseStyles = {
        inputRoot: {
            "& .MuiInput-root": {
                "&:before, :after, :hover:not(.mui-disabled):before": {
                    borderBottom: 0,
                },
            },
        },
        inputBase: {
            "& .MuiInputBase-input": {
                margin: 0,
                height: '2rem',
                fontSize: "0.8rem",
            },
        },
        textField: {
            // width: (theme) => theme.spacing("10rem"), // Default width
            "&:hover": { backgroundColor: "white", borderRadius: "3px" },
        },
    };
    return (_jsxs(React.Fragment, { children: [_jsx(FormHeader, { headerName: label.replace(/_/g, " "), headerkind: "regular" }), disabled && form === "EMPLOYEE_MASTER" ? (_jsx("span", { children: defaultvalue })) : (_jsx(Controller, { render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, disabled: disabled, variant: disabled ? "standard" : "outlined", error: !!error, helperText: error ? helpertext : "", sx: [
                        baseStyles.inputRoot,
                        baseStyles.inputBase,
                        { width: customStyles.width },
                        baseStyles.textField,
                    ], InputProps: {
                        endAdornment: loading && _jsx(CircularProgress, { size: 20 }),
                        sx: { height: "2rem", border: disabled ? 0 : "3px" },
                    } })), name: nameprop, control: control, defaultValue: disabled && form === "COMPANY_INFORMATION" ? cname : defaultvalue, rules: { required } }))] }));
};
export default ControllerComTextField;
