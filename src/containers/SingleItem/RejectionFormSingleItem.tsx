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
import { useDispatch } from "react-redux";

import {
  fetchMaster,
  localUpdateNextAvailableEmpID,
} from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import TextFieldFreeze from "../../components/TextFieldFreeze";

// const columns = columnsData.EMPLOYEE_MASTER;

const RejectionFormSingleItem = (props) => {
  //states
  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });

  const [enableSave, setEnableSave] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  // metadata
  const dispatch = useDispatch();

  const {
    REJECTION_REPORT: REJECTION_REPORT,
    REJECTION_REPORT_DETAILS: REJECTION_REPORT_DETAILS,
  } = useSelector((state: RootState) => state.master.APP_DATA);

  // states
  const table = useSelector((state: RootState) => state.master);
  const tableRejectionReport = useSelector(
    (state: RootState) => state.master.REJECTION_REPORT
  );
  const tableRejectionReportDetails = useSelector(
    (state: RootState) => state.master.REJECTION_REPORT_DETAILS
  );
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
  const nextRejectionID = useSelector(
    (state: RootState) => state.master.NEXT_AVAILABLE_ID["REJECTION_REPORT"]
  );

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
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);

  // handlers

  const setRejectionData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "REJECTION_REPORT"));
  };

  useEffect(() => {
    try {
      if (enableSave === true) {
        setTimeout(function () {
          //console.log("This code runs after a delay of 3000 milliseconds.");
        }, 3000);
        google.script.run
          .withSuccessHandler(setRejectionData)
          .withFailureHandler((er) => {
            alert(er);
          })
          .importData("REJECTION_REPORT");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  const setData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "REJECTION_REPORT_DETAILS"));
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
          .importData("REJECTION_REPORT_DETAILS");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      REJECTION_REPORT: tableRejectionReport.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      REJECTION_REPORT_DETAILS: tableRejectionReportDetails.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      REJECTION_REPORT: prepdata.REJECTION_REPORT.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      REJECTION_REPORT_DETAILS: prepdata.REJECTION_REPORT_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      REJECTION_REPORT: temp1.REJECTION_REPORT.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      REJECTION_REPORT_DETAILS: temp1.REJECTION_REPORT_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
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
    } catch (error) {
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
    const maxId = parseInt(e.Report_No.split("REJ", 2)[1]) + 1;
    //console.log(maxId);

    //console.log({
    //   Emp_ID: "OM" + "0".repeat(6 - maxId.toString().length) + maxId,
    // });

    dispatch(
      localUpdateNextAvailableEmpID(
        "REJ" + "0".repeat(6 - maxId.toString().length) + maxId,
        "REJECTION_REPORT"
      )
    );
    setEnableSave(false);
  };

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);
  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);

  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed" });
  };

  return (
    <Container maxWidth="xl" sx={[{ marginTop: (theme) => theme.spacing(10) }]}>
      {open === true && <CustomizedBackdrop open={open} />}
      {notification.open === true && (
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
            <TextFieldFreeze
              COMPONENTS={REJECTION_REPORT.metaData}
              items={items.REJECTION_REPORT}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={REJECTION_REPORT.metaData[0].sheetname}
              enableButton={false}
              // primarykey={{ Report_No: nextRejectionID }}
              prefilled={selectedItem}
              // onChange={onChangeHandler}
            />
          </Stack>
        </Stack>
        <Stack>
          <FormHeader headerName="REJECTION_REPORT_DETAILS" />
          <Stack>
            <FormComponent
              COMPONENTS={REJECTION_REPORT_DETAILS.metaData}
              items={items.REJECTION_REPORT_DETAILS}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={REJECTION_REPORT_DETAILS.metaData[0].sheetname}
              enableButton={true}
              primarykey={selectedItem}
              onChange={() => null}
            />

            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableRejectionReportDetails}
              columns={REJECTION_REPORT_DETAILS.columnsData}
              formName={REJECTION_REPORT_DETAILS.metaData[0].sheetname}
              onChange={() => setEnableSave(false)}
            />
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            disabled={enableSave}
            sx={[
              { marginLeft: "10rem" },
              { marginRight: "10rem" },
              { marginTop: "2rem" },
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

export default RejectionFormSingleItem;
