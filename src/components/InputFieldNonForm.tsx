import React from "react";
import Stack from "@mui/material/Stack";
import ControllerCompTextField from "../components/ControllerCompTextField";
import ControllerCompSelectField from "../components/ControllerCompSelect";
import ControllerCompDateField from "./ControllerCompDateField";
import CompFormcontrolRadio from "./CompFormcontrolRadio";
import TestAutocompleteForm from "./TestAutocompleteForm";
import Box from "@mui/material/Box";

export default function InputFieldNonForm(props) {
  const control = props.control;
  const COMPONENTS = props.COMPONENTS.filter((c:any) => c.show !==false);
  const items = props.items;
  const formName = props.formName;
  return (
    <React.Fragment>
      <Stack
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={[
          { width: "100%" },
          { border: 1.5 },
          { borderRadius: "15px" },
          { padding: "1rem" },
          { marginBottom: "0.5rem" },
          { marginTop: "0.5rem" },
          // { borderRight: 1 },
          { borderColor: "white" },
          //  { background: "#f3e5f5" },
          { transition: "background 1s, color 1s" },
          { "&:hover": { backgroundColor: "white", borderRadius: "15px" } },
        ]}
      >
        {COMPONENTS.map((cmp) => {
          if (cmp.select === true) {
            return (
              <Box
                order={cmp.order}
                key={cmp.order}
                sx={{ marginLeft: "1rem" }}
              >
                <Stack spacing={1}>
                <TestAutocompleteForm
                        control={control}
                        label={cmp.label}
                        nameprop={cmp.name}
                        items={items[cmp.label]}
                        helpertext={cmp.helpertext}
                        formName={formName}
                      />
                </Stack>
              </Box>
            );
          } else if (cmp.input === true) {
            return (
              <Box
                order={cmp.order}
                key={cmp.order}
                sx={{ marginLeft: "1rem" }}
              >
                <Stack
                  spacing={1}
                  sx={{ marginBottom: (theme) => theme.spacing(3) }}
                >
                  <ControllerCompTextField
                    control={control}
                    label={cmp.label}
                    nameprop={cmp.name}
                    helpertext={cmp.helpertext}
                  />
                </Stack>
              </Box>
            );
          } else if (cmp.checkbox === true) {
            return (
              <Box
                order={cmp.order}
                key={cmp.order}
                sx={{ marginLeft: "1rem" }}
              >
                <Stack
                  spacing={1}
                  sx={{ marginBottom: (theme) => theme.spacing(3) }}
                >
                  <CompFormcontrolRadio
                    control={control}
                    label={cmp.label}
                    nameprop={cmp.name}
                  />
                </Stack>
              </Box>
            );
          } else if (cmp.date === true) {
            return (
              <Box
                order={cmp.order}
                key={cmp.order}
                sx={{ marginLeft: "1rem" }}
              >
                {/* <Stack
                    spacing={1}
                    // m={1}
                    // //margin
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginLeft: "1rem" }}
                  > */}
                <Stack
                  spacing={1}
                  sx={{ marginBottom: (theme) => theme.spacing(3) }}
                >
                  <ControllerCompDateField
                    control={control}
                    label={cmp.label}
                    nameprop={cmp.name}
                    helpertext={cmp.helpertext}
                  />
                </Stack>
              </Box>
            );
          }
        })}
      </Stack>
    </React.Fragment>
  );
}
