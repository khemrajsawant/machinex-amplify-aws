import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
//table
//store
import { useSelector } from "react-redux";
// mui library imports
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
// const columns = columnsData.EMPLOYEE_MASTER;
const OperationMaster = (props) => {
    //states
    const [notification, setNotification] = React.useState({
        open: true,
        severity: "success",
        message: "Loading Please wait",
    });
    const [open, setOpen] = React.useState(false);
    const [enableSave, setEnableSave] = React.useState(true);
    // metadata
    const { WORKSTATION_MASTER: WORKSTATION_MASTER, OPERATION_MASTER: OPERATION_MASTER, } = useSelector((state) => state.master.APP_DATA);
    // states
    const tableOperationMaster = useSelector((state) => state.master.OPERATION_MASTER);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    //handlers
    const preparePostData = () => {
        const prepdata = {
            OPERATION_MASTER: tableOperationMaster.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            OPERATION_MASTER: prepdata.OPERATION_MASTER.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            OPERATION_MASTER: temp1.OPERATION_MASTER.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
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
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 3000 });
    };
    const onChangeHandler = (e) => {
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA_INIT);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 5000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "WORKSTATION_MASTER FORM" }), _jsxs(Stack, { children: [_jsx(TextFieldFreeze, { COMPONENTS: WORKSTATION_MASTER.metaData, items: items.WORKSTATION_MASTER, direction: "row", headerValue: "MACHINE_MASTER", formName: WORKSTATION_MASTER.metaData[0].sheetname, prefilled: selectedItem, enableButton: false }), _jsx(FormComponent, { COMPONENTS: OPERATION_MASTER.metaData, items: items.OPERATION_MASTER, direction: "row", headerValue: "MACHINE_MASTER", formName: OPERATION_MASTER.metaData[0].sheetname, enableButton: true, isMaster: props.isMaster, primarykey: selectedItem, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableOperationMaster, columns: OPERATION_MASTER.columnsData, formName: OPERATION_MASTER.metaData[0].sheetname, onChange: () => setEnableSave(false) })] })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default OperationMaster;
