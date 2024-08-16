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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMaster, localUpdateNextAvailableEmpID, } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
// const columns = columnsData.EMPLOYEE_MASTER;
const SalesChallan = (props) => {
    //states
    // metadata
    const dispatch = useDispatch();
    const location = useLocation();
    const { SALE_CHALLAN: SALE_CHALLAN, SALE_CHALLAN_DETAILS: SALE_CHALLAN_DETAILS, } = useSelector((state) => state.master.APP_DATA);
    // states
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const tableSaleChallan = useSelector((state) => state.master.SALE_CHALLAN);
    const tableSaleChallanDetails = useSelector((state) => state.master.SALE_CHALLAN_DETAILS);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    const nextSaleChallanID = useSelector((state) => state.master.NEXT_AVAILABLE_ID["SALE_CHALLAN"]);
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
    // handlers
    const setData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "SALE_CHALLAN"));
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
                    .importData("SALE_CHALLAN");
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    //handlers
    const preparePostData = () => {
        const prepdata = {
            SALE_CHALLAN: tableSaleChallan.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            SALE_CHALLAN_DETAILS: tableSaleChallanDetails.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            SALE_CHALLAN: prepdata.SALE_CHALLAN.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            SALE_CHALLAN_DETAILS: prepdata.SALE_CHALLAN_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            SALE_CHALLAN: temp1.SALE_CHALLAN.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            SALE_CHALLAN_DETAILS: temp1.SALE_CHALLAN_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
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
        const maxId = parseInt(e.CH_NO.split("SC", 2)[1]) + 1;
        //console.log(maxId);
        //console.log({
        //   Emp_ID: "OM" + "0".repeat(6 - maxId.toString().length) + maxId,
        // });
        dispatch(localUpdateNextAvailableEmpID("SC" + "0".repeat(6 - maxId.toString().length) + maxId, "SALE_CHALLAN"));
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: "error", message: "Failed", duration: 3000 });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "SALE_CHALLAN" }), _jsxs(Stack, { children: [_jsx(FormComponent, { COMPONENTS: SALE_CHALLAN.metaData, items: items.SALE_CHALLAN, direction: "row", headerValue: "MACHINE_MASTER", formName: SALE_CHALLAN.metaData[0].sheetname, enableButton: true, primarykey: { Challan_No: nextSaleChallanID }, prefilled: { Challan_No: nextSaleChallanID }, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableSaleChallan, columns: SALE_CHALLAN.columnsData, pathname: location.pathname, formName: SALE_CHALLAN.metaData[0].sheetname, onChange: () => setEnableSave(false) })] })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default SalesChallan;
