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
export declare type OperationDecriptionCreateFormInputValues = {
    ID?: string;
    Opn_Name?: string;
    Sr_No?: string;
    Opn_Desc?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type OperationDecriptionCreateFormValidationValues = {
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
export declare type OperationDecriptionCreateFormOverridesProps = {
    OperationDecriptionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Desc?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OperationDecriptionCreateFormProps = React.PropsWithChildren<{
    overrides?: OperationDecriptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OperationDecriptionCreateFormInputValues) => OperationDecriptionCreateFormInputValues;
    onSuccess?: (fields: OperationDecriptionCreateFormInputValues) => void;
    onError?: (fields: OperationDecriptionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OperationDecriptionCreateFormInputValues) => OperationDecriptionCreateFormInputValues;
    onValidate?: OperationDecriptionCreateFormValidationValues;
} & React.CSSProperties>;
export default function OperationDecriptionCreateForm(props: OperationDecriptionCreateFormProps): React.ReactElement;
