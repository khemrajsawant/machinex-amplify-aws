import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RoleToRouteMappingCreateFormInputValues = {
    Role?: string[];
    Allowed_Routes?: string[];
    Allowed_Subroutes_Masters?: string[];
    Allowed_Subroutes_Transactions?: string[];
};
export declare type RoleToRouteMappingCreateFormValidationValues = {
    Role?: ValidationFunction<string>;
    Allowed_Routes?: ValidationFunction<string>;
    Allowed_Subroutes_Masters?: ValidationFunction<string>;
    Allowed_Subroutes_Transactions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoleToRouteMappingCreateFormOverridesProps = {
    RoleToRouteMappingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Role?: PrimitiveOverrideProps<TextFieldProps>;
    Allowed_Routes?: PrimitiveOverrideProps<TextFieldProps>;
    Allowed_Subroutes_Masters?: PrimitiveOverrideProps<TextFieldProps>;
    Allowed_Subroutes_Transactions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoleToRouteMappingCreateFormProps = React.PropsWithChildren<{
    overrides?: RoleToRouteMappingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoleToRouteMappingCreateFormInputValues) => RoleToRouteMappingCreateFormInputValues;
    onSuccess?: (fields: RoleToRouteMappingCreateFormInputValues) => void;
    onError?: (fields: RoleToRouteMappingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoleToRouteMappingCreateFormInputValues) => RoleToRouteMappingCreateFormInputValues;
    onValidate?: RoleToRouteMappingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoleToRouteMappingCreateForm(props: RoleToRouteMappingCreateFormProps): React.ReactElement;
