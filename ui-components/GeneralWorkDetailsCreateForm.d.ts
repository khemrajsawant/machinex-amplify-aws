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
export declare type GeneralWorkDetailsCreateFormInputValues = {
    ID?: string;
    Report_No?: string;
    Sr_No?: string;
    Misc_Work?: string;
    Hrs?: number;
    Remark?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type GeneralWorkDetailsCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Report_No?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    Misc_Work?: ValidationFunction<string>;
    Hrs?: ValidationFunction<number>;
    Remark?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeneralWorkDetailsCreateFormOverridesProps = {
    GeneralWorkDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Report_No?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    Misc_Work?: PrimitiveOverrideProps<TextFieldProps>;
    Hrs?: PrimitiveOverrideProps<TextFieldProps>;
    Remark?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GeneralWorkDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: GeneralWorkDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GeneralWorkDetailsCreateFormInputValues) => GeneralWorkDetailsCreateFormInputValues;
    onSuccess?: (fields: GeneralWorkDetailsCreateFormInputValues) => void;
    onError?: (fields: GeneralWorkDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeneralWorkDetailsCreateFormInputValues) => GeneralWorkDetailsCreateFormInputValues;
    onValidate?: GeneralWorkDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function GeneralWorkDetailsCreateForm(props: GeneralWorkDetailsCreateFormProps): React.ReactElement;
