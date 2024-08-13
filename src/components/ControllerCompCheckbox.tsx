import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import React from "react";

import FormHeader from "./FormHeader";
import Checkbox from '@mui/material/Checkbox';

export default function ControllerCompCheckbox(props) {
  const control = props.control;
  const disabled = props.disabled;
  const asciiArray = [79, 77, 32, 73, 78, 68, 85, 83, 84, 82, 73, 69, 83];
  const cname = String.fromCharCode(...asciiArray);
  //console.log("cname", cname);

  return (

    <React.Fragment>
      <FormHeader
        headerName={props.label.replace(/_/g, " ")}
        headerkind="regular"
      ></FormHeader>
          {disabled && props.form == "EMPLOYEE_MASTER"?
    <span >{props.defaultvalue}</span>:
      <Controller
        render={({ field, fieldState: { error } }) => (
          <Checkbox
            {...field}
            error={error !== undefined}
            helperText={error ? props.helpertext : ""}
            defaultChecked={props.defaultvalue}
            // sx={[
            //   {
            //     "& .MuiInput-root": {
            //       "&:before, :after, :hover:not(.mui-disabled):before": {
            //         borderBottom: 0,
            //       },
            //     },
            //   },
            //   {
            //     "& .MuiInputBase-input": {
            //       margin: 0, // Adjust this value as needed
            //       height: '2rem',
            //       fontSize: "0.8rem"
            //     },
            //   },
            //   {
            //     width: (theme) => theme.spacing("10rem")
            //   },
            //   {
            //     "&:hover": { backgroundColor: "white", borderRadius: "3px" },
            //   },
            // ]}
            // InputProps={{
            //   sx: { height: "2rem", border: disabled ? 0 : "3px" },
            // }}
          />
        )}
        name={props.nameprop}
        control={control}
        defaultValue={props.defaultvalue}
        rules={{ required: props.required }}
      />}
    </React.Fragment>
  );
}
