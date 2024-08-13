import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { WorkOrderDetails } from "./graphql/types";
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
export declare type WorkOrderDetailsUpdateFormInputValues = {
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
    Prod_Qty?: number;
    Out_Qty?: number;
    Bal_Qty?: number;
    Rej_Qty?: number;
    Work_Order_Sr_No?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type WorkOrderDetailsUpdateFormValidationValues = {
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
    Prod_Qty?: ValidationFunction<number>;
    Out_Qty?: ValidationFunction<number>;
    Bal_Qty?: ValidationFunction<number>;
    Rej_Qty?: ValidationFunction<number>;
    Work_Order_Sr_No?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkOrderDetailsUpdateFormOverridesProps = {
    WorkOrderDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    Prod_Qty?: PrimitiveOverrideProps<TextFieldProps>;
    Out_Qty?: PrimitiveOverrideProps<TextFieldProps>;
    Bal_Qty?: PrimitiveOverrideProps<TextFieldProps>;
    Rej_Qty?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Order_Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WorkOrderDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkOrderDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workOrderDetails?: WorkOrderDetails;
    onSubmit?: (fields: WorkOrderDetailsUpdateFormInputValues) => WorkOrderDetailsUpdateFormInputValues;
    onSuccess?: (fields: WorkOrderDetailsUpdateFormInputValues) => void;
    onError?: (fields: WorkOrderDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkOrderDetailsUpdateFormInputValues) => WorkOrderDetailsUpdateFormInputValues;
    onValidate?: WorkOrderDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkOrderDetailsUpdateForm(props: WorkOrderDetailsUpdateFormProps): React.ReactElement;
