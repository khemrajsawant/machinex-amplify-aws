import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Stack from "@mui/material/Stack";
import ControllerCompTextField from "../components/ControllerCompTextField";
import ControllerCompDateField from "./ControllerCompDateField";
import CompFormcontrolRadio from "./CompFormcontrolRadio";
import TestAutocompleteForm from "./TestAutocompleteForm";
import Box from "@mui/material/Box";
export default function InputFieldNonForm(props) {
    const control = props.control;
    const COMPONENTS = props.COMPONENTS.filter((c) => c.show !== false);
    const items = props.items;
    const formName = props.formName;
    return (_jsx(React.Fragment, { children: _jsx(Stack, { direction: "row", useFlexGap: true, flexWrap: "wrap", sx: [
                { width: "100%" },
                { border: 1.5 },
                { borderRadius: "15px" },
                { padding: "1rem" },
                { marginBottom: "0.5rem" },
                { marginTop: "0.5rem" },
                // { borderRight: 1 },
                { borderColor: "white" },
                //  { background: "#f3e5f5" },
                { transition: "background 1s, color 1s" },
                { "&:hover": { backgroundColor: "white", borderRadius: "15px" } },
            ], children: COMPONENTS.map((cmp) => {
                if (cmp.select === true) {
                    return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem" }, children: _jsx(Stack, { spacing: 1, children: _jsx(TestAutocompleteForm, { control: control, label: cmp.label, nameprop: cmp.name, items: items[cmp.label], helpertext: cmp.helpertext, formName: formName }) }) }, cmp.order));
                }
                else if (cmp.input === true) {
                    return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem" }, children: _jsx(Stack, { spacing: 1, sx: { marginBottom: (theme) => theme.spacing(3) }, children: _jsx(ControllerCompTextField, { control: control, label: cmp.label, nameprop: cmp.name, helpertext: cmp.helpertext }) }) }, cmp.order));
                }
                else if (cmp.checkbox === true) {
                    return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem" }, children: _jsx(Stack, { spacing: 1, sx: { marginBottom: (theme) => theme.spacing(3) }, children: _jsx(CompFormcontrolRadio, { control: control, label: cmp.label, nameprop: cmp.name, helpertext: cmp.helpertext }) }) }, cmp.order));
                }
                else if (cmp.date === true) {
                    return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem" }, children: _jsx(Stack, { spacing: 1, sx: { marginBottom: (theme) => theme.spacing(3) }, children: _jsx(ControllerCompDateField, { control: control, label: cmp.label, nameprop: cmp.name, helpertext: cmp.helpertext }) }) }, cmp.order));
                }
            }) }) }));
}
