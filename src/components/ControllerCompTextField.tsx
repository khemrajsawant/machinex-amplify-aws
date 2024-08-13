import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";

import FormHeader from "./FormHeader";
import { CircularProgress } from "@mui/material";

export default function ControllerComTextField(props) {
  const control = props.control;
  const disabled = props.disabled;
  const asciiArray = [79, 77, 32, 73, 78, 68, 85, 83, 84, 82, 73, 69, 83];
  const cname = String.fromCharCode(...asciiArray);

  const loading = props.loading

  const baseStyles = {
    inputRoot: {
      "& .MuiInput-root": {
        "&:before, :after, :hover:not(.mui-disabled):before": {
          borderBottom: 0,
        },
      },
    },
    inputBase: {
      "& .MuiInputBase-input": {
        margin: 0,
        height: '2rem',
        fontSize: "0.8rem",
      },
    },
    textField: {
      // width: (theme) => theme.spacing("10rem"), // Default width
      "&:hover": { backgroundColor: "white", borderRadius: "3px" },
    },
  };

  const customStyles = props.customStyles || {}; // Custom styles prop, default to an empty object if not provided

  return (
    <React.Fragment>
      <FormHeader
        headerName={props.label.replace(/_/g, " ")}
        headerkind="regular"
      />
      {disabled && props.form === "EMPLOYEE_MASTER" ? (
        <span>{props.defaultvalue}</span>
      ) : (
        <Controller
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              disabled={disabled}
              variant={disabled ? "standard" : "outlined"}
              error={error !== undefined}
              helperText={error ? props.helpertext : ""}
              // value={props.defaultvalue}
              sx={[
                baseStyles.inputRoot,
                baseStyles.inputBase,
                { width: customStyles.width || baseStyles.textField.width }, // Customizable width
                baseStyles.textField,
                customStyles.textField, // Apply custom styles for textField
              ]}
              InputProps={{
                endAdornment: loading && <CircularProgress size={20} />,
                sx: { height: "2rem", border: disabled ? 0 : "3px" },
              }}
            />
          )}
          name={props.nameprop}
          control={control}
          defaultValue={
            disabled && props.form === "COMPANY_INFORMATION" ? cname : props.defaultvalue
          }
          rules={{ required: props.required }}
        />
      )}
    </React.Fragment>
  );
}
