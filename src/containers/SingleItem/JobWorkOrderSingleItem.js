import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
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
import { fetchMaster } from "../../redux/tableStateGenForm/master/masterReducer";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { useAppDispatch } from "../../redux/tableStateGenForm/store";
// const columns = columnsData.EMPLOYEE_MASTER;
const JobWorkOrderSingleItem = (props) => {
    //states
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    // metadata
    const dispatch = useAppDispatch();
    const { JOB_WORK_ORDER: JOB_WORK_ORDER, JOB_WORK_ORDER_DETAILS: JOB_WORK_ORDER_DETAILS, } = useSelector((state) => state.master.APP_DATA);
    // states
    const tableJobWorkOrder = useSelector((state) => state.master.JOB_WORK_ORDER);
    const tableJobWorkOrderDetails = useSelector((state) => state.master.JOB_WORK_ORDER_DETAILS);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    // handlers
    const setData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster({ payload: k, headerName: "JOB_WORK_ORDER_DETAILS" }));
    };
    useEffect(() => {
        try {
            google.script.run
                .withSuccessHandler(setData)
                .withFailureHandler((er) => {
                alert(er);
            })
                .importData("JOB_WORK_ORDER_DETAILS");
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, []);
    //handlers
    const preparePostData = () => {
        const prepdata = {
            JOB_WORK_ORDER: tableJobWorkOrder.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            JOB_WORK_ORDER_DETAILS: tableJobWorkOrderDetails.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            JOB_WORK_ORDER: prepdata.JOB_WORK_ORDER.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            JOB_WORK_ORDER_DETAILS: prepdata.JOB_WORK_ORDER_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            JOB_WORK_ORDER: temp1.JOB_WORK_ORDER.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            JOB_WORK_ORDER_DETAILS: temp1.JOB_WORK_ORDER_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
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
                    duration: 3000
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
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 0 });
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA_INIT);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "JOB_WORK_ORDER" }), _jsx(Stack, { children: _jsx(TextFieldFreeze, { COMPONENTS: JOB_WORK_ORDER.metaData, items: items.JOB_WORK_ORDER, direction: "row", headerValue: "MACHINE_MASTER", formName: JOB_WORK_ORDER.metaData[0].sheetname, prefilled: selectedItem, enableButton: false }) })] }), _jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "JOB_WORK_ORDER_DETAILS" }), _jsxs(Stack, { children: [_jsx(FormComponent, { COMPONENTS: JOB_WORK_ORDER_DETAILS.metaData, items: items.JOB_WORK_ORDER, direction: "row", headerValue: "MACHINE_MASTER", formName: JOB_WORK_ORDER_DETAILS.metaData[0].sheetname, prefilled: tableJobWorkOrderDetails, enableButton: true, isMaster: props.isMaster, primarykey: selectedItem, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableJobWorkOrderDetails, columns: JOB_WORK_ORDER_DETAILS.columnsData, formName: JOB_WORK_ORDER_DETAILS.metaData[0].sheetname, onChange: () => setEnableSave(false) })] })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default JobWorkOrderSingleItem;
