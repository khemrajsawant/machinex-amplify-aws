import React from "react";
//table

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


import {
  fetchMaster,
  getNextAvailableEmpID,
} from "../../redux/tableStateGenForm/master/masterReducer";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";

import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";

import { RootState, useAppDispatch } from "../../redux/tableStateGenForm/store";

// const columns = columnsData.EMPLOYEE_MASTER;

const JobWorkReceiptSingleItem = (props:any) => {
  //states

  // metadata
  const dispatch = useAppDispatch();
  const {
    JOB_WORK_RECEIPT: JOB_WORK_RECEIPT,
    JOB_WORK_RECEIPT_DETAILS: JOB_WORK_RECEIPT_DETAILS,
  } = useSelector((state: RootState) => state.master.APP_DATA);

  // states
  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });

  const [enableSave, setEnableSave] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const tableJobWorkReceipt = useSelector(
    (state: RootState) => state.master.JOB_WORK_RECEIPT
  );
  const tableJobWorkReceiptDetails = useSelector(
    (state: RootState) => state.master.JOB_WORK_RECEIPT_DETAILS
  );
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
 

  // handlers

  const setNextEmpIDData = (k:any) => {
    //console.log(k);
    dispatch(getNextAvailableEmpID(k));
  };
  useEffect(() => {
    try {
      setTimeout(function () {
        //console.log("This code runs after a delay of 2000 milliseconds.");
      }, 3000);

      // @ts-ignore
      google.script.run
        .withSuccessHandler(setNextEmpIDData)
        .withFailureHandler((er:any) => {
          alert(er);
        })
        .getIDs();
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);

  const setData = (k:any) => {
    ////console.log("payload", k);

    dispatch(fetchMaster({payload:k, headerName:"JOB_WORK_RECEIPT_DETAILS"}));
  };

  useEffect(() => {
    try {
      if (enableSave === true) {
        setTimeout(function () {
          //console.log("This code runs after a delay of 3000 milliseconds.");
        }, 3000);

        // @ts-ignore
        google.script.run
          .withSuccessHandler(setData)
          .withFailureHandler((er:any) => {
            alert(er);
          })
          .importData("JOB_WORK_RECEIPT_DETAILS");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      JOB_WORK_RECEIPT: tableJobWorkReceipt.filter(
        (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      JOB_WORK_RECEIPT_DETAILS: tableJobWorkReceiptDetails.filter(
        (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      JOB_WORK_RECEIPT: prepdata.JOB_WORK_RECEIPT.filter(
        (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      JOB_WORK_RECEIPT_DETAILS: prepdata.JOB_WORK_RECEIPT_DETAILS.filter(
        (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      JOB_WORK_RECEIPT: temp1.JOB_WORK_RECEIPT.filter(
        (c:any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      JOB_WORK_RECEIPT_DETAILS: temp1.JOB_WORK_RECEIPT_DETAILS.filter(
        (c:any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
    };

    ////console.log(temp2);
    return temp2;
  };

  const submitSaveHandler = async (e:any) => {
    try {
      e.stopPropagation();
      setOpen(true);

      // Simulate a time-consuming task
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // @ts-ignore
      google.script.run
        .withSuccessHandler(() => {
          setEnableSave(true);
          setOpen(false);
          setNotification({
            open: true,
            severity: "success",
            message: "Save Successful",
            duration: 3000,
          });
        })
        .withFailureHandler((er:any) => {
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
    } catch (error) {
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

  const onChangeHandler = (e:any) => {
    setEnableSave(false);
  };

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA_INIT);
  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);

  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed",duration: 0 });
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
          <FormHeader headerName="JOB_WORK_RECEIPT" />
          <Stack>
            <TextFieldFreeze
              COMPONENTS={JOB_WORK_RECEIPT.metaData}
              items={items.JOB_WORK_RECEIPT}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={JOB_WORK_RECEIPT.metaData[0].sheetname}
              prefilled={selectedItem}
              enableButton={false}
              // onChange={onChangeHandler}
            />
          </Stack>
        </Stack>
        <Stack>
          <FormHeader headerName="JOB_WORK_RECEIPT_DETAILS" />
          <Stack>
            <FormComponent
              COMPONENTS={JOB_WORK_RECEIPT_DETAILS.metaData}
              items={items.JOB_WORK_RECEIPT}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={JOB_WORK_RECEIPT_DETAILS.metaData[0].sheetname}
              enableButton={true}
              primarykey={selectedItem}
              onChange={onChangeHandler}
            />
            {/* { ////console.log(table)} */}
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableJobWorkReceiptDetails}
              columns={JOB_WORK_RECEIPT_DETAILS.columnsData}
              formName={JOB_WORK_RECEIPT_DETAILS.metaData[0].sheetname}
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

export default JobWorkReceiptSingleItem;
