import { Controller, Control } from "react-hook-form";
import React, { Fragment } from "react";
import FormHeader from "./FormHeader";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface ControllerCompCheckboxProps {
  control: Control<any>;
  disabled?: boolean;
  label: string;
  form?: string;
  defaultvalue?: boolean;
  helpertext?: string;
  nameprop: string;
  required?: boolean;
}

export default function ControllerCompCheckbox({
  control,
  disabled,
  label,
  form,
  defaultvalue = false,
  helpertext,
  nameprop,
  required = false
}: ControllerCompCheckboxProps) {
  const asciiArray = [79, 77, 32, 73, 78, 68, 85, 83, 84, 82, 73, 69, 83];
  const cname = String.fromCharCode(...asciiArray);

  return (
    <Fragment>
      <FormHeader
        headerName={label.replace(/_/g, " ")}
        headerkind="regular"
      />
      {disabled && form === "EMPLOYEE_MASTER" ? (
        <span>{defaultvalue.toString()}</span>
      ) : (
        <FormControl error={Boolean(helpertext)}>
          <Controller
            render={({ field }) => (
              <Checkbox
                {...field}
                defaultChecked={defaultvalue}
                disabled={disabled}
              />
            )}
            name={nameprop}
            control={control}
            defaultValue={defaultvalue}
            rules={{ required }}
          />
          {helpertext && <FormHelperText>{helpertext}</FormHelperText>}
        </FormControl>
      )}
    </Fragment>
  );
}
