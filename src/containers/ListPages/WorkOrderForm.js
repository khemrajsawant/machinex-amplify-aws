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
import { useForm } from "react-hook-form";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { useEffect } from "react";
import { fetchMaster, localUpdateNextAvailableEmpID, } from "../../redux/tableStateGenForm/master/masterAction";
import { useLocation } from "react-router-dom";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
// const columns = columnsData.EMPLOYEE_MASTER;
const WorkOrderForm = (props) => {
    //states
    const dispatch = useDispatch();
    const location = useLocation();
    //console.log(location);
    // metadata
    const { WORK_ORDER: WORK_ORDER, WORK_ORDER_DETAILS: WORK_ORDER_DETAILS } = useSelector((state) => state.master.APP_DATA);
    const [open, setOpen] = React.useState(false);
    // states
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
    const tableWorkOrder = useSelector((state) => state.master.WORK_ORDER);
    const tableWorkOrderDetails = useSelector((state) => state.master.WORK_ORDER_DETAILS);
    const [isLoading, setIsLoading] = React.useState(true);
    const nextWorkOrderID = useSelector((state) => state.master.NEXT_AVAILABLE_ID["WORK_ORDER"]);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    // handlers
    const setData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "WORK_ORDER"));
        setIsLoading(false);
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
                    .importData("WORK_ORDER");
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
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
    //handlers
    const preparePostData = () => {
        //console.log("testing data to be prepared", tableWorkOrder);
        const prepdata = {
            WORK_ORDER: tableWorkOrder.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            // WORK_ORDER_DETAILS: tableWorkOrderDetails.filter(
            //   (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
            // ),
        };
        let temp1 = {
            WORK_ORDER: prepdata.WORK_ORDER.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            // WORK_ORDER_DETAILS: prepdata.WORK_ORDER_DETAILS.filter(
            //   (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
            // ),
        };
        let temp2 = {
            WORK_ORDER: temp1.WORK_ORDER.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            // WORK_ORDER_DETAILS: temp1.WORK_ORDER_DETAILS.filter(
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
        //console.log("data@EmpIDr", e);
        const maxId = parseInt(tableWorkOrder.length) + 1;
        //console.log(maxId);
        //console.log({
        //   Emp_ID: "OM" + "0".repeat(6 - maxId.toString().length) + maxId,
        // });
        dispatch(localUpdateNextAvailableEmpID("WO" + "0".repeat(6 - maxId.toString().length) + maxId, "WORK_ORDER"));
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 3000 });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "WORK_ORDER" }), _jsx(Stack, { children: _jsx(FormComponent, { COMPONENTS: WORK_ORDER.metaData, items: items.WORK_ORDER, direction: "row", headerValue: "MACHINE_MASTER", formName: WORK_ORDER.metaData[0].sheetname, enableButton: true, primarykey: { Order_No: nextWorkOrderID }, prefilled: { Order_No: nextWorkOrderID, tableWorkOrder }, onChange: onChangeHandler }) }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableWorkOrder, columns: WORK_ORDER.columnsData, formName: WORK_ORDER.metaData[0].sheetname, pathname: location.pathname, isLoading: isLoading, onChange: () => setEnableSave(false) })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default WorkOrderForm;
