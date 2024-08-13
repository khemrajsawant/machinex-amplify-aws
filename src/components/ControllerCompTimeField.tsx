import React from "react";
import Stack from "@mui/material/Stack";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";

export default function ControllerCompTimeField(props) {
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
              type="time"
              helperText={error ? props.helpertext : ""}
              // value={props.defaultvalue}
              sx={[
                { "& .MuiInputBase-input": {
                  margin: 0, // Adjust this value as needed
                  height: 0,
                  fontSize: "0.8rem"}
                },
                { width: (theme) => theme.spacing("10rem") },  { height: (theme) => theme.spacing("2rem") },
                {
                  "&:hover": { backgroundColor: "white", borderRadius: "3px" },
                },
              ]}
              InputProps={{ sx: { height: "2rem" } }}
            />
          )}
          name={props.nameprop}
          control={props.control}
          defaultValue={props.defaultvalue}
          rules={{ required: props.required }}
        />
      </Stack>
    </React.Fragment>
  );
}
