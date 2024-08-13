import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AccountMasterForm } from "./graphql/types";
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
export declare type AccountMasterFormUpdateFormInputValues = {
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
export declare type AccountMasterFormUpdateFormValidationValues = {
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
export declare type AccountMasterFormUpdateFormOverridesProps = {
    AccountMasterFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type AccountMasterFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccountMasterFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accountMasterForm?: AccountMasterForm;
    onSubmit?: (fields: AccountMasterFormUpdateFormInputValues) => AccountMasterFormUpdateFormInputValues;
    onSuccess?: (fields: AccountMasterFormUpdateFormInputValues) => void;
    onError?: (fields: AccountMasterFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountMasterFormUpdateFormInputValues) => AccountMasterFormUpdateFormInputValues;
    onValidate?: AccountMasterFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccountMasterFormUpdateForm(props: AccountMasterFormUpdateFormProps): React.ReactElement;
