import { Controller, Control } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import FormHeader from "./FormHeader";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

interface ControllerCompSelectFieldProps {
  control: Control<any>;
  items: string[];
  disabled?: boolean;
  label: string;
  nameprop: string;
  helpertext?: string;
}

export default function ControllerCompSelectField(props: ControllerCompSelectFieldProps) {
  const { control, items, disabled, label, nameprop, helpertext } = props;

  return (
    <React.Fragment>
      <FormHeader headerName={label.replace(/_/g, " ")} headerkind="regular" />
      <FormControl error={!!helpertext} sx={{ width: (theme) => theme.spacing(10), height: (theme) => theme.spacing(2) }}>
        <Controller
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                {...field}
                disabled={disabled}
                error={!!error}
              >
                {items.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              {error && <FormHelperText>{helpertext}</FormHelperText>}
            </>
          )}
          name={nameprop}
          control={control}
          defaultValue=""
          rules={{ required: true }}
        />
      </FormControl>
    </React.Fragment>
  );
}
