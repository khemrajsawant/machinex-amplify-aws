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
export declare type EarningDetailsCreateFormInputValues = {
    ID?: string;
    Report_No?: string;
    Machine_float?: string;
    Drawing_float?: string;
    Work_Order_float?: string;
    Operation?: string;
    Quantity?: number;
    Earning_Cost?: number;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type EarningDetailsCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Report_No?: ValidationFunction<string>;
    Machine_float?: ValidationFunction<string>;
    Drawing_float?: ValidationFunction<string>;
    Work_Order_float?: ValidationFunction<string>;
    Operation?: ValidationFunction<string>;
    Quantity?: ValidationFunction<number>;
    Earning_Cost?: ValidationFunction<number>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EarningDetailsCreateFormOverridesProps = {
    EarningDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Report_No?: PrimitiveOverrideProps<TextFieldProps>;
    Machine_float?: PrimitiveOverrideProps<TextFieldProps>;
    Drawing_float?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Order_float?: PrimitiveOverrideProps<TextFieldProps>;
    Operation?: PrimitiveOverrideProps<TextFieldProps>;
    Quantity?: PrimitiveOverrideProps<TextFieldProps>;
    Earning_Cost?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EarningDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: EarningDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EarningDetailsCreateFormInputValues) => EarningDetailsCreateFormInputValues;
    onSuccess?: (fields: EarningDetailsCreateFormInputValues) => void;
    onError?: (fields: EarningDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EarningDetailsCreateFormInputValues) => EarningDetailsCreateFormInputValues;
    onValidate?: EarningDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EarningDetailsCreateForm(props: EarningDetailsCreateFormProps): React.ReactElement;
