import React from "react";
//table
import { useForm, Controller } from "react-hook-form";
//store
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// mui library imports
import Collapse from "@mui/material/Collapse";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";

// components
import FormHeader from "../../components/FormHeader";
import DataGridCustomComponent from "../../components/DataGridCustomComponent";
import FormComponent from "../../components/FormComponent";
import { APP_DATA } from "../../utils/constant";
import InputFieldNonForm from "../../components/InputFieldNonForm";
import data from "../../utils/metadataLocal.json";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";

// const columns = columnsData.EMPLOYEE_MASTER;
const EmployeeMasterFormSingleItem = (props) => {
  //states
  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);
  const {
    EMPLOYEE_MASTER: EMPLOYEE_MASTER,
    USER_DETAILS: USER_DETAILS,
    SALARY_DETAILS: SALARY_DETAILS,
    BANK_DETAILS: BANK_DETAILS,
  } = useSelector((state: RootState) => state.master.APP_DATA);

  const dispatch = useDispatch();

  const tableEmployeeMaster = useSelector(
    (state: RootState) => state.master.EMPLOYEE_MASTER
  );

  const tableBankDetails = useSelector((state: RootState) => state.master.BANK_DETAILS);

  const tableUserDetails = useSelector((state: RootState) => state.master.USER_DETAILS);

  const tableSalaryDetails = useSelector(
    (state: RootState) => state.master.SALARY_DETAILS
  );

  const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = React.useState(false);
  const table = useSelector((state: RootState) => state.master);

  const SECTION_NAMES = APP_DATA.FORMDATA.EMPLOYEEE_MASTER.SECTIONS;
  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);

  const [notification, setNotification] = React.useState({
    open: true,
    severity: "success",
    message: "Loading Please wait",
  });
  const [enableSave, setEnableSave] = React.useState(true);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      EMPLOYEE_MASTER: tableEmployeeMaster.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      BANK_DETAILS: tableBankDetails.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      USER_DETAILS: tableUserDetails.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
      SALARY_DETAILS: tableSalaryDetails.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      EMPLOYEE_MASTER: prepdata.EMPLOYEE_MASTER.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      BANK_DETAILS: prepdata.BANK_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      USER_DETAILS: prepdata.USER_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
      SALARY_DETAILS: prepdata.SALARY_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      EMPLOYEE_MASTER: temp1.EMPLOYEE_MASTER.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      BANK_DETAILS: temp1.BANK_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      USER_DETAILS: temp1.USER_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
      SALARY_DETAILS: temp1.SALARY_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      ),
    };

    ////console.log(temp2);
    return temp2;
  };

  const onChangeHandler = (e) => {
    setEnableSave(false);
  };

  const submitSaveHandler = (e) => {
    try {
      e.stopPropagation();
      google.script.run
        .withSuccessHandler(() => {
          setEnableSave(true);
          setNotification({
            open: true,
            severity: "success",
            message: "Save Successful",
          });
        })
        .withFailureHandler((er) => {
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
    }
  };

  const setNotificationFalse = () =>{
    setNotification({open:false,severity:'error',message:"Failed"})
  }

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container maxWidth="xl" sx={[{ marginTop: (theme) => theme.spacing(10) }]}>
            {notification.open === true && (
      <CustomizedSnackbars
        open={notification.open}
        severity={notification.severity}
        message={notification.message}
        onChange={setNotificationFalse}
        duration={3000}
      />)}
      <Stack>
        {/* <FormHeader /> */}
        {/* <Stack direction="row"> */}
        <Stack>
          <FormHeader headerName={EMPLOYEE_MASTER.metaData[0].title} />

          <Stack>
            {/* <InputFieldNonForm
              COMPONENTS={EMPLOYEE_MASTER.metaData}
              control={control}
              items={items.EMPLOYEE_MASTER}
              formName={EMPLOYEE_MASTER.metaData[0].sheetname}
              
            /> */}
            {/* <FormComponent
              COMPONENTS={EMPLOYEE_MASTER.metaData}
              items={items.EMPLOYEE_MASTER}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={EMPLOYEE_MASTER.metaData[0].sheetname}
              enableButton={false}
              prefilled={selectedItem}
              // onChange={onChangeHandler}
            /> */}
            <TextFieldFreeze
              COMPONENTS={EMPLOYEE_MASTER.metaData}
              items={items.EMPLOYEE_MASTER}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={EMPLOYEE_MASTER.metaData[0].sheetname}
              // enableButton={false}
              prefilled={selectedItem}
            />
          </Stack>
        </Stack>
        <FormHeader headerName={SECTION_NAMES.SECTION_2} />
        <Stack>
          <FormComponent
            COMPONENTS={BANK_DETAILS.metaData}
            control={control}
            items={items.BANK_DETAILS}
            formName={BANK_DETAILS.metaData[0].sheetname}
            enableButton={true}
            primarykey={selectedItem}
            isMaster={props.isMaster}
            prefilled={tableBankDetails[0]}
            onChange={() => setEnableSave(false)}
          />
        </Stack>

        <Stack>
          <FormHeader headerName={SECTION_NAMES.SECTION_3} />
          <FormComponent
            COMPONENTS={USER_DETAILS.metaData}
            control={control}
            items={items.USER_DETAILS}
            formName={USER_DETAILS.metaData[0].sheetname}
            enableButton={true}
            isMaster={props.isMaster}
            primarykey={selectedItem}
            prefilled={tableUserDetails[0]}
            onChange={() => setEnableSave(false)}
          />
        </Stack>
        {/* </Stack> */}
        <Stack>
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
            <FormHeader headerName={SECTION_NAMES.SECTION_4} />
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
              sx={[{ marginLeft: "75%" }, { px: "1rem" }]}
            />
          </Stack>

          <Collapse in={checked} collapsedSize={0}>
            {/* <Box sx={{ height: 100, width: "100%" }}> */}
            <FormComponent
              COMPONENTS={SALARY_DETAILS.metaData}
              items={items.SALARY_DETAILS}
              headerValue="MACHINE_MASTER"
              formName={SALARY_DETAILS.metaData[0].sheetname}
              direction="row"
              enableButton={true}
              isMaster={props.isMaster}
              primarykey={selectedItem}
              onChange={onChangeHandler}
              // prefilled={selectedItem}
            />
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableSalaryDetails}
              columns={SALARY_DETAILS.columnsData}
              formName={SALARY_DETAILS.metaData[0].sheetname}
              onChange={() => setEnableSave(false)}
            />
            {/* </Box> */}
            {/* <DataGridDemo data={table} /> */}
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
            Save Changes
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default EmployeeMasterFormSingleItem;
