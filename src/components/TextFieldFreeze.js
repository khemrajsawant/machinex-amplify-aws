import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { createMaster } from "../redux/tableStateGenForm/master/masterReducer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import FormHeader from "./FormHeader";
// import {calcCostHandler} from '../business/processBusinessLogic'
import { useSelector } from "react-redux";
import { processData } from "../business/processBusinessLogic";
// var _ = require('lodash/fp');
export default function TextFieldFreeze(props) {
    const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
    const COMPONENTS = props.COMPONENTS.filter((c) => c.name != "ID");
    const headerName = props.headerValue;
    const formName = COMPONENTS[0].sheetname;
    const primarykey = props.primarykey;
    const enableButton = props.enableButton;
    //   const isMaster = COMPONENTS[0].form===formName;
    // //console.log("isMaster",isMaster)
    const [id, setId] = React.useState(0);
    const tableWorkStationMaster = useSelector((state) => state.master.WORKSTATION_MASTER);
    const defaultValuesArray = props.prefilled ? props.prefilled : {};
    ////console.log("tableWorkStationMaster", tableWorkStationMaster);
    const dispatch = useDispatch();
    // function pad(num, size, wNo) {
    //   num = num.toString();
    //   while (num.length < size) num = "0" + num;
    //   return wNo + "-" + num;
    // }
    const onSubmit = (data) => {
        ////console.log(data)
        let input = { data, tableWorkStationMaster, id, primarykey };
        const processedData = processData(formName, input);
        dispatch(createMaster(processedData, formName));
        setId(id + 1);
    };
    const items = props.items;
    ////console.log("itemsData",items)
    return (_jsx(React.Fragment, { children: _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs(Stack, { direction: props.direction, sx: [
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
                    { backgroundColor: "white", borderRadius: "15px" }
                ], useFlexGap: true, flexWrap: "wrap", children: [COMPONENTS.map((cmp) => {
                        if (cmp.show == true) {
                            if (cmp.select === true) {
                                return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem", backgroundColor: "#e0f2f1", borderRadius: "10px", p: 1, m: 1, minWidth: "10rem" }, children: _jsxs(Stack, { spacing: 1, sx: { marginBottom: (theme) => theme.spacing(2) }, children: [_jsx(FormHeader, { headerName: cmp.label.replace(/_/g, " "), headerkind: "regular" }), _jsx("span", { name: cmp.name, style: { fontSize: "0.8rem" }, children: defaultValuesArray[cmp.name] })] }) }, cmp.order));
                            }
                            else if (cmp.input === true) {
                                return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem", backgroundColor: "#e0f2f1", borderRadius: "10px", p: 1, m: 1, minWidth: "10rem" }, children: _jsxs(Stack, { spacing: 1, sx: { marginBottom: (theme) => theme.spacing(3) }, children: [_jsx(FormHeader, { headerName: cmp.label.replace(/_/g, " "), headerkind: "regular" }), _jsx("span", { name: cmp.name, style: { fontSize: "0.8rem" }, children: defaultValuesArray[cmp.name] })] }) }, cmp.order));
                            }
                            else if (cmp.checkbox === true) {
                                return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem", backgroundColor: "#e0f2f1", borderRadius: "10px", p: 1, m: 1, minWidth: "10rem" }, children: _jsxs(Stack, { spacing: 1, sx: { marginBottom: (theme) => theme.spacing(3) }, children: [_jsx(FormHeader, { headerName: cmp.label.replace(/_/g, " "), headerkind: "regular" }), _jsx("span", { name: cmp.name, style: { fontSize: "0.8rem" }, children: defaultValuesArray[cmp.name] })] }) }, cmp.order));
                            }
                            else if (cmp.date === true) {
                                return (_jsx(Box, { order: cmp.order, sx: { marginLeft: "1rem", backgroundColor: "#e0f2f1", borderRadius: "10px", p: 1, m: 1, minWidth: "10rem" }, children: _jsxs(Stack, { spacing: 1, sx: { marginBottom: (theme) => theme.spacing(3) }, children: [_jsx(FormHeader, { headerName: cmp.label.replace(/_/g, " "), headerkind: "regular" }), _jsx("span", { name: cmp.name, style: { fontSize: "0.8rem" }, children: defaultValuesArray[cmp.name] })] }) }, cmp.order));
                            }
                        }
                    }), _jsx(Box, { order: 20, display: "flex", justifyContent: "center", alignItems: "center", sx: { marginLeft: "1rem" }, children: enableButton === true && (_jsx(Button, { type: "submit", variant: "contained", size: "small", sx: [
                                { minWidth: (theme) => theme.spacing(15) },
                                { maxHeight: (theme) => theme.spacing(5) },
                            ], children: "Add Entry" })) })] }) }) }));
}
