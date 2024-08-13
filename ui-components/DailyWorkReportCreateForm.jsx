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
import { createDailyWorkReport } from "./graphql/mutations";
const client = generateClient();
export default function DailyWorkReportCreateForm(props) {
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
    Worker_No: "",
    Date: "",
    Check_In: "",
    Check_Out: "",
    Approval: false,
    Break_In_Hours: "",
    timeStamp: "",
    Month: "",
    Year: "",
    Work_Hours: "",
    OverTime_Hours: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Report_No, setReport_No] = React.useState(initialValues.Report_No);
  const [Worker_No, setWorker_No] = React.useState(initialValues.Worker_No);
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Check_In, setCheck_In] = React.useState(initialValues.Check_In);
  const [Check_Out, setCheck_Out] = React.useState(initialValues.Check_Out);
  const [Approval, setApproval] = React.useState(initialValues.Approval);
  const [Break_In_Hours, setBreak_In_Hours] = React.useState(
    initialValues.Break_In_Hours
  );
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [Month, setMonth] = React.useState(initialValues.Month);
  const [Year, setYear] = React.useState(initialValues.Year);
  const [Work_Hours, setWork_Hours] = React.useState(initialValues.Work_Hours);
  const [OverTime_Hours, setOverTime_Hours] = React.useState(
    initialValues.OverTime_Hours
  );
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setID(initialValues.ID);
    setReport_No(initialValues.Report_No);
    setWorker_No(initialValues.Worker_No);
    setDate(initialValues.Date);
    setCheck_In(initialValues.Check_In);
    setCheck_Out(initialValues.Check_Out);
    setApproval(initialValues.Approval);
    setBreak_In_Hours(initialValues.Break_In_Hours);
    setTimeStamp(initialValues.timeStamp);
    setMonth(initialValues.Month);
    setYear(initialValues.Year);
    setWork_Hours(initialValues.Work_Hours);
    setOverTime_Hours(initialValues.OverTime_Hours);
    setIsServer(initialValues.isServer);
    setIsNew(initialValues.isNew);
    setIsModified(initialValues.isModified);
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const validations = {
    ID: [],
    Report_No: [],
    Worker_No: [],
    Date: [],
    Check_In: [],
    Check_Out: [],
    Approval: [],
    Break_In_Hours: [],
    timeStamp: [],
    Month: [],
    Year: [],
    Work_Hours: [],
    OverTime_Hours: [],
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
          Worker_No,
          Date,
          Check_In,
          Check_Out,
          Approval,
          Break_In_Hours,
          timeStamp,
          Month,
          Year,
          Work_Hours,
          OverTime_Hours,
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
            query: createDailyWorkReport.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "DailyWorkReportCreateForm")}
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
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
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
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
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
        label="Worker no"
        isRequired={false}
        isReadOnly={false}
        value={Worker_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No: value,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Worker_No ?? value;
          }
          if (errors.Worker_No?.hasError) {
            runValidationTasks("Worker_No", value);
          }
          setWorker_No(value);
        }}
        onBlur={() => runValidationTasks("Worker_No", Worker_No)}
        errorMessage={errors.Worker_No?.errorMessage}
        hasError={errors.Worker_No?.hasError}
        {...getOverrideProps(overrides, "Worker_No")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date: value,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <TextField
        label="Check in"
        isRequired={false}
        isReadOnly={false}
        value={Check_In}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In: value,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Check_In ?? value;
          }
          if (errors.Check_In?.hasError) {
            runValidationTasks("Check_In", value);
          }
          setCheck_In(value);
        }}
        onBlur={() => runValidationTasks("Check_In", Check_In)}
        errorMessage={errors.Check_In?.errorMessage}
        hasError={errors.Check_In?.hasError}
        {...getOverrideProps(overrides, "Check_In")}
      ></TextField>
      <TextField
        label="Check out"
        isRequired={false}
        isReadOnly={false}
        value={Check_Out}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out: value,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Check_Out ?? value;
          }
          if (errors.Check_Out?.hasError) {
            runValidationTasks("Check_Out", value);
          }
          setCheck_Out(value);
        }}
        onBlur={() => runValidationTasks("Check_Out", Check_Out)}
        errorMessage={errors.Check_Out?.errorMessage}
        hasError={errors.Check_Out?.hasError}
        {...getOverrideProps(overrides, "Check_Out")}
      ></TextField>
      <SwitchField
        label="Approval"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Approval}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval: value,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Approval ?? value;
          }
          if (errors.Approval?.hasError) {
            runValidationTasks("Approval", value);
          }
          setApproval(value);
        }}
        onBlur={() => runValidationTasks("Approval", Approval)}
        errorMessage={errors.Approval?.errorMessage}
        hasError={errors.Approval?.hasError}
        {...getOverrideProps(overrides, "Approval")}
      ></SwitchField>
      <TextField
        label="Break in hours"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Break_In_Hours}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours: value,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Break_In_Hours ?? value;
          }
          if (errors.Break_In_Hours?.hasError) {
            runValidationTasks("Break_In_Hours", value);
          }
          setBreak_In_Hours(value);
        }}
        onBlur={() => runValidationTasks("Break_In_Hours", Break_In_Hours)}
        errorMessage={errors.Break_In_Hours?.errorMessage}
        hasError={errors.Break_In_Hours?.hasError}
        {...getOverrideProps(overrides, "Break_In_Hours")}
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
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp: value,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
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
        label="Month"
        isRequired={false}
        isReadOnly={false}
        value={Month}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month: value,
              Year,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Month ?? value;
          }
          if (errors.Month?.hasError) {
            runValidationTasks("Month", value);
          }
          setMonth(value);
        }}
        onBlur={() => runValidationTasks("Month", Month)}
        errorMessage={errors.Month?.errorMessage}
        hasError={errors.Month?.hasError}
        {...getOverrideProps(overrides, "Month")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        value={Year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year: value,
              Work_Hours,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Year ?? value;
          }
          if (errors.Year?.hasError) {
            runValidationTasks("Year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("Year", Year)}
        errorMessage={errors.Year?.errorMessage}
        hasError={errors.Year?.hasError}
        {...getOverrideProps(overrides, "Year")}
      ></TextField>
      <TextField
        label="Work hours"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Work_Hours}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours: value,
              OverTime_Hours,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Work_Hours ?? value;
          }
          if (errors.Work_Hours?.hasError) {
            runValidationTasks("Work_Hours", value);
          }
          setWork_Hours(value);
        }}
        onBlur={() => runValidationTasks("Work_Hours", Work_Hours)}
        errorMessage={errors.Work_Hours?.errorMessage}
        hasError={errors.Work_Hours?.hasError}
        {...getOverrideProps(overrides, "Work_Hours")}
      ></TextField>
      <TextField
        label="Over time hours"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={OverTime_Hours}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours: value,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.OverTime_Hours ?? value;
          }
          if (errors.OverTime_Hours?.hasError) {
            runValidationTasks("OverTime_Hours", value);
          }
          setOverTime_Hours(value);
        }}
        onBlur={() => runValidationTasks("OverTime_Hours", OverTime_Hours)}
        errorMessage={errors.OverTime_Hours?.errorMessage}
        hasError={errors.OverTime_Hours?.hasError}
        {...getOverrideProps(overrides, "OverTime_Hours")}
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
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
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
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
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
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
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
              Worker_No,
              Date,
              Check_In,
              Check_Out,
              Approval,
              Break_In_Hours,
              timeStamp,
              Month,
              Year,
              Work_Hours,
              OverTime_Hours,
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
