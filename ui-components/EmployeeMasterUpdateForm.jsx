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
import { getEmployeeMaster } from "./graphql/queries";
import { updateEmployeeMaster } from "./graphql/mutations";
const client = generateClient();
export default function EmployeeMasterUpdateForm(props) {
  const {
    id: idProp,
    employeeMaster: employeeMasterModelProp,
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
    Joining_Date: "",
    Release_Date: "",
    First_Name: "",
    Middle_Name: "",
    Surname: "",
    Gender: "",
    DOB: "",
    Mobile_No: "",
    Email: "",
    Aadhar_No: "",
    Address: "",
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Emp_ID, setEmp_ID] = React.useState(initialValues.Emp_ID);
  const [Joining_Date, setJoining_Date] = React.useState(
    initialValues.Joining_Date
  );
  const [Release_Date, setRelease_Date] = React.useState(
    initialValues.Release_Date
  );
  const [First_Name, setFirst_Name] = React.useState(initialValues.First_Name);
  const [Middle_Name, setMiddle_Name] = React.useState(
    initialValues.Middle_Name
  );
  const [Surname, setSurname] = React.useState(initialValues.Surname);
  const [Gender, setGender] = React.useState(initialValues.Gender);
  const [DOB, setDOB] = React.useState(initialValues.DOB);
  const [Mobile_No, setMobile_No] = React.useState(initialValues.Mobile_No);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Aadhar_No, setAadhar_No] = React.useState(initialValues.Aadhar_No);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = employeeMasterRecord
      ? { ...initialValues, ...employeeMasterRecord }
      : initialValues;
    setID(cleanValues.ID);
    setEmp_ID(cleanValues.Emp_ID);
    setJoining_Date(cleanValues.Joining_Date);
    setRelease_Date(cleanValues.Release_Date);
    setFirst_Name(cleanValues.First_Name);
    setMiddle_Name(cleanValues.Middle_Name);
    setSurname(cleanValues.Surname);
    setGender(cleanValues.Gender);
    setDOB(cleanValues.DOB);
    setMobile_No(cleanValues.Mobile_No);
    setEmail(cleanValues.Email);
    setAadhar_No(cleanValues.Aadhar_No);
    setAddress(cleanValues.Address);
    setTimeStamp(cleanValues.timeStamp);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [employeeMasterRecord, setEmployeeMasterRecord] = React.useState(
    employeeMasterModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEmployeeMaster.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEmployeeMaster
        : employeeMasterModelProp;
      setEmployeeMasterRecord(record);
    };
    queryData();
  }, [idProp, employeeMasterModelProp]);
  React.useEffect(resetStateValues, [employeeMasterRecord]);
  const validations = {
    ID: [],
    Emp_ID: [],
    Joining_Date: [],
    Release_Date: [],
    First_Name: [],
    Middle_Name: [],
    Surname: [],
    Gender: [],
    DOB: [],
    Mobile_No: [],
    Email: [],
    Aadhar_No: [],
    Address: [],
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
          Joining_Date: Joining_Date ?? null,
          Release_Date: Release_Date ?? null,
          First_Name: First_Name ?? null,
          Middle_Name: Middle_Name ?? null,
          Surname: Surname ?? null,
          Gender: Gender ?? null,
          DOB: DOB ?? null,
          Mobile_No: Mobile_No ?? null,
          Email: Email ?? null,
          Aadhar_No: Aadhar_No ?? null,
          Address: Address ?? null,
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
            query: updateEmployeeMaster.replaceAll("__typename", ""),
            variables: {
              input: {
                id: employeeMasterRecord.id,
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
      {...getOverrideProps(overrides, "EmployeeMasterUpdateForm")}
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
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
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
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
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
        label="Joining date"
        isRequired={false}
        isReadOnly={false}
        value={Joining_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date: value,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Joining_Date ?? value;
          }
          if (errors.Joining_Date?.hasError) {
            runValidationTasks("Joining_Date", value);
          }
          setJoining_Date(value);
        }}
        onBlur={() => runValidationTasks("Joining_Date", Joining_Date)}
        errorMessage={errors.Joining_Date?.errorMessage}
        hasError={errors.Joining_Date?.hasError}
        {...getOverrideProps(overrides, "Joining_Date")}
      ></TextField>
      <TextField
        label="Release date"
        isRequired={false}
        isReadOnly={false}
        value={Release_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date: value,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Release_Date ?? value;
          }
          if (errors.Release_Date?.hasError) {
            runValidationTasks("Release_Date", value);
          }
          setRelease_Date(value);
        }}
        onBlur={() => runValidationTasks("Release_Date", Release_Date)}
        errorMessage={errors.Release_Date?.errorMessage}
        hasError={errors.Release_Date?.hasError}
        {...getOverrideProps(overrides, "Release_Date")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={First_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name: value,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.First_Name ?? value;
          }
          if (errors.First_Name?.hasError) {
            runValidationTasks("First_Name", value);
          }
          setFirst_Name(value);
        }}
        onBlur={() => runValidationTasks("First_Name", First_Name)}
        errorMessage={errors.First_Name?.errorMessage}
        hasError={errors.First_Name?.hasError}
        {...getOverrideProps(overrides, "First_Name")}
      ></TextField>
      <TextField
        label="Middle name"
        isRequired={false}
        isReadOnly={false}
        value={Middle_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name: value,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Middle_Name ?? value;
          }
          if (errors.Middle_Name?.hasError) {
            runValidationTasks("Middle_Name", value);
          }
          setMiddle_Name(value);
        }}
        onBlur={() => runValidationTasks("Middle_Name", Middle_Name)}
        errorMessage={errors.Middle_Name?.errorMessage}
        hasError={errors.Middle_Name?.hasError}
        {...getOverrideProps(overrides, "Middle_Name")}
      ></TextField>
      <TextField
        label="Surname"
        isRequired={false}
        isReadOnly={false}
        value={Surname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname: value,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Surname ?? value;
          }
          if (errors.Surname?.hasError) {
            runValidationTasks("Surname", value);
          }
          setSurname(value);
        }}
        onBlur={() => runValidationTasks("Surname", Surname)}
        errorMessage={errors.Surname?.errorMessage}
        hasError={errors.Surname?.hasError}
        {...getOverrideProps(overrides, "Surname")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={Gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender: value,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Gender ?? value;
          }
          if (errors.Gender?.hasError) {
            runValidationTasks("Gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("Gender", Gender)}
        errorMessage={errors.Gender?.errorMessage}
        hasError={errors.Gender?.hasError}
        {...getOverrideProps(overrides, "Gender")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        value={DOB}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB: value,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.DOB ?? value;
          }
          if (errors.DOB?.hasError) {
            runValidationTasks("DOB", value);
          }
          setDOB(value);
        }}
        onBlur={() => runValidationTasks("DOB", DOB)}
        errorMessage={errors.DOB?.errorMessage}
        hasError={errors.DOB?.hasError}
        {...getOverrideProps(overrides, "DOB")}
      ></TextField>
      <TextField
        label="Mobile no"
        isRequired={false}
        isReadOnly={false}
        value={Mobile_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No: value,
              Email,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Mobile_No ?? value;
          }
          if (errors.Mobile_No?.hasError) {
            runValidationTasks("Mobile_No", value);
          }
          setMobile_No(value);
        }}
        onBlur={() => runValidationTasks("Mobile_No", Mobile_No)}
        errorMessage={errors.Mobile_No?.errorMessage}
        hasError={errors.Mobile_No?.hasError}
        {...getOverrideProps(overrides, "Mobile_No")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email: value,
              Aadhar_No,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Aadhar no"
        isRequired={false}
        isReadOnly={false}
        value={Aadhar_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No: value,
              Address,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Aadhar_No ?? value;
          }
          if (errors.Aadhar_No?.hasError) {
            runValidationTasks("Aadhar_No", value);
          }
          setAadhar_No(value);
        }}
        onBlur={() => runValidationTasks("Aadhar_No", Aadhar_No)}
        errorMessage={errors.Aadhar_No?.errorMessage}
        hasError={errors.Aadhar_No?.hasError}
        {...getOverrideProps(overrides, "Aadhar_No")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={Address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Emp_ID,
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Address ?? value;
          }
          if (errors.Address?.hasError) {
            runValidationTasks("Address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("Address", Address)}
        errorMessage={errors.Address?.errorMessage}
        hasError={errors.Address?.hasError}
        {...getOverrideProps(overrides, "Address")}
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
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
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
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
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
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
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
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
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
              Joining_Date,
              Release_Date,
              First_Name,
              Middle_Name,
              Surname,
              Gender,
              DOB,
              Mobile_No,
              Email,
              Aadhar_No,
              Address,
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
          isDisabled={!(idProp || employeeMasterModelProp)}
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
              !(idProp || employeeMasterModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
