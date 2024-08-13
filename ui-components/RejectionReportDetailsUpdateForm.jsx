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
import { getRejectionReportDetails } from "./graphql/queries";
import { updateRejectionReportDetails } from "./graphql/mutations";
const client = generateClient();
export default function RejectionReportDetailsUpdateForm(props) {
  const {
    id: idProp,
    rejectionReportDetails: rejectionReportDetailsModelProp,
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
    Sr_No: "",
    Work_Order_No: "",
    Drawing_No: "",
    Opn_Details: "",
    Quantity: "",
    Mat_Cost: "",
    Rej_Details: "",
    timeStamp: "",
    isServer: false,
    isNew: false,
    isModified: false,
    isDeleted: false,
  };
  const [ID, setID] = React.useState(initialValues.ID);
  const [Report_No, setReport_No] = React.useState(initialValues.Report_No);
  const [Sr_No, setSr_No] = React.useState(initialValues.Sr_No);
  const [Work_Order_No, setWork_Order_No] = React.useState(
    initialValues.Work_Order_No
  );
  const [Drawing_No, setDrawing_No] = React.useState(initialValues.Drawing_No);
  const [Opn_Details, setOpn_Details] = React.useState(
    initialValues.Opn_Details
  );
  const [Quantity, setQuantity] = React.useState(initialValues.Quantity);
  const [Mat_Cost, setMat_Cost] = React.useState(initialValues.Mat_Cost);
  const [Rej_Details, setRej_Details] = React.useState(
    initialValues.Rej_Details
  );
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rejectionReportDetailsRecord
      ? { ...initialValues, ...rejectionReportDetailsRecord }
      : initialValues;
    setID(cleanValues.ID);
    setReport_No(cleanValues.Report_No);
    setSr_No(cleanValues.Sr_No);
    setWork_Order_No(cleanValues.Work_Order_No);
    setDrawing_No(cleanValues.Drawing_No);
    setOpn_Details(cleanValues.Opn_Details);
    setQuantity(cleanValues.Quantity);
    setMat_Cost(cleanValues.Mat_Cost);
    setRej_Details(cleanValues.Rej_Details);
    setTimeStamp(cleanValues.timeStamp);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [rejectionReportDetailsRecord, setRejectionReportDetailsRecord] =
    React.useState(rejectionReportDetailsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRejectionReportDetails.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRejectionReportDetails
        : rejectionReportDetailsModelProp;
      setRejectionReportDetailsRecord(record);
    };
    queryData();
  }, [idProp, rejectionReportDetailsModelProp]);
  React.useEffect(resetStateValues, [rejectionReportDetailsRecord]);
  const validations = {
    ID: [],
    Report_No: [],
    Sr_No: [],
    Work_Order_No: [],
    Drawing_No: [],
    Opn_Details: [],
    Quantity: [],
    Mat_Cost: [],
    Rej_Details: [],
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
          Report_No: Report_No ?? null,
          Sr_No: Sr_No ?? null,
          Work_Order_No: Work_Order_No ?? null,
          Drawing_No: Drawing_No ?? null,
          Opn_Details: Opn_Details ?? null,
          Quantity: Quantity ?? null,
          Mat_Cost: Mat_Cost ?? null,
          Rej_Details: Rej_Details ?? null,
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
            query: updateRejectionReportDetails.replaceAll("__typename", ""),
            variables: {
              input: {
                id: rejectionReportDetailsRecord.id,
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
      {...getOverrideProps(overrides, "RejectionReportDetailsUpdateForm")}
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
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
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
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
              timeStamp,
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
        label="Sr no"
        isRequired={false}
        isReadOnly={false}
        value={Sr_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Sr_No: value,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
              timeStamp,
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
        label="Work order no"
        isRequired={false}
        isReadOnly={false}
        value={Work_Order_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Sr_No,
              Work_Order_No: value,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Work_Order_No ?? value;
          }
          if (errors.Work_Order_No?.hasError) {
            runValidationTasks("Work_Order_No", value);
          }
          setWork_Order_No(value);
        }}
        onBlur={() => runValidationTasks("Work_Order_No", Work_Order_No)}
        errorMessage={errors.Work_Order_No?.errorMessage}
        hasError={errors.Work_Order_No?.hasError}
        {...getOverrideProps(overrides, "Work_Order_No")}
      ></TextField>
      <TextField
        label="Drawing no"
        isRequired={false}
        isReadOnly={false}
        value={Drawing_No}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No: value,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Drawing_No ?? value;
          }
          if (errors.Drawing_No?.hasError) {
            runValidationTasks("Drawing_No", value);
          }
          setDrawing_No(value);
        }}
        onBlur={() => runValidationTasks("Drawing_No", Drawing_No)}
        errorMessage={errors.Drawing_No?.errorMessage}
        hasError={errors.Drawing_No?.hasError}
        {...getOverrideProps(overrides, "Drawing_No")}
      ></TextField>
      <TextField
        label="Opn details"
        isRequired={false}
        isReadOnly={false}
        value={Opn_Details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details: value,
              Quantity,
              Mat_Cost,
              Rej_Details,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Opn_Details ?? value;
          }
          if (errors.Opn_Details?.hasError) {
            runValidationTasks("Opn_Details", value);
          }
          setOpn_Details(value);
        }}
        onBlur={() => runValidationTasks("Opn_Details", Opn_Details)}
        errorMessage={errors.Opn_Details?.errorMessage}
        hasError={errors.Opn_Details?.hasError}
        {...getOverrideProps(overrides, "Opn_Details")}
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
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity: value,
              Mat_Cost,
              Rej_Details,
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
        label="Mat cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Mat_Cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost: value,
              Rej_Details,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Mat_Cost ?? value;
          }
          if (errors.Mat_Cost?.hasError) {
            runValidationTasks("Mat_Cost", value);
          }
          setMat_Cost(value);
        }}
        onBlur={() => runValidationTasks("Mat_Cost", Mat_Cost)}
        errorMessage={errors.Mat_Cost?.errorMessage}
        hasError={errors.Mat_Cost?.hasError}
        {...getOverrideProps(overrides, "Mat_Cost")}
      ></TextField>
      <TextField
        label="Rej details"
        isRequired={false}
        isReadOnly={false}
        value={Rej_Details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Rej_Details ?? value;
          }
          if (errors.Rej_Details?.hasError) {
            runValidationTasks("Rej_Details", value);
          }
          setRej_Details(value);
        }}
        onBlur={() => runValidationTasks("Rej_Details", Rej_Details)}
        errorMessage={errors.Rej_Details?.errorMessage}
        hasError={errors.Rej_Details?.hasError}
        {...getOverrideProps(overrides, "Rej_Details")}
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
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
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
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
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
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
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
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
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
              Report_No,
              Sr_No,
              Work_Order_No,
              Drawing_No,
              Opn_Details,
              Quantity,
              Mat_Cost,
              Rej_Details,
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
          isDisabled={!(idProp || rejectionReportDetailsModelProp)}
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
              !(idProp || rejectionReportDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
