import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// table
//store
import { useSelector } from "react-redux";
// mui library imports
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Icon } from "@iconify/react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { useEffect } from "react";
// import { useLocation } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import metadataSelect from "../utils/metadataSelect.json";
import { updateSelectMetaData, } from "../../redux/tableStateGenForm/master/masterReducer";
import { fetchMaster } from "../../redux/tableStateGenForm/master/masterReducer";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { useAppDispatch } from "../../redux/tableStateGenForm/store";
const ItemMasterInputFormSelectedItem = (props) => {
    //query params
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const { primaryKey } = useParams();
    // fetch Data from server
    const [open, setOpen] = React.useState(false);
    const [refreshDropDowns, setRefreshDropDowns] = React.useState(false);
    const [notification, setNotification] = React.useState({
        open: true,
        severity: "success",
        message: "Loading Please wait",
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const setDropDowns = (data) => {
        dispatch(updateSelectMetaData(data));
        setRefreshDropDowns(false);
    };
    // handlers
    const setWorkstationData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster({ payload: k, headerName: "WORKSTATION_MASTER" }));
    };
    useEffect(() => {
        try {
            google.script.run
                .withSuccessHandler(setWorkstationData)
                .withFailureHandler((er) => {
                alert(er);
            })
                .importData("WORKSTATION_MASTER");
        }
        catch (error) {
            setNotification({
                open: true,
                severity: "error",
                message: "Couldn't Import Server Data",
            });
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, []);
    useEffect(() => {
        // if (refreshDropDowns === true) {
        try {
            google.script.run
                .withSuccessHandler(setDropDowns)
                .withFailureHandler((er) => {
                ////console.log("using local copy of configlocalhost");
                // setUserInfo({userName:"Guest"})
                alert("BOP dropdown failed");
            })
                .getUniqueDropdowns();
        }
        catch (error) {
            // setDropDowns(metadataSelect)
            setNotification({
                open: true,
                severity: "error",
                message: "Couldn't Import Server Data",
            });
            // alert("dropdown failed");
        }
        // }
    }, [refreshDropDowns]);
    const dispatch = useAppDispatch();
    const { ITEM_MASTER: ITEM_MASTER, BILL_OF_PROCESS: BILL_OF_PROCESS } = useSelector((state) => state.master.APP_DATA);
    const tableItemMaster = useSelector((state) => state.master.ITEM_MASTER);
    const tableBillOfProcess = useSelector((state) => state.master.BILL_OF_PROCESS);
    const setBOPData = (k) => {
        //console.log("payload", k);
        dispatch(fetchMaster({ payload: k, headerName: "BILL_OF_PROCESS" }));
    };
    useEffect(() => {
        console.log("running on save");
        try {
            if (enableSave === true) {
                selectedItem.Drawing_Number &&
                    google.script.run
                        .withSuccessHandler(setBOPData)
                        .withFailureHandler((er) => {
                        alert(er);
                    })
                        .importDataSelectedItem("BILL_OF_PROCESS", selectedItem.Drawing_Number);
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    const handleRefreshDropDowns = () => {
        setRefreshDropDowns(true);
        handlerSave();
    };
    const handlerSave = () => {
        return setEnableSave(false);
    };
    // //states
    const [checked, setChecked] = React.useState(false);
    // const SECTION_NAMES = APP_DATA.FORMDATA.DAILY_WORK_REPORT_FORM.SECTIONS;
    // const items = [
    //   "Operation-1",
    //   "Operation-2",
    //   "Operation-3",
    //   "Operation-4",
    // ];
    //handlers
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const preparePostData = () => {
        const prepdata = {
            ITEM_MASTER: tableItemMaster.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            BILL_OF_PROCESS: tableBillOfProcess.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            ITEM_MASTER: prepdata.ITEM_MASTER.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            BILL_OF_PROCESS: prepdata.BILL_OF_PROCESS.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            ITEM_MASTER: temp1.ITEM_MASTER.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            BILL_OF_PROCESS: temp1.BILL_OF_PROCESS.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
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
    const items = useSelector((state) => state.master.DROPDOWN_DATA_INIT);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 3000 });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [
            { marginTop: (theme) => theme.spacing(8) },
            // { border: 1 },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            // { borderColor: "primary.main" },
            // { background: "#90caf9" },
        ], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 5000 })), _jsxs(Stack, { sx: [
                    { paddingTop: (theme) => theme.spacing(3) },
                    { paddingBottom: (theme) => theme.spacing(3) },
                    // { border: 1 },
                    // { borderLeft: 1 },
                    // { borderRight: 1 },
                    // { borderColor: "primary.main" },
                ], children: [_jsx(FormHeader, { headerName: "Item with Bill of Process" }), _jsxs(Stack, { sx: [
                            { border: 1 },
                            { padding: "1rem" },
                            { borderRadius: 3 },
                            // { borderRight: 1 },
                            // { background: (theme) =>'#e3f2fd' },
                            {
                                borderColor: (theme) => theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
                            },
                        ], children: [_jsx(FormHeader, { headerName: "Item Details" }), _jsx(Stack, { sx: [
                                // { border: 1 },
                                // { borderLeft: 1 },
                                // { borderRight: 1 },
                                // { borderColor: "primary.main" },
                                // { background: "#90caf9" },
                                ], children: _jsx(TextFieldFreeze, { COMPONENTS: ITEM_MASTER.metaData, items: items.ITEM_MASTER, direction: "row", headerValue: "MACHINE_MASTER", formName: ITEM_MASTER.metaData[0].sheetname, prefilled: selectedItem, enableButton: false }) }), _jsxs(Stack, { direction: "row", width: "100%", sx: [
                                    { my: "1rem" },
                                    { px: "1rem" },
                                    { py: "0.3rem" },
                                    { border: 1 },
                                    { borderRadius: "15px" },
                                    // { borderLeft: 1 },
                                    // { borderRight: 1 },
                                    { borderColor: "white" },
                                    { backgroundColor: "#e0f2f1" },
                                    { transition: "background 1s, color 1s" },
                                    // { "&:hover": { backgroundColor: "#e0f2f1", borderRadius: "15px" } },
                                ], children: [_jsx(FormHeader, { headerName: BILL_OF_PROCESS.metaData[0].title }), _jsx(FormControlLabel, { control: _jsx(Icon, { icon: "ic:outline-expand-more", width: "24", height: "24", vFlip: checked, onClick: handleChange }), label: checked ? "hide" : "show", sx: { marginLeft: "75%", px: "1rem" } })] }), _jsx(Collapse, { in: checked, collapsedSize: 0, children: _jsx(FormComponent, { COMPONENTS: BILL_OF_PROCESS.metaData, items: items.OPERATION_MASTER, direction: "row", headerValue: "MACHINE_MASTER", formName: BILL_OF_PROCESS.metaData[0].sheetname, prefilled: { "Is_Scrap_Applicable": true }, enableButton: true, isMaster: props.isMaster, primarykey: selectedItem, onChange: onChangeHandler }) }), _jsx(Stack, { width: "100%", sx: [
                                // { border: 1 },
                                // { borderLeft: 1 },
                                // { borderRight: 1 },
                                // { borderColor: "primary.main" },
                                // { background: "#90caf9" },
                                ], children: _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableBillOfProcess, columns: BILL_OF_PROCESS.columnsData, formName: BILL_OF_PROCESS.metaData[0].sheetname, onChange: () => setEnableSave(false) }) })] }), _jsxs(Stack, { width: "100%", sx: [
                        // { border: 1 },
                        // { borderLeft: 1 },
                        // { borderRight: 1 },
                        // { borderColor: "primary.main" },
                        // { background: "#90caf9" },
                        ], children: [_jsx(Stack, { direction: "row", width: "100%", sx: [
                                // { border: 1 },
                                // { borderLeft: 1 },
                                // { borderRight: 1 },
                                // { borderColor: "primary.main" },
                                // { background: "#90caf9" },
                                ] }), _jsx(Collapse, { in: checked, collapsedSize: 0, children: _jsx(Stack, { width: "100%", sx: [
                                        { border: 1 },
                                        { padding: "1rem" },
                                        { borderRadius: 3 },
                                        // { borderRight: 1 },
                                        // { background: (theme) =>'#e3f2fd' },
                                        {
                                            borderColor: (theme) => theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
                                        },
                                    ], children: _jsx(Box, { sx: [
                                            { width: "100%" },
                                            // { border: 1 },
                                            // { borderLeft: 1 },
                                            // { borderRight: 1 },
                                            // { borderColor: "primary.main" },
                                        ] }) }) }), _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                    { marginLeft: "10rem" },
                                    { marginRight: "10rem" },
                                    { marginTop: "2rem" },
                                ], onClick: submitSaveHandler, children: "Save Changes" })] })] })] }));
};
export default ItemMasterInputFormSelectedItem;
