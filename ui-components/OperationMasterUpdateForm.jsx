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
import { getOperationMaster } from "./graphql/queries";
import { updateOperationMaster } from "./graphql/mutations";
const client = generateClient();
export default function OperationMasterUpdateForm(props) {
  const {
    id: idProp,
    operationMaster: operationMasterModelProp,
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
    Workstation: "",
    Opn_Name: "",
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Workstation, setWorkstation] = React.useState(
    initialValues.Workstation
  );
  const [Opn_Name, setOpn_Name] = React.useState(initialValues.Opn_Name);
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = operationMasterRecord
      ? { ...initialValues, ...operationMasterRecord }
      : initialValues;
    setID(cleanValues.ID);
    setWorkstation(cleanValues.Workstation);
    setOpn_Name(cleanValues.Opn_Name);
    setTimeStamp(cleanValues.timeStamp);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [operationMasterRecord, setOperationMasterRecord] = React.useState(
    operationMasterModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOperationMaster.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOperationMaster
        : operationMasterModelProp;
      setOperationMasterRecord(record);
    };
    queryData();
  }, [idProp, operationMasterModelProp]);
  React.useEffect(resetStateValues, [operationMasterRecord]);
  const validations = {
    ID: [],
    Workstation: [],
    Opn_Name: [],
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
          Workstation: Workstation ?? null,
          Opn_Name: Opn_Name ?? null,
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
            query: updateOperationMaster.replaceAll("__typename", ""),
            variables: {
              input: {
                id: operationMasterRecord.id,
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
      {...getOverrideProps(overrides, "OperationMasterUpdateForm")}
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
              Workstation,
              Opn_Name,
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
        label="Workstation"
        isRequired={false}
        isReadOnly={false}
        value={Workstation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Workstation: value,
              Opn_Name,
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
        label="Opn name"
        isRequired={false}
        isReadOnly={false}
        value={Opn_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Workstation,
              Opn_Name: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Opn_Name ?? value;
          }
          if (errors.Opn_Name?.hasError) {
            runValidationTasks("Opn_Name", value);
          }
          setOpn_Name(value);
        }}
        onBlur={() => runValidationTasks("Opn_Name", Opn_Name)}
        errorMessage={errors.Opn_Name?.errorMessage}
        hasError={errors.Opn_Name?.hasError}
        {...getOverrideProps(overrides, "Opn_Name")}
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
              Workstation,
              Opn_Name,
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
              Workstation,
              Opn_Name,
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
              Workstation,
              Opn_Name,
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
              Workstation,
              Opn_Name,
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
              Workstation,
              Opn_Name,
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
          isDisabled={!(idProp || operationMasterModelProp)}
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
              !(idProp || operationMasterModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
