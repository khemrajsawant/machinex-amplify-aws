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
import { RootState, useAppDispatch } from '../../redux/tableStateGenForm/store';

import CustomizedSnackbars from "../../components/CustomizedSnackbars";

// const columns = columnsData.EMPLOYEE_MASTER;

const PaymentModeForm = (props) => {
  //states

  // metadata
  const dispatch = useAppDispatch();
  const PAYMENT_MODE = { metaData: [], columnsData: [] };

  // states
  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });

  const [enableSave, setEnableSave] = React.useState(true);
   
  const tablePaymentMode = useSelector((state: RootState) => state.master.PAYMENT_MODE);
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;

  // handlers

  const onChangeHandler = (e) => {
    setEnableSave(false);
  };

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);
  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);

  const setNotificationFalse = () =>{
    setNotification({open:false,severity:'error',message:"Failed",duration:3000});
  }

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
        <Stack>
          <FormHeader headerName="PAYMENT_MODE_MASTER" />
          <Stack>
            <FormComponent
              COMPONENTS={PAYMENT_MODE.metaData}
              items={items.PAYMENT_MODE}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={PAYMENT_MODE.metaData[0].sheetname}
              enableButton={true}
              primarykey={selectedItem}
              onChange={onChangeHandler}
            />
            {/* { ////console.log(table)} */}
            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tablePaymentMode}
              columns={PAYMENT_MODE.columnsData}
              formName={PAYMENT_MODE.metaData[0].sheetname}
              onChange={()=>setEnableSave(false)}
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
            onClick={() => {}}
          >
            Submit Form
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PaymentModeForm;
