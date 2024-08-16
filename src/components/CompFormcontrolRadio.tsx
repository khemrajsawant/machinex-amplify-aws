import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { Controller, Control } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";

interface CompFormcontrolRadioProps {
  control: Control<any>;
  disabled?: boolean;
  defaultvalue?: string;
  label: string;
  nameprop: string;
  required?: boolean;
}

const CompFormcontrolRadio: React.FC<CompFormcontrolRadioProps> = (props) => {
  const { control, disabled, defaultvalue, label, nameprop, required } = props;

  return (
    <React.Fragment>
      <Stack spacing={1} display="flex">
        <FormHeader headerName={label.replace(/_/g, " ")} headerkind="regular" />
        <FormControl sx={{ height: (theme) => theme.spacing(4) }}>
          <Controller
            control={control}
            name={nameprop}
            defaultValue="male"
            rules={{ required }}
            render={({ field }) => (
              <RadioGroup {...field} defaultValue={defaultvalue} row>
                <FormControlLabel
                  value="male"
                  control={
                    <TextField
                      {...field}
                      type="radio"
                      value="male"
                      disabled={disabled}
                      sx={[
                        {
                          "& .MuiInputBase-input": {
                            margin: 0,
                            height: "1rem",
                            fontSize: "0.8rem",
                          },
                        },
                        { width: (theme) => theme.spacing(6) },
                        { "& fieldset": { border: "none" } },
                      ]}
                    />
                  }
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  sx={[
                    {
                      "& .MuiInputBase-input": {
                        margin: 0,
                        height: "1rem",
                      },
                    },
                  ]}
                  control={
                    <TextField
                      {...field}
                      disabled={disabled}
                      type="radio"
                      value="female"
                      sx={[
                        {
                          "& .MuiInputBase-input": {
                            margin: 0,
                            height: "1rem",
                            fontSize: "0.8rem",
                          },
                        },
                        { width: (theme) => theme.spacing(6) },
                        { "& fieldset": { border: "none" } },
                      ]}
                    />
                  }
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={
                    <TextField
                      {...field}
                      disabled={disabled}
                      type="radio"
                      value="other"
                      sx={[
                        {
                          "& .MuiInputBase-input": {
                            margin: 0,
                            height: "1rem",
                            fontSize: "0.8rem",
                          },
                        },
                        { width: (theme) => theme.spacing(6) },
                        { "& fieldset": { border: "none" } },
                      ]}
                    />
                  }
                  label="Other"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
      </Stack>
    </React.Fragment>
  );
};

export default CompFormcontrolRadio;
