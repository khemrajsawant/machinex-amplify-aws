import { List, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Autocomplete from "@mui/material/Autocomplete";

import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import FormHeader from "./FormHeader";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "@iconify/react";
import useLocalStorage from "./useLocalStorage";
import { useDispatch } from "react-redux";
import {
  updateMetaData,
  updateUserAuthDetails,
  updateSelectMetaData,
  updateSelectedDropdown,
} from "../redux/tableStateGenForm/master/masterAction";
import { useState, useEffect } from "react";

export default function TestAutocompleteForm(props) {
  const dispatch = useDispatch();
  const disabled= props.disabled
  const table = useSelector((state) => state.master.DROPDOWN_DATA);
  ////console.log(table);
  const [toggle, setToggle] = useState(false);
  // const control = props.control;
  const [value, setValue] = useState("");
  const [reference, setReference] = useState(props.defaultvalue);
  let optionsData = table[props.formName][props.nameprop];
  ////console.log("reference", reference);
  const [searchHistoryReference, setSearchHistoryReference] = useLocalStorage(
    "searchHistoryReference",
    optionsData
  );

  // useEffect(() => {
  //   ////console.log(props.formName, searchHistoryReference);
  //   dispatch(
  //     updateSelectedDropdown(
  //       searchHistoryReference,
  //       props.formName,
  //       props.nameprop
  //     )
  //   );
  // }, [searchHistoryReference]);
  useEffect(() => {
    console.log("dd data", table[props.formName][props.nameprop]);
    setSearchHistoryReference(table[props.formName][props.nameprop]);
  }, [props.items]);
  const handleUpdateSearchHistoryReference = (number) => {
    if (searchHistoryReference.indexOf(number) === -1) {
      if (searchHistoryReference.length >= 30) {
        searchHistoryReference.length = 30;
      } // limit the search history to 30 prior
      setSearchHistoryReference([number, ...searchHistoryReference]); // most recently searched at top (append to beginning of array vs. end)
    }
  };
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setToggle(!toggle);
  // };

  const handleClickButton = async (e) => {
    setReference(value);
    if (!value) {
      await setValue("");
    }
    ////console.log("Hi");
    if (searchHistoryReference.indexOf(value) === -1 && value !== "") {
      if (value) handleUpdateSearchHistoryReference(value);
    }

    e.preventDefault();
    // window.alert(value + " should have added if it didn't aleady exist.");
    setToggle(!toggle);
  };

  const handleOptionDelete = (option) => {
    setSearchHistoryReference((state) => state.filter((opt) => opt !== option));
  };

  // if (toggle === true) {
  return (
    <React.Fragment>
      <FormHeader
        headerName={props.label.replace(/_/g, " ")}
        headerkind="regular"
      ></FormHeader>
      <Stack direction="row">
        <Controller
          render={({ field, fieldState: { error } }) => {
            const { onChange, value, ref } = field;
            return (
              <Autocomplete
                freeSolo
                inputRef={ref}
                disabled={disabled}
                ListboxProps={{
                  sx: {
                    minHeight: "2rem",
                    maxHeight: "8rem",
         
                  },
                }}
                sx={{
                  width: "15rem",
                  "& .MuiInputBase-root": {
                    height: "2rem",
                  },
                }}
                value={reference}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  setReference(newValue);
                  onChange(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                  setValue(newInputValue);
                }}
                options={searchHistoryReference}
                renderOption={(propst, option, state) => (
                  <ListItem  style={{width:"40rem" }} {...propst}>                    {/* <ListItemSecondaryAction> */}
                  <IconButton style={{margin:0, padding: 0 }}
                    edge="end"
                    aria-label="delete"
                    onClick={(e) => handleOptionDelete(option)}
                  >
                    <DeleteIcon style={{margin:0, padding: 0 }} />
                  </IconButton>
                {/* </ListItemSecondaryAction> */}
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "0.8rem",margin:0, margin: "0.5rem" }}>
                          {option}
                        </span>
                      }
                    />

                  </ListItem>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    disabled={disabled}
                    onChange={(e) => setReference(e.target.value)}
                    variant="outlined"
                    error={error !== undefined}
                    helperText={error ? props.helpertext : ""}
                    defaultValue={props.defaultvalue}
                    onBlur={() => {
                      field.onBlur();
                    }}
                    // helperText={error ? props.helpertext : ""}
                    sx={{
                      "& .MuiInputBase-input": {
                        margin: 0, // Adjust this value as needed
                        height: 0,
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                )}
              />
            );
          }}
          name={props.nameprop}
          control={props.control}
          defaultValue=""
          rules={{ required: props.required }}
        />
        <Button
          sx={{
            width: "1rem",

            "& .MuiInputBase-root": {
              width: "1rem",
              height: "1rem",
            },
          }}
          onClick={handleClickButton}
          name="button_1"
          type="submit"
        >
          <Icon icon="gala:add" color="#000" width="1rem" height="1rem" />
        </Button>
      </Stack>
      {/* <label style={{color:"#d32f2f",fontSize:"0.75rem"}}>{value=="" ? props.helpertext : ""}</label> */}
    </React.Fragment>
  );
  // } else if (toggle == false) {
  //   return (
  //     <React.Fragment>
  //       <FormHeader
  //         headerName={props.label.replace(/_/g, " ")}
  //         headerkind="regular"
  //       ></FormHeader>
  //       <Stack direction="row">
  //         <Controller
  //           render={({ field, fieldState: { error } }) => (
  //             <Select
  //               {...field}
  //               error={error !== undefined}
  //               helpertext={error ? helpertext : ""}
  //               sx={[
  //                 { width: (theme) => theme.spacing("10rem") },
  //                 { height: (theme) => theme.spacing("2rem") },
  //               ]}
  //             >
  //               {props.items.map((item) => {
  //                 return (
  //                   <MenuItem value={item} key={item}>
  //                     {item}
  //                   </MenuItem>
  //                 );
  //               })}
  //             </Select>
  //           )}
  //           name={props.nameprop}
  //           control={props.control}
  //           defaultValue=""
  //           rules={{ required: true }}
  //         />
  //         <Button
  //           sx={{

  //             "& .MuiInputBase-root": {
  //               width: "1rem",
  //               height: "1rem",
  //             },
  //           }}
  //           name="jb"
  //           onClick={handleClick}
  //           type="submit"
  //         >
  //           <Icon icon="gala:add" color="#000" width="1rem" height="1rem" />
  //         </Button>
  //       </Stack>
  //     </React.Fragment>
  //   );
  // }
}
