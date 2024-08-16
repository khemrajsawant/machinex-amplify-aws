import React from "react";
import Stack from "@mui/material/Stack";
import { Controller, Control } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";

interface ControllerCompDateFieldProps {
  nameprop: string;
  control: Control<any>;
  label: string;
  helpertext?: string;
  disabled?: boolean;
  required?: boolean;
  defaultvalue?: string;
}

const ControllerCompDateField: React.FC<ControllerCompDateFieldProps> = (props) => {
  const { disabled, label, nameprop, control, helpertext, required, defaultvalue } = props;

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <React.Fragment>
      <Stack spacing={1} display="flex">
        <FormHeader headerName={label.replace(/_/g, " ")} headerkind="regular" />
        <Controller
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              error={Boolean(error)}
              type="date"
              helperText={error ? helpertext : ""}
              sx={[
                {
                  "& .MuiInputBase-input": {
                    margin: 0, // Adjust this value as needed
                    height: 0,
                    fontSize: "0.8rem",
                  },
                },
                { width: (theme) => theme.spacing(20) },
                { height: (theme) => theme.spacing(4) },
                {
                  "&:hover": { backgroundColor: "white", borderRadius: "3px" },
                },
              ]}
              inputProps={{
                max: formatDate(new Date()), // Disable dates greater than today
              }}
            />
          )}
          name={nameprop}
          control={control}
          defaultValue={
            disabled
              ? defaultvalue
              : formatDate(new Date())
          }
          rules={{ required }}
        />
      </Stack>
    </React.Fragment>
  );
};

export default ControllerCompDateField;
