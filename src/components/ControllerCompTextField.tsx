import { Controller, Control, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";
import FormHeader from "./FormHeader";
import { CircularProgress } from "@mui/material";

// Define the type for props
interface ControllerComTextFieldProps {
  control: Control<FieldValues>;
  disabled?: boolean;
  loading?: boolean;
  defaultvalue?: string;
  label: string;
  customStyles?: {
    width?: string;
    textField?: React.CSSProperties;
  };
  helpertext?: string;
  nameprop: string;
  required?: boolean;
  form?: string;
}

const ControllerComTextField: React.FC<ControllerComTextFieldProps> = (props) => {
  const {
    control,
    disabled = false,
    loading = false,
    defaultvalue = '',
    label,
    customStyles = {},
    helpertext = '',
    nameprop,
    required = false,
    form = ''
  } = props;

  const asciiArray = [79, 77, 32, 73, 78, 68, 85, 83, 84, 82, 73, 69, 83];
  const cname = String.fromCharCode(...asciiArray);

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

  return (
    <React.Fragment>
      <FormHeader
        headerName={label.replace(/_/g, " ")}
        headerkind="regular"
      />
      {disabled && form === "EMPLOYEE_MASTER" ? (
        <span>{defaultvalue}</span>
      ) : (
        <Controller
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              disabled={disabled}
              variant={disabled ? "standard" : "outlined"}
              error={!!error}
              helperText={error ? helpertext : ""}
              sx={[
                baseStyles.inputRoot,
                baseStyles.inputBase,
                { width: customStyles.width },
                baseStyles.textField,
              
              ]}
              InputProps={{
                endAdornment: loading && <CircularProgress size={20} />,
                sx: { height: "2rem", border: disabled ? 0 : "3px" },
              }}
            />
          )}
          name={nameprop}
          control={control}
          defaultValue={
            disabled && form === "COMPANY_INFORMATION" ? cname : defaultvalue
          }
          rules={{ required }}
        />
      )}
    </React.Fragment>
  );
}

export default ControllerComTextField;
