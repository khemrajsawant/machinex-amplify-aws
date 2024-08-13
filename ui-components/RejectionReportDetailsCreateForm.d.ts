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
export declare type RejectionReportDetailsCreateFormInputValues = {
    ID?: string;
    Report_No?: string;
    Sr_No?: string;
    Work_Order_No?: string;
    Drawing_No?: string;
    Opn_Details?: string;
    Quantity?: number;
    Mat_Cost?: number;
    Rej_Details?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type RejectionReportDetailsCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Report_No?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    Work_Order_No?: ValidationFunction<string>;
    Drawing_No?: ValidationFunction<string>;
    Opn_Details?: ValidationFunction<string>;
    Quantity?: ValidationFunction<number>;
    Mat_Cost?: ValidationFunction<number>;
    Rej_Details?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RejectionReportDetailsCreateFormOverridesProps = {
    RejectionReportDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Report_No?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Order_No?: PrimitiveOverrideProps<TextFieldProps>;
    Drawing_No?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Details?: PrimitiveOverrideProps<TextFieldProps>;
    Quantity?: PrimitiveOverrideProps<TextFieldProps>;
    Mat_Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Rej_Details?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type RejectionReportDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: RejectionReportDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RejectionReportDetailsCreateFormInputValues) => RejectionReportDetailsCreateFormInputValues;
    onSuccess?: (fields: RejectionReportDetailsCreateFormInputValues) => void;
    onError?: (fields: RejectionReportDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RejectionReportDetailsCreateFormInputValues) => RejectionReportDetailsCreateFormInputValues;
    onValidate?: RejectionReportDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RejectionReportDetailsCreateForm(props: RejectionReportDetailsCreateFormProps): React.ReactElement;
