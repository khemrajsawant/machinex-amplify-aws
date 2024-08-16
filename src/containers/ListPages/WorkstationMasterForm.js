import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// table
import { useForm } from "react-hook-form";
//store
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { APP_DATA } from "../../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
const WorkstationMasterForm = (props) => {
    const dispatch = useDispatch();
    const { WORKSTATION_MASTER: WORKSTATION_MASTER, OPERATION_MASTER: OPERATION_MASTER, } = useSelector((state) => state.master.APP_DATA);
    // //states
    const table = useSelector((state) => state.master);
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const { control } = useForm({ reValidateMode: "onBlur" });
    const [checked, setChecked] = React.useState(false);
    const SECTION_NAMES = APP_DATA.FORMDATA.DAILY_WORK_REPORT_FORM.SECTIONS;
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    //handlers
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    // handlers
    const setData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "WORKSTATION_MASTER"));
    };
    useEffect(() => {
        try {
            if (enableSave === true) {
                setTimeout(function () {
                    //console.log("This code runs after a delay of 3000 milliseconds.");
                }, 3000);
                google.script.run
                    .withSuccessHandler(setData)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importData("WORKSTATION_MASTER");
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    const setWorkStationData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "OPERATION_MASTER"));
    };
    //console.log("selectedItem", selectedItem);
    useEffect(() => {
        try {
            selectedItem.Workstation &&
                google.script.run
                    .withSuccessHandler(setWorkStationData)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importDataSelectedItem("OPERATION_MASTER", selectedItem.Workstation);
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [selectedItem]);
    //handlers
    const preparePostData = () => {
        const prepdata = {
            WORKSTATION_MASTER: table.WORKSTATION_MASTER.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            // OPERATION_MASTER: table.OPERATION_MASTER.filter(
            //   (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
            // ),
        };
        let temp1 = {
            WORKSTATION_MASTER: prepdata.WORKSTATION_MASTER.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            // OPERATION_MASTER: prepdata.OPERATION_MASTER.filter(
            //   (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
            // ),
        };
        let temp2 = {
            WORKSTATION_MASTER: temp1.WORKSTATION_MASTER.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            // OPERATION_MASTER: temp1.OPERATION_MASTER.filter(
            //   (c:any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
            // ),
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
                setOpen(false);
                setEnableSave(true);
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
            setOpen(false);
            setNotification({
                open: true,
                severity: "warning",
                message: "Save Failed..Couldn't Connect to Server",
            });
        }
    };
    const onChangeHandler = (e) => {
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 3000 });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [
            { marginTop: (theme) => theme.spacing(8) },
            { height: "100vh" }
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
                ], children: [_jsx(FormHeader, { headerName: "WORKSTATION MASTER LIST PAGE" }), _jsxs(Stack, { width: "100%", sx: [
                        // { border: 1 },
                        // { borderLeft: 1 },
                        // { borderRight: 1 },
                        // { borderColor: "primary.main" },
                        // { background: "#90caf9" },
                        ], children: [_jsx(Stack, { width: "100%", sx: [
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
                                    ], children: [_jsx(FormHeader, { headerName: "WORKSTATION MASTER" }), _jsx(FormComponent, { COMPONENTS: WORKSTATION_MASTER.metaData, control: control, items: items.WORKSTATION_MASTER, direction: "row", headerValue: "MACHINE_MASTER", formName: WORKSTATION_MASTER.metaData[0].sheetname, enableButton: true, 
                                            // primarykey={selectedItem}
                                            // prefilled={selectedItem}
                                            onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: table.WORKSTATION_MASTER, columns: WORKSTATION_MASTER.columnsData, formName: WORKSTATION_MASTER.metaData[0].sheetname, pathname: location.pathname, onChange: () => setEnableSave(false) })] }) }), _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                    { marginLeft: "10rem" },
                                    { marginRight: "10rem" },
                                    { marginTop: "2rem" },
                                ], onClick: submitSaveHandler, children: "Submit Form" })] })] })] }));
};
export default WorkstationMasterForm;
