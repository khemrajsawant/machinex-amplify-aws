import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BankDetailsCreateFormInputValues = {
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
export declare type BankDetailsCreateFormValidationValues = {
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
export declare type BankDetailsCreateFormOverridesProps = {
    BankDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type BankDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: BankDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BankDetailsCreateFormInputValues) => BankDetailsCreateFormInputValues;
    onSuccess?: (fields: BankDetailsCreateFormInputValues) => void;
    onError?: (fields: BankDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankDetailsCreateFormInputValues) => BankDetailsCreateFormInputValues;
    onValidate?: BankDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function BankDetailsCreateForm(props: BankDetailsCreateFormProps): React.ReactElement;
