import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { JobWorkOrder } from "./graphql/types";
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
export declare type JobWorkOrderUpdateFormInputValues = {
    ID?: string;
    JWO_No?: string;
    Drawing_float?: string;
    Date?: string;
    Account_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type JobWorkOrderUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    JWO_No?: ValidationFunction<string>;
    Drawing_float?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Account_Name?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobWorkOrderUpdateFormOverridesProps = {
    JobWorkOrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    JWO_No?: PrimitiveOverrideProps<TextFieldProps>;
    Drawing_float?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Account_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobWorkOrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobWorkOrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobWorkOrder?: JobWorkOrder;
    onSubmit?: (fields: JobWorkOrderUpdateFormInputValues) => JobWorkOrderUpdateFormInputValues;
    onSuccess?: (fields: JobWorkOrderUpdateFormInputValues) => void;
    onError?: (fields: JobWorkOrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobWorkOrderUpdateFormInputValues) => JobWorkOrderUpdateFormInputValues;
    onValidate?: JobWorkOrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobWorkOrderUpdateForm(props: JobWorkOrderUpdateFormProps): React.ReactElement;
