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
export declare type AccountMasterFormCreateFormInputValues = {
    ID?: string;
    Account_Name?: string;
    Address?: string;
    Mobile?: string;
    Email?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type AccountMasterFormCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Account_Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Mobile?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountMasterFormCreateFormOverridesProps = {
    AccountMasterFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Account_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Mobile?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AccountMasterFormCreateFormProps = React.PropsWithChildren<{
    overrides?: AccountMasterFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountMasterFormCreateFormInputValues) => AccountMasterFormCreateFormInputValues;
    onSuccess?: (fields: AccountMasterFormCreateFormInputValues) => void;
    onError?: (fields: AccountMasterFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountMasterFormCreateFormInputValues) => AccountMasterFormCreateFormInputValues;
    onValidate?: AccountMasterFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccountMasterFormCreateForm(props: AccountMasterFormCreateFormProps): React.ReactElement;
