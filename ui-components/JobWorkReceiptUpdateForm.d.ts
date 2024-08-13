import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { JobWorkReceipt } from "./graphql/types";
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
export declare type JobWorkReceiptUpdateFormInputValues = {
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
export declare type JobWorkReceiptUpdateFormValidationValues = {
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
export declare type JobWorkReceiptUpdateFormOverridesProps = {
    JobWorkReceiptUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type JobWorkReceiptUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobWorkReceiptUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobWorkReceipt?: JobWorkReceipt;
    onSubmit?: (fields: JobWorkReceiptUpdateFormInputValues) => JobWorkReceiptUpdateFormInputValues;
    onSuccess?: (fields: JobWorkReceiptUpdateFormInputValues) => void;
    onError?: (fields: JobWorkReceiptUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobWorkReceiptUpdateFormInputValues) => JobWorkReceiptUpdateFormInputValues;
    onValidate?: JobWorkReceiptUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobWorkReceiptUpdateForm(props: JobWorkReceiptUpdateFormProps): React.ReactElement;
