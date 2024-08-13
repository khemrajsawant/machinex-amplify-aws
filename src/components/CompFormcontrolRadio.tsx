import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";

export default function CompFormcontrolRadio(props) {
  const control = props.control;
  const disabled = props.disabled
  const defaultvalue = props.defaultvalue
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
        <FormControl
          sx={[{ height: (theme) => theme.spacing("2rem") }]}
          InputProps={{ sx: { height: "2rem" } }}
        >
          <Controller
            // rules={{ required: true }}
            control={control}
            name={props.nameprop}
            defaultValue="male"
            rules={{ required: props.required }}
            render={({ field, fieldState: { error } }) => {
              ////console.log(field);
              return (
                <RadioGroup {...field} defaultValue={defaultvalue} row>
                  <FormControlLabel
                    value="male"
                    control={
                      <TextField
                        {...field}
                        type="radio"
                        value='male'
                        disabled={disabled}
                        sx={[
                          { "& .MuiInputBase-input": {
                            margin: 0, // Adjust this value as needed
                            height: "1rem",
                            fontSize: "0.8rem"}
                          },
                          { width: (theme) => theme.spacing("3rem") },
                          { "& fieldset": { border: "none" } },
                        ]}

                        // InputProps={{ sx: { height: "2rem" } }}
                      />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    sx={[
                      { "& .MuiInputBase-input": {
                        margin: 0, // Adjust this value as needed
                        height: "1rem"
                      }
                      }]}
                    control={
                      <TextField
                        {...field}
                        disabled={disabled}
                        type="radio"
                        value="female"
                        sx={[
                          { "& .MuiInputBase-input": {
                            margin: 0, // Adjust this value as needed
                            height: "1rem",
                            fontSize: "0.8rem"}
                          },
                          { width: (theme) => theme.spacing("3rem") },
                          { "& fieldset": { border: "none" } },
                        ]}

                        // InputProps={{ sx: { height: "2rem" } }}
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
                          { "& .MuiInputBase-input": {
                            margin: 0, // Adjust this value as needed
                            height: "1rem",
                            fontSize: "0.8rem"}
                          },
                          { width: (theme) => theme.spacing("3rem") },
                          { "& fieldset": { border: "none" } },
                        ]}

                        // InputProps={{ sx: { height: "2rem" } }}
                      />
                    }
                    label="Other"
                  />
                </RadioGroup>
              );
            }}
          />
        </FormControl>
      </Stack>
    </React.Fragment>
  );
}
