import React, { useEffect, useState } from "react";
import ControllerCompTextField from "../components/ControllerCompTextField";
import { Icon } from "@iconify/react";
import ControllerCompSelectField from "../components/ControllerCompSelect";
import { useSelector } from "react-redux";
import Tooltip from '@mui/material/Tooltip';
import {
  createMaster,
  updateMaster,
  updateSelectedDropdown,
} from "../redux/tableStateGenForm/master/masterReducer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CompFormcontrolRadio from "./CompFormcontrolRadio";
import ControllerCompDateField from "./ControllerCompDateField";
import TestAutocompleteForm from "./TestAutocompleteForm";
import MultiSelectAutocomplete from "./MultiSelectAutoComplete";

// import {calcCostHandler} from '../business/processBusinessLogic'

import { processData } from "../business/processBusinessLogic";

import FormHeader from "./FormHeader";
import ControllerCompCheckbox from "../components/ControllerCompCheckbox";
import ControllerCompTimeField from "./ControllerCompTimeField";
import { RootState } from "../redux/tableStateGenForm/store";
// var _ = require('lodash/fp');

export default function FormComponent(props) {
  const { control, handleSubmit, setValue, watch, reset } = useForm({
    reValidateMode: "onBlur",
  });
  const { onChange } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const COMPONENTS = props.COMPONENTS.filter((c) => c.name != "ID");

  const primary_key_name = props.COMPONENTS.filter(
    (c) => c.isPrimaryKey === true
  )[0].name;
  //console.log("primary_key_name", primary_key_name);
  const headerName = props.headerValue;
  const formName = COMPONENTS[0].sheetname;
  const masterData = props.primarykey ? props.primarykey : {};
  const enableButton = props.enableButton;
  const isMaster = props.isMaster;
  const tableFormData = useSelector((state: RootState) => state.master);
  const inputObject = props.items;

  var OperationMapper = {
    M0: "Manual",
    M1: "Grinding",
    M2: "Keyway",
    M3: "Turning",
    M4: "Turning",
    M5: "Turning",
    M6: "Turning",
  };

  const assignMachinesToOperations = (operationsToAssign, machineCodeInput) => {
    var OperationsData = tableFormData.OPERATION_MASTER;
console.log("OperationsData",OperationsData)
    const filteredData = OperationsData.filter(
      (item) => item.Workstation === OperationMapper[machineCodeInput]
    );
    console.log("filteredData",filteredData,"operationsToAssign",operationsToAssign);

    let filteredOperations = operationsToAssign.filter((op) =>
      filteredData.some((data) => data.Opn_Name === op)
    );
    console.log("filteredOperations",filteredOperations);
    return filteredOperations;
  };

  // const inputObject = {
  //   "3MP/P-35975 - SS312": ["A12", "B12", "C12"],
  //   "3MP/P-35975 - SS313": ["A13", "B13", "C13"],
  //   "3MP/P-35975 - SS314": ["A14", "B14", "C14"],
  //   "3MP/P-35975 - SS315": ["A15", "B15", "C15"],
  //   "3MP/P-35975 - SS316": ["A16", "B16", "C16"],
  // };

  // React.useEffect(() => {

  //   var inputObject = tableFormData.DROPDOWN_DATA_INIT["BILL_OF_PROCESS"];
  //   setInputObject(inputObject)
  //   },[])

  //   const isMaster = COMPONENTS[0].form===formName;

  // //console.log("isMaster",isMaster)
  const [id, setId] = React.useState(0);

  var defaultValuesArray = props.prefilled ? props.prefilled : {};
  var itemTemp = props.items;

  const [pendingQty, setpendingQty] = React.useState(999999);

  if (formName == "EARNING_DETAILS") {
    console.log("inputObject", inputObject);

    const selectedValueMachine_Number = watch("Machine_Number");
    const selectedValueDrawing_Number = watch("Drawing_Number");
    const selectedValueWork_Order_Number = watch("Work_Order_Number");
    const selectedValueOperation = watch("Operation");

    console.log("selectedValueDrawing_Number", selectedValueDrawing_Number);
    console.log(
      "selectedValueWork_Order_Number",
      selectedValueWork_Order_Number
    );
    console.log("selectedValueMachine_Number", selectedValueMachine_Number);

    console.log(inputObject);
    var itemTemp = [];

    React.useEffect(() => {
      var itemTemp =
        selectedValueMachine_Number === undefined ||
        selectedValueMachine_Number === null
          ? inputObject[0]
          : inputObject[OperationMapper[selectedValueMachine_Number]];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);

      // localStorage.setItem("searchHistoryReference", itemTemp);
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);

      // () => {
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp)
      dispatch(updateSelectedDropdown(itemTemp, formName, "Drawing_Number"));
    }, [selectedValueMachine_Number]);

    React.useEffect(() => {
      var itemTemp =
        selectedValueDrawing_Number === undefined ||
        selectedValueDrawing_Number === null
          ? inputObject[0]
          : inputObject[selectedValueDrawing_Number];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);

      dispatch(updateSelectedDropdown(itemTemp, formName, "Work_Order_Number"));
    }, [selectedValueDrawing_Number]);

    React.useEffect(() => {
      var test_var =
        selectedValueWork_Order_Number === undefined ||
        selectedValueWork_Order_Number === null
          ? ""
          : selectedValueWork_Order_Number;
      var temp_filter = selectedValueDrawing_Number + "_" + test_var;
      console.log("temp_filter", temp_filter);
      var itemTemp =
        selectedValueWork_Order_Number === undefined ||
        selectedValueWork_Order_Number === null
          ? inputObject[0]
          : inputObject[temp_filter];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);

      var filtered_ops = assignMachinesToOperations(
        itemTemp,
        selectedValueMachine_Number
      );
      if (filtered_ops === undefined) {
        filtered_ops = [];
      }
      console.log("filtered_ops", filtered_ops);

      dispatch(updateSelectedDropdown(filtered_ops, formName, "Operation"));
    }, [selectedValueWork_Order_Number]);

    React.useEffect(() => {
      setLoading(true);

      console.log("tableFormData",tableFormData)
      const setQuantity = (k) => {
        defaultValuesArray["Pending_Quantity"] = k.Bal_Qty;
        defaultValuesArray["Operation_Details"] = k.description;
        console.log("defaultValuesArray", defaultValuesArray);
        setValue("Pending_Quantity", k.Bal_Qty);
        setValue("Operation_Details", k.description);
        setpendingQty(k.Bal_Qty);
        if(k.Bal_Qty==0){
          setLoading(true)
        }else{
          setLoading(false)
        }
      };

      if (
        selectedValueOperation === undefined ||
        selectedValueOperation === null
      ) {
        setValue("Pending_Quantity", "");
        setValue("Operation_Details", "");
      } else {
        try {
          google.script.run
            .withSuccessHandler(setQuantity)
            .withFailureHandler((er) => {
              alert(er);
            })
            .getLiveInfo(
              "earningDetailsPendingQty",
              selectedValueWork_Order_Number + "_" + selectedValueOperation
            );
        } catch (error) {
          defaultValuesArray["Pending_Quantity"] = "";

          console.error(error); // You might send an exception to your error tracker like AppSignal
        }
      }
    }, [selectedValueOperation]);
  }

  if (formName == "WORK_ORDER_DETAILS") {
    React.useEffect(() => {
      var len = parseInt(defaultValuesArray.tableWorkOrderDetails.length) + 1;
      defaultValuesArray["PO_Ref"] =
        props.primarykey.PO_Ref + "_" + (len < 10 ? "0" + len : len);
      console.log("defaultValuesArray", defaultValuesArray);
      setValue("PO_Ref", defaultValuesArray["PO_Ref"]);
      dispatch(updateSelectedDropdown(itemTemp, formName, "PO_Ref"));
    }, [props.prefilled, props.primarykey]);
  }

  if (formName == "WORK_ORDER") {
    React.useEffect(() => {
      var len = parseInt(tableFormData.WORK_ORDER.length) + 1;
      defaultValuesArray["Order_No"] =
        "WO" + "0".repeat(6 - len.toString().length) + len;
      console.log("defaultValuesArray", defaultValuesArray);
      setValue("Order_No", defaultValuesArray["Order_No"]);
      masterData["Order_No"] = defaultValuesArray["Order_No"]
    }, [props.prefilled, props.primarykey]);
  }

  if (formName == "JOB_WORK_ORDER") {
    React.useEffect(() => {
      var len = parseInt(tableFormData.JOB_WORK_ORDER.length) + 1;
      defaultValuesArray["JWO_No"] =
        "JWO" + "0".repeat(6 - len.toString().length) + len;
      console.log("defaultValuesArray", defaultValuesArray);
      setValue("JWO_No", defaultValuesArray["JWO_No"]);
      masterData["JWO_No"] = defaultValuesArray["JWO_No"]
    }, [props.prefilled, props.primarykey]);
  }

  if (formName == "JOB_WORK_ORDER_DETAILS") {
    console.log("inputObject", inputObject, "selected", props.primarykey);

    const selectedValue = props.primarykey.Drawing_Number;
    // console.log(Object.keys(inputObject) === selectedValue);
    var itemTemp = [];

    React.useEffect(() => {
      var itemTemp =
        selectedValue === undefined || selectedValue === null
          ? inputObject[0]
          : inputObject[selectedValue];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);

      // localStorage.setItem("searchHistoryReference", itemTemp);
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);

      // () => {
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp)
      dispatch(updateSelectedDropdown(itemTemp, formName, "PO_Ref"));
    }, [selectedValue]);

    const selectedValuePO_Ref = watch("PO_Ref");
    // console.log(Object.keys(inputObject) === selectedValue);
    var itemTemp = [];

    React.useEffect(() => {
      var itemTemp =
        selectedValuePO_Ref === undefined || selectedValuePO_Ref === null
          ? inputObject[0]
          : inputObject[selectedValuePO_Ref];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);

      // localStorage.setItem("searchHistoryReference", itemTemp);
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);

      // () => {
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp)
      dispatch(updateSelectedDropdown(itemTemp, formName, "Work_Details"));
    }, [selectedValuePO_Ref]);
  }

  if (formName == "JOB_WORK_RECEIPT_DETAILS") {
    console.log("inputObject", inputObject);

    const selectedValue_JWO_No = watch("JWO_No");
    const selectedValue_PO_Ref = watch("PO_Ref");
    // console.log(Object.keys(inputObject) === selectedValue);
    var itemTemp = [];

    React.useEffect(() => {
      var itemTemp =
        selectedValue_JWO_No === undefined || selectedValue_JWO_No === null
          ? inputObject[0]
          : inputObject[selectedValue_JWO_No];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);

      // localStorage.setItem("searchHistoryReference", itemTemp);
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);

      // () => {
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp)
      dispatch(updateSelectedDropdown(itemTemp, formName, "PO_Ref"));
    }, [selectedValue_JWO_No]);

    React.useEffect(() => {
      var itemTemp =
        selectedValue_PO_Ref === undefined || selectedValue_PO_Ref === null
          ? inputObject[0]
          : inputObject[selectedValue_PO_Ref];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);

      // localStorage.setItem("searchHistoryReference", itemTemp);
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);

      // () => {
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp)
      dispatch(updateSelectedDropdown(itemTemp, formName, "Work_Details"));
    }, [selectedValue_PO_Ref]);
  }

  if (formName == "WORK_ORDER_DETAILS") {
    console.log("inputObject", inputObject);

    const selectedValue = watch("Drawing_Number");
    // console.log(Object.keys(inputObject) === selectedValue);
    var itemTemp = [];

    const setOriginalSeq = (k) => {
      const originalSequence = k;

      console.log("originalSequence", originalSequence);

      var itemTemp =
        selectedValue === undefined || selectedValue === null
          ? inputObject[0]
          : inputObject[selectedValue];

      const givenArray = itemTemp;

      // Create a map to store the indices of items in the original sequence
      const indexMap = new Map(
        originalSequence.map((item, index) => [item, index])
      );

      // Custom comparator function for sorting based on the original sequence
      function customComparator(a, b) {
        const indexA = indexMap.get(a);
        const indexB = indexMap.get(b);

        return indexA - indexB;
      }

      // Sort the given array using the custom comparator
      const sortedArray = givenArray.sort(customComparator);

      // Log the sorted array
      console.log("sortedArray", sortedArray);
      dispatch(updateSelectedDropdown(sortedArray, formName, "Work_Details"));
    };

    React.useEffect(() => {
      if (selectedValue === undefined || selectedValue === null) {
      } else {
        try {
          google.script.run
            .withSuccessHandler(setOriginalSeq)
            .withFailureHandler((er) => {
              alert(er);
            })
            .getLiveInfo("OperationDetails_BOP", selectedValue);
        } catch (error) {
          console.error(error); // You might send an exception to your error tracker like AppSignal
        }
      }
      // var itemTemp =
      //   selectedValue === undefined || selectedValue === null
      //     ? inputObject[0]
      //     : inputObject[selectedValue];

      // if (itemTemp === undefined) {
      //   itemTemp = [];
      // }
      // console.log("itemTemp", itemTemp);

      // localStorage.setItem("searchHistoryReference", itemTemp);
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);

      // () => {
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp)
      dispatch(updateSelectedDropdown(itemTemp, formName, "Work_Details"));
    }, [selectedValue]);
  }

  if (formName == "BILL_OF_PROCESS") {
    console.log("inputObject", inputObject);

    const selectedValue = watch("Workstation");
    // console.log(Object.keys(inputObject) === selectedValue);
    var itemTemp = [];

    React.useEffect(() => {
      var itemTemp =
        selectedValue === undefined ||
        selectedValue === null ||
        selectedValue === ""
          ? inputObject[0]
          : inputObject[selectedValue];

      if (itemTemp === undefined) {
        itemTemp = [];
      }
      console.log("itemTemp", itemTemp);
      // const selectedValue_Opn_Name = watch("Opn_Name");
      // console.log("selectedValue_Opn_Name",selectedValue_Opn_Name)
      // localStorage.setItem("searchHistoryReference", itemTemp);
      // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);

      dispatch(updateSelectedDropdown(itemTemp, formName, "Opn_Name"));
    }, [selectedValue]);
  }

  if (formName == "DAILY_WORK_REPORT") {
    var inputDate = watch("Date");

    // var       itemTemp = [];

    React.useEffect(() => {
      console.log("prefilled", props.prefilled);

      try {
        var [year, month, day] = inputDate.split("-");
      } catch {
        // Create a new Date object
        var date = new Date();

        // Get the year, month, and day components
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
        var day = String(date.getDate()).padStart(2, "0");
      }
      setValue(
        "Report_No",
        "DWR-" + props.prefilled.Worker_No + `-${day}-${month}-${year}`
      );

      //   var itemTemp =
      //   selectedValue === undefined || selectedValue === null
      //     ? inputObject[0]
      //     : inputObject[selectedValue];

      // if (itemTemp === undefined) {
      //   itemTemp = [];
      // }
      // console.log("itemTemp", itemTemp);

      //   // localStorage.setItem("searchHistoryReference", itemTemp);
      //   // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp);
      //   onChange(
      //     // () => {
      //     // setValue("Work_Details", itemTemp === undefined ? [] : itemTemp)
      //     dispatch(updateSelectedDropdown(itemTemp, formName, "Opn_Name"))
      //   // }
      //   );
    }, [inputDate]);
  }

  ////console.log("tableWorkStationMaster", tableWorkStationMaster);

  // function pad(num, size, wNo) {
  //   num = num.toString();
  //   while (num.length < size) num = "0" + num;

  //   return wNo + "-" + num;
  // }
  const [reloadFlag, setReloadFlag] = useState(false);
  const onSubmit = async (data) => {
    ////console.log(data)
    let input = {
      data,
      tableFormData,
      id,
      primary_key_name,
      masterData,
      isMaster,
    };

    input.id = tableFormData[formName].length + 1;
    data[primary_key_name] =
      data[primary_key_name] !== undefined
        ? data[primary_key_name]
        : masterData[primary_key_name];
    console.log("input.id", input.id);
    console.log("primary_key_name", primary_key_name);
    setLoading(true);
    console.log("data[primary_key_name.name]", data[primary_key_name], data);
    var column_to_search;
    var col_to_watch
    if (formName == "WORK_ORDER") {
      col_to_watch = "PO_Ref"
      column_to_search = data["PO_Ref"];
    } else {
      column_to_search = data[primary_key_name];
      col_to_watch = primary_key_name
    }

    // var reportNumbers = data.map(item => item.Report_No);

     const existingValues = tableFormData[formName].map(
        (item) => item[col_to_watch]
      );

  
    const watchFieldValue = watch(col_to_watch);
    const isDuplicate = existingValues.includes(watchFieldValue);
    console.log("isDuplicate", isDuplicate, "existingValues", existingValues);
    if (isDuplicate === false) {
      if (isMaster === false) {
        const processedData = processData(formName, input);
        processedData.isUpdateMaster === true
          ? dispatch(updateMaster(processedData, formName))
          : dispatch(createMaster(processedData, formName));

        setId(id + 1);
        onChange(processedData);
        reset();
        setReloadFlag(!reloadFlag);
        setLoading(false);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          google.script.run
            .withSuccessHandler((k) => {
              // this logic needs correction
              if (k.keyExists === false) {
                console.log("is duplicate key", k);
                const processedData = processData(formName, input);
                processedData.isUpdateMaster === true
                  ? dispatch(updateMaster(processedData, formName))
                  : dispatch(createMaster(processedData, formName));

                setId(id + 1);
                onChange(processedData);
                reset();
                setReloadFlag(!reloadFlag);
                setLoading(false);
              } else {
                alert(col_to_watch +" - " +column_to_search + " already exists");
                setLoading(false);
              }
            })
            .withFailureHandler((er) => {})
            .getLiveInfoKey(
              "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw",
              formName,
              "A:G",
              "keyExists",
              column_to_search
            );
        } catch (error) {
          console.error(error); // You might send an exception to your error tracker like AppSignal
          const processedData = processData(formName, input);
          processedData.isUpdateMaster === true
            ? dispatch(updateMaster(processedData, formName))
            : dispatch(createMaster(processedData, formName));
  
          setId(id + 1);
          onChange(processedData);
          reset();
          setReloadFlag(!reloadFlag);
          setLoading(false);
        }
      }
    } else {
      alert(col_to_watch +" - " +column_to_search + " already exists");
      setLoading(false);
    }
  };

  ////console.log("itemsData",items)
  return (
    <React.Fragment key={reloadFlag}>
      {/* {//console.log("printing from" +`${formName}`)} */}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Stack
          direction={props.direction}
          sx={[
            { width: "100%" },
            { border: 1.5 },
            { borderRadius: "15px" },
            { paddingLeft: "85%" },
            { marginBottom: "0.5rem" },
            { marginTop: "0.5rem" },
            // { borderRight: 1 },
            { borderColor: "white" },
            //  { background: "#f3e5f5" },
            { transition: "background 1s, color 1s" },
            { "&:hover": { backgroundColor: "white", borderRadius: "15px" } },
          ]}
          useFlexGap
          flexWrap="wrap"
        >
<Tooltip title="Refresh this form"> 
          <Button
            // variant="contained"
            onClick={() => {
              reset();
              setReloadFlag(!reloadFlag);
            }}
            size="small"
            sx={[
              { minWidth: (theme) => theme.spacing(5) },
              { maxHeight: (theme) => theme.spacing(5) },
            ]}
          >           <Icon icon="ooui:reload" />

          </Button></Tooltip>
        </Stack>

        <Stack
          direction={props.direction}
          sx={[
            { width: "100%" },
            { border: 1.5 },
            { borderRadius: "15px" },
            { padding: "1rem" },
            { marginBottom: "0.5rem" },
            { marginTop: "0.5rem" },
            // { borderRight: 1 },
            { borderColor: "white" },
            //  { background: "#f3e5f5" },
            { transition: "background 1s, color 1s" },
            { "&:hover": { backgroundColor: "white", borderRadius: "15px" } },
          ]}
          useFlexGap
          flexWrap="wrap"
        >
          {COMPONENTS.map((cmp) => {
            const COMPONENTS_COLUMNSDATA = props.COMPONENTS_COLUMNSDATA
              ? props.COMPONENTS_COLUMNSDATA.filter((c) => c.field == cmp.name)
              : [];
            console.log(COMPONENTS_COLUMNSDATA);
            //console.log("isDisabled", cmp.label, cmp.isDisabled);
            if (cmp.show == true) {
              if (cmp.select === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem" }}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(2) }}
                    >
                      {/* <ControllerCompSelectField
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        items={items[cmp.label]}
                        helpertext={cmp.helpertext}
                      /> */}
                      <TestAutocompleteForm
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        items={
                          itemTemp[cmp.name] ? itemTemp[cmp.name] : itemTemp
                        }
                        helpertext={cmp.helpertext}
                        formName={formName}
                        defaultvalue={defaultValuesArray[cmp.name]}
                        disabled={cmp.isDisabled}
                        required={cmp.required}
                      />
                    </Stack>
                  </Box>
                );
              } else if (cmp.multiselect === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem" }}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(2) }}
                    >
                      {/* <ControllerCompSelectField
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        items={items[cmp.label]}
                        helpertext={cmp.helpertext}
                      /> */}
                      <MultiSelectAutocomplete
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        items={itemTemp}
                        helpertext={cmp.helpertext}
                        formName={formName}
                        defaultvalue={defaultValuesArray[cmp.label]}
                        disabled={cmp.isDisabled}
                        required={cmp.required}
                      />
                    </Stack>
                  </Box>
                );
              } else if (cmp.input === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem" }}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(3) }}
                    >
                      <ControllerCompTextField
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        helpertext={cmp.helpertext}
                        defaultvalue={defaultValuesArray[cmp.label]}
                        disabled={cmp.isDisabled}
                        form={cmp.form}
                        required={cmp.required}
                        loading={loading}
                        customStyles={{
                          width:
                            COMPONENTS_COLUMNSDATA.length > 0
                              ? COMPONENTS_COLUMNSDATA[0].width
                              : "10rem", // Set the custom width
                          textField: {
                            // Additional custom styles for textField
                          },
                        }}
                      />
                    </Stack>
                  </Box>
                );
              } else if (cmp.radiobutton === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem" }}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(3) }}
                    >
                      <CompFormcontrolRadio
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        helpertext={cmp.helpertext}
                        disabled={cmp.isDisabled}
                        defaultvalue={defaultValuesArray[cmp.label]}
                        required={cmp.required}
                      />
                    </Stack>
                  </Box>
                );
              } else if (cmp.checkbox === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem" }}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(3) }}
                    >
                      <ControllerCompCheckbox
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        helpertext={cmp.helpertext}
                        disabled={cmp.isDisabled}
                        defaultvalue={defaultValuesArray[cmp.label]}
                        required={cmp.required}
                      />
                    </Stack>
                  </Box>
                );
              } else if (cmp.date === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem" }}
                  >
                    {/* <Stack
                    spacing={1}
                    // m={1}
                    // //margin
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginLeft: "1rem" }}
                  > */}
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(3) }}
                    >
                      <ControllerCompDateField
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        helpertext={cmp.helpertext}
                        disabled={cmp.isDisabled}
                        required={cmp.required}
                      />
                    </Stack>
                  </Box>
                );
              } else if (cmp.time === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem" }}
                  >
                    {/* <Stack
                    spacing={1}
                    // m={1}
                    // //margin
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginLeft: "1rem" }}
                  > */}
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(3) }}
                    >
                      <ControllerCompTimeField
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        helpertext={cmp.helpertext}
                        disabled={cmp.isDisabled}
                        required={cmp.required}
                        defaultvalue={defaultValuesArray[cmp.label]}
                      />
                    </Stack>
                  </Box>
                );
              }
            }
          })}
          <Box
            order={20}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginLeft: "1rem" }}
          >
            {enableButton === true && (
              <>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  size="small"
                  sx={[
                    { minWidth: (theme) => theme.spacing(15) },
                    { maxHeight: (theme) => theme.spacing(5) },
                  ]}
                >
                  Save
                </Button>
              </>
            )}
          </Box>
        </Stack>
      </form>
    </React.Fragment>
  );
}
