import React from "react";
import Stack from "@mui/material/Stack";
import { Controller, Control, FieldValues, Path, PathValue, UseControllerProps } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";

interface ControllerCompTimeFieldProps<T extends FieldValues> {
  label: string;
  helpertext?: string;
  nameprop: Path<T>;
  control: Control<T>;
  defaultvalue?: PathValue<T, Path<T>>;
  required?: boolean;
}

export default function ControllerCompTimeField<T extends FieldValues>({
  label,
  helpertext = "",
  nameprop,
  control,
  defaultvalue,
  required = false,
}: ControllerCompTimeFieldProps<T>) {
  return (
    <React.Fragment>
      <Stack
        spacing={1}
        display="flex"
      >
        <FormHeader
          headerName={label.replace(/_/g, " ")}
          headerkind="regular"
        />
        <Controller
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              error={!!error}
              type="time"
              helperText={error ? helpertext : ""}
              sx={[
                { "& .MuiInputBase-input": {
                  margin: 0,
                  height: 0,
                  fontSize: "0.8rem"
                }},
                { width: (theme) => theme.spacing(10) },  { height: (theme) => theme.spacing(2) },
                {
                  "&:hover": { backgroundColor: "white", borderRadius: "3px" },
                },
              ]}
              InputProps={{ sx: { height: "2rem" } }}
            />
          )}
          name={nameprop}
          control={control}
          defaultValue={defaultvalue}
          rules={{ required }}
        />
      </Stack>
    </React.Fragment>
  );
}
