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
import { getBillOfProces } from "./graphql/queries";
import { updateBillOfProces } from "./graphql/mutations";
const client = generateClient();
export default function BillOfProcesUpdateForm(props) {
  const {
    id: idProp,
    billOfProces: billOfProcesModelProp,
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
    Drawing_float: "",
    Operation_float: "",
    Workstation: "",
    Opn_Name: "",
    Operation_Description: "",
    Time_Min: "",
    Cost: "",
    Is_Scrap_Applicable: false,
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Drawing_float, setDrawing_float] = React.useState(
    initialValues.Drawing_float
  );
  const [Operation_float, setOperation_float] = React.useState(
    initialValues.Operation_float
  );
  const [Workstation, setWorkstation] = React.useState(
    initialValues.Workstation
  );
  const [Opn_Name, setOpn_Name] = React.useState(initialValues.Opn_Name);
  const [Operation_Description, setOperation_Description] = React.useState(
    initialValues.Operation_Description
  );
  const [Time_Min, setTime_Min] = React.useState(initialValues.Time_Min);
  const [Cost, setCost] = React.useState(initialValues.Cost);
  const [Is_Scrap_Applicable, setIs_Scrap_Applicable] = React.useState(
    initialValues.Is_Scrap_Applicable
  );
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = billOfProcesRecord
      ? { ...initialValues, ...billOfProcesRecord }
      : initialValues;
    setID(cleanValues.ID);
    setDrawing_float(cleanValues.Drawing_float);
    setOperation_float(cleanValues.Operation_float);
    setWorkstation(cleanValues.Workstation);
    setOpn_Name(cleanValues.Opn_Name);
    setOperation_Description(cleanValues.Operation_Description);
    setTime_Min(cleanValues.Time_Min);
    setCost(cleanValues.Cost);
    setIs_Scrap_Applicable(cleanValues.Is_Scrap_Applicable);
    setTimeStamp(cleanValues.timeStamp);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [billOfProcesRecord, setBillOfProcesRecord] = React.useState(
    billOfProcesModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBillOfProces.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBillOfProces
        : billOfProcesModelProp;
      setBillOfProcesRecord(record);
    };
    queryData();
  }, [idProp, billOfProcesModelProp]);
  React.useEffect(resetStateValues, [billOfProcesRecord]);
  const validations = {
    ID: [],
    Drawing_float: [],
    Operation_float: [],
    Workstation: [],
    Opn_Name: [],
    Operation_Description: [],
    Time_Min: [],
    Cost: [],
    Is_Scrap_Applicable: [],
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
          Drawing_float: Drawing_float ?? null,
          Operation_float: Operation_float ?? null,
          Workstation: Workstation ?? null,
          Opn_Name: Opn_Name ?? null,
          Operation_Description: Operation_Description ?? null,
          Time_Min: Time_Min ?? null,
          Cost: Cost ?? null,
          Is_Scrap_Applicable: Is_Scrap_Applicable ?? null,
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
            query: updateBillOfProces.replaceAll("__typename", ""),
            variables: {
              input: {
                id: billOfProcesRecord.id,
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
      {...getOverrideProps(overrides, "BillOfProcesUpdateForm")}
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
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
        label="Drawing float"
        isRequired={false}
        isReadOnly={false}
        value={Drawing_float}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float: value,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
              timeStamp,
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
        label="Operation float"
        isRequired={false}
        isReadOnly={false}
        value={Operation_float}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Operation_float: value,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Operation_float ?? value;
          }
          if (errors.Operation_float?.hasError) {
            runValidationTasks("Operation_float", value);
          }
          setOperation_float(value);
        }}
        onBlur={() => runValidationTasks("Operation_float", Operation_float)}
        errorMessage={errors.Operation_float?.errorMessage}
        hasError={errors.Operation_float?.hasError}
        {...getOverrideProps(overrides, "Operation_float")}
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
              Drawing_float,
              Operation_float,
              Workstation: value,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name: value,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
        label="Operation description"
        isRequired={false}
        isReadOnly={false}
        value={Operation_Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description: value,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Operation_Description ?? value;
          }
          if (errors.Operation_Description?.hasError) {
            runValidationTasks("Operation_Description", value);
          }
          setOperation_Description(value);
        }}
        onBlur={() =>
          runValidationTasks("Operation_Description", Operation_Description)
        }
        errorMessage={errors.Operation_Description?.errorMessage}
        hasError={errors.Operation_Description?.hasError}
        {...getOverrideProps(overrides, "Operation_Description")}
      ></TextField>
      <TextField
        label="Time min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Time_Min}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min: value,
              Cost,
              Is_Scrap_Applicable,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Time_Min ?? value;
          }
          if (errors.Time_Min?.hasError) {
            runValidationTasks("Time_Min", value);
          }
          setTime_Min(value);
        }}
        onBlur={() => runValidationTasks("Time_Min", Time_Min)}
        errorMessage={errors.Time_Min?.errorMessage}
        hasError={errors.Time_Min?.hasError}
        {...getOverrideProps(overrides, "Time_Min")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost: value,
              Is_Scrap_Applicable,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Cost ?? value;
          }
          if (errors.Cost?.hasError) {
            runValidationTasks("Cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("Cost", Cost)}
        errorMessage={errors.Cost?.errorMessage}
        hasError={errors.Cost?.hasError}
        {...getOverrideProps(overrides, "Cost")}
      ></TextField>
      <SwitchField
        label="Is scrap applicable"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Is_Scrap_Applicable}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Is_Scrap_Applicable ?? value;
          }
          if (errors.Is_Scrap_Applicable?.hasError) {
            runValidationTasks("Is_Scrap_Applicable", value);
          }
          setIs_Scrap_Applicable(value);
        }}
        onBlur={() =>
          runValidationTasks("Is_Scrap_Applicable", Is_Scrap_Applicable)
        }
        errorMessage={errors.Is_Scrap_Applicable?.errorMessage}
        hasError={errors.Is_Scrap_Applicable?.hasError}
        {...getOverrideProps(overrides, "Is_Scrap_Applicable")}
      ></SwitchField>
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
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
              Drawing_float,
              Operation_float,
              Workstation,
              Opn_Name,
              Operation_Description,
              Time_Min,
              Cost,
              Is_Scrap_Applicable,
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
          isDisabled={!(idProp || billOfProcesModelProp)}
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
              !(idProp || billOfProcesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
