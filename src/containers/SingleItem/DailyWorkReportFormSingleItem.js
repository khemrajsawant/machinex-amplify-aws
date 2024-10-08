import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// table
//store
import { useSelector } from "react-redux";
// mui library imports
import Collapse from "@mui/material/Collapse";
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
import { Icon } from "@iconify/react";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { fetchMaster } from "../../redux/tableStateGenForm/master/masterReducer";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { useAppDispatch } from "../../redux/tableStateGenForm/store";
const DailyWorkReportFormSingleItem = (props) => {
    const dispatch = useAppDispatch();
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const { EARNING_DETAILS: EARNING_DETAILS, DAILY_WORK_REPORT: DAILY_WORK_REPORT, GENERAL_WORK_DETAILS: GENERAL_WORK_DETAILS, } = useSelector((state) => state.master.APP_DATA);
    // //states
    const [notification, setNotification] = React.useState({
        open: true,
        severity: "success",
        message: "Loading Please wait",
    });
    const table = useSelector((state) => state.master);
    const [checked, setChecked] = React.useState(false);
    const SECTION_NAMES = APP_DATA.FORMDATA.DAILY_WORK_REPORT_FORM.SECTIONS;
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    //handlers
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const setWorkStationData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster({ payload: k, headerName: "OPERATION_MASTER" }));
    };
    //console.log("selectedItem", selectedItem);
    useEffect(() => {
        try {
            google.script.run
                .withSuccessHandler(setWorkStationData)
                .withFailureHandler((er) => {
                alert(er);
            })
                .importData("OPERATION_MASTER");
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, []);
    // handlers
    const setData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster({
            payload: k,
            headerName: "EARNING_DETAILS"
        }));
    };
    useEffect(() => {
        console.log("running on save");
        try {
            if (enableSave === true) {
                selectedItem.Report_No &&
                    google.script.run
                        .withSuccessHandler(setData)
                        .withFailureHandler((er) => {
                        alert(er);
                    })
                        .importDataSelectedItem("EARNING_DETAILS", selectedItem.Report_No);
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    // handlers
    const setDataGen = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster({ payload: k, headerName: "GENERAL_WORK_DETAILS" }));
    };
    useEffect(() => {
        console.log("running on save");
        try {
            if (enableSave === true) {
                selectedItem.Report_No &&
                    google.script.run
                        .withSuccessHandler(setDataGen)
                        .withFailureHandler((er) => {
                        alert(er);
                    })
                        .importDataSelectedItem("GENERAL_WORK_DETAILS", selectedItem.Report_No);
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    //handlers
    const preparePostData = () => {
        const prepdata = {
            EARNING_DETAILS: table.EARNING_DETAILS.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            GENERAL_WORK_DETAILS: table.GENERAL_WORK_DETAILS.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            EARNING_DETAILS: prepdata.EARNING_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            GENERAL_WORK_DETAILS: prepdata.GENERAL_WORK_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            EARNING_DETAILS: temp1.EARNING_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            GENERAL_WORK_DETAILS: temp1.GENERAL_WORK_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
        };
        ////console.log(temp2);
        return temp2;
    };
    const submitSaveHandler = async (e) => {
        try {
            e.stopPropagation();
            setOpen(true);
            // Simulate a time-consuming task
            await new Promise((resolve) => setTimeout(resolve, 2000));
            google.script.run
                .withSuccessHandler(() => {
                setEnableSave(true);
                setOpen(false);
                setNotification({
                    open: true,
                    severity: "success",
                    message: "Save Successful",
                });
            })
                .withFailureHandler((er) => {
                setOpen(false);
                setNotification({
                    open: true,
                    severity: "warning",
                    message: "Save Failed...Try again",
                });
                // alert("save failed in ItemMaster");
            })
                .updateSpecificRecord(preparePostData());
        }
        catch (error) {
            // console.error(error); // You might send an exception to your error tracker like AppSignal
            setNotification({
                open: true,
                severity: "warning",
                message: "Save Failed..Couldn't Connect to Server",
            });
            setOpen(false);
        }
    };
    const onChangeHandler = (e) => {
        if (e.Pending_Quantity == 0) {
            setEnableSave(true);
        }
        else {
            setEnableSave(false);
        }
        console.log(e);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 3000 });
    };
    const itemsINIT = useSelector((state) => state.master.DROPDOWN_DATA_INIT);
    return (_jsxs(Container, { maxWidth: "xl", sx: [
            { marginTop: (theme) => theme.spacing(8) },
            // { border: 1 },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            // { borderColor: "primary.main" },
            // { background: "#90caf9" },
        ], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { sx: [
                    { paddingTop: (theme) => theme.spacing(3) },
                    { paddingBottom: (theme) => theme.spacing(3) },
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
                                ], children: _jsx(TextFieldFreeze, { COMPONENTS: DAILY_WORK_REPORT.metaData, items: items.DAILY_WORK_REPORT, direction: "row", headerValue: "MACHINE_MASTER", formName: DAILY_WORK_REPORT.metaData[0].sheetname, prefilled: selectedItem, enableButton: false }) }), _jsx(Stack, { direction: "row", width: "100%", children: _jsxs(Stack, { width: "100%", children: [_jsx(FormHeader, { headerName: SECTION_NAMES.SECTION_2 }), _jsx(FormComponent, { COMPONENTS: EARNING_DETAILS.metaData, items: itemsINIT.EARNING_DETAILS, direction: "row", headerValue: "EARNING_DETAILS", formName: EARNING_DETAILS.metaData[0].sheetname, COMPONENTS_COLUMNSDATA: EARNING_DETAILS.columnsData, prefilled: table.EARNING_DETAILS, enableButton: true, isMaster: props.isMaster, primarykey: selectedItem, onChange: onChangeHandler }), _jsx(Stack, { width: "100%", sx: [
                                            // { border: 1 },
                                            // { borderLeft: 1 },
                                            // { borderRight: 1 },
                                            // { borderColor: "primary.main" },
                                            // { background: "#90caf9" },
                                            ], children: _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: table.EARNING_DETAILS, columns: EARNING_DETAILS.columnsData, formName: EARNING_DETAILS.metaData[0].sheetname, onChange: () => setEnableSave(false) }) })] }) })] }), _jsxs(Stack, { width: "100%", sx: [
                        // { border: 1 },
                        // { borderLeft: 1 },
                        // { borderRight: 1 },
                        // { borderColor: "primary.main" },
                        // { background: "#90caf9" },
                        ], children: [_jsxs(Stack, { direction: "row", width: "100%", sx: [
                                    { my: "1rem" },
                                    { px: "1rem" },
                                    { py: "0.3rem" },
                                    { border: 1 },
                                    { borderRadius: "15px" },
                                    // { borderLeft: 1 },
                                    // { borderRight: 1 },
                                    { borderColor: "white" },
                                    //  { background: "#f3e5f5" },
                                    { transition: "background 1s, color 1s" },
                                    { "&:hover": { backgroundColor: "white", borderRadius: "15px" } },
                                ], children: [_jsx(FormHeader, { headerName: SECTION_NAMES.SECTION_3 }), _jsx(FormControlLabel, { control: _jsx(Icon, { icon: "ic:outline-expand-more", width: "32", height: "32", vFlip: checked, onClick: handleChange }), label: "Show", sx: [{ marginLeft: "80%" }, { px: "1rem" }] })] }), _jsx(Collapse, { in: checked, collapsedSize: 0, children: _jsx(Stack, { width: "100%", sx: [
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
                                        ], children: [_jsx(FormComponent, { COMPONENTS: GENERAL_WORK_DETAILS.metaData, items: items.GENERAL_WORK_DETAILS, direction: "row", headerValue: "GENERAL_WORK_DETAILS", formName: GENERAL_WORK_DETAILS.metaData[0].sheetname, prefilled: table.EARNING_DETAILS, enableButton: true, isMaster: props.isMaster, primarykey: selectedItem, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: table.GENERAL_WORK_DETAILS, columns: GENERAL_WORK_DETAILS.columnsData, formName: GENERAL_WORK_DETAILS.metaData[0].sheetname, onChange: () => setEnableSave(false) })] }) }) }), _jsx(Button, { disabled: enableSave, variant: "outlined", sx: [
                                    { marginLeft: "10rem" },
                                    { marginRight: "10rem" },
                                    { marginTop: "2rem" },
                                ], onClick: submitSaveHandler, children: "Submit Form" })] })] })] }));
};
export default DailyWorkReportFormSingleItem;
