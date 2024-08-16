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

import FormComponent from "../../components/FormComponent";


import { useEffect } from "react";

import { fetchMaster } from "../../redux/tableStateGenForm/master/masterReducer";

import CustomizedSnackbars from "../../components/CustomizedSnackbars";


import CustomizedBackdrop from "../../components/CustomizedBackdrop";

import { RootState } from "../../redux/tableStateGenForm/store";
// const columns = columnsData.EMPLOYEE_MASTER;

const CompanyInfo = (props) => {
  //states

  // metadata

  const { COMPANY_INFORMATION: COMPANY_INFORMATION } = useSelector(
    (state: RootState) => state.master.APP_DATA
  );

  //states
  const dispatch = useDispatch();
  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });
  const tableCompanyInformation = useSelector(
    (state: RootState) => state.master.COMPANY_INFORMATION
  );

  const [enableSave, setEnableSave] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  // handlers

  const setData = (k:any) => {
    ////console.log("payload", k);

    dispatch(fetchMaster({payload:k, headerName:"COMPANY_INFORMATION"}));
  };

  useEffect(() => {
    try {
      // @ts-ignore
      google.script.run
        .withSuccessHandler(setData)
        .withFailureHandler((er) => {
          alert(er);
        })
        .importData("COMPANY_INFORMATION");
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);

  //handlers

  const preparePostData = () => {
    //console.log("testing data to be prepared", tableCompanyInformation);
    const prepdata = {
      COMPANY_INFORMATION: tableCompanyInformation.filter(
        (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      COMPANY_INFORMATION: prepdata.COMPANY_INFORMATION.filter(
        (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      COMPANY_INFORMATION: temp1.COMPANY_INFORMATION.filter(
        (c:any) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
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
      // @ts-ignore
      google.script.run
        .withSuccessHandler(() => {
          setOpen(false);
          setEnableSave(true);
          setNotification({
            open: true,
            severity: "success",
            message: "Save Successful",
            duration: 3000,
          });
        })
        .withFailureHandler((er) => {
          setOpen(false);
          setNotification({
            open: true,
            severity: "warning",
            message: "Save Failed...Try again",
            duration: 3000,
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
        duration : 3000
      });
    }
  };

  const handlerSave = () => {
    return setEnableSave(true);
  };

  const onChangeHandler = (e) => {
    //console.log("data@CompInfo", e);

    setEnableSave(false);
  };

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);
  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);
  const companyInformationPrefilled = useSelector(
    (state: RootState) => state.master.COMPANY_INFORMATION[0]
  );

  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed",duration:3000 });
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
        <Stack
          sx={[
            { paddingTop: (theme) => theme.spacing(3) },
            { paddingBottom: (theme) => theme.spacing(3) }
            // { border: 1 },
            // { borderLeft: 1 },
            // { borderRight: 1 },
          ]}
        >
          <FormHeader headerName={COMPANY_INFORMATION.metaData[0].title} />
          <Stack>
            <FormComponent
              COMPONENTS={COMPANY_INFORMATION.metaData}
              items={items.COMPANY_INFORMATION}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={COMPANY_INFORMATION.metaData[0].sheetname}
              enableButton={true}
              primarykey={selectedItem}
              prefilled={companyInformationPrefilled}
              isMaster={props.isMaster}
              onChange={onChangeHandler}
            />
            {/* { ////console.log(table)} */}
            {/* <DataGridCustomComponent isMaster={props.isMaster}  
              data={tableCompanyInformation}
              columns={COMPANY_INFORMATION.columnsData}
              formName={COMPANY_INFORMATION.metaData[0].sheetname}
            /> */}
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
            Save Company Information
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CompanyInfo;
