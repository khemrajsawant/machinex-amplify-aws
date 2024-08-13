import React from "react";

//store
import { useSelector } from "react-redux";

// mui library imports
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { APP_DATA } from "../../utils/constant";
import data from "../../utils/metadataLocal.json";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";

const MachineMasterForm = (props) => {
  // metadata
  const dispatch = useDispatch();
  const { MACHINE_MASTER: MACHINE_MASTER } = useSelector(
    (state) => state.master.APP_DATA
  );

  // states
  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });

  const [enableSave, setEnableSave] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const tableMachineMaster = useSelector(
    (state) => state.master.MACHINE_MASTER
  );
  const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;

  // handlers
  const setData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "MACHINE_MASTER"));
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
          .importData("MACHINE_MASTER");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      MACHINE_MASTER: tableMachineMaster.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      MACHINE_MASTER: prepdata.MACHINE_MASTER.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      MACHINE_MASTER: temp1.MACHINE_MASTER.filter(
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
  //console.log("items", items, "tableMachineMaster", tableMachineMaster);
  const selectedItem = useSelector((state) => state.master.SELECTED_DATA);

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
          <FormHeader headerName={SECTION_NAMES.SECTION_1} />
          <Stack>
            <FormComponent
              COMPONENTS={MACHINE_MASTER.metaData}
              items={items.MACHINE_MASTER}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={MACHINE_MASTER.metaData[0].sheetname}
              enableButton={true}
              primarykey={selectedItem}
              isMaster={props.isMaster}
              onChange={onChangeHandler}
            />
            {/* { ////console.log(table)} */}
            <DataGridCustomComponent
              isMaster={false}
              data={tableMachineMaster}
              columns={MACHINE_MASTER.columnsData}
              formName={MACHINE_MASTER.metaData[0].sheetname}
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

export default MachineMasterForm;
