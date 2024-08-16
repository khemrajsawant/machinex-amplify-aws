import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
//table
//store
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// mui library imports
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
// const columns = columnsData.EMPLOYEE_MASTER;
const PaymentModeForm = (props) => {
    //states
    // metadata
    const dispatch = useDispatch();
    const PAYMENT_MODE = { metaData: [], columnsData: [] };
    // states
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const tablePaymentMode = useSelector((state) => state.master.PAYMENT_MODE);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    // handlers
    const onChangeHandler = (e) => {
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: 'error', message: "Failed" });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: [notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "PAYMENT_MODE_MASTER" }), _jsxs(Stack, { children: [_jsx(FormComponent, { COMPONENTS: PAYMENT_MODE.metaData, items: items.PAYMENT_MODE, direction: "row", headerValue: "MACHINE_MASTER", formName: PAYMENT_MODE.metaData[0].sheetname, enableButton: true, primarykey: selectedItem, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tablePaymentMode, columns: PAYMENT_MODE.columnsData, formName: PAYMENT_MODE.metaData[0].sheetname, onChange: () => setEnableSave(false) })] })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default PaymentModeForm;
