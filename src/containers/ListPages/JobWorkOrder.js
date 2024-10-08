import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMaster, localUpdateNextAvailableEmpID, } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
// const columns = columnsData.EMPLOYEE_MASTER;
const JobWorkOrder = (props) => {
    //states
    const location = useLocation();
    // metadata
    const dispatch = useDispatch();
    const { JOB_WORK_ORDER: JOB_WORK_ORDER, JOB_WORK_ORDER_DETAILS: JOB_WORK_ORDER_DETAILS, } = useSelector((state) => state.master.APP_DATA);
    // states
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const tableJobWorkOrder = useSelector((state) => state.master.JOB_WORK_ORDER);
    const tableJobWorkOrderDetails = useSelector((state) => state.master.JOB_WORK_ORDER_DETAILS);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    const nextJobWorkOrderID = useSelector((state) => state.master.NEXT_AVAILABLE_ID["JOB_WORK_ORDER"]);
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
        dispatch(fetchMaster(k, "JOB_WORK_ORDER"));
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
                    .importData("JOB_WORK_ORDER");
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
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
        //console.log("data@EmpIDr", e);
        const maxId = parseInt(e.JWO_No.split("JWO", 2)[1]) + 1;
        //console.log(maxId);
        //console.log({
        //   Emp_ID: "OM" + "0".repeat(6 - maxId.toString().length) + maxId,
        // });
        dispatch(localUpdateNextAvailableEmpID("JWO" + "0".repeat(6 - maxId.toString().length) + maxId, "JOB_WORK_ORDER"));
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 3000 });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "JOB_WORK_ORDER" }), _jsxs(Stack, { children: [_jsx(FormComponent, { COMPONENTS: JOB_WORK_ORDER.metaData, items: items.JOB_WORK_ORDER, direction: "row", headerValue: "MACHINE_MASTER", formName: JOB_WORK_ORDER.metaData[0].sheetname, enableButton: true, primarykey: { JWO_No: nextJobWorkOrderID }, prefilled: { JWO_No: nextJobWorkOrderID }, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableJobWorkOrder, pathname: location.pathname, columns: JOB_WORK_ORDER.columnsData, formName: JOB_WORK_ORDER.metaData[0].sheetname, onChange: () => setEnableSave(false) })] })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default JobWorkOrder;
