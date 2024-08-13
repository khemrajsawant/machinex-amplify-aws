/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createMachineMaster } from "./graphql/mutations";
const client = generateClient();
export default function MachineMasterCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ID: "",
    Machine_float: "",
    Machine_Name: "",
    Machine_Specification: "",
    Workstation: "",
    Machine_Per_Hrs_Rate: "",
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Machine_float, setMachine_float] = React.useState(
    initialValues.Machine_float
  );
  const [Machine_Name, setMachine_Name] = React.useState(
    initialValues.Machine_Name
  );
  const [Machine_Specification, setMachine_Specification] = React.useState(
    initialValues.Machine_Specification
  );
  const [Workstation, setWorkstation] = React.useState(
    initialValues.Workstation
  );
  const [Machine_Per_Hrs_Rate, setMachine_Per_Hrs_Rate] = React.useState(
    initialValues.Machine_Per_Hrs_Rate
  );
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setID(initialValues.ID);
    setMachine_float(initialValues.Machine_float);
    setMachine_Name(initialValues.Machine_Name);
    setMachine_Specification(initialValues.Machine_Specification);
    setWorkstation(initialValues.Workstation);
    setMachine_Per_Hrs_Rate(initialValues.Machine_Per_Hrs_Rate);
    setTimeStamp(initialValues.timeStamp);
    setIsServer(initialValues.isServer);
    setIsNew(initialValues.isNew);
    setIsModified(initialValues.isModified);
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const validations = {
    ID: [],
    Machine_float: [],
    Machine_Name: [],
    Machine_Specification: [],
    Workstation: [],
    Machine_Per_Hrs_Rate: [],
    timeStamp: [],
    isServer: [],
    isNew: [],
    isModified: [],
    isDeleted: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ID,
          Machine_float,
          Machine_Name,
          Machine_Specification,
          Workstation,
          Machine_Per_Hrs_Rate,
          timeStamp,
          isServer,
          isNew,
          isModified,
          isDeleted,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createMachineMaster.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MachineMasterCreateForm")}
      {...rest}
    >
      <TextField
        label="Id"
        isRequired={false}
        isReadOnly={false}
        value={ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID: value,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.ID ?? value;
          }
          if (errors.ID?.hasError) {
            runValidationTasks("ID", value);
          }
          setID(value);
        }}
        onBlur={() => runValidationTasks("ID", ID)}
        errorMessage={errors.ID?.errorMessage}
        hasError={errors.ID?.hasError}
        {...getOverrideProps(overrides, "ID")}
      ></TextField>
      <TextField
        label="Machine float"
        isRequired={false}
        isReadOnly={false}
        value={Machine_float}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float: value,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Machine_float ?? value;
          }
          if (errors.Machine_float?.hasError) {
            runValidationTasks("Machine_float", value);
          }
          setMachine_float(value);
        }}
        onBlur={() => runValidationTasks("Machine_float", Machine_float)}
        errorMessage={errors.Machine_float?.errorMessage}
        hasError={errors.Machine_float?.hasError}
        {...getOverrideProps(overrides, "Machine_float")}
      ></TextField>
      <TextField
        label="Machine name"
        isRequired={false}
        isReadOnly={false}
        value={Machine_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name: value,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Machine_Name ?? value;
          }
          if (errors.Machine_Name?.hasError) {
            runValidationTasks("Machine_Name", value);
          }
          setMachine_Name(value);
        }}
        onBlur={() => runValidationTasks("Machine_Name", Machine_Name)}
        errorMessage={errors.Machine_Name?.errorMessage}
        hasError={errors.Machine_Name?.hasError}
        {...getOverrideProps(overrides, "Machine_Name")}
      ></TextField>
      <TextField
        label="Machine specification"
        isRequired={false}
        isReadOnly={false}
        value={Machine_Specification}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification: value,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Machine_Specification ?? value;
          }
          if (errors.Machine_Specification?.hasError) {
            runValidationTasks("Machine_Specification", value);
          }
          setMachine_Specification(value);
        }}
        onBlur={() =>
          runValidationTasks("Machine_Specification", Machine_Specification)
        }
        errorMessage={errors.Machine_Specification?.errorMessage}
        hasError={errors.Machine_Specification?.hasError}
        {...getOverrideProps(overrides, "Machine_Specification")}
      ></TextField>
      <TextField
        label="Workstation"
        isRequired={false}
        isReadOnly={false}
        value={Workstation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation: value,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Workstation ?? value;
          }
          if (errors.Workstation?.hasError) {
            runValidationTasks("Workstation", value);
          }
          setWorkstation(value);
        }}
        onBlur={() => runValidationTasks("Workstation", Workstation)}
        errorMessage={errors.Workstation?.errorMessage}
        hasError={errors.Workstation?.hasError}
        {...getOverrideProps(overrides, "Workstation")}
      ></TextField>
      <TextField
        label="Machine per hrs rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Machine_Per_Hrs_Rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Machine_Per_Hrs_Rate ?? value;
          }
          if (errors.Machine_Per_Hrs_Rate?.hasError) {
            runValidationTasks("Machine_Per_Hrs_Rate", value);
          }
          setMachine_Per_Hrs_Rate(value);
        }}
        onBlur={() =>
          runValidationTasks("Machine_Per_Hrs_Rate", Machine_Per_Hrs_Rate)
        }
        errorMessage={errors.Machine_Per_Hrs_Rate?.errorMessage}
        hasError={errors.Machine_Per_Hrs_Rate?.hasError}
        {...getOverrideProps(overrides, "Machine_Per_Hrs_Rate")}
      ></TextField>
      <TextField
        label="Time stamp"
        isRequired={false}
        isReadOnly={false}
        value={timeStamp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp: value,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.timeStamp ?? value;
          }
          if (errors.timeStamp?.hasError) {
            runValidationTasks("timeStamp", value);
          }
          setTimeStamp(value);
        }}
        onBlur={() => runValidationTasks("timeStamp", timeStamp)}
        errorMessage={errors.timeStamp?.errorMessage}
        hasError={errors.timeStamp?.hasError}
        {...getOverrideProps(overrides, "timeStamp")}
      ></TextField>
      <SwitchField
        label="Is server"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isServer}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer: value,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isServer ?? value;
          }
          if (errors.isServer?.hasError) {
            runValidationTasks("isServer", value);
          }
          setIsServer(value);
        }}
        onBlur={() => runValidationTasks("isServer", isServer)}
        errorMessage={errors.isServer?.errorMessage}
        hasError={errors.isServer?.hasError}
        {...getOverrideProps(overrides, "isServer")}
      ></SwitchField>
      <SwitchField
        label="Is new"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isNew}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew: value,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isNew ?? value;
          }
          if (errors.isNew?.hasError) {
            runValidationTasks("isNew", value);
          }
          setIsNew(value);
        }}
        onBlur={() => runValidationTasks("isNew", isNew)}
        errorMessage={errors.isNew?.errorMessage}
        hasError={errors.isNew?.hasError}
        {...getOverrideProps(overrides, "isNew")}
      ></SwitchField>
      <SwitchField
        label="Is modified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isModified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew,
              isModified: value,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isModified ?? value;
          }
          if (errors.isModified?.hasError) {
            runValidationTasks("isModified", value);
          }
          setIsModified(value);
        }}
        onBlur={() => runValidationTasks("isModified", isModified)}
        errorMessage={errors.isModified?.errorMessage}
        hasError={errors.isModified?.hasError}
        {...getOverrideProps(overrides, "isModified")}
      ></SwitchField>
      <SwitchField
        label="Is deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isDeleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ID,
              Machine_float,
              Machine_Name,
              Machine_Specification,
              Workstation,
              Machine_Per_Hrs_Rate,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted: value,
            };
            const result = onChange(modelFields);
            value = result?.isDeleted ?? value;
          }
          if (errors.isDeleted?.hasError) {
            runValidationTasks("isDeleted", value);
          }
          setIsDeleted(value);
        }}
        onBlur={() => runValidationTasks("isDeleted", isDeleted)}
        errorMessage={errors.isDeleted?.errorMessage}
        hasError={errors.isDeleted?.hasError}
        {...getOverrideProps(overrides, "isDeleted")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
