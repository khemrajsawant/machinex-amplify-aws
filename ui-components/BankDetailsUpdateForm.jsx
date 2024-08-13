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
import { getBankDetails } from "./graphql/queries";
import { updateBankDetails } from "./graphql/mutations";
const client = generateClient();
export default function BankDetailsUpdateForm(props) {
  const {
    id: idProp,
    bankDetails: bankDetailsModelProp,
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
    Emp_ID: "",
    Account_No: "",
    IFSC_Code: "",
    Bank_Name: "",
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Emp_ID, setEmp_ID] = React.useState(initialValues.Emp_ID);
  const [Account_No, setAccount_No] = React.useState(initialValues.Account_No);
  const [IFSC_Code, setIFSC_Code] = React.useState(initialValues.IFSC_Code);
  const [Bank_Name, setBank_Name] = React.useState(initialValues.Bank_Name);
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bankDetailsRecord
      ? { ...initialValues, ...bankDetailsRecord }
      : initialValues;
    setID(cleanValues.ID);
    setEmp_ID(cleanValues.Emp_ID);
    setAccount_No(cleanValues.Account_No);
    setIFSC_Code(cleanValues.IFSC_Code);
    setBank_Name(cleanValues.Bank_Name);
    setTimeStamp(cleanValues.timeStamp);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [bankDetailsRecord, setBankDetailsRecord] =
    React.useState(bankDetailsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBankDetails.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBankDetails
        : bankDetailsModelProp;
      setBankDetailsRecord(record);
    };
    queryData();
  }, [idProp, bankDetailsModelProp]);
  React.useEffect(resetStateValues, [bankDetailsRecord]);
  const validations = {
    ID: [],
    Emp_ID: [],
    Account_No: [],
    IFSC_Code: [],
    Bank_Name: [],
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
          ID: ID ?? null,
          Emp_ID: Emp_ID ?? null,
          Account_No: Account_No ?? null,
          IFSC_Code: IFSC_Code ?? null,
          Bank_Name: Bank_Name ?? null,
          timeStamp: timeStamp ?? null,
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
            query: updateBankDetails.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bankDetailsRecord.id,
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
      {...getOverrideProps(overrides, "BankDetailsUpdateForm")}
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
              Emp_ID,
              Account_No,
              IFSC_Code,
              Bank_Name,
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
        label="Emp id"
        isRequired={false}
        isReadOnly={false}
        value={Emp_ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID: value,
              Account_No,
              IFSC_Code,
              Bank_Name,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Emp_ID ?? value;
          }
          if (errors.Emp_ID?.hasError) {
            runValidationTasks("Emp_ID", value);
          }
          setEmp_ID(value);
        }}
        onBlur={() => runValidationTasks("Emp_ID", Emp_ID)}
        errorMessage={errors.Emp_ID?.errorMessage}
        hasError={errors.Emp_ID?.hasError}
        {...getOverrideProps(overrides, "Emp_ID")}
      ></TextField>
      <TextField
        label="Account no"
        isRequired={false}
        isReadOnly={false}
        value={Account_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Account_No: value,
              IFSC_Code,
              Bank_Name,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Account_No ?? value;
          }
          if (errors.Account_No?.hasError) {
            runValidationTasks("Account_No", value);
          }
          setAccount_No(value);
        }}
        onBlur={() => runValidationTasks("Account_No", Account_No)}
        errorMessage={errors.Account_No?.errorMessage}
        hasError={errors.Account_No?.hasError}
        {...getOverrideProps(overrides, "Account_No")}
      ></TextField>
      <TextField
        label="Ifsc code"
        isRequired={false}
        isReadOnly={false}
        value={IFSC_Code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Account_No,
              IFSC_Code: value,
              Bank_Name,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.IFSC_Code ?? value;
          }
          if (errors.IFSC_Code?.hasError) {
            runValidationTasks("IFSC_Code", value);
          }
          setIFSC_Code(value);
        }}
        onBlur={() => runValidationTasks("IFSC_Code", IFSC_Code)}
        errorMessage={errors.IFSC_Code?.errorMessage}
        hasError={errors.IFSC_Code?.hasError}
        {...getOverrideProps(overrides, "IFSC_Code")}
      ></TextField>
      <TextField
        label="Bank name"
        isRequired={false}
        isReadOnly={false}
        value={Bank_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Account_No,
              IFSC_Code,
              Bank_Name: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Bank_Name ?? value;
          }
          if (errors.Bank_Name?.hasError) {
            runValidationTasks("Bank_Name", value);
          }
          setBank_Name(value);
        }}
        onBlur={() => runValidationTasks("Bank_Name", Bank_Name)}
        errorMessage={errors.Bank_Name?.errorMessage}
        hasError={errors.Bank_Name?.hasError}
        {...getOverrideProps(overrides, "Bank_Name")}
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
              Emp_ID,
              Account_No,
              IFSC_Code,
              Bank_Name,
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
              Emp_ID,
              Account_No,
              IFSC_Code,
              Bank_Name,
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
              Emp_ID,
              Account_No,
              IFSC_Code,
              Bank_Name,
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
              Emp_ID,
              Account_No,
              IFSC_Code,
              Bank_Name,
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
              Emp_ID,
              Account_No,
              IFSC_Code,
              Bank_Name,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bankDetailsModelProp)}
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
              !(idProp || bankDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
