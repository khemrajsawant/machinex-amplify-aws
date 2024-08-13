import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BankDetails } from "./graphql/types";
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
export declare type BankDetailsUpdateFormInputValues = {
    ID?: string;
    Emp_ID?: string;
    Account_No?: string;
    IFSC_Code?: string;
    Bank_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type BankDetailsUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Emp_ID?: ValidationFunction<string>;
    Account_No?: ValidationFunction<string>;
    IFSC_Code?: ValidationFunction<string>;
    Bank_Name?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankDetailsUpdateFormOverridesProps = {
    BankDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Emp_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Account_No?: PrimitiveOverrideProps<TextFieldProps>;
    IFSC_Code?: PrimitiveOverrideProps<TextFieldProps>;
    Bank_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BankDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: BankDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bankDetails?: BankDetails;
    onSubmit?: (fields: BankDetailsUpdateFormInputValues) => BankDetailsUpdateFormInputValues;
    onSuccess?: (fields: BankDetailsUpdateFormInputValues) => void;
    onError?: (fields: BankDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankDetailsUpdateFormInputValues) => BankDetailsUpdateFormInputValues;
    onValidate?: BankDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BankDetailsUpdateForm(props: BankDetailsUpdateFormProps): React.ReactElement;
