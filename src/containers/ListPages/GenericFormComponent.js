import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// table
import { useForm } from "react-hook-form";
//store
import { useSelector } from "react-redux";
// mui library imports
import Collapse from "@mui/material/Collapse";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { APP_DATA } from "../../utils/constant";
import InputFieldNonForm from "../../components/InputFieldNonForm";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
const GenericFormComponent = () => {
    const { EARNING_DETAILS: EARNING_DETAILS, DAILY_WORK_REPORT: DAILY_WORK_REPORT, GENRAL_WORK_DETAILS: GENRAL_WORK_DETAILS, } = useSelector((state) => state.master.APP_DATA);
    // //states
    const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const [checked, setChecked] = React.useState(false);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const SECTION_NAMES = APP_DATA.FORMDATA.DAILY_WORK_REPORT_FORM.SECTIONS;
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    //handlers
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const submitSaveHandler = (e) => {
        try {
            e.stopPropagation();
            google.script.run
                .withSuccessHandler(() => {
                setEnableSave(true);
                setNotification({ open: true, severity: 'success', message: "Save Successful" });
            })
                .withFailureHandler((er) => {
                alert("save failed in GenericCOmp");
            })
                .postData(table.tableData, "GENRAL_WORK_DETAILS");
        }
        catch (error) {
            // console.error(error); // You might send an exception to your error tracker like AppSignal
            return "Failed!";
        }
    };
    const onChangeHandler = (e) => {
        setEnableSave(false);
    };
    const table = useSelector((state) => state.master);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: 'error', message: "Failed" });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [
            { marginTop: (theme) => theme.spacing(8) },
            // { border: 1 },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            // { borderColor: "primary.main" },
            // { background: "#90caf9" },
        ], children: [notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { sx: [
                // { border: 1 },
                // { borderLeft: 1 },
                // { borderRight: 1 },
                // { borderColor: "primary.main" },
                ], children: [_jsx(FormHeader, { headerName: "DAILY WORK REPORT" }), _jsxs(Stack, { sx: [
                            { border: 1 },
                            { padding: "1rem" },
                            { borderRadius: 3 },
                            // { borderRight: 1 },
                            // { background: (theme) =>'#e3f2fd' },
                            {
                                borderColor: (theme) => theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
                            },
                        ], children: [_jsx(FormHeader, { headerName: SECTION_NAMES.SECTION_1 }), _jsx(Stack, { sx: [
                                // { border: 1 },
                                // { borderLeft: 1 },
                                // { borderRight: 1 },
                                // { borderColor: "primary.main" },
                                // { background: "#90caf9" },
                                ], children: _jsx(InputFieldNonForm, { COMPONENTS: DAILY_WORK_REPORT.metaData, control: control, items: items.DAILY_WORK_REPORT, formName: DAILY_WORK_REPORT.metaData[0].sheetname }) }), _jsx(Stack, { direction: "row", width: "100%", children: _jsxs(Stack, { width: "100%", children: [_jsx(FormHeader, { headerName: SECTION_NAMES.SECTION_2 }), _jsx(FormComponent, { COMPONENTS: EARNING_DETAILS.metaData, items: items.EARNING_DETAILS, direction: "row", headerValue: "EARNING_DETAILS", formName: props.routetext, enableButton: true, primarykey: selectedItem, onChange: onChangeHandler }), _jsx(Stack, { width: "100%", sx: [
                                            // { border: 1 },
                                            // { borderLeft: 1 },
                                            // { borderRight: 1 },
                                            // { borderColor: "primary.main" },
                                            // { background: "#90caf9" },
                                            ], children: _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: table.earnings, columns: EARNING_DETAILS.columnsData, formName: props.routetext, onChange: () => setEnableSave(false) }) })] }) })] }), _jsxs(Stack, { width: "100%", sx: [
                        // { border: 1 },
                        // { borderLeft: 1 },
                        // { borderRight: 1 },
                        // { borderColor: "primary.main" },
                        // { background: "#90caf9" },
                        ], children: [_jsxs(Stack, { direction: "row", width: "100%", sx: [
                                // { border: 1 },
                                // { borderLeft: 1 },
                                // { borderRight: 1 },
                                // { borderColor: "primary.main" },
                                // { background: "#90caf9" },
                                ], children: [_jsx(FormHeader, { headerName: SECTION_NAMES.SECTION_3 }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: checked, onChange: handleChange }), label: "Show" })] }), _jsx(Collapse, { in: checked, collapsedSize: 0, children: _jsx(Stack, { width: "100%", sx: [
                                        { border: 1 },
                                        { padding: "1rem" },
                                        { borderRadius: 3 },
                                        // { borderRight: 1 },
                                        // { background: (theme) =>'#e3f2fd' },
                                        {
                                            borderColor: (theme) => theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
                                        },
                                    ], children: _jsxs(Box, { sx: [
                                            { width: "100%" },
                                            // { border: 1 },
                                            // { borderLeft: 1 },
                                            // { borderRight: 1 },
                                            // { borderColor: "primary.main" },
                                        ], children: [_jsx(FormComponent, { COMPONENTS: GENRAL_WORK_DETAILS.metaData, items: items.GENRAL_WORK_DETAILS, direction: "row", headerValue: "GENRAL_WORK_DETAILS", formName: props.routetext, enableButton: true, primarykey: selectedItem, onChange: () => null }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: table.generalWork, columns: GENRAL_WORK_DETAILS.columnsData, formName: props.routetext })] }) }) }), _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                    { marginLeft: "10rem" },
                                    { marginRight: "10rem" },
                                    { marginTop: "2rem" },
                                ], onClick: submitSaveHandler, children: "Submit Form" })] })] })] }));
};
export default GenericFormComponent;
