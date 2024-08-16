import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormHeader from '../../components/FormHeader';
import DataGridCustomComponent from '../../components/DataGridCustomComponent';
import FormComponent from '../../components/FormComponent';
import CustomizedSnackbars from '../../components/CustomizedSnackbars';
import CustomizedBackdrop from '../../components/CustomizedBackdrop';
import { fetchMaster, localUpdateNextAvailableEmpID } from '../../redux/tableStateGenForm/master/masterAction';
const RejectionForm = (props) => {
    // States
    const [notification, setNotification] = React.useState({
        open: false,
        severity: 'error',
        message: 'Failed',
        duration: 0,
    });
    const [enableSave, setEnableSave] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    // Metadata
    const dispatch = useDispatch();
    const location = useLocation();
    const REJECTION_REPORT = useSelector((state) => state.master.APP_DATA.REJECTION_REPORT);
    const REJECTION_REPORT_DETAILS = useSelector((state) => state.master.APP_DATA.REJECTION_REPORT_DETAILS);
    const table = useSelector((state) => state.master);
    const tableRejectionReport = useSelector((state) => state.master.REJECTION_REPORT);
    const tableRejectionReportDetails = useSelector((state) => state.master.REJECTION_REPORT_DETAILS);
    const nextRejectionID = useSelector((state) => state.master.NEXT_AVAILABLE_ID['REJECTION_REPORT']);
    // Handlers
    const setNextEmpIDData = (k) => {
        // Dispatch or process data as needed
    };
    useEffect(() => {
        try {
            setTimeout(() => {
                // Placeholder for delayed action
            }, 3000);
            google.script.run
                .withSuccessHandler(setNextEmpIDData)
                .withFailureHandler((er) => {
                alert(er);
            })
                .getIDs();
        }
        catch (error) {
            console.error(error);
        }
    }, []);
    const setRejectionData = (k) => {
        dispatch(fetchMaster(k, 'REJECTION_REPORT'));
    };
    useEffect(() => {
        if (enableSave) {
            try {
                setTimeout(() => {
                    // Placeholder for delayed action
                }, 3000);
                google.script.run
                    .withSuccessHandler(setRejectionData)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importData('REJECTION_REPORT');
            }
            catch (error) {
                console.error(error);
            }
        }
    }, [enableSave]);
    const setData = (k) => {
        dispatch(fetchMaster(k, 'REJECTION_REPORT_DETAILS'));
    };
    useEffect(() => {
        if (enableSave) {
            try {
                setTimeout(() => {
                    // Placeholder for delayed action
                }, 3000);
                google.script.run
                    .withSuccessHandler(setData)
                    .withFailureHandler((er) => {
                    alert(er);
                })
                    .importData('REJECTION_REPORT_DETAILS');
            }
            catch (error) {
                console.error(error);
            }
        }
    }, [enableSave]);
    const preparePostData = () => {
        const prepdata = {
            REJECTION_REPORT: tableRejectionReport.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
            REJECTION_REPORT_DETAILS: tableRejectionReportDetails.filter((c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)),
        };
        let temp1 = {
            REJECTION_REPORT: prepdata.REJECTION_REPORT.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
            REJECTION_REPORT_DETAILS: prepdata.REJECTION_REPORT_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)),
        };
        let temp2 = {
            REJECTION_REPORT: temp1.REJECTION_REPORT.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
            REJECTION_REPORT_DETAILS: temp1.REJECTION_REPORT_DETAILS.filter((c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)),
        };
        return temp2;
    };
    const submitSaveHandler = async (e) => {
        try {
            e.stopPropagation();
            setOpen(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            google.script.run
                .withSuccessHandler(() => {
                setEnableSave(true);
                setOpen(false);
                setNotification({
                    open: true,
                    severity: 'success',
                    message: 'Save Successful',
                    duration: 0
                });
            })
                .withFailureHandler((er) => {
                setOpen(false);
                setNotification({
                    open: true,
                    severity: 'warning',
                    message: 'Save Failed...Try again',
                    duration: 0
                });
            })
                .updateSpecificRecord(preparePostData());
        }
        catch (error) {
            setNotification({
                open: true,
                severity: 'warning',
                message: "Save Failed..Couldn't Connect to Server",
                duration: 0
            });
            setOpen(false);
        }
    };
    const onChangeHandler = (e) => {
        const maxId = parseInt(e.Report_No.split('REJ', 2)[1], 10) + 1;
        dispatch(localUpdateNextAvailableEmpID('REJ' + '0'.repeat(6 - maxId.toString().length) + maxId, 'REJECTION_REPORT'));
        setEnableSave(false);
    };
    const items = useSelector((state) => state.master.DROPDOWN_DATA);
    const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
    const setNotificationFalse = () => {
        setNotification({ open: false, severity: 'error', message: 'Failed', duration: 0 });
    };
    return (_jsxs(Container, { maxWidth: "xl", sx: { marginTop: (theme) => theme.spacing(10) }, children: [open && _jsx(CustomizedBackdrop, { open: open }), notification.open && (_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, message: notification.message, onChange: setNotificationFalse, duration: 3000 })), _jsxs(Stack, { children: [_jsxs(Stack, { children: [_jsx(FormHeader, { headerName: "REJECTION_REPORT" }), _jsxs(Stack, { children: [_jsx(FormComponent, { COMPONENTS: REJECTION_REPORT.metaData, items: items.REJECTION_REPORT, direction: "row", headerValue: "MACHINE_MASTER", formName: REJECTION_REPORT.metaData[0].sheetname, enableButton: true, primarykey: { Report_No: nextRejectionID }, prefilled: { Report_No: nextRejectionID }, onChange: onChangeHandler }), _jsx(DataGridCustomComponent, { isMaster: props.isMaster, data: tableRejectionReport, columns: REJECTION_REPORT.columnsData, pathname: location.pathname, formName: REJECTION_REPORT.metaData[0].sheetname, onChange: () => setEnableSave(false) })] })] }), _jsx(Stack, { children: _jsx(Button, { variant: "outlined", disabled: enableSave, sx: [
                                { marginLeft: '10rem' },
                                { marginRight: '10rem' },
                                { marginTop: '2rem' },
                            ], onClick: submitSaveHandler, children: "Submit Form" }) })] })] }));
};
export default RejectionForm;
