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
import { getWorkOrderOpeationwiseSpliup } from "./graphql/queries";
import { updateWorkOrderOpeationwiseSpliup } from "./graphql/mutations";
const client = generateClient();
export default function WorkOrderOpeationwiseSpliupUpdateForm(props) {
  const {
    id: idProp,
    workOrderOpeationwiseSpliup: workOrderOpeationwiseSpliupModelProp,
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
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = workOrderOpeationwiseSpliupRecord
      ? { ...initialValues, ...workOrderOpeationwiseSpliupRecord }
      : initialValues;
    setID(cleanValues.ID);
    setOrder_No(cleanValues.Order_No);
    setSr_No(cleanValues.Sr_No);
    setPO_Ref(cleanValues.PO_Ref);
    setDrawing_float(cleanValues.Drawing_float);
    setQuantity(cleanValues.Quantity);
    setRate(cleanValues.Rate);
    setWork_Details(cleanValues.Work_Details);
    setRemark(cleanValues.Remark);
    setTimeStamp(cleanValues.timeStamp);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [
    workOrderOpeationwiseSpliupRecord,
    setWorkOrderOpeationwiseSpliupRecord,
  ] = React.useState(workOrderOpeationwiseSpliupModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getWorkOrderOpeationwiseSpliup.replaceAll(
                "__typename",
                ""
              ),
              variables: { id: idProp },
            })
          )?.data?.getWorkOrderOpeationwiseSpliup
        : workOrderOpeationwiseSpliupModelProp;
      setWorkOrderOpeationwiseSpliupRecord(record);
    };
    queryData();
  }, [idProp, workOrderOpeationwiseSpliupModelProp]);
  React.useEffect(resetStateValues, [workOrderOpeationwiseSpliupRecord]);
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
          Order_No: Order_No ?? null,
          Sr_No: Sr_No ?? null,
          PO_Ref: PO_Ref ?? null,
          Drawing_float: Drawing_float ?? null,
          Quantity: Quantity ?? null,
          Rate: Rate ?? null,
          Work_Details: Work_Details ?? null,
          Remark: Remark ?? null,
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
            query: updateWorkOrderOpeationwiseSpliup.replaceAll(
              "__typename",
              ""
            ),
            variables: {
              input: {
                id: workOrderOpeationwiseSpliupRecord.id,
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
      {...getOverrideProps(overrides, "WorkOrderOpeationwiseSpliupUpdateForm")}
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
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
              Order_No,
              Sr_No,
              PO_Ref,
              Drawing_float,
              Quantity,
              Rate,
              Work_Details,
              Remark,
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
          isDisabled={!(idProp || workOrderOpeationwiseSpliupModelProp)}
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
              !(idProp || workOrderOpeationwiseSpliupModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
