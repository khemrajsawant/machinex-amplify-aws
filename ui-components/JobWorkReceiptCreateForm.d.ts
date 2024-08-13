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
export declare type JobWorkReceiptCreateFormInputValues = {
    ID?: string;
    Inword_No?: string;
    Date?: string;
    Account_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type JobWorkReceiptCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Inword_No?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Account_Name?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobWorkReceiptCreateFormOverridesProps = {
    JobWorkReceiptCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Inword_No?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Account_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobWorkReceiptCreateFormProps = React.PropsWithChildren<{
    overrides?: JobWorkReceiptCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobWorkReceiptCreateFormInputValues) => JobWorkReceiptCreateFormInputValues;
    onSuccess?: (fields: JobWorkReceiptCreateFormInputValues) => void;
    onError?: (fields: JobWorkReceiptCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobWorkReceiptCreateFormInputValues) => JobWorkReceiptCreateFormInputValues;
    onValidate?: JobWorkReceiptCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobWorkReceiptCreateForm(props: JobWorkReceiptCreateFormProps): React.ReactElement;
