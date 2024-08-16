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
import { useEffect } from "react";
import { fetchMaster, getNextAvailableEmpID, } from "../../redux/tableStateGenForm/master/masterReducer";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { useAppDispatch } from "../../redux/tableStateGenForm/store";
// const columns = columnsData.EMPLOYEE_MASTER;
const JobWorkReceiptSingleItem = (props) => {
    //states
    // metadata
    const dispatch = useAppDispatch();
    const { JOB_WORK_RECEIPT: JOB_WORK_RECEIPT, JOB_WORK_RECEIPT_DETAILS: JOB_WORK_RECEIPT_DETAILS, } = useSelector((state) => state.master.APP_DATA);
    // states
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const tableJobWorkReceipt = useSelector((state) => state.master.JOB_WORK_RECEIPT);
    const tableJobWorkReceiptDetails = useSelector((state) => state.master.JOB_WORK_RECEIPT_DETAILS);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    // handlers
    const setNextEmpIDData = (k) => {
        //console.log(k);
        dispatch(getNextAvailableEmpID(k));
    };
    useEffect(() => {
        try {
            setTimeout(function () {
                //console.log("This code runs after a delay of 2000 milliseconds.");
            }, 3000);
            google.script.run
                .withSuccessHandler(setNextEmpIDData)
                .withFailureHandler((er) => {
                alert(er);
            })
                .getIDs();
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, []);
    const setData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster({ payload: k, headerName: "JOB_WORK_RECEIPT_DETAILS" }));
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
                    .importData("JOB_WORK_RECEIPT_DETAILS");
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    //handlers
    const preparePostData = () => {
        const prepdata = {
            JOB_WORK_RECEIPT: tableJobWorkReceipt.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            JOB_WORK_RECEIPT_DETAILS: tableJobWorkReceiptDetails.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            JOB_WORK_RECEIPT: prepdata.JOB_WORK_RECEIPT.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            JOB_WORK_RECEIPT_DETAILS: prepdata.JOB_WORK_RECEIPT_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            JOB_WORK_RECEIPT: temp1.JOB_WORK_RECEIPT.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            JOB_WORK_RECEIPT_DETAILS: temp1.JOB_WORK_RECEIPT_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
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
                    duration: 3000,
                });
            })
                .withFailureHandler((er) => {
                setOpen(false);
                setNotification({
                    open: true,
                    severity: "warning",
                    message: "Save Failed...Try again",
                    duration: 3000
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
                duration: 3000
            });
            setOpen(false);
        }
    };
    const onChangeHandler = (e) => {
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA_INIT);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 0 });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "JOB_WORK_RECEIPT" }), _jsx(Stack, { children: _jsx(TextFieldFreeze, { COMPONENTS: JOB_WORK_RECEIPT.metaData, items: items.JOB_WORK_RECEIPT, direction: "row", headerValue: "MACHINE_MASTER", formName: JOB_WORK_RECEIPT.metaData[0].sheetname, prefilled: selectedItem, enableButton: false }) })] }), _jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "JOB_WORK_RECEIPT_DETAILS" }), _jsxs(Stack, { children: [_jsx(FormComponent, { COMPONENTS: JOB_WORK_RECEIPT_DETAILS.metaData, items: items.JOB_WORK_RECEIPT, direction: "row", headerValue: "MACHINE_MASTER", formName: JOB_WORK_RECEIPT_DETAILS.metaData[0].sheetname, enableButton: true, primarykey: selectedItem, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableJobWorkReceiptDetails, columns: JOB_WORK_RECEIPT_DETAILS.columnsData, formName: JOB_WORK_RECEIPT_DETAILS.metaData[0].sheetname, onChange: () => setEnableSave(false) })] })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default JobWorkReceiptSingleItem;
