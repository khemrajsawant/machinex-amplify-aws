import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RoleToRouteMapping } from "./graphql/types";
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
export declare type RoleToRouteMappingUpdateFormInputValues = {
    Role?: string[];
    Allowed_Routes?: string[];
    Allowed_Subroutes_Masters?: string[];
    Allowed_Subroutes_Transactions?: string[];
};
export declare type RoleToRouteMappingUpdateFormValidationValues = {
    Role?: ValidationFunction<string>;
    Allowed_Routes?: ValidationFunction<string>;
    Allowed_Subroutes_Masters?: ValidationFunction<string>;
    Allowed_Subroutes_Transactions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoleToRouteMappingUpdateFormOverridesProps = {
    RoleToRouteMappingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Role?: PrimitiveOverrideProps<TextFieldProps>;
    Allowed_Routes?: PrimitiveOverrideProps<TextFieldProps>;
    Allowed_Subroutes_Masters?: PrimitiveOverrideProps<TextFieldProps>;
    Allowed_Subroutes_Transactions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoleToRouteMappingUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoleToRouteMappingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    roleToRouteMapping?: RoleToRouteMapping;
    onSubmit?: (fields: RoleToRouteMappingUpdateFormInputValues) => RoleToRouteMappingUpdateFormInputValues;
    onSuccess?: (fields: RoleToRouteMappingUpdateFormInputValues) => void;
    onError?: (fields: RoleToRouteMappingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoleToRouteMappingUpdateFormInputValues) => RoleToRouteMappingUpdateFormInputValues;
    onValidate?: RoleToRouteMappingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoleToRouteMappingUpdateForm(props: RoleToRouteMappingUpdateFormProps): React.ReactElement;
