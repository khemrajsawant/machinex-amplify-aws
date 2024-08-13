import React from "react";
// table

import { useForm } from "react-hook-form";
//store
import { useSelector } from "react-redux";
// mui library imports
import Collapse from "@mui/material/Collapse";

import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { APP_DATA } from "../../utils/constant";
import InputFieldNonForm from "../../components/InputFieldNonForm";
import data from "../../utils/metadataLocal.json";
import { Icon } from "@iconify/react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";

const DailyWorkReportForm = (props) => {
  const dispatch = useDispatch();

// Metadata 

  const {
    EARNING_DETAILS: EARNING_DETAILS,
    DAILY_WORK_REPORT: DAILY_WORK_REPORT,
    GENERAL_WORK_DETAILS: GENERAL_WORK_DETAILS,
  } = useSelector((state) => state.master.APP_DATA);

  // //states
  const location = useLocation();
  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });

  const [enableSave, setEnableSave] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const table = useSelector((state) => state.master);

  const { control } = useForm({ reValidateMode: "onBlur" });

  const [checked, setChecked] = React.useState(false);
  const tableDailyWorkReport = useSelector(
    (state) => state.master.DAILY_WORK_REPORT
  );
  const SECTION_NAMES = APP_DATA.FORMDATA.DAILY_WORK_REPORT_FORM.SECTIONS;
  const selectedItem = useSelector((state) => state.master.SELECTED_DATA);
  const userName = useSelector((state) =>
    state.master.AUTH_DATA.userData
      ? state.master.AUTH_DATA.userData.userName
      : ""
  );
  //handlers

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  // handlers
  const setData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "DAILY_WORK_REPORT"));
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
          .importDataWithSpecificRights("DAILY_WORK_REPORT",userName);
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      DAILY_WORK_REPORT: tableDailyWorkReport.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      DAILY_WORK_REPORT: prepdata.DAILY_WORK_REPORT.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      DAILY_WORK_REPORT: temp1.DAILY_WORK_REPORT.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
    };

    ////console.log(temp2);
    return temp2;
  };

  const  submitSaveHandler = async (e) => {
    try {
      e.stopPropagation();
      setOpen(true);

      // Simulate a time-consuming task
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      google.script.run
        .withSuccessHandler(() => {
          setEnableSave(true);
          setOpen(false)
          setNotification({
            open: true,
            severity: "success",
            message: "Save Successful",
          });
        })
        .withFailureHandler((er) => {
          setOpen(false)
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
      setOpen(false)
    }
  };

  const onChangeHandler = (e) => {
    setEnableSave(false);
  };

  const items = useSelector((state) => state.master.DROPDOWN_DATA);

  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed" });
  };

  var dailyReportPrefilled = { "Break [In Hour]": 1 };

  const loggedInUserData = useSelector(
    (state) => state.master.AUTH_DATA.userData.loggedInUserData
  );
  DAILY_WORK_REPORT.columnsData.map((t) => {
    switch (t.headerName) {
      case "Worker_No":
        try {
          dailyReportPrefilled[t.headerName] = loggedInUserData
            ? loggedInUserData[0].Emp_ID
            : "Emp_ID is missing";
        } catch (error) {
          alert("Emp_ID is missing");
        }
        break;
      case "Break [In Hour]":
        try {
          dailyReportPrefilled[t.headerName] = 1;
        } catch (error) {
          alert("Emp_ID is missing");
        }
        break;
      case "Check_In":
        try {
          dailyReportPrefilled[t.headerName] = "08:00";
        } catch (error) {
          alert("Emp_ID is missing");
        }
        break;
      case "Check_Out":
        try {
          dailyReportPrefilled[t.headerName] = "17:00";
        } catch (error) {
          alert("Emp_ID is missing");
        }
        break;

      default:
        dailyReportPrefilled[t.headerName] = "";
        break;
    }
  });

  return (
    <Container
      maxWidth="xl"
      sx={[
        { marginTop: (theme) => theme.spacing(8) },
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
          headerName="DAILY WORK REPORT"
          // style={{ background: "#f3e5f5" }}
        />
        <Stack
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
          <FormHeader
            headerName={SECTION_NAMES.SECTION_1}
            // style={{ background: "#f3e5f5" }}
          />

          <Stack
            sx={
              [
                // { border: 1 },
                // { borderLeft: 1 },
                // { borderRight: 1 },
                // { borderColor: "primary.main" },
                // { background: "#90caf9" },
              ]
            }
            // style={{ background: "#f3e5f5" }}
          >
            {/* <InputFieldNonForm
              COMPONENTS={DAILY_WORK_REPORT.metaData}
              control={control}
              items={items.DAILY_WORK_REPORT}
              formName={DAILY_WORK_REPORT.metaData[0].sheetname}
            /> */}
            <FormComponent
              COMPONENTS={DAILY_WORK_REPORT.metaData}
              COMPONENTS_COLUMNSDATA={DAILY_WORK_REPORT.columnsData}
              items={items.DAILY_WORK_REPORT}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={DAILY_WORK_REPORT.metaData[0].sheetname}
              enableButton={true}
              // primarykey={selectedItem}
              prefilled={dailyReportPrefilled}
              onChange={onChangeHandler}
            />
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableDailyWorkReport}
              columns={DAILY_WORK_REPORT.columnsData}
              formName={DAILY_WORK_REPORT.metaData[0].sheetname}
              pathname={location.pathname}
              onChange={() => setEnableSave(false)}
            />
          </Stack>
          {/* </Stack> */}
          {/* <Divider

          ></Divider> */}
          <Stack direction="row" width="100%">
            <Stack width="100%">
              {/* <FormHeader
                headerName={SECTION_NAMES.SECTION_2}
                // style={{ background: "#f3e5f5" }}
              />
              <FormComponent
                COMPONENTS={EARNING_DETAILS.metaData}
                items={items.EARNING_DETAILS}
                direction="row"
                headerValue="EARNING_DETAILS"
                formName={EARNING_DETAILS.metaData[0].sheetname}
                enableButton={true}
                primarykey={selectedItem}
              /> */}
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
                {/* <WorkHoursGrid data={table} /> */}
                {/* {////console.log("table DG", table)} */}
                {/* <DataGridCustomComponent
                  isMaster={props.isMaster}
                  data={table.EARNING_DETAILS}
                  columns={EARNING_DETAILS.columnsData}
                  formName={EARNING_DETAILS.metaData[0].sheetname}
                /> */}
              </Stack>
              {/* </Box> */}
            </Stack>
          </Stack>
        </Stack>
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
              //  { background: "#f3e5f5" },
              { transition: "background 1s, color 1s" },
              { "&:hover": { backgroundColor: "white", borderRadius: "15px" } },
            ]}
          >
            {/* <FormHeader headerName={SECTION_NAMES.SECTION_3} />
            <FormControlLabel
              control={
                <Icon
                  icon="ic:outline-expand-more"
                  width="32"
                  height="32"
                  vFlip={checked}
                  onClick={handleChange}
                />
              }
              label="Show"
              sx={[{ marginLeft: "80%" }, { px: "1rem" }]}
            /> */}
          </Stack>

          <Collapse in={checked} collapsedSize={0}>
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
                  COMPONENTS={GENERAL_WORK_DETAILS.metaData}
                  items={items.GENERAL_WORK_DETAILS}
                  direction="row"
                  headerValue="GENERAL_WORK_DETAILS"
                  formName={GENERAL_WORK_DETAILS.metaData[0].sheetname}
                  enableButton={true}
                  primarykey={selectedItem}
                />
                <DataGridCustomComponent isMaster={props.isMaster}  
                  data={table.GENERAL_WORK_DETAILS}
                  columns={GENERAL_WORK_DETAILS.columnsData}
                  formName={GENERAL_WORK_DETAILS.metaData[0].sheetname}
                /> */}
              </Box>
            </Stack>
          </Collapse>
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

export default DailyWorkReportForm;
