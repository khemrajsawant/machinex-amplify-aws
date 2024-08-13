import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EmployeeMaster } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeeMasterUpdateFormInputValues = {
    ID?: string;
    Emp_ID?: string;
    Joining_Date?: string;
    Release_Date?: string;
    First_Name?: string;
    Middle_Name?: string;
    Surname?: string;
    Gender?: string;
    DOB?: string;
    Mobile_No?: string;
    Email?: string;
    Aadhar_No?: string;
    Address?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type EmployeeMasterUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Emp_ID?: ValidationFunction<string>;
    Joining_Date?: ValidationFunction<string>;
    Release_Date?: ValidationFunction<string>;
    First_Name?: ValidationFunction<string>;
    Middle_Name?: ValidationFunction<string>;
    Surname?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
    DOB?: ValidationFunction<string>;
    Mobile_No?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Aadhar_No?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeMasterUpdateFormOverridesProps = {
    EmployeeMasterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Emp_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Joining_Date?: PrimitiveOverrideProps<TextFieldProps>;
    Release_Date?: PrimitiveOverrideProps<TextFieldProps>;
    First_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Middle_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Surname?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<TextFieldProps>;
    DOB?: PrimitiveOverrideProps<TextFieldProps>;
    Mobile_No?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Aadhar_No?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeMasterUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeMasterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    employeeMaster?: EmployeeMaster;
    onSubmit?: (fields: EmployeeMasterUpdateFormInputValues) => EmployeeMasterUpdateFormInputValues;
    onSuccess?: (fields: EmployeeMasterUpdateFormInputValues) => void;
    onError?: (fields: EmployeeMasterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeMasterUpdateFormInputValues) => EmployeeMasterUpdateFormInputValues;
    onValidate?: EmployeeMasterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeMasterUpdateForm(props: EmployeeMasterUpdateFormProps): React.ReactElement;
