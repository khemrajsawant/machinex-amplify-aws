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
import { createSalaryDetails } from "./graphql/mutations";
const client = generateClient();
export default function SalaryDetailsCreateForm(props) {
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
    Emp_ID: "",
    From_Date: "",
    Designation: "",
    Salary_Per_Day: "",
    Overtime_Ratio: "",
    Earning_Ratio: "",
    Incentive_Ratio: "",
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Emp_ID, setEmp_ID] = React.useState(initialValues.Emp_ID);
  const [From_Date, setFrom_Date] = React.useState(initialValues.From_Date);
  const [Designation, setDesignation] = React.useState(
    initialValues.Designation
  );
  const [Salary_Per_Day, setSalary_Per_Day] = React.useState(
    initialValues.Salary_Per_Day
  );
  const [Overtime_Ratio, setOvertime_Ratio] = React.useState(
    initialValues.Overtime_Ratio
  );
  const [Earning_Ratio, setEarning_Ratio] = React.useState(
    initialValues.Earning_Ratio
  );
  const [Incentive_Ratio, setIncentive_Ratio] = React.useState(
    initialValues.Incentive_Ratio
  );
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setID(initialValues.ID);
    setEmp_ID(initialValues.Emp_ID);
    setFrom_Date(initialValues.From_Date);
    setDesignation(initialValues.Designation);
    setSalary_Per_Day(initialValues.Salary_Per_Day);
    setOvertime_Ratio(initialValues.Overtime_Ratio);
    setEarning_Ratio(initialValues.Earning_Ratio);
    setIncentive_Ratio(initialValues.Incentive_Ratio);
    setTimeStamp(initialValues.timeStamp);
    setIsServer(initialValues.isServer);
    setIsNew(initialValues.isNew);
    setIsModified(initialValues.isModified);
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const validations = {
    ID: [],
    Emp_ID: [],
    From_Date: [],
    Designation: [],
    Salary_Per_Day: [],
    Overtime_Ratio: [],
    Earning_Ratio: [],
    Incentive_Ratio: [],
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
          Emp_ID,
          From_Date,
          Designation,
          Salary_Per_Day,
          Overtime_Ratio,
          Earning_Ratio,
          Incentive_Ratio,
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
            query: createSalaryDetails.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "SalaryDetailsCreateForm")}
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
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
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
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
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
        label="From date"
        isRequired={false}
        isReadOnly={false}
        value={From_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              From_Date: value,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.From_Date ?? value;
          }
          if (errors.From_Date?.hasError) {
            runValidationTasks("From_Date", value);
          }
          setFrom_Date(value);
        }}
        onBlur={() => runValidationTasks("From_Date", From_Date)}
        errorMessage={errors.From_Date?.errorMessage}
        hasError={errors.From_Date?.hasError}
        {...getOverrideProps(overrides, "From_Date")}
      ></TextField>
      <TextField
        label="Designation"
        isRequired={false}
        isReadOnly={false}
        value={Designation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              From_Date,
              Designation: value,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Designation ?? value;
          }
          if (errors.Designation?.hasError) {
            runValidationTasks("Designation", value);
          }
          setDesignation(value);
        }}
        onBlur={() => runValidationTasks("Designation", Designation)}
        errorMessage={errors.Designation?.errorMessage}
        hasError={errors.Designation?.hasError}
        {...getOverrideProps(overrides, "Designation")}
      ></TextField>
      <TextField
        label="Salary per day"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Salary_Per_Day}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              From_Date,
              Designation,
              Salary_Per_Day: value,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Salary_Per_Day ?? value;
          }
          if (errors.Salary_Per_Day?.hasError) {
            runValidationTasks("Salary_Per_Day", value);
          }
          setSalary_Per_Day(value);
        }}
        onBlur={() => runValidationTasks("Salary_Per_Day", Salary_Per_Day)}
        errorMessage={errors.Salary_Per_Day?.errorMessage}
        hasError={errors.Salary_Per_Day?.hasError}
        {...getOverrideProps(overrides, "Salary_Per_Day")}
      ></TextField>
      <TextField
        label="Overtime ratio"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Overtime_Ratio}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio: value,
              Earning_Ratio,
              Incentive_Ratio,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Overtime_Ratio ?? value;
          }
          if (errors.Overtime_Ratio?.hasError) {
            runValidationTasks("Overtime_Ratio", value);
          }
          setOvertime_Ratio(value);
        }}
        onBlur={() => runValidationTasks("Overtime_Ratio", Overtime_Ratio)}
        errorMessage={errors.Overtime_Ratio?.errorMessage}
        hasError={errors.Overtime_Ratio?.hasError}
        {...getOverrideProps(overrides, "Overtime_Ratio")}
      ></TextField>
      <TextField
        label="Earning ratio"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Earning_Ratio}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio: value,
              Incentive_Ratio,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Earning_Ratio ?? value;
          }
          if (errors.Earning_Ratio?.hasError) {
            runValidationTasks("Earning_Ratio", value);
          }
          setEarning_Ratio(value);
        }}
        onBlur={() => runValidationTasks("Earning_Ratio", Earning_Ratio)}
        errorMessage={errors.Earning_Ratio?.errorMessage}
        hasError={errors.Earning_Ratio?.hasError}
        {...getOverrideProps(overrides, "Earning_Ratio")}
      ></TextField>
      <TextField
        label="Incentive ratio"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Incentive_Ratio}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Incentive_Ratio ?? value;
          }
          if (errors.Incentive_Ratio?.hasError) {
            runValidationTasks("Incentive_Ratio", value);
          }
          setIncentive_Ratio(value);
        }}
        onBlur={() => runValidationTasks("Incentive_Ratio", Incentive_Ratio)}
        errorMessage={errors.Incentive_Ratio?.errorMessage}
        hasError={errors.Incentive_Ratio?.hasError}
        {...getOverrideProps(overrides, "Incentive_Ratio")}
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
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
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
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
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
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
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
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
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
              From_Date,
              Designation,
              Salary_Per_Day,
              Overtime_Ratio,
              Earning_Ratio,
              Incentive_Ratio,
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
