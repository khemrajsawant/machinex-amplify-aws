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
import { createEarningDetails } from "./graphql/mutations";
const client = generateClient();
export default function EarningDetailsCreateForm(props) {
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
    Report_No: "",
    Machine_float: "",
    Drawing_float: "",
    Work_Order_float: "",
    Operation: "",
    Quantity: "",
    Earning_Cost: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Report_No, setReport_No] = React.useState(initialValues.Report_No);
  const [Machine_float, setMachine_float] = React.useState(
    initialValues.Machine_float
  );
  const [Drawing_float, setDrawing_float] = React.useState(
    initialValues.Drawing_float
  );
  const [Work_Order_float, setWork_Order_float] = React.useState(
    initialValues.Work_Order_float
  );
  const [Operation, setOperation] = React.useState(initialValues.Operation);
  const [Quantity, setQuantity] = React.useState(initialValues.Quantity);
  const [Earning_Cost, setEarning_Cost] = React.useState(
    initialValues.Earning_Cost
  );
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setID(initialValues.ID);
    setReport_No(initialValues.Report_No);
    setMachine_float(initialValues.Machine_float);
    setDrawing_float(initialValues.Drawing_float);
    setWork_Order_float(initialValues.Work_Order_float);
    setOperation(initialValues.Operation);
    setQuantity(initialValues.Quantity);
    setEarning_Cost(initialValues.Earning_Cost);
    setIsServer(initialValues.isServer);
    setIsNew(initialValues.isNew);
    setIsModified(initialValues.isModified);
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const validations = {
    ID: [],
    Report_No: [],
    Machine_float: [],
    Drawing_float: [],
    Work_Order_float: [],
    Operation: [],
    Quantity: [],
    Earning_Cost: [],
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
          Report_No,
          Machine_float,
          Drawing_float,
          Work_Order_float,
          Operation,
          Quantity,
          Earning_Cost,
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
            query: createEarningDetails.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "EarningDetailsCreateForm")}
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
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
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
        label="Report no"
        isRequired={false}
        isReadOnly={false}
        value={Report_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No: value,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Report_No ?? value;
          }
          if (errors.Report_No?.hasError) {
            runValidationTasks("Report_No", value);
          }
          setReport_No(value);
        }}
        onBlur={() => runValidationTasks("Report_No", Report_No)}
        errorMessage={errors.Report_No?.errorMessage}
        hasError={errors.Report_No?.hasError}
        {...getOverrideProps(overrides, "Report_No")}
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
              Report_No,
              Machine_float: value,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
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
        label="Drawing float"
        isRequired={false}
        isReadOnly={false}
        value={Drawing_float}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Machine_float,
              Drawing_float: value,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Drawing_float ?? value;
          }
          if (errors.Drawing_float?.hasError) {
            runValidationTasks("Drawing_float", value);
          }
          setDrawing_float(value);
        }}
        onBlur={() => runValidationTasks("Drawing_float", Drawing_float)}
        errorMessage={errors.Drawing_float?.errorMessage}
        hasError={errors.Drawing_float?.hasError}
        {...getOverrideProps(overrides, "Drawing_float")}
      ></TextField>
      <TextField
        label="Work order float"
        isRequired={false}
        isReadOnly={false}
        value={Work_Order_float}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float: value,
              Operation,
              Quantity,
              Earning_Cost,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Work_Order_float ?? value;
          }
          if (errors.Work_Order_float?.hasError) {
            runValidationTasks("Work_Order_float", value);
          }
          setWork_Order_float(value);
        }}
        onBlur={() => runValidationTasks("Work_Order_float", Work_Order_float)}
        errorMessage={errors.Work_Order_float?.errorMessage}
        hasError={errors.Work_Order_float?.hasError}
        {...getOverrideProps(overrides, "Work_Order_float")}
      ></TextField>
      <TextField
        label="Operation"
        isRequired={false}
        isReadOnly={false}
        value={Operation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation: value,
              Quantity,
              Earning_Cost,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Operation ?? value;
          }
          if (errors.Operation?.hasError) {
            runValidationTasks("Operation", value);
          }
          setOperation(value);
        }}
        onBlur={() => runValidationTasks("Operation", Operation)}
        errorMessage={errors.Operation?.errorMessage}
        hasError={errors.Operation?.hasError}
        {...getOverrideProps(overrides, "Operation")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Quantity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity: value,
              Earning_Cost,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Quantity ?? value;
          }
          if (errors.Quantity?.hasError) {
            runValidationTasks("Quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("Quantity", Quantity)}
        errorMessage={errors.Quantity?.errorMessage}
        hasError={errors.Quantity?.hasError}
        {...getOverrideProps(overrides, "Quantity")}
      ></TextField>
      <TextField
        label="Earning cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Earning_Cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost: value,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Earning_Cost ?? value;
          }
          if (errors.Earning_Cost?.hasError) {
            runValidationTasks("Earning_Cost", value);
          }
          setEarning_Cost(value);
        }}
        onBlur={() => runValidationTasks("Earning_Cost", Earning_Cost)}
        errorMessage={errors.Earning_Cost?.errorMessage}
        hasError={errors.Earning_Cost?.hasError}
        {...getOverrideProps(overrides, "Earning_Cost")}
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
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
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
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
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
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
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
              Report_No,
              Machine_float,
              Drawing_float,
              Work_Order_float,
              Operation,
              Quantity,
              Earning_Cost,
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
