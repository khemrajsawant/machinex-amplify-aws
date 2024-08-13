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
export declare type PaymentDetailsCreateFormInputValues = {
    ID?: string;
    Reference_float?: string;
    Sr_No?: string;
    Account_Name?: string;
    Transaction_Type?: string;
    Amount?: number;
    Payment_Mode?: string;
    timeStamp?: string;
    Description?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type PaymentDetailsCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Reference_float?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    Account_Name?: ValidationFunction<string>;
    Transaction_Type?: ValidationFunction<string>;
    Amount?: ValidationFunction<number>;
    Payment_Mode?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentDetailsCreateFormOverridesProps = {
    PaymentDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Reference_float?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    Account_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Transaction_Type?: PrimitiveOverrideProps<TextFieldProps>;
    Amount?: PrimitiveOverrideProps<TextFieldProps>;
    Payment_Mode?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PaymentDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: PaymentDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PaymentDetailsCreateFormInputValues) => PaymentDetailsCreateFormInputValues;
    onSuccess?: (fields: PaymentDetailsCreateFormInputValues) => void;
    onError?: (fields: PaymentDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentDetailsCreateFormInputValues) => PaymentDetailsCreateFormInputValues;
    onValidate?: PaymentDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentDetailsCreateForm(props: PaymentDetailsCreateFormProps): React.ReactElement;
