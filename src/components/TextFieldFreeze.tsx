import React from "react";
import ControllerCompTextField from "../components/ControllerCompTextField";
import ControllerCompSelectField from "../components/ControllerCompSelect";

import { createMaster } from "../redux/tableStateGenForm/master/masterAction";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CompFormcontrolRadio from "./CompFormcontrolRadio";
import ControllerCompDateField from "./ControllerCompDateField";
import TestAutocompleteForm from "./TestAutocompleteForm";

import FormHeader from "./FormHeader";
// import {calcCostHandler} from '../business/processBusinessLogic'
import { useSelector } from "react-redux";
import { processData } from "../business/processBusinessLogic";
// var _ = require('lodash/fp');

export default function TextFieldFreeze(props) {
  const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
  const COMPONENTS = props.COMPONENTS.filter((c) => c.name != "ID");
  const headerName = props.headerValue;
  const formName = COMPONENTS[0].sheetname;
  const primarykey = props.primarykey;
  const enableButton = props.enableButton;
  //   const isMaster = COMPONENTS[0].form===formName;

  // //console.log("isMaster",isMaster)
  const [id, setId] = React.useState(0);
  const tableWorkStationMaster = useSelector(
    (state) => state.master.WORKSTATION_MASTER
  );

  const defaultValuesArray = props.prefilled ? props.prefilled : {};
  ////console.log("tableWorkStationMaster", tableWorkStationMaster);

  const dispatch = useDispatch();

  // function pad(num, size, wNo) {
  //   num = num.toString();
  //   while (num.length < size) num = "0" + num;

  //   return wNo + "-" + num;
  // }

  const onSubmit = (data) => {
    ////console.log(data)
    let input = { data, tableWorkStationMaster, id, primarykey };

    const processedData = processData(formName, input);
    dispatch(createMaster(processedData, formName));
    setId(id + 1);
  };

  const items = props.items;

  ////console.log("itemsData",items)
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            { backgroundColor: "white", borderRadius: "15px" }
          ]}
          useFlexGap
          flexWrap="wrap"
        >
          {COMPONENTS.map((cmp) => {
            if (cmp.show == true) {
              if (cmp.select === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem",backgroundColor: "#e0f2f1", borderRadius: "10px",p:1,m:1,minWidth:"10rem" }}
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
                      {/* <TestAutocompleteForm
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        items={items[cmp.label]}
                        helpertext={cmp.helpertext}
                        formName={formName}
                        defaultvalue={defaultValuesArray[cmp.name]}
                        disabled={!enableButton}
                      /> */}
                      <FormHeader
                        headerName={cmp.label.replace(/_/g, " ")}
                        headerkind="regular"
                      ></FormHeader>
                      <span name={cmp.name} style={{ fontSize: "0.8rem" }}>
                        {defaultValuesArray[cmp.name]}
                      </span>
                    </Stack>
                  </Box>
                );
              } else if (cmp.input === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem",backgroundColor: "#e0f2f1", borderRadius: "10px",p:1,m:1,minWidth:"10rem"}}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(3) }}
                    >
                      <FormHeader
                        headerName={cmp.label.replace(/_/g, " ")}
                        headerkind="regular"
                      ></FormHeader>
                      <span name={cmp.name} style={{ fontSize: "0.8rem" }}>
                        {defaultValuesArray[cmp.name]}
                      </span>
                    </Stack>
                  </Box>
                );
              } else if (cmp.checkbox === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem",backgroundColor: "#e0f2f1", borderRadius: "10px",p:1,m:1,minWidth:"10rem"}}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginBottom: (theme) => theme.spacing(3) }}
                    >
                      <FormHeader
                        headerName={cmp.label.replace(/_/g, " ")}
                        headerkind="regular"
                      ></FormHeader>
                      <span name={cmp.name} style={{ fontSize: "0.8rem" }}>
                        {defaultValuesArray[cmp.name]}
                      </span>
                    </Stack>
                  </Box>
                );
              } else if (cmp.date === true) {
                return (
                  <Box
                    order={cmp.order}
                    key={cmp.order}
                    sx={{ marginLeft: "1rem",backgroundColor: "#e0f2f1", borderRadius: "10px",p:1,m:1,minWidth:"10rem" }}
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
                      <FormHeader
                        headerName={cmp.label.replace(/_/g, " ")}
                        headerkind="regular"
                      ></FormHeader>
                      <span name={cmp.name} style={{ fontSize: "0.8rem" }}>
                        {defaultValuesArray[cmp.name]}
                      </span>
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
            sx={{ marginLeft: "1rem"}}
          >
            {enableButton === true && (
              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={[
                  { minWidth: (theme) => theme.spacing(15) },
                  { maxHeight: (theme) => theme.spacing(5) },
                ]}
              >
                Add Entry
              </Button>
            )}
          </Box>
        </Stack>
      </form>
    </React.Fragment>
  );
}
