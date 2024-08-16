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
import FormControlLabel from "@mui/material/FormControlLabel";
import { Icon } from "@iconify/react";
import FormComponent from "../../components/FormComponent";
import InputFieldNonForm from "../../components/InputFieldNonForm";
import data from "../../utils/metadataLocal.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import metadataSelect from "../utils/metadataSelect.json";
import { useLocation } from "react-router-dom";
import {
  updateMetaData,
  updateUserAuthDetails,
  updateSelectMetaData,
  getNextAvailableEmpID,
} from "../../redux/tableStateGenForm/master/masterAction";

import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";

const ItemMasterInputForm = (props) => {
  // fetch Data from server
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

  const tableItemMaster = useSelector((state: RootState) => state.master.ITEM_MASTER);

  // const setDataBill_Of_Process = (k) => {
  //   //console.log("payload", k);
  //   dispatch(fetchMaster(k, "BILL_OF_PROCESS"));
  // };

  const setDataItemMaster = (k) => {
    //console.log("payload", k);
    dispatch(fetchMaster(k, "ITEM_MASTER"));
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

          alert("itemMaster dropdown failed");
        })
        .getUniqueDropdowns();
    } catch (error) {
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
          .withSuccessHandler(setDataItemMaster)
          .withFailureHandler((er) => {
            alert(er);
          })
          .importData("ITEM_MASTER");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  useEffect(() => {
    try {
      google.script.run
        .withSuccessHandler(setWorkstationData)
        .withFailureHandler((er) => {
          alert(er);
        })
        .importData("WORKSTATION_MASTER");
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);

  const dispatch = useDispatch();

  const { ITEM_MASTER: ITEM_MASTER, BILL_OF_PROCESS: BILL_OF_PROCESS } =
    useSelector((state: RootState) => state.master.APP_DATA);

  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);

  const nextEmpID = useSelector((state: RootState) => state.master.NEXT_AVAILABLE_ID);

  //console.log("nextEmpID", nextEmpID);

  const setBOPData = (k) => {
    //console.log("payload", k);
    dispatch(fetchMaster(k, "BILL_OF_PROCESS"));
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
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);

  //console.log("selectedItem", selectedItem);

  useEffect(() => {
    try {
      selectedItem.Drawing_Number &&
        google.script.run
          .withSuccessHandler(setBOPData)
          .withFailureHandler((er) => {
            alert(er);
          })
          .importDataSelectedItem(
            "BILL_OF_PROCESS",
            selectedItem.Drawing_Number
          );
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [selectedItem]);

  const tableBillOfProcess = useSelector(
    (state: RootState) => state.master.BILL_OF_PROCESS
  );

  const handleRefreshDropDowns = () => {
    setRefreshDropDowns(true);
    handlerSave();
  };

  const handlerSave = () => {
    return setEnableSave(false);
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
      ITEM_MASTER: tableItemMaster.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      // BILL_OF_PROCESS: tableBillOfProcess.filter(
      //   (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      // ),
    };

    let temp1 = {
      ITEM_MASTER: prepdata.ITEM_MASTER.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      // BILL_OF_PROCESS: prepdata.BILL_OF_PROCESS.filter(
      //   (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      // ),
    };

    let temp2 = {
      ITEM_MASTER: temp1.ITEM_MASTER.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      // BILL_OF_PROCESS: temp1.BILL_OF_PROCESS.filter(
      //   (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
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

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);

  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed" });
  };

  return (
    <Container
      maxWidth="xl"
      sx={[
        { marginTop: (theme) => theme.spacing(8) },
        { height: "100vh" }
        // { border: 1 },
        // { borderLeft: 1 },
        // { borderRight: 1 },
        // { borderColor: "primary.main" },
        // { background: "#90caf9" },
      ]}
    >
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
      <Stack
        sx={[
          { paddingTop: (theme) => theme.spacing(3) },
          { paddingBottom: (theme) => theme.spacing(3) },
          // { border: 1 },
          // { borderLeft: 1 },
          // { borderRight: 1 },
          // { borderColor: "primary.main" },
        ]}
      >
        <FormHeader
          headerName="ITEM MASTER LIST VIEW"
          // style={{ background: "#f3e5f5" }}
        />

        <Stack
          width="100%"
          sx={
            [
              // { border: 1 },
              // { borderLeft: 1 },
              // { borderRight: 1 },
              // { borderColor: "primary.main" },
              // { background: "#90caf9" },
            ]
          }
        >
          <Stack
            direction="row"
            width="100%"
            sx={[
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
            ]}
          >
            <FormHeader headerName="Create an Item" headerkind="regular" />
            <FormControlLabel
              control={
                <Icon
                  icon="ic:outline-expand-more"
                  width="24"
                  height="24"
                  vFlip={checked}
                  onClick={handleChange}
                />
              }
              label={checked ? "hide" : "show"}
              sx={{ marginLeft: "80%", px: "1rem" }}
            />
          </Stack>

          <Stack
            width="100%"
            sx={[
              { border: 1 },
              { padding: "1rem" },
              { borderRadius: 3 },
              // { borderRight: 1 },
              // { background: (theme) =>'#e3f2fd' },
              {
                borderColor: (theme) =>
                  theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
              },
            ]}
          >
            <Box
              sx={[
                { width: "100%" },
                // { border: 1 },
                // { borderLeft: 1 },
                // { borderRight: 1 },
                // { borderColor: "primary.main" },
              ]}
            >
              {/* <FormComponent
                  COMPONENTS={GENRAL_WORK_DETAILS.metaData}
                  items={items.GENRAL_WORK_DETAILS}
                  direction="row"
                  headerValue="GENRAL_WORK_DETAILS"
                                formName={props.routetext}
                />
                <DataGridCustomComponent isMaster={props.isMaster}  
                  data={table.generalWork}
                  columns={GENRAL_WORK_DETAILS.columnsData}
                                formName={props.routetext}
                /> */}
              <Collapse in={checked} collapsedSize={0}>
                <FormComponent
                  COMPONENTS={ITEM_MASTER.metaData}
                  items={items.ITEM_MASTER}
                  direction="row"
                  headerValue="MACHINE_MASTER"
                  formName={ITEM_MASTER.metaData[0].sheetname}
                  enableButton={true}
                  isMaster={props.isMaster}
                  // primarykey={selectedItem}
                  // prefilled={selectedItem}
                  onChange={onChangeHandler}
                />
              </Collapse>
              <DataGridCustomComponent
                isMaster={props.isMaster}
                data={tableItemMaster}
                columns={ITEM_MASTER.columnsData}
                formName={ITEM_MASTER.metaData[0].sheetname}
                pathname={location.pathname}
                onChange={() => setEnableSave(false)}
              />
            </Box>
          </Stack>

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
            Save Item Master
          </Button>
          {/* <Button
            variant="outlined"
            sx={[
              { marginLeft: "10rem" },
              { marginRight: "10rem" },
              { marginTop: "2rem" },
            ]}
            onClick={handleRefreshDropDowns}
          >
            RefreshDropDown
          </Button> */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ItemMasterInputForm;
