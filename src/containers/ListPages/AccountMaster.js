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
import FormControlLabel from "@mui/material/FormControlLabel";
import { Icon } from "@iconify/react";
import FormComponent from "../../components/FormComponent";
import { useEffect } from "react";
import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { Box, Collapse } from "@mui/material";
const AccountMaster = (props) => {
    //states
    const dispatch = useDispatch();
    // metadata
    const { ACCOUNT_MASTER_FORM: ACCOUNT_MASTER_FORM } = useSelector((state) => state.master.APP_DATA);
    // states
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const [notification, setNotification] = React.useState({
        open: false,
        severity: "error",
        message: "Failed",
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const handleChange = (props) => {
        setChecked((prev) => !prev);
    };
    const tableAccountMaster = useSelector((state) => state.master.ACCOUNT_MASTER_FORM);
    // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
    // handlers
    const setData = (k) => {
        ////console.log("payload", k);
        dispatch(fetchMaster(k, "ACCOUNT_MASTER_FORM"));
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
                    .importData("ACCOUNT_MASTER_FORM");
            }
        }
        catch (error) {
            console.error(error); // You might send an exception to your error tracker like AppSignal
        }
    }, [enableSave]);
    //handlers
    const preparePostData = () => {
        const prepdata = {
            ACCOUNT_MASTER_FORM: tableAccountMaster.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            ACCOUNT_MASTER_FORM: prepdata.ACCOUNT_MASTER_FORM.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            ACCOUNT_MASTER_FORM: temp1.ACCOUNT_MASTER_FORM.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
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
    return (_jsxs(Container, { maxWidth: "xl", sx: [{ marginTop: (theme) => theme.spacing(10) }, { marginBottom: (theme) => theme.spacing(2) }, { height: "100vh" }], children: [open === true && _jsx(CustomizedBackdrop, { open: open }), notification.open === true && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { sx: [{ marginTop: (theme) => theme.spacing(3) }], children: [_jsx(FormHeader, { headerName: ACCOUNT_MASTER_FORM.metaData[0].title }), _jsxs(Stack, { direction: "row", width: "100%", sx: [
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
                                ], children: [_jsx(FormHeader, { headerName: "Create an account", headerkind: "regular" }), _jsx(FormControlLabel, { control: _jsx(Icon, { icon: "ic:outline-expand-more", width: "24", height: "24", vFlip: checked, onClick: handleChange }), label: checked ? "hide" : "show", sx: { marginLeft: "75%", px: "1rem" } })] }), _jsx(Stack, { children: _jsx(Stack, { width: "100%", sx: [
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
                                        ], children: [_jsx(Collapse, { in: checked, collapsedSize: 0, children: _jsx(FormComponent, { COMPONENTS: ACCOUNT_MASTER_FORM.metaData, items: items.ACCOUNT_MASTER_FORM, direction: "row", headerValue: "MACHINE_MASTER", formName: ACCOUNT_MASTER_FORM.metaData[0].sheetname, enableButton: true, isMaster: props.isMaster, primarykey: selectedItem, onChange: onChangeHandler }) }), _jsx(DataGridCustomComponent, { isMaster: false, data: tableAccountMaster, columns: ACCOUNT_MASTER_FORM.columnsData, formName: ACCOUNT_MASTER_FORM.metaData[0].sheetname, onChange: () => setEnableSave(false) })] }) }) })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: "10rem" },
                                { marginRight: "10rem" },
                                { marginTop: "2rem" },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default AccountMaster;
