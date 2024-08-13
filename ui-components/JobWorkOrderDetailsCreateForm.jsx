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
import { createJobWorkOrderDetails } from "./graphql/mutations";
const client = generateClient();
export default function JobWorkOrderDetailsCreateForm(props) {
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
    JWO_No: "",
    JWO_Sr_No: "",
    PO_Ref: "",
    Quantity: "",
    Del_Date: "",
    Work_Details: "",
    Rate: "",
    Total_Cost: "",
    JWO_In_Qty: "",
    Bal_Qty: "",
    Rej_Qty: "",
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [JWO_No, setJWO_No] = React.useState(initialValues.JWO_No);
  const [JWO_Sr_No, setJWO_Sr_No] = React.useState(initialValues.JWO_Sr_No);
  const [PO_Ref, setPO_Ref] = React.useState(initialValues.PO_Ref);
  const [Quantity, setQuantity] = React.useState(initialValues.Quantity);
  const [Del_Date, setDel_Date] = React.useState(initialValues.Del_Date);
  const [Work_Details, setWork_Details] = React.useState(
    initialValues.Work_Details
  );
  const [Rate, setRate] = React.useState(initialValues.Rate);
  const [Total_Cost, setTotal_Cost] = React.useState(initialValues.Total_Cost);
  const [JWO_In_Qty, setJWO_In_Qty] = React.useState(initialValues.JWO_In_Qty);
  const [Bal_Qty, setBal_Qty] = React.useState(initialValues.Bal_Qty);
  const [Rej_Qty, setRej_Qty] = React.useState(initialValues.Rej_Qty);
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setID(initialValues.ID);
    setJWO_No(initialValues.JWO_No);
    setJWO_Sr_No(initialValues.JWO_Sr_No);
    setPO_Ref(initialValues.PO_Ref);
    setQuantity(initialValues.Quantity);
    setDel_Date(initialValues.Del_Date);
    setWork_Details(initialValues.Work_Details);
    setRate(initialValues.Rate);
    setTotal_Cost(initialValues.Total_Cost);
    setJWO_In_Qty(initialValues.JWO_In_Qty);
    setBal_Qty(initialValues.Bal_Qty);
    setRej_Qty(initialValues.Rej_Qty);
    setTimeStamp(initialValues.timeStamp);
    setIsServer(initialValues.isServer);
    setIsNew(initialValues.isNew);
    setIsModified(initialValues.isModified);
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const validations = {
    ID: [],
    JWO_No: [],
    JWO_Sr_No: [],
    PO_Ref: [],
    Quantity: [],
    Del_Date: [],
    Work_Details: [],
    Rate: [],
    Total_Cost: [],
    JWO_In_Qty: [],
    Bal_Qty: [],
    Rej_Qty: [],
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
          JWO_No,
          JWO_Sr_No,
          PO_Ref,
          Quantity,
          Del_Date,
          Work_Details,
          Rate,
          Total_Cost,
          JWO_In_Qty,
          Bal_Qty,
          Rej_Qty,
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
            query: createJobWorkOrderDetails.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "JobWorkOrderDetailsCreateForm")}
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
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
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
        label="Jwo no"
        isRequired={false}
        isReadOnly={false}
        value={JWO_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No: value,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.JWO_No ?? value;
          }
          if (errors.JWO_No?.hasError) {
            runValidationTasks("JWO_No", value);
          }
          setJWO_No(value);
        }}
        onBlur={() => runValidationTasks("JWO_No", JWO_No)}
        errorMessage={errors.JWO_No?.errorMessage}
        hasError={errors.JWO_No?.hasError}
        {...getOverrideProps(overrides, "JWO_No")}
      ></TextField>
      <TextField
        label="Jwo sr no"
        isRequired={false}
        isReadOnly={false}
        value={JWO_Sr_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No: value,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.JWO_Sr_No ?? value;
          }
          if (errors.JWO_Sr_No?.hasError) {
            runValidationTasks("JWO_Sr_No", value);
          }
          setJWO_Sr_No(value);
        }}
        onBlur={() => runValidationTasks("JWO_Sr_No", JWO_Sr_No)}
        errorMessage={errors.JWO_Sr_No?.errorMessage}
        hasError={errors.JWO_Sr_No?.hasError}
        {...getOverrideProps(overrides, "JWO_Sr_No")}
      ></TextField>
      <TextField
        label="Po ref"
        isRequired={false}
        isReadOnly={false}
        value={PO_Ref}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref: value,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.PO_Ref ?? value;
          }
          if (errors.PO_Ref?.hasError) {
            runValidationTasks("PO_Ref", value);
          }
          setPO_Ref(value);
        }}
        onBlur={() => runValidationTasks("PO_Ref", PO_Ref)}
        errorMessage={errors.PO_Ref?.errorMessage}
        hasError={errors.PO_Ref?.hasError}
        {...getOverrideProps(overrides, "PO_Ref")}
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
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity: value,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
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
        label="Del date"
        isRequired={false}
        isReadOnly={false}
        value={Del_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date: value,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Del_Date ?? value;
          }
          if (errors.Del_Date?.hasError) {
            runValidationTasks("Del_Date", value);
          }
          setDel_Date(value);
        }}
        onBlur={() => runValidationTasks("Del_Date", Del_Date)}
        errorMessage={errors.Del_Date?.errorMessage}
        hasError={errors.Del_Date?.hasError}
        {...getOverrideProps(overrides, "Del_Date")}
      ></TextField>
      <TextField
        label="Work details"
        isRequired={false}
        isReadOnly={false}
        value={Work_Details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details: value,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Work_Details ?? value;
          }
          if (errors.Work_Details?.hasError) {
            runValidationTasks("Work_Details", value);
          }
          setWork_Details(value);
        }}
        onBlur={() => runValidationTasks("Work_Details", Work_Details)}
        errorMessage={errors.Work_Details?.errorMessage}
        hasError={errors.Work_Details?.hasError}
        {...getOverrideProps(overrides, "Work_Details")}
      ></TextField>
      <TextField
        label="Rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate: value,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Rate ?? value;
          }
          if (errors.Rate?.hasError) {
            runValidationTasks("Rate", value);
          }
          setRate(value);
        }}
        onBlur={() => runValidationTasks("Rate", Rate)}
        errorMessage={errors.Rate?.errorMessage}
        hasError={errors.Rate?.hasError}
        {...getOverrideProps(overrides, "Rate")}
      ></TextField>
      <TextField
        label="Total cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Total_Cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost: value,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Total_Cost ?? value;
          }
          if (errors.Total_Cost?.hasError) {
            runValidationTasks("Total_Cost", value);
          }
          setTotal_Cost(value);
        }}
        onBlur={() => runValidationTasks("Total_Cost", Total_Cost)}
        errorMessage={errors.Total_Cost?.errorMessage}
        hasError={errors.Total_Cost?.hasError}
        {...getOverrideProps(overrides, "Total_Cost")}
      ></TextField>
      <TextField
        label="Jwo in qty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={JWO_In_Qty}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty: value,
              Bal_Qty,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.JWO_In_Qty ?? value;
          }
          if (errors.JWO_In_Qty?.hasError) {
            runValidationTasks("JWO_In_Qty", value);
          }
          setJWO_In_Qty(value);
        }}
        onBlur={() => runValidationTasks("JWO_In_Qty", JWO_In_Qty)}
        errorMessage={errors.JWO_In_Qty?.errorMessage}
        hasError={errors.JWO_In_Qty?.hasError}
        {...getOverrideProps(overrides, "JWO_In_Qty")}
      ></TextField>
      <TextField
        label="Bal qty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Bal_Qty}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty: value,
              Rej_Qty,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Bal_Qty ?? value;
          }
          if (errors.Bal_Qty?.hasError) {
            runValidationTasks("Bal_Qty", value);
          }
          setBal_Qty(value);
        }}
        onBlur={() => runValidationTasks("Bal_Qty", Bal_Qty)}
        errorMessage={errors.Bal_Qty?.errorMessage}
        hasError={errors.Bal_Qty?.hasError}
        {...getOverrideProps(overrides, "Bal_Qty")}
      ></TextField>
      <TextField
        label="Rej qty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Rej_Qty}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Rej_Qty ?? value;
          }
          if (errors.Rej_Qty?.hasError) {
            runValidationTasks("Rej_Qty", value);
          }
          setRej_Qty(value);
        }}
        onBlur={() => runValidationTasks("Rej_Qty", Rej_Qty)}
        errorMessage={errors.Rej_Qty?.errorMessage}
        hasError={errors.Rej_Qty?.hasError}
        {...getOverrideProps(overrides, "Rej_Qty")}
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
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
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
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
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
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
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
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
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
              JWO_No,
              JWO_Sr_No,
              PO_Ref,
              Quantity,
              Del_Date,
              Work_Details,
              Rate,
              Total_Cost,
              JWO_In_Qty,
              Bal_Qty,
              Rej_Qty,
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
