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
import { getOperationDecription } from "./graphql/queries";
import { updateOperationDecription } from "./graphql/mutations";
const client = generateClient();
export default function OperationDecriptionUpdateForm(props) {
  const {
    id: idProp,
    operationDecription: operationDecriptionModelProp,
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
    Opn_Name: "",
    Sr_No: "",
    Opn_Desc: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Opn_Name, setOpn_Name] = React.useState(initialValues.Opn_Name);
  const [Sr_No, setSr_No] = React.useState(initialValues.Sr_No);
  const [Opn_Desc, setOpn_Desc] = React.useState(initialValues.Opn_Desc);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = operationDecriptionRecord
      ? { ...initialValues, ...operationDecriptionRecord }
      : initialValues;
    setID(cleanValues.ID);
    setOpn_Name(cleanValues.Opn_Name);
    setSr_No(cleanValues.Sr_No);
    setOpn_Desc(cleanValues.Opn_Desc);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [operationDecriptionRecord, setOperationDecriptionRecord] =
    React.useState(operationDecriptionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOperationDecription.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOperationDecription
        : operationDecriptionModelProp;
      setOperationDecriptionRecord(record);
    };
    queryData();
  }, [idProp, operationDecriptionModelProp]);
  React.useEffect(resetStateValues, [operationDecriptionRecord]);
  const validations = {
    ID: [],
    Opn_Name: [],
    Sr_No: [],
    Opn_Desc: [],
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
          Opn_Name: Opn_Name ?? null,
          Sr_No: Sr_No ?? null,
          Opn_Desc: Opn_Desc ?? null,
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
            query: updateOperationDecription.replaceAll("__typename", ""),
            variables: {
              input: {
                id: operationDecriptionRecord.id,
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
      {...getOverrideProps(overrides, "OperationDecriptionUpdateForm")}
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
              Opn_Name,
              Sr_No,
              Opn_Desc,
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
        label="Opn name"
        isRequired={false}
        isReadOnly={false}
        value={Opn_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Opn_Name: value,
              Sr_No,
              Opn_Desc,
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
        label="Sr no"
        isRequired={false}
        isReadOnly={false}
        value={Sr_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Opn_Name,
              Sr_No: value,
              Opn_Desc,
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
        label="Opn desc"
        isRequired={false}
        isReadOnly={false}
        value={Opn_Desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Opn_Name,
              Sr_No,
              Opn_Desc: value,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Opn_Desc ?? value;
          }
          if (errors.Opn_Desc?.hasError) {
            runValidationTasks("Opn_Desc", value);
          }
          setOpn_Desc(value);
        }}
        onBlur={() => runValidationTasks("Opn_Desc", Opn_Desc)}
        errorMessage={errors.Opn_Desc?.errorMessage}
        hasError={errors.Opn_Desc?.hasError}
        {...getOverrideProps(overrides, "Opn_Desc")}
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
              Opn_Name,
              Sr_No,
              Opn_Desc,
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
              Opn_Name,
              Sr_No,
              Opn_Desc,
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
              Opn_Name,
              Sr_No,
              Opn_Desc,
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
              Opn_Name,
              Sr_No,
              Opn_Desc,
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
          isDisabled={!(idProp || operationDecriptionModelProp)}
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
              !(idProp || operationDecriptionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
