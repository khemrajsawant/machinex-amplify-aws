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
import { createWorkOrderDetails } from "./graphql/mutations";
const client = generateClient();
export default function WorkOrderDetailsCreateForm(props) {
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
    Order_No: "",
    Sr_No: "",
    PO_Ref: "",
    Drawing_float: "",
    Quantity: "",
    Rate: "",
    Work_Details: "",
    Remark: "",
    timeStamp: "",
    Prod_Qty: "",
    Out_Qty: "",
    Bal_Qty: "",
    Rej_Qty: "",
    Work_Order_Sr_No: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Order_No, setOrder_No] = React.useState(initialValues.Order_No);
  const [Sr_No, setSr_No] = React.useState(initialValues.Sr_No);
  const [PO_Ref, setPO_Ref] = React.useState(initialValues.PO_Ref);
  const [Drawing_float, setDrawing_float] = React.useState(
    initialValues.Drawing_float
  );
  const [Quantity, setQuantity] = React.useState(initialValues.Quantity);
  const [Rate, setRate] = React.useState(initialValues.Rate);
  const [Work_Details, setWork_Details] = React.useState(
    initialValues.Work_Details
  );
  const [Remark, setRemark] = React.useState(initialValues.Remark);
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [Prod_Qty, setProd_Qty] = React.useState(initialValues.Prod_Qty);
  const [Out_Qty, setOut_Qty] = React.useState(initialValues.Out_Qty);
  const [Bal_Qty, setBal_Qty] = React.useState(initialValues.Bal_Qty);
  const [Rej_Qty, setRej_Qty] = React.useState(initialValues.Rej_Qty);
  const [Work_Order_Sr_No, setWork_Order_Sr_No] = React.useState(
    initialValues.Work_Order_Sr_No
  );
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setID(initialValues.ID);
    setOrder_No(initialValues.Order_No);
    setSr_No(initialValues.Sr_No);
    setPO_Ref(initialValues.PO_Ref);
    setDrawing_float(initialValues.Drawing_float);
    setQuantity(initialValues.Quantity);
    setRate(initialValues.Rate);
    setWork_Details(initialValues.Work_Details);
    setRemark(initialValues.Remark);
    setTimeStamp(initialValues.timeStamp);
    setProd_Qty(initialValues.Prod_Qty);
    setOut_Qty(initialValues.Out_Qty);
    setBal_Qty(initialValues.Bal_Qty);
    setRej_Qty(initialValues.Rej_Qty);
    setWork_Order_Sr_No(initialValues.Work_Order_Sr_No);
    setIsServer(initialValues.isServer);
    setIsNew(initialValues.isNew);
    setIsModified(initialValues.isModified);
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const validations = {
    ID: [],
    Order_No: [],
    Sr_No: [],
    PO_Ref: [],
    Drawing_float: [],
    Quantity: [],
    Rate: [],
    Work_Details: [],
    Remark: [],
    timeStamp: [],
    Prod_Qty: [],
    Out_Qty: [],
    Bal_Qty: [],
    Rej_Qty: [],
    Work_Order_Sr_No: [],
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
          Order_No,
          Sr_No,
          PO_Ref,
          Drawing_float,
          Quantity,
          Rate,
          Work_Details,
          Remark,
          timeStamp,
          Prod_Qty,
          Out_Qty,
          Bal_Qty,
          Rej_Qty,
          Work_Order_Sr_No,
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
            query: createWorkOrderDetails.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "WorkOrderDetailsCreateForm")}
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
        label="Order no"
        isRequired={false}
        isReadOnly={false}
        value={Order_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Order_No: value,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Order_No ?? value;
          }
          if (errors.Order_No?.hasError) {
            runValidationTasks("Order_No", value);
          }
          setOrder_No(value);
        }}
        onBlur={() => runValidationTasks("Order_No", Order_No)}
        errorMessage={errors.Order_No?.errorMessage}
        hasError={errors.Order_No?.hasError}
        {...getOverrideProps(overrides, "Order_No")}
      ></TextField>
      <TextField
        label="Sr no"
        isRequired={false}
        isReadOnly={false}
        value={Sr_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Order_No,
              Sr_No: value,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Sr_No ?? value;
          }
          if (errors.Sr_No?.hasError) {
            runValidationTasks("Sr_No", value);
          }
          setSr_No(value);
        }}
        onBlur={() => runValidationTasks("Sr_No", Sr_No)}
        errorMessage={errors.Sr_No?.errorMessage}
        hasError={errors.Sr_No?.hasError}
        {...getOverrideProps(overrides, "Sr_No")}
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
              Order_No,
              Sr_No,
              PO_Ref: value,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
        label="Drawing float"
        isRequired={false}
        isReadOnly={false}
        value={Drawing_float}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float: value,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity: value,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate: value,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
        label="Work details"
        isRequired={false}
        isReadOnly={false}
        value={Work_Details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details: value,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
        label="Remark"
        isRequired={false}
        isReadOnly={false}
        value={Remark}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark: value,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Remark ?? value;
          }
          if (errors.Remark?.hasError) {
            runValidationTasks("Remark", value);
          }
          setRemark(value);
        }}
        onBlur={() => runValidationTasks("Remark", Remark)}
        errorMessage={errors.Remark?.errorMessage}
        hasError={errors.Remark?.hasError}
        {...getOverrideProps(overrides, "Remark")}
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp: value,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
      <TextField
        label="Prod qty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Prod_Qty}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty: value,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Prod_Qty ?? value;
          }
          if (errors.Prod_Qty?.hasError) {
            runValidationTasks("Prod_Qty", value);
          }
          setProd_Qty(value);
        }}
        onBlur={() => runValidationTasks("Prod_Qty", Prod_Qty)}
        errorMessage={errors.Prod_Qty?.errorMessage}
        hasError={errors.Prod_Qty?.hasError}
        {...getOverrideProps(overrides, "Prod_Qty")}
      ></TextField>
      <TextField
        label="Out qty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Out_Qty}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty: value,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Out_Qty ?? value;
          }
          if (errors.Out_Qty?.hasError) {
            runValidationTasks("Out_Qty", value);
          }
          setOut_Qty(value);
        }}
        onBlur={() => runValidationTasks("Out_Qty", Out_Qty)}
        errorMessage={errors.Out_Qty?.errorMessage}
        hasError={errors.Out_Qty?.hasError}
        {...getOverrideProps(overrides, "Out_Qty")}
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty: value,
              Rej_Qty,
              Work_Order_Sr_No,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty: value,
              Work_Order_Sr_No,
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
        label="Work order sr no"
        isRequired={false}
        isReadOnly={false}
        value={Work_Order_Sr_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No: value,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Work_Order_Sr_No ?? value;
          }
          if (errors.Work_Order_Sr_No?.hasError) {
            runValidationTasks("Work_Order_Sr_No", value);
          }
          setWork_Order_Sr_No(value);
        }}
        onBlur={() => runValidationTasks("Work_Order_Sr_No", Work_Order_Sr_No)}
        errorMessage={errors.Work_Order_Sr_No?.errorMessage}
        hasError={errors.Work_Order_Sr_No?.hasError}
        {...getOverrideProps(overrides, "Work_Order_Sr_No")}
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
              timeStamp,
              Prod_Qty,
              Out_Qty,
              Bal_Qty,
              Rej_Qty,
              Work_Order_Sr_No,
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
