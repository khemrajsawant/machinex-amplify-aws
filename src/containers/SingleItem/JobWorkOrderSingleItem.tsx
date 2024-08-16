import React from "react";
//table
import { useForm, Controller } from "react-hook-form";
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

import data from "../../utils/metadataLocal.json";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";

// const columns = columnsData.EMPLOYEE_MASTER;

const JobWorkOrderSingleItem = (props) => {
  //states
  const [enableSave, setEnableSave] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });

  // metadata
  const dispatch = useDispatch();
  const {
    JOB_WORK_ORDER: JOB_WORK_ORDER,
    JOB_WORK_ORDER_DETAILS: JOB_WORK_ORDER_DETAILS,
  } = useSelector((state: RootState) => state.master.APP_DATA);

  // states

  const tableJobWorkOrder = useSelector((state: RootState) => state.master.JOB_WORK_ORDER);
  const tableJobWorkOrderDetails = useSelector(
    (state: RootState) => state.master.JOB_WORK_ORDER_DETAILS
  );
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;

  // handlers
  const setData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "JOB_WORK_ORDER_DETAILS"));
  };

  useEffect(() => {
    try {
      google.script.run
        .withSuccessHandler(setData)
        .withFailureHandler((er) => {
          alert(er);
        })
        .importData("JOB_WORK_ORDER_DETAILS");
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      JOB_WORK_ORDER: tableJobWorkOrder.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      JOB_WORK_ORDER_DETAILS: tableJobWorkOrderDetails.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      JOB_WORK_ORDER: prepdata.JOB_WORK_ORDER.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      JOB_WORK_ORDER_DETAILS: prepdata.JOB_WORK_ORDER_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      JOB_WORK_ORDER: temp1.JOB_WORK_ORDER.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      JOB_WORK_ORDER_DETAILS: temp1.JOB_WORK_ORDER_DETAILS.filter(
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
    setEnableSave(false);
  };
  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed" });
  };

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA_INIT);
  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);
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
          <FormHeader headerName="JOB_WORK_ORDER" />
          <Stack>
            <TextFieldFreeze
              COMPONENTS={JOB_WORK_ORDER.metaData}
              items={items.JOB_WORK_ORDER}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={JOB_WORK_ORDER.metaData[0].sheetname}
              prefilled={selectedItem}
              enableButton={false}
              // onChange={()=>null}
            />
          </Stack>
        </Stack>
        <Stack>
          <FormHeader headerName="JOB_WORK_ORDER_DETAILS" />
          <Stack>
            <FormComponent
              COMPONENTS={JOB_WORK_ORDER_DETAILS.metaData}
              items={items.JOB_WORK_ORDER}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={JOB_WORK_ORDER_DETAILS.metaData[0].sheetname}
              prefilled={tableJobWorkOrderDetails}
              enableButton={true}
              isMaster={props.isMaster}
              primarykey={selectedItem}
              onChange={onChangeHandler}
            />
            {/* { ////console.log(table)} */}
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableJobWorkOrderDetails}
              columns={JOB_WORK_ORDER_DETAILS.columnsData}
              formName={JOB_WORK_ORDER_DETAILS.metaData[0].sheetname}
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

export default JobWorkOrderSingleItem;
