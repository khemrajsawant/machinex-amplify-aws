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

import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";

// const columns = columnsData.EMPLOYEE_MASTER;

const GeneralWorkMaster = (props) => {
  //states

  // metadata
  const dispatch = useDispatch();
  const { GENERAL_WORK_LIST: GENERAL_WORK_LIST } = useSelector(
    (state) => state.master.APP_DATA
  );

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

  const tableGeneralWorkList = useSelector(
    (state) => state.master.GENERAL_WORK_LIST
  );
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;

  // handlers
  const setData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "GENERAL_WORK_LIST"));
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
          .importData("GENERAL_WORK_LIST");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      GENERAL_WORK_LIST: tableGeneralWorkList.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      GENERAL_WORK_LIST: prepdata.GENERAL_WORK_LIST.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      GENERAL_WORK_LIST: temp1.GENERAL_WORK_LIST.filter(
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
    } catch (error) {
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
    setNotification({ open: false, severity: "error", message: "Failed" });
  };

  return (
    <Container maxWidth="xl" sx={[{ marginTop: (theme) => theme.spacing(10) }, { height: "100vh" }]}>
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
          <FormHeader headerName="GENERAL_WORK_LIST MASTER" />
          <Stack>
            <FormComponent
              COMPONENTS={GENERAL_WORK_LIST.metaData}
              items={items.GENERAL_WORK_LIST}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={GENERAL_WORK_LIST.metaData[0].sheetname}
              enableButton={true}
              primarykey={selectedItem}
              onChange={onChangeHandler}
            />
            <DataGridCustomComponent
              isMaster={false}
              data={tableGeneralWorkList}
              columns={GENERAL_WORK_LIST.columnsData}
              formName={GENERAL_WORK_LIST.metaData[0].sheetname}
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

export default GeneralWorkMaster;
