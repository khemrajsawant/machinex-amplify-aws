import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Stack from "@mui/material/Stack";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";
const ControllerCompDateField = (props) => {
    const { disabled, label, nameprop, control, helpertext, required, defaultvalue } = props;
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
    return (_jsx(React.Fragment, { children: _jsxs(Stack, { spacing: 1, display: "flex", children: [_jsx(FormHeader, { headerName: label.replace(/_/g, " "), headerkind: "regular" }), _jsx(Controller, { render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, error: Boolean(error), type: "date", helperText: error ? helpertext : "", sx: [
                            {
                                "& .MuiInputBase-input": {
                                    margin: 0, // Adjust this value as needed
                                    height: 0,
                                    fontSize: "0.8rem",
                                },
                            },
                            { width: (theme) => theme.spacing(20) },
                            { height: (theme) => theme.spacing(4) },
                            {
                                "&:hover": { backgroundColor: "white", borderRadius: "3px" },
                            },
                        ], inputProps: {
                            max: formatDate(new Date()), // Disable dates greater than today
                        } })), name: nameprop, control: control, defaultValue: disabled
                        ? defaultvalue
                        : formatDate(new Date()), rules: { required } })] }) }));
};
export default ControllerCompDateField;
