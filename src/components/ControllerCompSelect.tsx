import { Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import FormHeader from "./FormHeader";

export default function ControllerCompSelectField(props) {
  const control = props.control;
  const items = props.items;
  const disabled = props.disabled;

  return (
    <React.Fragment>
      <FormHeader
        headerName={props.label.replace(/_/g, " ")}
        headerkind="regular"
      ></FormHeader>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <Select
            {...field}
            disabled={disabled}
            error={error !== undefined}
            helpertext={error ? props.helpertext : ""}
            sx={[
              { width: (theme) => theme.spacing("10rem") },
              { height: (theme) => theme.spacing("2rem") },
            ]}
          >
            {items.map((item) => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        )}
        name={props.nameprop}
        control={control}
        defaultValue=""
        rules={{ required: true }}
      />
    </React.Fragment>
  );
}
