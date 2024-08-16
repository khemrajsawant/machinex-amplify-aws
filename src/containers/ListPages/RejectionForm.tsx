import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import FormHeader from '../../components/FormHeader';
import DataGridCustomComponent from '../../components/DataGridCustomComponent';
import FormComponent from '../../components/FormComponent';
import CustomizedSnackbars from '../../components/CustomizedSnackbars';
import CustomizedBackdrop from '../../components/CustomizedBackdrop';
import { fetchMaster, localUpdateNextAvailableEmpID } from '../../redux/tableStateGenForm/master/masterReducer';
import { RootState, useAppDispatch } from '../../redux/tableStateGenForm/store';
interface Notification {
  open: boolean;
  severity: 'error' | 'warning' | 'success';
  message: string;
  duration: number;
}

interface RejectionFormProps {
  isMaster: boolean;
}

const RejectionForm: React.FC<RejectionFormProps> = (props) => {
  // States
  const [notification, setNotification] = React.useState<Notification>({
    open: false,
    severity: 'error',
    message: 'Failed',
    duration: 0,
  });
  
  const [enableSave, setEnableSave] = React.useState<boolean>(true);
  const [open, setOpen] = React.useState<boolean>(false);
  
  // Metadata
  const dispatch = useAppDispatch();
  const location = useLocation();
  
  const REJECTION_REPORT = useSelector((state: RootState) => state.master.APP_DATA.REJECTION_REPORT);
  const REJECTION_REPORT_DETAILS = useSelector((state: RootState) => state.master.APP_DATA.REJECTION_REPORT_DETAILS);
  
  const table = useSelector((state: RootState) => state.master);
  const tableRejectionReport = useSelector((state: RootState) => state.master.REJECTION_REPORT);
  const tableRejectionReportDetails = useSelector((state: RootState) => state.master.REJECTION_REPORT_DETAILS);
  
  const nextRejectionID = useSelector((state: RootState) => state.master.NEXT_AVAILABLE_ID['REJECTION_REPORT']);
  
  // Handlers
  const setNextEmpIDData = (k: any) => {
    // Dispatch or process data as needed
  };

  useEffect(() => {
    try {
      setTimeout(() => {
        // Placeholder for delayed action
      }, 3000);
      // @ts-ignore
      google.script.run
        .withSuccessHandler(setNextEmpIDData)
        .withFailureHandler((er: any) => {
          alert(er);
        })
        .getIDs();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setRejectionData = (k: any) => {
    dispatch(fetchMaster({payload:k, headerName:'REJECTION_REPORT'}));
  };

  useEffect(() => {
    if (enableSave) {
      try {
        setTimeout(() => {
          // Placeholder for delayed action
        }, 3000);
        // @ts-ignore
        google.script.run
          .withSuccessHandler(setRejectionData)
          .withFailureHandler((er: any) => {
            alert(er);
          })
          .importData('REJECTION_REPORT');
      } catch (error) {
        console.error(error);
      }
    }
  }, [enableSave]);

  const setData = (k: any) => {
    dispatch(fetchMaster({payload:k, headerName:'REJECTION_REPORT_DETAILS'}));
  };

  useEffect(() => {
    if (enableSave) {
      try {
        setTimeout(() => {
          // Placeholder for delayed action
        }, 3000);
        // @ts-ignore
        google.script.run
          .withSuccessHandler(setData)
          .withFailureHandler((er: any) => {
            alert(er);
          })
          .importData('REJECTION_REPORT_DETAILS');
      } catch (error) {
        console.error(error);
      }
    }
  }, [enableSave]);

  const preparePostData = () => {
    const prepdata = {
      REJECTION_REPORT: tableRejectionReport.filter(
        (c: any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      REJECTION_REPORT_DETAILS: tableRejectionReportDetails.filter(
        (c: any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      REJECTION_REPORT: prepdata.REJECTION_REPORT.filter(
        (c: any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      REJECTION_REPORT_DETAILS: prepdata.REJECTION_REPORT_DETAILS.filter(
        (c: any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      REJECTION_REPORT: temp1.REJECTION_REPORT.filter(
        (c: any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      REJECTION_REPORT_DETAILS: temp1.REJECTION_REPORT_DETAILS.filter(
        (c: any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
    };

    return temp2;
  };

  const submitSaveHandler = async (e: React.MouseEvent) => {
    try {
      e.stopPropagation();
      setOpen(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));
// @ts-ignore
      google.script.run
        .withSuccessHandler(() => {
          setEnableSave(true);
          setOpen(false);
          setNotification({
            open: true,
            severity: 'success',
            message: 'Save Successful',
            duration:0
          });
        })
        .withFailureHandler(() => {
          setOpen(false);
          setNotification({
            open: true,
            severity: 'warning',
            message: 'Save Failed...Try again',
            duration:0
          });
        })
        .updateSpecificRecord(preparePostData());
    } catch (error) {
      setNotification({
        open: true,
        severity: 'warning',
        message: "Save Failed..Couldn't Connect to Server",
        duration:0
      });
      setOpen(false);
    }
  };

  const onChangeHandler = (e: any) => {
    const maxId = parseInt(e.Report_No.split('REJ', 2)[1], 10) + 1;
    dispatch(
      localUpdateNextAvailableEmpID({
        payload:'REJ' + '0'.repeat(6 - maxId.toString().length) + maxId,
        headerName:'REJECTION_REPORT'}
      )
    );
    setEnableSave(false);
  };

  const items = useSelector((state: any) => state.master.DROPDOWN_DATA);


  const setNotificationFalse = () => {
    setNotification({ open: false, severity: 'error', message: 'Failed', duration:0 });
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: (theme) => theme.spacing(10) }}>
      {open && <CustomizedBackdrop open={open} />}
      {notification.open && (
        <CustomizedSnackbars
          open={notification.open}
          severity={notification.severity}
          message={notification.message}
          onChange={setNotificationFalse}
          duration={3000}
        />
      )}
      <Stack>
        <Stack>
          <FormHeader headerName="REJECTION_REPORT" />
          <Stack>
            <FormComponent
              COMPONENTS={REJECTION_REPORT.metaData}
              items={items.REJECTION_REPORT}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={REJECTION_REPORT.metaData[0].sheetname}
              enableButton={true}
              primarykey={{ Report_No: nextRejectionID }}
              prefilled={{ Report_No: nextRejectionID }}
              onChange={onChangeHandler}
            />
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableRejectionReport}
              columns={REJECTION_REPORT.columnsData}
              pathname={location.pathname}
              formName={REJECTION_REPORT.metaData[0].sheetname}
              onChange={() => setEnableSave(false)}
            />
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            disabled={enableSave}
            sx={[
              { marginLeft: '10rem' },
              { marginRight: '10rem' },
              { marginTop: '2rem' },
            ]}
            onClick={submitSaveHandler}
          >
            Submit Form
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default RejectionForm;
