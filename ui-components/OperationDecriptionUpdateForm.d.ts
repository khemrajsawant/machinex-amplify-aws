import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OperationDecription } from "./graphql/types";
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
export declare type OperationDecriptionUpdateFormInputValues = {
    ID?: string;
    Opn_Name?: string;
    Sr_No?: string;
    Opn_Desc?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type OperationDecriptionUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Opn_Name?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    Opn_Desc?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OperationDecriptionUpdateFormOverridesProps = {
    OperationDecriptionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Desc?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OperationDecriptionUpdateFormProps = React.PropsWithChildren<{
    overrides?: OperationDecriptionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    operationDecription?: OperationDecription;
    onSubmit?: (fields: OperationDecriptionUpdateFormInputValues) => OperationDecriptionUpdateFormInputValues;
    onSuccess?: (fields: OperationDecriptionUpdateFormInputValues) => void;
    onError?: (fields: OperationDecriptionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OperationDecriptionUpdateFormInputValues) => OperationDecriptionUpdateFormInputValues;
    onValidate?: OperationDecriptionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OperationDecriptionUpdateForm(props: OperationDecriptionUpdateFormProps): React.ReactElement;
