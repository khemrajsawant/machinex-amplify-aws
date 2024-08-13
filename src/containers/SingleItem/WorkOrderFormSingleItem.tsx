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

import { fetchMaster,updateSelectedDropdown } from "../../redux/tableStateGenForm/master/masterAction";
import TextFieldFreeze from "../../components/TextFieldFreeze";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import CustomizedBackdrop from "../../components/CustomizedBackdrop";

// const columns = columnsData.EMPLOYEE_MASTER;

const WorkOrderFormSingleItem = (props) => {
  //states
  const dispatch = useDispatch();
  // metadata
  const selectedItem = useSelector((state) => state.master.SELECTED_DATA);

  const { WORK_ORDER: WORK_ORDER, WORK_ORDER_DETAILS: WORK_ORDER_DETAILS } =
    useSelector((state) => state.master.APP_DATA);

  // states

  const tableWorkOrder = useSelector((state) => state.master.WORK_ORDER);
  const tableWorkOrderDetails = useSelector(
    (state) => state.master.WORK_ORDER_DETAILS
  );
  const [notification, setNotification] = React.useState({
    open: true,
    severity: "success",
    message: "Loading Please wait",
  });
  const [open, setOpen] = React.useState(false);
  const [enableSave, setEnableSave] = React.useState(true);
  // const SECTION_NAMES = APP_DATA.FORMDATA.MACHINE_MASTER.SECTIONS;

  // handlers
  const setData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "WORK_ORDER_DETAILS"));
  };

  // useEffect(() => {
  //   try {
  //     google.script.run
  //       .withSuccessHandler(setData)
  //       .withFailureHandler((er) => {
  //         alert(er);
  //       })
  //       .importData("WORK_ORDER_DETAILS");
  //   } catch (error) {
  //     console.error(error); // You might send an exception to your error tracker like AppSignal
  //   }
  // }, []);


  useEffect(() => {
    console.log("running on save");
    try {
      if (enableSave === true) {
        selectedItem.Order_No &&
          google.script.run
            .withSuccessHandler(setData)
            .withFailureHandler((er) => {
              alert(er);
            })
            .importDataSelectedItem(
              "WORK_ORDER_DETAILS",
              selectedItem.Order_No
            );
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [enableSave]);

  //handlers

  const preparePostData = () => {
    const prepdata = {
      // WORK_ORDER: tableWorkOrder.filter(
      //   (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      // ),
      WORK_ORDER_DETAILS: tableWorkOrderDetails.filter(
        (c) => !(c.isServer && !c.isDeleted && !c.isNew && !c.isModified)
      ),
    };

    let temp1 = {
      // WORK_ORDER: prepdata.WORK_ORDER.filter(
      //   (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      // ),
      WORK_ORDER_DETAILS: prepdata.WORK_ORDER_DETAILS.filter(
        (c) => !(!c.isServer && c.isDeleted && c.isNew && !c.isModified)
      ),
    };

    let temp2 = {
      // WORK_ORDER: temp1.WORK_ORDER.filter(
      //   (c) => !(!c.isServer && c.isDeleted && !c.isNew && c.isModified)
      // ),
      WORK_ORDER_DETAILS: temp1.WORK_ORDER_DETAILS.filter(
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
  const setNotificationFalse = () => {
    setNotification({ open: false, severity: "error", message: "Failed" });
  };

  const onChangeHandler = (e) => {
    setEnableSave(false);
  };

  const items = useSelector((state) => state.master.DROPDOWN_DATA_INIT);
console.log("items dropdown data init", items.BILL_OF_PROCESS)
//  const onClickButtonHandler= () => {
//       dispatch(
//         updateSelectedDropdown(
//           ['A','B','C'],
//          'WORK_ORDER_DETAILS',
//          'Work_Details'
//         )
//       );
//       // setRefreshDropDowns(true);
//       // handlerSave();
//     }
 

  return (
    <Container maxWidth="xl" sx={[{ marginTop: (theme) => theme.spacing(10) }]}>
      {open === true && <CustomizedBackdrop open={open} />}
      {notification.open === true && (
        <CustomizedSnackbars
          open={notification.open}
          severity={notification.severity}
          message={notification.message}
          onChange={setNotificationFalse}
          duration={5000}
        />
      )}      
      <Stack>
        <Stack>
          <FormHeader headerName="WORK_ORDER" />
          <Stack>
            <TextFieldFreeze
              COMPONENTS={WORK_ORDER.metaData}
              items={items.WORK_ORDER}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={WORK_ORDER.metaData[0].sheetname}
              prefilled={selectedItem}
              enableButton={false}
              // onChange={onChangeHandler}
            />
          </Stack>
        </Stack>
        <Stack>
          <FormHeader headerName="WORK_ORDER_DETAILS" />
          <Stack>
            <FormComponent
              COMPONENTS={WORK_ORDER_DETAILS.metaData}
              items={items.BILL_OF_PROCESS}
              direction="row"
              headerValue="MACHINE_MASTER"
              formName={WORK_ORDER_DETAILS.metaData[0].sheetname}
              prefilled={{tableWorkOrderDetails}}
              enableButton={true}
              isMaster={props.isMaster}
              primarykey={selectedItem}
              onChange={onChangeHandler}
            />

            <DataGridCustomComponent
              isMaster={props.isMaster}
              data={tableWorkOrderDetails}
              columns={WORK_ORDER_DETAILS.columnsData}
              formName={WORK_ORDER_DETAILS.metaData[0].sheetname}
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
          {/* <Button
            variant="outlined"
            disabled={enableSave}
            sx={[
              { marginLeft: "10rem" },
              { marginRight: "10rem" },
              { marginTop: "2rem" },
            ]}
            onClick={onClickButtonHandler}
          >
            Update Dropdown
          </Button> */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default WorkOrderFormSingleItem;
