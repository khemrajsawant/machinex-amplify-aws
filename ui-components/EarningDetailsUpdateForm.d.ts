import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EarningDetails } from "./graphql/types";
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
export declare type EarningDetailsUpdateFormInputValues = {
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
export declare type EarningDetailsUpdateFormValidationValues = {
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
export declare type EarningDetailsUpdateFormOverridesProps = {
    EarningDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type EarningDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EarningDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    earningDetails?: EarningDetails;
    onSubmit?: (fields: EarningDetailsUpdateFormInputValues) => EarningDetailsUpdateFormInputValues;
    onSuccess?: (fields: EarningDetailsUpdateFormInputValues) => void;
    onError?: (fields: EarningDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EarningDetailsUpdateFormInputValues) => EarningDetailsUpdateFormInputValues;
    onValidate?: EarningDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EarningDetailsUpdateForm(props: EarningDetailsUpdateFormProps): React.ReactElement;
