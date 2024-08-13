import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { WorkOrderOpeationwiseSpliup } from "./graphql/types";
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
export declare type WorkOrderOpeationwiseSpliupUpdateFormInputValues = {
    ID?: string;
    Order_No?: string;
    Sr_No?: string;
    PO_Ref?: string;
    Drawing_float?: string;
    Quantity?: number;
    Rate?: number;
    Work_Details?: string;
    Remark?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type WorkOrderOpeationwiseSpliupUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Order_No?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    PO_Ref?: ValidationFunction<string>;
    Drawing_float?: ValidationFunction<string>;
    Quantity?: ValidationFunction<number>;
    Rate?: ValidationFunction<number>;
    Work_Details?: ValidationFunction<string>;
    Remark?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkOrderOpeationwiseSpliupUpdateFormOverridesProps = {
    WorkOrderOpeationwiseSpliupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Order_No?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    PO_Ref?: PrimitiveOverrideProps<TextFieldProps>;
    Drawing_float?: PrimitiveOverrideProps<TextFieldProps>;
    Quantity?: PrimitiveOverrideProps<TextFieldProps>;
    Rate?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Details?: PrimitiveOverrideProps<TextFieldProps>;
    Remark?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WorkOrderOpeationwiseSpliupUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkOrderOpeationwiseSpliupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workOrderOpeationwiseSpliup?: WorkOrderOpeationwiseSpliup;
    onSubmit?: (fields: WorkOrderOpeationwiseSpliupUpdateFormInputValues) => WorkOrderOpeationwiseSpliupUpdateFormInputValues;
    onSuccess?: (fields: WorkOrderOpeationwiseSpliupUpdateFormInputValues) => void;
    onError?: (fields: WorkOrderOpeationwiseSpliupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkOrderOpeationwiseSpliupUpdateFormInputValues) => WorkOrderOpeationwiseSpliupUpdateFormInputValues;
    onValidate?: WorkOrderOpeationwiseSpliupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkOrderOpeationwiseSpliupUpdateForm(props: WorkOrderOpeationwiseSpliupUpdateFormProps): React.ReactElement;
