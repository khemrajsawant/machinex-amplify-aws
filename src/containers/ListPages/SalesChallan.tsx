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

import { useLocation } from "react-router-dom";

import {
  fetchMaster,
  localUpdateNextAvailableEmpID,getNextAvailableEmpID
} from "../../redux/tableStateGenForm/master/masterReducer";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { RootState, useAppDispatch } from "../../redux/tableStateGenForm/store";
// const columns = columnsData.EMPLOYEE_MASTER;

const SalesChallan = (props) => {
  //states

  // metadata
  const dispatch = useAppDispatch();
  const location = useLocation();
  const {
    SALE_CHALLAN: SALE_CHALLAN,
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

  const tableSaleChallan = useSelector((state: RootState) => state.master.SALE_CHALLAN);
  const tableSaleChallanDetails = useSelector(
    (state: RootState) => state.master.SALE_CHALLAN_DETAILS
  );
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;
  const nextSaleChallanID = useSelector(
    (state: RootState) => state.master.NEXT_AVAILABLE_ID["SALE_CHALLAN"]
  );

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

  // handlers
  const setData = (k:any) => {
    ////console.log("payload", k);

    dispatch(fetchMaster({payload:k, headerName:"SALE_CHALLAN"}));
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
          .importData("SALE_CHALLAN");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      SALE_CHALLAN: tableSaleChallan.filter(
        (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      SALE_CHALLAN_DETAILS: tableSaleChallanDetails.filter(
        (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      SALE_CHALLAN: prepdata.SALE_CHALLAN.filter(
        (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      SALE_CHALLAN_DETAILS: prepdata.SALE_CHALLAN_DETAILS.filter(
        (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      SALE_CHALLAN: temp1.SALE_CHALLAN.filter(
        (c:any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      SALE_CHALLAN_DETAILS: temp1.SALE_CHALLAN_DETAILS.filter(
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
            duration  : 3000, 
          });
        })
        .withFailureHandler(() => {
          setOpen(false);
          setNotification({
            open: true,
            severity: "warning",
            message: "Save Failed...Try again",
            duration  : 3000,
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
        duration  : 3000,
      });
      setOpen(false);
    }
  };

  const onChangeHandler = (e:any) => {
    //console.log("data@EmpIDr", e);
    const maxId = parseInt(e.CH_NO.split("SC", 2)[1]) + 1;
    //console.log(maxId);

    //console.log({
    //   Emp_ID: "OM" + "0".repeat(6 - maxId.toString().length) + maxId,
    // });

    dispatch(
      localUpdateNextAvailableEmpID({
        payload:"SC" + "0".repeat(6 - maxId.toString().length) + maxId,
        headerName:"SALE_CHALLAN"}
      )
    );
    setEnableSave(false);
  };

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);


  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed",duration:3000 });
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
          <FormHeader headerName="SALE_CHALLAN" />
          <Stack>
            <FormComponent
              COMPONENTS={SALE_CHALLAN.metaData}
              items={items.SALE_CHALLAN}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={SALE_CHALLAN.metaData[0].sheetname}
              enableButton={true}
              primarykey={{ Challan_No: nextSaleChallanID }}
              prefilled={{ Challan_No: nextSaleChallanID }}
              onChange={onChangeHandler}
            />
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableSaleChallan}
              columns={SALE_CHALLAN.columnsData}
              pathname={location.pathname}
              formName={SALE_CHALLAN.metaData[0].sheetname}
              onChange={() => setEnableSave(false)}
            />
          </Stack>
        </Stack>
        {/* <Stack>
          <FormHeader headerName="SALE_CHALLAN_DETAILS" />
          <Stack> */}
        {/* <FormComponent
              COMPONENTS={SALE_CHALLAN_DETAILS.metaData}
              items={items.SALE_CHALLAN_DETAILS}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={SALE_CHALLAN_DETAILS.metaData[0].sheetname}
              enableButton={true}
              primarykey={selectedItem}
              onChange={() => null}
            /> */}
        {/* { ////console.log(table)} */}
        {/* </Stack>
        </Stack> */}
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

export default SalesChallan;
