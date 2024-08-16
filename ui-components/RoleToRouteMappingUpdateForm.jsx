/* eslint-disable */
"use client";
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRoleToRouteMapping } from "./graphql/queries";
import { updateRoleToRouteMapping } from "./graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function RoleToRouteMappingUpdateForm(props) {
  const {
    id: idProp,
    roleToRouteMapping: roleToRouteMappingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Role: [],
    Allowed_Routes: [],
    Allowed_Subroutes_Masters: [],
    Allowed_Subroutes_Transactions: [],
  };
  const [Role, setRole] = React.useState(initialValues.Role);
  const [Allowed_Routes, setAllowed_Routes] = React.useState(
    initialValues.Allowed_Routes
  );
  const [Allowed_Subroutes_Masters, setAllowed_Subroutes_Masters] =
    React.useState(initialValues.Allowed_Subroutes_Masters);
  const [Allowed_Subroutes_Transactions, setAllowed_Subroutes_Transactions] =
    React.useState(initialValues.Allowed_Subroutes_Transactions);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = roleToRouteMappingRecord
      ? { ...initialValues, ...roleToRouteMappingRecord }
      : initialValues;
    setRole(cleanValues.Role ?? []);
    setCurrentRoleValue("");
    setAllowed_Routes(cleanValues.Allowed_Routes ?? []);
    setCurrentAllowed_RoutesValue("");
    setAllowed_Subroutes_Masters(cleanValues.Allowed_Subroutes_Masters ?? []);
    setCurrentAllowed_Subroutes_MastersValue("");
    setAllowed_Subroutes_Transactions(
      cleanValues.Allowed_Subroutes_Transactions ?? []
    );
    setCurrentAllowed_Subroutes_TransactionsValue("");
    setErrors({});
  };
  const [roleToRouteMappingRecord, setRoleToRouteMappingRecord] =
    React.useState(roleToRouteMappingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRoleToRouteMapping.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRoleToRouteMapping
        : roleToRouteMappingModelProp;
      setRoleToRouteMappingRecord(record);
    };
    queryData();
  }, [idProp, roleToRouteMappingModelProp]);
  React.useEffect(resetStateValues, [roleToRouteMappingRecord]);
  const [currentRoleValue, setCurrentRoleValue] = React.useState("");
  const RoleRef = React.createRef();
  const [currentAllowed_RoutesValue, setCurrentAllowed_RoutesValue] =
    React.useState("");
  const Allowed_RoutesRef = React.createRef();
  const [
    currentAllowed_Subroutes_MastersValue,
    setCurrentAllowed_Subroutes_MastersValue,
  ] = React.useState("");
  const Allowed_Subroutes_MastersRef = React.createRef();
  const [
    currentAllowed_Subroutes_TransactionsValue,
    setCurrentAllowed_Subroutes_TransactionsValue,
  ] = React.useState("");
  const Allowed_Subroutes_TransactionsRef = React.createRef();
  const validations = {
    Role: [],
    Allowed_Routes: [],
    Allowed_Subroutes_Masters: [],
    Allowed_Subroutes_Transactions: [],
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
          Role: Role ?? null,
          Allowed_Routes: Allowed_Routes ?? null,
          Allowed_Subroutes_Masters: Allowed_Subroutes_Masters ?? null,
          Allowed_Subroutes_Transactions:
            Allowed_Subroutes_Transactions ?? null,
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
            query: updateRoleToRouteMapping.replaceAll("__typename", ""),
            variables: {
              input: {
                id: roleToRouteMappingRecord.id,
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
      {...getOverrideProps(overrides, "RoleToRouteMappingUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Role: values,
              Allowed_Routes,
              Allowed_Subroutes_Masters,
              Allowed_Subroutes_Transactions,
            };
            const result = onChange(modelFields);
            values = result?.Role ?? values;
          }
          setRole(values);
          setCurrentRoleValue("");
        }}
        currentFieldValue={currentRoleValue}
        label={"Role"}
        items={Role}
        hasError={errors?.Role?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Role", currentRoleValue)
        }
        errorMessage={errors?.Role?.errorMessage}
        setFieldValue={setCurrentRoleValue}
        inputFieldRef={RoleRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Role"
          isRequired={false}
          isReadOnly={false}
          value={currentRoleValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Role?.hasError) {
              runValidationTasks("Role", value);
            }
            setCurrentRoleValue(value);
          }}
          onBlur={() => runValidationTasks("Role", currentRoleValue)}
          errorMessage={errors.Role?.errorMessage}
          hasError={errors.Role?.hasError}
          ref={RoleRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Role")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Role,
              Allowed_Routes: values,
              Allowed_Subroutes_Masters,
              Allowed_Subroutes_Transactions,
            };
            const result = onChange(modelFields);
            values = result?.Allowed_Routes ?? values;
          }
          setAllowed_Routes(values);
          setCurrentAllowed_RoutesValue("");
        }}
        currentFieldValue={currentAllowed_RoutesValue}
        label={"Allowed routes"}
        items={Allowed_Routes}
        hasError={errors?.Allowed_Routes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Allowed_Routes", currentAllowed_RoutesValue)
        }
        errorMessage={errors?.Allowed_Routes?.errorMessage}
        setFieldValue={setCurrentAllowed_RoutesValue}
        inputFieldRef={Allowed_RoutesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Allowed routes"
          isRequired={false}
          isReadOnly={false}
          value={currentAllowed_RoutesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Allowed_Routes?.hasError) {
              runValidationTasks("Allowed_Routes", value);
            }
            setCurrentAllowed_RoutesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("Allowed_Routes", currentAllowed_RoutesValue)
          }
          errorMessage={errors.Allowed_Routes?.errorMessage}
          hasError={errors.Allowed_Routes?.hasError}
          ref={Allowed_RoutesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Allowed_Routes")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Role,
              Allowed_Routes,
              Allowed_Subroutes_Masters: values,
              Allowed_Subroutes_Transactions,
            };
            const result = onChange(modelFields);
            values = result?.Allowed_Subroutes_Masters ?? values;
          }
          setAllowed_Subroutes_Masters(values);
          setCurrentAllowed_Subroutes_MastersValue("");
        }}
        currentFieldValue={currentAllowed_Subroutes_MastersValue}
        label={"Allowed subroutes masters"}
        items={Allowed_Subroutes_Masters}
        hasError={errors?.Allowed_Subroutes_Masters?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "Allowed_Subroutes_Masters",
            currentAllowed_Subroutes_MastersValue
          )
        }
        errorMessage={errors?.Allowed_Subroutes_Masters?.errorMessage}
        setFieldValue={setCurrentAllowed_Subroutes_MastersValue}
        inputFieldRef={Allowed_Subroutes_MastersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Allowed subroutes masters"
          isRequired={false}
          isReadOnly={false}
          value={currentAllowed_Subroutes_MastersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Allowed_Subroutes_Masters?.hasError) {
              runValidationTasks("Allowed_Subroutes_Masters", value);
            }
            setCurrentAllowed_Subroutes_MastersValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "Allowed_Subroutes_Masters",
              currentAllowed_Subroutes_MastersValue
            )
          }
          errorMessage={errors.Allowed_Subroutes_Masters?.errorMessage}
          hasError={errors.Allowed_Subroutes_Masters?.hasError}
          ref={Allowed_Subroutes_MastersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Allowed_Subroutes_Masters")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Role,
              Allowed_Routes,
              Allowed_Subroutes_Masters,
              Allowed_Subroutes_Transactions: values,
            };
            const result = onChange(modelFields);
            values = result?.Allowed_Subroutes_Transactions ?? values;
          }
          setAllowed_Subroutes_Transactions(values);
          setCurrentAllowed_Subroutes_TransactionsValue("");
        }}
        currentFieldValue={currentAllowed_Subroutes_TransactionsValue}
        label={"Allowed subroutes transactions"}
        items={Allowed_Subroutes_Transactions}
        hasError={errors?.Allowed_Subroutes_Transactions?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "Allowed_Subroutes_Transactions",
            currentAllowed_Subroutes_TransactionsValue
          )
        }
        errorMessage={errors?.Allowed_Subroutes_Transactions?.errorMessage}
        setFieldValue={setCurrentAllowed_Subroutes_TransactionsValue}
        inputFieldRef={Allowed_Subroutes_TransactionsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Allowed subroutes transactions"
          isRequired={false}
          isReadOnly={false}
          value={currentAllowed_Subroutes_TransactionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Allowed_Subroutes_Transactions?.hasError) {
              runValidationTasks("Allowed_Subroutes_Transactions", value);
            }
            setCurrentAllowed_Subroutes_TransactionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "Allowed_Subroutes_Transactions",
              currentAllowed_Subroutes_TransactionsValue
            )
          }
          errorMessage={errors.Allowed_Subroutes_Transactions?.errorMessage}
          hasError={errors.Allowed_Subroutes_Transactions?.hasError}
          ref={Allowed_Subroutes_TransactionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Allowed_Subroutes_Transactions")}
        ></TextField>
      </ArrayField>
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
          isDisabled={!(idProp || roleToRouteMappingModelProp)}
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
              !(idProp || roleToRouteMappingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
