import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import FormHeader from "./FormHeader";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Autocomplete } from "@mui/material";
export default function MultiSelectAutocompleteForm(props) {
    const dispatch = useDispatch();
    const disabled = props.disabled;
    const table = useSelector((state) => state.master.DROPDOWN_DATA);
    ////console.log(table);
    const [toggle, setToggle] = useState(false);
    // const control = props.control;
    const [value, setValue] = useState("");
    const [reference, setReference] = useState(props.defaultvalue);
    let optionsData = table[props.formName][props.label];
    ////console.log("reference", reference);
    const [searchHistoryReference, setSearchHistoryReference] = useState(optionsData);
    useEffect(() => {
        console.log("dd data", table[props.formName][props.label]);
        setSearchHistoryReference(table[props.formName][props.label]);
    }, [props.items]);
    const handleUpdateSearchHistoryReference = (number) => {
        if (searchHistoryReference.indexOf(number) === -1) {
            if (searchHistoryReference.length >= 30) {
                searchHistoryReference.length = 30;
            } // limit the search history to 30 prior
            setSearchHistoryReference([number, ...searchHistoryReference]); // most recently searched at top (append to beginning of array vs. end)
        }
    };
    // const handleClick = (e) => {
    //   e.preventDefault();
    //   setToggle(!toggle);
    // };
    const handleOptionDelete = (option) => {
        setSearchHistoryReference((state) => state.filter((opt) => opt !== option));
    };
    const [selectedOptions, setSelectedOptions] = useState([]);
    const allSelected = searchHistoryReference.length === selectedOptions.length;
    const handleToggleOption = (selectedOptions) => setSelectedOptions(selectedOptions);
    const handleClearOptions = () => {
        setSelectedOptions([]);
        setReference([]);
    };
    const getOptionLabel = (option) => `${option.label}`;
    const handleSelectAll = (isSelected) => {
        if (isSelected) {
            setSelectedOptions(searchHistoryReference);
            setReference(searchHistoryReference);
        }
        else {
            handleClearOptions();
        }
    };
    // console.log({
    //   selectedOptions: selectedOptions,
    //   searchHistoryReference: searchHistoryReference,
    //   reference: reference,
    // });
    const handleToggleSelectAll = () => {
        handleSelectAll && handleSelectAll(!allSelected);
    };
    const handleChange = (event, selectedOptions, reason) => {
        // setValue(selectedOptions);
        // setReference(selectedOptions);
        // onChange(selectedOptions);
        if (reason === "selectOption" || reason === "removeOption") {
            console.log("selectedOptions", selectedOptions);
            if (selectedOptions.find((option) => option === "Select all")) {
                console.log("selected all");
                handleToggleSelectAll();
                let result = [];
                result = searchHistoryReference.filter((el) => el !== "Select all");
                //console.log("all selectedOptions result", result);
                // setReference(result);
                // setValue(result);
                // onChange(result);
                // return onChange(result);
            }
            else {
                console.log("other options");
                handleToggleOption && handleToggleOption(selectedOptions);
                // setValue(selectedOptions);
                // console.log("other options value",value)
                // onChange(selectedOptions);
                // return onChange(selectedOptions);
            }
        }
        else if (reason === "clear") {
            handleClearOptions && handleClearOptions();
            setValue("");
        }
    };
    // if (toggle === true) {
    return (_jsxs(React.Fragment, { children: [_jsx(FormHeader, { headerName: props.label.replace(/_/g, " "), headerkind: "regular" }), _jsx(Stack, { direction: "row", children: _jsx(Controller, { render: ({ field, fieldState: { error } }) => {
                        const { onChange, ref } = field;
                        return (_jsx(Autocomplete, { freeSolo: true, disabled: disabled, ListboxProps: {
                                sx: {
                                    minHeight: "3rem",
                                    maxHeight: "8rem",
                                },
                            }, sx: {
                                width: "60rem",
                                "& .MuiChip-root": {
                                    backgroundColor: "#e0e0e0", // Set the background color
                                    color: "#333", // Set the text color
                                    marginRight: "4px", // Add spacing between chips
                                    fontSize: "0.6rem", // Adjust the font size
                                    // Add more styles as needed
                                },
                                "& .MuiInputBase-root": {
                                    height: "8rem",
                                    overflowY: "auto",
                                    fontSize: "0.8rem",
                                },
                            }, disableCloseOnSelect: true, filterOptions: (options) => ["Select all", ...options], value: selectedOptions, onChange: (event, selectedOptions, reason) => {
                                let result = [];
                                result = searchHistoryReference.filter((el) => el !== "Select all");
                                if (selectedOptions.find((option) => option === "Select all")) {
                                    onChange(result);
                                }
                                else {
                                    onChange(selectedOptions);
                                }
                                handleChange(event, selectedOptions, reason);
                            }, 
                            // onInputChange={(event, newInputValue) => {
                            //   setValue(newInputValue);
                            // }}
                            options: searchHistoryReference, renderOption: (propst, option, { selected }) => {
                                //console.log("render", option, "selected",selected );
                                const selectAllProps = option === "Select all" // To control the state of 'select-all' checkbox
                                    ? { checked: allSelected }
                                    : {};
                                return (_jsx(_Fragment, { children: _jsxs(ListItem, { style: { width: "auto" }, ...propst, children: [" ", _jsx(Checkbox, { color: "primary", 
                                                // icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                // checkedIcon={<CheckBoxIcon fontSize="small" />}
                                                style: { marginRight: 8 }, checked: selected, ...selectAllProps }), _jsx(ListItemText, { primary: _jsx("span", { style: {
                                                        fontSize: "0.8rem",
                                                        margin: "0.5rem",
                                                    }, children: option }) })] }) }));
                            }, renderInput: (params) => (_jsx(TextField, { ...params, disabled: disabled, onChange: handleChange, variant: "outlined", error: error !== undefined, helperText: error ? props.helpertext : "", defaultValue: props.defaultvalue, onBlur: () => {
                                    field.onBlur();
                                }, 
                                // helperText={error ? props.helpertext : ""}
                                sx: {
                                    "& .MuiInputBase-input": {
                                        margin: 0, // Adjust this value as needed
                                        height: 0,
                                        fontSize: "0.8rem",
                                    },
                                } })) }));
                    }, name: props.nameprop, control: props.control, defaultValue: "", rules: { required: props.required } }) })] }));
}
