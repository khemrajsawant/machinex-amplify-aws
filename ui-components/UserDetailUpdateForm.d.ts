import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserDetail } from "./graphql/types";
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
export declare type UserDetailUpdateFormInputValues = {
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
export declare type UserDetailUpdateFormValidationValues = {
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
export declare type UserDetailUpdateFormOverridesProps = {
    UserDetailUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type UserDetailUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserDetailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userDetail?: UserDetail;
    onSubmit?: (fields: UserDetailUpdateFormInputValues) => UserDetailUpdateFormInputValues;
    onSuccess?: (fields: UserDetailUpdateFormInputValues) => void;
    onError?: (fields: UserDetailUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDetailUpdateFormInputValues) => UserDetailUpdateFormInputValues;
    onValidate?: UserDetailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserDetailUpdateForm(props: UserDetailUpdateFormProps): React.ReactElement;
