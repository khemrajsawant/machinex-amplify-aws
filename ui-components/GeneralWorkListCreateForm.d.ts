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
export declare type GeneralWorkListCreateFormInputValues = {
    ID?: string;
    Sr_No?: string;
    General_Work?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type GeneralWorkListCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    General_Work?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeneralWorkListCreateFormOverridesProps = {
    GeneralWorkListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    General_Work?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GeneralWorkListCreateFormProps = React.PropsWithChildren<{
    overrides?: GeneralWorkListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GeneralWorkListCreateFormInputValues) => GeneralWorkListCreateFormInputValues;
    onSuccess?: (fields: GeneralWorkListCreateFormInputValues) => void;
    onError?: (fields: GeneralWorkListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeneralWorkListCreateFormInputValues) => GeneralWorkListCreateFormInputValues;
    onValidate?: GeneralWorkListCreateFormValidationValues;
} & React.CSSProperties>;
export default function GeneralWorkListCreateForm(props: GeneralWorkListCreateFormProps): React.ReactElement;
