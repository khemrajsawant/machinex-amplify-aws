import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// table
import { useForm } from "react-hook-form";
//store
import { useSelector } from "react-redux";
// mui library imports
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import metadataSelect from "../utils/metadataSelect.json";
import { useLocation } from "react-router-dom";
import { updateSelectMetaData, } from "../../redux/tableStateGenForm/master/masterAction";
import { fetchMaster, getNextAvailableEmpID, localUpdateNextAvailableEmpID, } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
const EmployeeMasterForm = (props) => {
    // fetch Data from server'
    const location = useLocation();
    //console.log(location);
    const [open, setOpen] = React.useState(false);
    const [refreshDropDowns, setRefreshDropDowns] = React.useState(false);
    const [notification, setNotification] = React.useState({
        open: true,
        severity: "success",
        message: "Loading Please wait",
    });
    const [enableSave, setEnableSave] = React.useState(true);
    //console.log(enableSave);
    // const [nextEmpID, setNextEmpID] = React.useState({ Emp_ID: "OM000001" });
    const tableEmployeeMaster = useSelector((state) => state.master.EMPLOYEE_MASTER);
    // const setDataBill_Of_Process = (k) => {
    //   //console.log("payload", k);
    //   dispatch(fetchMaster(k, "BILL_OF_PROCESS"));
    // };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const setDataEmployeeMaster = (k) => {
        //console.log("payload", k);
        dispatch(fetchMaster(k, "EMPLOYEE_MASTER"));
    };
    const setDropDowns = (data) => {
        dispatch(updateSelectMetaData(data));
        setRefreshDropDowns(false);
    };
    // handlers
    const setWorkstationData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "WORKSTATION_MASTER"));
    };
    useEffect(() => {
        // if (refreshDropDowns === true) {
        try {
            google.script.run
                .withSuccessHandler(setDropDowns)
                .withFailureHandler((er) => {
                ////console.log("using local copy of configlocalhost");
                // setUserInfo({userName:"Guest"})
                alert("Employee Master dropdown failed");
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
    useEffect(() => {
        try {
            if (enableSave === true) {
                setTimeout(function () {
                    //console.log("This code runs after a delay of 3000 milliseconds.");
                }, 3000);
                google.script.run
                    .withSuccessHandler(setDataEmployeeMaster)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importData("EMPLOYEE_MASTER");
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    const dispatch = useDispatch();
    const { EMPLOYEE_MASTER: EMPLOYEE_MASTER } = useSelector((state) => state.master.APP_DATA);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const nextEmpID = useSelector((state) => state.master.NEXT_AVAILABLE_ID["EMPLOYEE_MASTER"]);
    //console.log("nextEmpID", nextEmpID);
    const setSalaryData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "SALARY_DETAILS"));
    };
    const setBankData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "BANK_DETAILS"));
    };
    const setUserData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "USER_DETAILS"));
    };
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
    //console.log("selectedItem", selectedItem);
    useEffect(() => {
        try {
            selectedItem.Emp_ID &&
                google.script.run
                    .withSuccessHandler(setSalaryData)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importDataSelectedItem("SALARY_DETAILS", selectedItem.Emp_ID);
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [selectedItem]);
    useEffect(() => {
        try {
            selectedItem.Emp_ID &&
                google.script.run
                    .withSuccessHandler(setBankData)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importDataSelectedItem("BANK_DETAILS", selectedItem.Emp_ID);
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [selectedItem]);
    useEffect(() => {
        try {
            selectedItem.Emp_ID &&
                google.script.run
                    .withSuccessHandler(setUserData)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importDataSelectedItem("USER_DETAILS", selectedItem.Emp_ID);
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [selectedItem]);
    const tableBillOfProcess = useSelector((state) => state.master.BILL_OF_PROCESS);
    const handleRefreshDropDowns = () => {
        setRefreshDropDowns(true);
        handlerSave();
    };
    const handlerSave = () => {
        return setEnableSave(true);
    };
    // //states
    const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
    const [checked, setChecked] = React.useState(false);
    // const SECTION_NAMES = APP_DATA.FORMDATA.DAILY_WORK_REPORT_FORM.SECTIONS;
    // const items = [
    //   "Operation-1",
    //   "Operation-2",
    //   "Operation-3",
    //   "Operation-4",
    // ];
    //handlers
    const handleChange = (props) => {
        setChecked((prev) => !prev);
    };
    const preparePostData = () => {
        const prepdata = {
            EMPLOYEE_MASTER: tableEmployeeMaster.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            // BILL_OF_PROCESS: tableBillOfProcess.filter(
            //   (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
            // ),
        };
        let temp1 = {
            EMPLOYEE_MASTER: prepdata.EMPLOYEE_MASTER.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            // BILL_OF_PROCESS: prepdata.BILL_OF_PROCESS.filter(
            //   (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
            // ),
        };
        let temp2 = {
            EMPLOYEE_MASTER: temp1.EMPLOYEE_MASTER.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            // BILL_OF_PROCESS: temp1.BILL_OF_PROCESS.filter(
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
        const maxId = parseInt(e.Emp_ID.split("OM", 2)[1]) + 1;
        //console.log(maxId);
        //console.log({
        //   Emp_ID: "OM" + "0".repeat(6 - maxId.toString().length) + maxId,
        // });
        dispatch(localUpdateNextAvailableEmpID("OM" + "0".repeat(6 - maxId.toString().length) + maxId, "EMPLOYEE_MASTER"));
        setEnableSave(false);
    };
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
        ], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { sx: [
                    { paddingTop: (theme) => theme.spacing(3) },
                    { paddingBottom: (theme) => theme.spacing(3) },
                    // { border: 1 },
                    // { borderLeft: 1 },
                    // { borderRight: 1 },
                    // { borderColor: "primary.main" },
                ], children: [_jsx(FormHeader, { headerName: "EMPLOYEE MASTER LIST VIEW" }), _jsxs(Stack, { sx: [
                            { border: 1 },
                            { padding: "1rem" },
                            { borderRadius: 3 },
                            { marginTop: (theme) => theme.spacing(2) },
                            // { borderRight: 1 },
                            // { background: (theme) =>'#e3f2fd' },
                            {
                                borderColor: (theme) => theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
                            },
                        ], children: [_jsx(FormHeader, { headerName: "Employee Master Details" }), _jsxs(Stack, { sx: [
                                // { border: 1 },
                                // { borderLeft: 1 },
                                // { borderRight: 1 },
                                // { borderColor: "primary.main" },
                                // { background: "#90caf9" },
                                ], children: [_jsx(FormComponent, { COMPONENTS: EMPLOYEE_MASTER.metaData, items: items.EMPLOYEE_MASTER && items.EMPLOYEE_MASTER, direction: "row", headerValue: "MACHINE_MASTER", formName: EMPLOYEE_MASTER.metaData[0].sheetname, enableButton: true, isMaster: props.isMaster, primarykey: { Emp_ID: nextEmpID }, prefilled: { Emp_ID: nextEmpID }, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableEmployeeMaster, columns: EMPLOYEE_MASTER.columnsData, formName: EMPLOYEE_MASTER.metaData[0].sheetname, pathname: location.pathname, onChange: () => setEnableSave(false) })] }), _jsx(Stack, { direction: "row", width: "100%", children: _jsx(Stack, { width: "100%", children: _jsx(Stack, { width: "100%", sx: [
                                        // { border: 1 },
                                        // { borderLeft: 1 },
                                        // { borderRight: 1 },
                                        // { borderColor: "primary.main" },
                                        // { background: "#90caf9" },
                                        ] }) }) })] }), _jsxs(Stack, { width: "100%", sx: [
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
                                ], onClick: submitSaveHandler, children: "Save Employee Data" })] })] })] }));
};
export default EmployeeMasterForm;
