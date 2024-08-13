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
import { getPaymentDetails } from "./graphql/queries";
import { updatePaymentDetails } from "./graphql/mutations";
const client = generateClient();
export default function PaymentDetailsUpdateForm(props) {
  const {
    id: idProp,
    paymentDetails: paymentDetailsModelProp,
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
    Reference_float: "",
    Sr_No: "",
    Account_Name: "",
    Transaction_Type: "",
    Amount: "",
    Payment_Mode: "",
    timeStamp: "",
    Description: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Reference_float, setReference_float] = React.useState(
    initialValues.Reference_float
  );
  const [Sr_No, setSr_No] = React.useState(initialValues.Sr_No);
  const [Account_Name, setAccount_Name] = React.useState(
    initialValues.Account_Name
  );
  const [Transaction_Type, setTransaction_Type] = React.useState(
    initialValues.Transaction_Type
  );
  const [Amount, setAmount] = React.useState(initialValues.Amount);
  const [Payment_Mode, setPayment_Mode] = React.useState(
    initialValues.Payment_Mode
  );
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = paymentDetailsRecord
      ? { ...initialValues, ...paymentDetailsRecord }
      : initialValues;
    setID(cleanValues.ID);
    setReference_float(cleanValues.Reference_float);
    setSr_No(cleanValues.Sr_No);
    setAccount_Name(cleanValues.Account_Name);
    setTransaction_Type(cleanValues.Transaction_Type);
    setAmount(cleanValues.Amount);
    setPayment_Mode(cleanValues.Payment_Mode);
    setTimeStamp(cleanValues.timeStamp);
    setDescription(cleanValues.Description);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [paymentDetailsRecord, setPaymentDetailsRecord] = React.useState(
    paymentDetailsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPaymentDetails.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPaymentDetails
        : paymentDetailsModelProp;
      setPaymentDetailsRecord(record);
    };
    queryData();
  }, [idProp, paymentDetailsModelProp]);
  React.useEffect(resetStateValues, [paymentDetailsRecord]);
  const validations = {
    ID: [],
    Reference_float: [],
    Sr_No: [],
    Account_Name: [],
    Transaction_Type: [],
    Amount: [],
    Payment_Mode: [],
    timeStamp: [],
    Description: [],
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
          ID: ID ?? null,
          Reference_float: Reference_float ?? null,
          Sr_No: Sr_No ?? null,
          Account_Name: Account_Name ?? null,
          Transaction_Type: Transaction_Type ?? null,
          Amount: Amount ?? null,
          Payment_Mode: Payment_Mode ?? null,
          timeStamp: timeStamp ?? null,
          Description: Description ?? null,
          isServer: isServer ?? null,
          isNew: isNew ?? null,
          isModified: isModified ?? null,
          isDeleted: isDeleted ?? null,
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
            query: updatePaymentDetails.replaceAll("__typename", ""),
            variables: {
              input: {
                id: paymentDetailsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PaymentDetailsUpdateForm")}
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
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
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
        label="Reference float"
        isRequired={false}
        isReadOnly={false}
        value={Reference_float}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Reference_float: value,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Reference_float ?? value;
          }
          if (errors.Reference_float?.hasError) {
            runValidationTasks("Reference_float", value);
          }
          setReference_float(value);
        }}
        onBlur={() => runValidationTasks("Reference_float", Reference_float)}
        errorMessage={errors.Reference_float?.errorMessage}
        hasError={errors.Reference_float?.hasError}
        {...getOverrideProps(overrides, "Reference_float")}
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
              Reference_float,
              Sr_No: value,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
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
        label="Account name"
        isRequired={false}
        isReadOnly={false}
        value={Account_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Reference_float,
              Sr_No,
              Account_Name: value,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Account_Name ?? value;
          }
          if (errors.Account_Name?.hasError) {
            runValidationTasks("Account_Name", value);
          }
          setAccount_Name(value);
        }}
        onBlur={() => runValidationTasks("Account_Name", Account_Name)}
        errorMessage={errors.Account_Name?.errorMessage}
        hasError={errors.Account_Name?.hasError}
        {...getOverrideProps(overrides, "Account_Name")}
      ></TextField>
      <TextField
        label="Transaction type"
        isRequired={false}
        isReadOnly={false}
        value={Transaction_Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type: value,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Transaction_Type ?? value;
          }
          if (errors.Transaction_Type?.hasError) {
            runValidationTasks("Transaction_Type", value);
          }
          setTransaction_Type(value);
        }}
        onBlur={() => runValidationTasks("Transaction_Type", Transaction_Type)}
        errorMessage={errors.Transaction_Type?.errorMessage}
        hasError={errors.Transaction_Type?.hasError}
        {...getOverrideProps(overrides, "Transaction_Type")}
      ></TextField>
      <TextField
        label="Amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount: value,
              Payment_Mode,
              timeStamp,
              Description,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Amount ?? value;
          }
          if (errors.Amount?.hasError) {
            runValidationTasks("Amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("Amount", Amount)}
        errorMessage={errors.Amount?.errorMessage}
        hasError={errors.Amount?.hasError}
        {...getOverrideProps(overrides, "Amount")}
      ></TextField>
      <TextField
        label="Payment mode"
        isRequired={false}
        isReadOnly={false}
        value={Payment_Mode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode: value,
              timeStamp,
              Description,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Payment_Mode ?? value;
          }
          if (errors.Payment_Mode?.hasError) {
            runValidationTasks("Payment_Mode", value);
          }
          setPayment_Mode(value);
        }}
        onBlur={() => runValidationTasks("Payment_Mode", Payment_Mode)}
        errorMessage={errors.Payment_Mode?.errorMessage}
        hasError={errors.Payment_Mode?.hasError}
        {...getOverrideProps(overrides, "Payment_Mode")}
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
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp: value,
              Description,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description: value,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
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
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
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
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
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
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
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
              Reference_float,
              Sr_No,
              Account_Name,
              Transaction_Type,
              Amount,
              Payment_Mode,
              timeStamp,
              Description,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || paymentDetailsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || paymentDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
