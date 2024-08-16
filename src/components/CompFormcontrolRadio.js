import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";
const CompFormcontrolRadio = (props) => {
    const { control, disabled, defaultvalue, label, nameprop, required } = props;
    return (_jsx(React.Fragment, { children: _jsxs(Stack, { spacing: 1, display: "flex", children: [_jsx(FormHeader, { headerName: label.replace(/_/g, " "), headerkind: "regular" }), _jsx(FormControl, { sx: { height: (theme) => theme.spacing(4) }, children: _jsx(Controller, { control: control, name: nameprop, defaultValue: "male", rules: { required }, render: ({ field }) => (_jsxs(RadioGroup, { ...field, defaultValue: defaultvalue, row: true, children: [_jsx(FormControlLabel, { value: "male", control: _jsx(TextField, { ...field, type: "radio", value: "male", disabled: disabled, sx: [
                                            {
                                                "& .MuiInputBase-input": {
                                                    margin: 0,
                                                    height: "1rem",
                                                    fontSize: "0.8rem",
                                                },
                                            },
                                            { width: (theme) => theme.spacing(6) },
                                            { "& fieldset": { border: "none" } },
                                        ] }), label: "Male" }), _jsx(FormControlLabel, { value: "female", sx: [
                                        {
                                            "& .MuiInputBase-input": {
                                                margin: 0,
                                                height: "1rem",
                                            },
                                        },
                                    ], control: _jsx(TextField, { ...field, disabled: disabled, type: "radio", value: "female", sx: [
                                            {
                                                "& .MuiInputBase-input": {
                                                    margin: 0,
                                                    height: "1rem",
                                                    fontSize: "0.8rem",
                                                },
                                            },
                                            { width: (theme) => theme.spacing(6) },
                                            { "& fieldset": { border: "none" } },
                                        ] }), label: "Female" }), _jsx(FormControlLabel, { value: "other", control: _jsx(TextField, { ...field, disabled: disabled, type: "radio", value: "other", sx: [
                                            {
                                                "& .MuiInputBase-input": {
                                                    margin: 0,
                                                    height: "1rem",
                                                    fontSize: "0.8rem",
                                                },
                                            },
                                            { width: (theme) => theme.spacing(6) },
                                            { "& fieldset": { border: "none" } },
                                        ] }), label: "Other" })] })) }) })] }) }));
};
export default CompFormcontrolRadio;
