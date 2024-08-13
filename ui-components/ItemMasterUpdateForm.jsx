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
import { getItemMaster } from "./graphql/queries";
import { updateItemMaster } from "./graphql/mutations";
const client = generateClient();
export default function ItemMasterUpdateForm(props) {
  const {
    id: idProp,
    itemMaster: itemMasterModelProp,
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
    Description: "",
    Size: "",
    Item_Group: "",
    UOM: "",
    Item_Material: "",
    Rough_Weight: "",
    Finish_Weight: "",
    Scrap_Value: "",
    Material_Handling_Charges: "",
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
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Size, setSize] = React.useState(initialValues.Size);
  const [Item_Group, setItem_Group] = React.useState(initialValues.Item_Group);
  const [UOM, setUOM] = React.useState(initialValues.UOM);
  const [Item_Material, setItem_Material] = React.useState(
    initialValues.Item_Material
  );
  const [Rough_Weight, setRough_Weight] = React.useState(
    initialValues.Rough_Weight
  );
  const [Finish_Weight, setFinish_Weight] = React.useState(
    initialValues.Finish_Weight
  );
  const [Scrap_Value, setScrap_Value] = React.useState(
    initialValues.Scrap_Value
  );
  const [Material_Handling_Charges, setMaterial_Handling_Charges] =
    React.useState(initialValues.Material_Handling_Charges);
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [isServer, setIsServer] = React.useState(initialValues.isServer);
  const [isNew, setIsNew] = React.useState(initialValues.isNew);
  const [isModified, setIsModified] = React.useState(initialValues.isModified);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemMasterRecord
      ? { ...initialValues, ...itemMasterRecord }
      : initialValues;
    setID(cleanValues.ID);
    setDrawing_float(cleanValues.Drawing_float);
    setDescription(cleanValues.Description);
    setSize(cleanValues.Size);
    setItem_Group(cleanValues.Item_Group);
    setUOM(cleanValues.UOM);
    setItem_Material(cleanValues.Item_Material);
    setRough_Weight(cleanValues.Rough_Weight);
    setFinish_Weight(cleanValues.Finish_Weight);
    setScrap_Value(cleanValues.Scrap_Value);
    setMaterial_Handling_Charges(cleanValues.Material_Handling_Charges);
    setTimeStamp(cleanValues.timeStamp);
    setIsServer(cleanValues.isServer);
    setIsNew(cleanValues.isNew);
    setIsModified(cleanValues.isModified);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [itemMasterRecord, setItemMasterRecord] =
    React.useState(itemMasterModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getItemMaster.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getItemMaster
        : itemMasterModelProp;
      setItemMasterRecord(record);
    };
    queryData();
  }, [idProp, itemMasterModelProp]);
  React.useEffect(resetStateValues, [itemMasterRecord]);
  const validations = {
    ID: [],
    Drawing_float: [],
    Description: [],
    Size: [],
    Item_Group: [],
    UOM: [],
    Item_Material: [],
    Rough_Weight: [],
    Finish_Weight: [],
    Scrap_Value: [],
    Material_Handling_Charges: [],
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
          Description: Description ?? null,
          Size: Size ?? null,
          Item_Group: Item_Group ?? null,
          UOM: UOM ?? null,
          Item_Material: Item_Material ?? null,
          Rough_Weight: Rough_Weight ?? null,
          Finish_Weight: Finish_Weight ?? null,
          Scrap_Value: Scrap_Value ?? null,
          Material_Handling_Charges: Material_Handling_Charges ?? null,
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
            query: updateItemMaster.replaceAll("__typename", ""),
            variables: {
              input: {
                id: itemMasterRecord.id,
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
      {...getOverrideProps(overrides, "ItemMasterUpdateForm")}
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
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
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
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description: value,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
              timeStamp,
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
      <TextField
        label="Size"
        isRequired={false}
        isReadOnly={false}
        value={Size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size: value,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Size ?? value;
          }
          if (errors.Size?.hasError) {
            runValidationTasks("Size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("Size", Size)}
        errorMessage={errors.Size?.errorMessage}
        hasError={errors.Size?.hasError}
        {...getOverrideProps(overrides, "Size")}
      ></TextField>
      <TextField
        label="Item group"
        isRequired={false}
        isReadOnly={false}
        value={Item_Group}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size,
              Item_Group: value,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Item_Group ?? value;
          }
          if (errors.Item_Group?.hasError) {
            runValidationTasks("Item_Group", value);
          }
          setItem_Group(value);
        }}
        onBlur={() => runValidationTasks("Item_Group", Item_Group)}
        errorMessage={errors.Item_Group?.errorMessage}
        hasError={errors.Item_Group?.hasError}
        {...getOverrideProps(overrides, "Item_Group")}
      ></TextField>
      <TextField
        label="Uom"
        isRequired={false}
        isReadOnly={false}
        value={UOM}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size,
              Item_Group,
              UOM: value,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.UOM ?? value;
          }
          if (errors.UOM?.hasError) {
            runValidationTasks("UOM", value);
          }
          setUOM(value);
        }}
        onBlur={() => runValidationTasks("UOM", UOM)}
        errorMessage={errors.UOM?.errorMessage}
        hasError={errors.UOM?.hasError}
        {...getOverrideProps(overrides, "UOM")}
      ></TextField>
      <TextField
        label="Item material"
        isRequired={false}
        isReadOnly={false}
        value={Item_Material}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material: value,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Item_Material ?? value;
          }
          if (errors.Item_Material?.hasError) {
            runValidationTasks("Item_Material", value);
          }
          setItem_Material(value);
        }}
        onBlur={() => runValidationTasks("Item_Material", Item_Material)}
        errorMessage={errors.Item_Material?.errorMessage}
        hasError={errors.Item_Material?.hasError}
        {...getOverrideProps(overrides, "Item_Material")}
      ></TextField>
      <TextField
        label="Rough weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Rough_Weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight: value,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Rough_Weight ?? value;
          }
          if (errors.Rough_Weight?.hasError) {
            runValidationTasks("Rough_Weight", value);
          }
          setRough_Weight(value);
        }}
        onBlur={() => runValidationTasks("Rough_Weight", Rough_Weight)}
        errorMessage={errors.Rough_Weight?.errorMessage}
        hasError={errors.Rough_Weight?.hasError}
        {...getOverrideProps(overrides, "Rough_Weight")}
      ></TextField>
      <TextField
        label="Finish weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Finish_Weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight: value,
              Scrap_Value,
              Material_Handling_Charges,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Finish_Weight ?? value;
          }
          if (errors.Finish_Weight?.hasError) {
            runValidationTasks("Finish_Weight", value);
          }
          setFinish_Weight(value);
        }}
        onBlur={() => runValidationTasks("Finish_Weight", Finish_Weight)}
        errorMessage={errors.Finish_Weight?.errorMessage}
        hasError={errors.Finish_Weight?.hasError}
        {...getOverrideProps(overrides, "Finish_Weight")}
      ></TextField>
      <TextField
        label="Scrap value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Scrap_Value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value: value,
              Material_Handling_Charges,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Scrap_Value ?? value;
          }
          if (errors.Scrap_Value?.hasError) {
            runValidationTasks("Scrap_Value", value);
          }
          setScrap_Value(value);
        }}
        onBlur={() => runValidationTasks("Scrap_Value", Scrap_Value)}
        errorMessage={errors.Scrap_Value?.errorMessage}
        hasError={errors.Scrap_Value?.hasError}
        {...getOverrideProps(overrides, "Scrap_Value")}
      ></TextField>
      <TextField
        label="Material handling charges"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Material_Handling_Charges}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ID,
              Drawing_float,
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges: value,
              timeStamp,
              isServer,
              isNew,
              isModified,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.Material_Handling_Charges ?? value;
          }
          if (errors.Material_Handling_Charges?.hasError) {
            runValidationTasks("Material_Handling_Charges", value);
          }
          setMaterial_Handling_Charges(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Material_Handling_Charges",
            Material_Handling_Charges
          )
        }
        errorMessage={errors.Material_Handling_Charges?.errorMessage}
        hasError={errors.Material_Handling_Charges?.hasError}
        {...getOverrideProps(overrides, "Material_Handling_Charges")}
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
              Drawing_float,
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
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
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
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
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
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
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
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
              Description,
              Size,
              Item_Group,
              UOM,
              Item_Material,
              Rough_Weight,
              Finish_Weight,
              Scrap_Value,
              Material_Handling_Charges,
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
          isDisabled={!(idProp || itemMasterModelProp)}
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
              !(idProp || itemMasterModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
