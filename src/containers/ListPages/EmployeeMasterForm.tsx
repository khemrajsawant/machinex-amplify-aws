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
import FormComponent from "../../components/FormComponent";

import { useEffect } from "react";

// import metadataSelect from "../utils/metadataSelect.json";
import { useLocation } from "react-router-dom";

import {
  fetchMaster,
  updateSelectMetaData,
  getNextAvailableEmpID,
  localUpdateNextAvailableEmpID,
} from "../../redux/tableStateGenForm/master/masterReducer";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";

import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { RootState,useAppDispatch } from "../../redux/tableStateGenForm/store";

const EmployeeMasterForm = (props:any) => {
  // fetch Data from server'
  const dispatch = useAppDispatch();
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
  //console.log(enableSave);
  // const [nextEmpID, setNextEmpID] = React.useState({ Emp_ID: "OM000001" });
  const tableEmployeeMaster = useSelector(
    (state: RootState) => state.master.EMPLOYEE_MASTER
  );
  // const setDataBill_Of_Process = (k) => {
  //   //console.log("payload", k);

  //   dispatch(fetchMaster(k, "BILL_OF_PROCESS"));
  // };
  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);

  const setDataEmployeeMaster = (k) => {
    //console.log("payload", k);

    dispatch(fetchMaster({payload:k, headerName:"EMPLOYEE_MASTER"}));
  };

  const setDropDowns = (data:any) => {
    dispatch(updateSelectMetaData({payload:data}));
    setRefreshDropDowns(false);
  };

  // handlers


  useEffect(() => {
    // if (refreshDropDowns === true) {
    try {

        // @ts-ignore
      google.script.run
        .withSuccessHandler(setDropDowns)
        .withFailureHandler((er) => {
          ////console.log("using local copy of configlocalhost");
          // setUserInfo({userName:"Guest"})

          alert("Employee Master dropdown failed");
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
// @ts-ignore
        google.script.run
          .withSuccessHandler(setDataEmployeeMaster)
          .withFailureHandler((er) => {
            alert(er);
          })
          .importData("EMPLOYEE_MASTER");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);



  const { EMPLOYEE_MASTER: EMPLOYEE_MASTER } = useSelector(
    (state: RootState) => state.master.APP_DATA
  );

  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);

  const nextEmpID = useSelector(
    (state: RootState) => state.master.NEXT_AVAILABLE_ID["EMPLOYEE_MASTER"]
  );

  //console.log("nextEmpID", nextEmpID);

  const setSalaryData = (k:any) => {
    ////console.log("payload", k);

    dispatch(fetchMaster({payload:k, headerName:"SALARY_DETAILS"}));
  };

  const setBankData = (k:any) => {
    ////console.log("payload", k);

    dispatch(fetchMaster({payload:k, headerName:"BANK_DETAILS"}));
  };

  const setUserData = (k:any) => {
    ////console.log("payload", k);

    dispatch(fetchMaster({payload:k, headerName:"USER_DETAILS"}));
  };

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
      // @ts-ignore
      selectedItem.Emp_ID &&
      // @ts-ignore
        google.script.run
          .withSuccessHandler(setSalaryData)
          .withFailureHandler((er) => {
            alert(er);
          })
          .importDataSelectedItem("SALARY_DETAILS", selectedItem.Emp_ID);
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [selectedItem]);

  useEffect(() => {
    try {
      selectedItem.Emp_ID &&
      // @ts-ignore
        google.script.run
          .withSuccessHandler(setBankData)
          .withFailureHandler((er) => {
            alert(er);
          })
          .importDataSelectedItem("BANK_DETAILS", selectedItem.Emp_ID);
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [selectedItem]);

  useEffect(() => {
    try {
      selectedItem.Emp_ID &&
      // @ts-ignore
        google.script.run
          .withSuccessHandler(setUserData)
          .withFailureHandler((er) => {
            alert(er);
          })
          .importDataSelectedItem("USER_DETAILS", selectedItem.Emp_ID);
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
    return setEnableSave(true);
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
      EMPLOYEE_MASTER: tableEmployeeMaster.filter(
        (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      // BILL_OF_PROCESS: tableBillOfProcess.filter(
      //   (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      // ),
    };

    let temp1 = {
      EMPLOYEE_MASTER: prepdata.EMPLOYEE_MASTER.filter(
        (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      // BILL_OF_PROCESS: prepdata.BILL_OF_PROCESS.filter(
      //   (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      // ),
    };

    let temp2 = {
      EMPLOYEE_MASTER: temp1.EMPLOYEE_MASTER.filter(
        (c:any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      // BILL_OF_PROCESS: temp1.BILL_OF_PROCESS.filter(
      //   (c:any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      // ),
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
  // @ts-ignore
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
    //console.log("data@EmpIDr", e);
    const maxId = parseInt(e.Emp_ID.split("OM", 2)[1]) + 1;
    //console.log(maxId);

    //console.log({
    //   Emp_ID: "OM" + "0".repeat(6 - maxId.toString().length) + maxId,
    // });

    dispatch(
      localUpdateNextAvailableEmpID(
        {payload:"OM" + "0".repeat(6 - maxId.toString().length) + maxId,
        headerName:"EMPLOYEE_MASTER"}
      )
    );
    setEnableSave(false);
  };

  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed" });
  };
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
          headerName="EMPLOYEE MASTER LIST VIEW"
          // style={{ background: "#f3e5f5" }}
        />
        <Stack
          sx={[
            { border: 1 },
            { padding: "1rem" },
            { borderRadius: 3 },
            { marginTop: (theme) => theme.spacing(2) },
            // { borderRight: 1 },
            // { background: (theme) =>'#e3f2fd' },
            {
              borderColor: (theme) =>
                theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
            },
          ]}
        >
          <FormHeader
            headerName="Employee Master Details"
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
                COMPONENTS={ITEM_MASTER.metaData}
                control={control}
                items={items.ITEM_MASTER}
                prefilled={tableItemMaster}
                formName={ITEM_MASTER.metaData[0].sheetname}
              /> */}
            <FormComponent
              COMPONENTS={EMPLOYEE_MASTER.metaData}
              items={items.EMPLOYEE_MASTER && items.EMPLOYEE_MASTER}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={EMPLOYEE_MASTER.metaData[0].sheetname}
              enableButton={true}
              isMaster={props.isMaster}
              primarykey={{ Emp_ID: nextEmpID }}
              prefilled={{ Emp_ID: nextEmpID }}
              onChange={onChangeHandler}
            />
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableEmployeeMaster}
              columns={EMPLOYEE_MASTER.columnsData}
              formName={EMPLOYEE_MASTER.metaData[0].sheetname}
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
                  headerName={BILL_OF_PROCESS.metaData[0].title}
                  // style={{ background: "#f3e5f5" }}
                /> */}

              {/* <FormComponent
                  COMPONENTS={BILL_OF_PROCESS.metaData}
                  items={items.BILL_OF_PROCESS}
                  direction="row"
                  headerValue="MACHINE_MASTER"
                  formName={BILL_OF_PROCESS.metaData[0].sheetname}
                  prefilled={tableBillOfProcess}
                  // onChange={onChangeHandler}
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

                {/* <DataGridCustomComponent isMaster={props.isMaster}  
                    data={tableBillOfProcess}
                    columns={BILL_OF_PROCESS.columnsData}
                    formName={BILL_OF_PROCESS.metaData[0].sheetname}
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
            {/* <FormHeader
                headerName={SECTION_NAMES.SECTION_3}
                // style={{ marginRight: "1rem", background: "#f3e5f5" }}
              />
              <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
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
            Save Employee Data
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

export default EmployeeMasterForm;
