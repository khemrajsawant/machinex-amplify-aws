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
export declare type UserDetailCreateFormInputValues = {
    ID?: string;
    Emp_ID?: string;
    User_Name?: string;
    Access_Category?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type UserDetailCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Emp_ID?: ValidationFunction<string>;
    User_Name?: ValidationFunction<string>;
    Access_Category?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailCreateFormOverridesProps = {
    UserDetailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Emp_ID?: PrimitiveOverrideProps<TextFieldProps>;
    User_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Access_Category?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserDetailCreateFormProps = React.PropsWithChildren<{
    overrides?: UserDetailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserDetailCreateFormInputValues) => UserDetailCreateFormInputValues;
    onSuccess?: (fields: UserDetailCreateFormInputValues) => void;
    onError?: (fields: UserDetailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDetailCreateFormInputValues) => UserDetailCreateFormInputValues;
    onValidate?: UserDetailCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserDetailCreateForm(props: UserDetailCreateFormProps): React.ReactElement;
