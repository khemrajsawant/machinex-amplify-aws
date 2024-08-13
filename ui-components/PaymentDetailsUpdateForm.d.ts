import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PaymentDetails } from "./graphql/types";
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
export declare type PaymentDetailsUpdateFormInputValues = {
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
export declare type PaymentDetailsUpdateFormValidationValues = {
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
export declare type PaymentDetailsUpdateFormOverridesProps = {
    PaymentDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PaymentDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    paymentDetails?: PaymentDetails;
    onSubmit?: (fields: PaymentDetailsUpdateFormInputValues) => PaymentDetailsUpdateFormInputValues;
    onSuccess?: (fields: PaymentDetailsUpdateFormInputValues) => void;
    onError?: (fields: PaymentDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentDetailsUpdateFormInputValues) => PaymentDetailsUpdateFormInputValues;
    onValidate?: PaymentDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentDetailsUpdateForm(props: PaymentDetailsUpdateFormProps): React.ReactElement;
