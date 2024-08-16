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
import FormControlLabel from "@mui/material/FormControlLabel";
import { Icon } from "@iconify/react";
import FormComponent from "../../components/FormComponent";


import { useEffect } from "react";


import { fetchMaster } from "../../redux/tableStateGenForm/master/masterAction";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";
import { Box, Collapse } from "@mui/material";
import { RootState,useAppDispatch } from "../../redux/tableStateGenForm/store";

const AccountMaster = (props) => {
  //states
  const dispatch = useAppDispatch();
  // metadata

  const { ACCOUNT_MASTER_FORM: ACCOUNT_MASTER_FORM } = useSelector(
    (state: RootState) => state.master.APP_DATA
  );

  // states
  const selectedItem = useSelector((state: RootState) => state.master.SELECTED_DATA);

  const [notification, setNotification] = React.useState({
    open: false,
    severity: "error",
    message: "Failed",
    duration: 0,
  });

  const [enableSave, setEnableSave] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const handleChange = (props) => {
    setChecked((prev) => !prev);
  };
  const tableAccountMaster = useSelector(
    (state: RootState) => state.master.ACCOUNT_MASTER_FORM
  );
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;

  // handlers
  const setData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "ACCOUNT_MASTER_FORM"));
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
          .withFailureHandler((er) => {
            alert(er);
          })
          .importData("ACCOUNT_MASTER_FORM");
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      ACCOUNT_MASTER_FORM: tableAccountMaster.filter(
        (c:any) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      ACCOUNT_MASTER_FORM: prepdata.ACCOUNT_MASTER_FORM.filter(
        (c:any) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      ACCOUNT_MASTER_FORM: temp1.ACCOUNT_MASTER_FORM.filter(
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
        duration: 3000,
      });
    }
  };

  const onChangeHandler = () => {
    setEnableSave(false);
  };

  const items = useSelector((state: RootState) => state.master.DROPDOWN_DATA);

  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed",duration:3000 });
  };

  return (
    <Container maxWidth="xl" sx={[{ marginTop: (theme) => theme.spacing(10) },{ marginBottom: (theme) => theme.spacing(2) }, { height: "100vh"}]}>
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
        <Stack sx={[{ marginTop: (theme) => theme.spacing(3) }]}>
          <FormHeader headerName={ACCOUNT_MASTER_FORM.metaData[0].title} />
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
            <FormHeader headerName="Create an account" headerkind="regular" />
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
              sx={{ marginLeft: "75%", px: "1rem" }}
            />
          </Stack>
          <Stack>
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
          <Collapse in={checked} collapsedSize={0}>
            <FormComponent
              COMPONENTS={ACCOUNT_MASTER_FORM.metaData}
              items={items.ACCOUNT_MASTER_FORM}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={ACCOUNT_MASTER_FORM.metaData[0].sheetname}
              enableButton={true}
              isMaster={props.isMaster}
              primarykey={selectedItem}
              onChange={onChangeHandler}
            />
            </Collapse>
            {/* {////console.log(table)} */}
            <DataGridCustomComponent
              isMaster={false}
              data={tableAccountMaster}
              columns={ACCOUNT_MASTER_FORM.columnsData}
              formName={ACCOUNT_MASTER_FORM.metaData[0].sheetname}
              onChange={() => setEnableSave(false)}
            />
            </Box></Stack>
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

export default AccountMaster;
