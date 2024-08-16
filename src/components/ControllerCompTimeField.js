import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Stack from "@mui/material/Stack";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";
export default function ControllerCompTimeField({ label, helpertext = "", nameprop, control, defaultvalue, required = false, }) {
    return (_jsx(React.Fragment, { children: _jsxs(Stack, { spacing: 1, display: "flex", children: [_jsx(FormHeader, { headerName: label.replace(/_/g, " "), headerkind: "regular" }), _jsx(Controller, { render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, error: !!error, type: "time", helperText: error ? helpertext : "", sx: [
                            { "& .MuiInputBase-input": {
                                    margin: 0,
                                    height: 0,
                                    fontSize: "0.8rem"
                                } },
                            { width: (theme) => theme.spacing(10) }, { height: (theme) => theme.spacing(2) },
                            {
                                "&:hover": { backgroundColor: "white", borderRadius: "3px" },
                            },
                        ], InputProps: { sx: { height: "2rem" } } })), name: nameprop, control: control, defaultValue: defaultvalue, rules: { required } })] }) }));
}
