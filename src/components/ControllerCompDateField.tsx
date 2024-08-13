import React from "react";
import Stack from "@mui/material/Stack";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";

export default function ControllerCompDateField(props) {
  const disabled = props.disabled;

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <React.Fragment>
      <Stack
        spacing={1}
        // m={1}
        // //margin
        display="flex"
      >
        <FormHeader
          headerName={props.label.replace(/_/g, " ")}
          headerkind="regular"
        ></FormHeader>
        <Controller
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              error={error !== undefined}
              type="date"
              helperText={error ? props.helpertext : ""}
              sx={[
                {
                  "& .MuiInputBase-input": {
                    margin: 0, // Adjust this value as needed
                    height: 0,
                    fontSize: "0.8rem",
                  },
                },
                { width: (theme) => theme.spacing("10rem") },
                { height: (theme) => theme.spacing("2rem") },
                {
                  "&:hover": { backgroundColor: "white", borderRadius: "3px" },
                },
              ]}
              inputProps={{
                max: formatDate(new Date()), // Disable dates greater than today
              }}
            />
          )}
          name={props.nameprop}
          control={props.control}
          defaultValue={
            disabled
              ? props.defaultvalue
              : () => {
                  return formatDate(new Date());
                }
          }
          rules={{ required: props.required }}
        />
      </Stack>
    </React.Fragment>
  );
}
