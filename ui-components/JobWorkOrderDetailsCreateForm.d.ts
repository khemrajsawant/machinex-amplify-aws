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
export declare type JobWorkOrderDetailsCreateFormInputValues = {
    ID?: string;
    JWO_No?: string;
    JWO_Sr_No?: string;
    PO_Ref?: string;
    Quantity?: number;
    Del_Date?: string;
    Work_Details?: string;
    Rate?: number;
    Total_Cost?: number;
    JWO_In_Qty?: number;
    Bal_Qty?: number;
    Rej_Qty?: number;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type JobWorkOrderDetailsCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    JWO_No?: ValidationFunction<string>;
    JWO_Sr_No?: ValidationFunction<string>;
    PO_Ref?: ValidationFunction<string>;
    Quantity?: ValidationFunction<number>;
    Del_Date?: ValidationFunction<string>;
    Work_Details?: ValidationFunction<string>;
    Rate?: ValidationFunction<number>;
    Total_Cost?: ValidationFunction<number>;
    JWO_In_Qty?: ValidationFunction<number>;
    Bal_Qty?: ValidationFunction<number>;
    Rej_Qty?: ValidationFunction<number>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobWorkOrderDetailsCreateFormOverridesProps = {
    JobWorkOrderDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    JWO_No?: PrimitiveOverrideProps<TextFieldProps>;
    JWO_Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    PO_Ref?: PrimitiveOverrideProps<TextFieldProps>;
    Quantity?: PrimitiveOverrideProps<TextFieldProps>;
    Del_Date?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Details?: PrimitiveOverrideProps<TextFieldProps>;
    Rate?: PrimitiveOverrideProps<TextFieldProps>;
    Total_Cost?: PrimitiveOverrideProps<TextFieldProps>;
    JWO_In_Qty?: PrimitiveOverrideProps<TextFieldProps>;
    Bal_Qty?: PrimitiveOverrideProps<TextFieldProps>;
    Rej_Qty?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobWorkOrderDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: JobWorkOrderDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobWorkOrderDetailsCreateFormInputValues) => JobWorkOrderDetailsCreateFormInputValues;
    onSuccess?: (fields: JobWorkOrderDetailsCreateFormInputValues) => void;
    onError?: (fields: JobWorkOrderDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobWorkOrderDetailsCreateFormInputValues) => JobWorkOrderDetailsCreateFormInputValues;
    onValidate?: JobWorkOrderDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobWorkOrderDetailsCreateForm(props: JobWorkOrderDetailsCreateFormProps): React.ReactElement;
