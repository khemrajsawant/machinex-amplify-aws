import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { WorkOrder } from "./graphql/types";
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
export declare type WorkOrderUpdateFormInputValues = {
    ID?: string;
    Order_No?: string;
    PO_Ref?: string;
    Date?: string;
    Account_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type WorkOrderUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Order_No?: ValidationFunction<string>;
    PO_Ref?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Account_Name?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkOrderUpdateFormOverridesProps = {
    WorkOrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Order_No?: PrimitiveOverrideProps<TextFieldProps>;
    PO_Ref?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Account_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WorkOrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkOrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workOrder?: WorkOrder;
    onSubmit?: (fields: WorkOrderUpdateFormInputValues) => WorkOrderUpdateFormInputValues;
    onSuccess?: (fields: WorkOrderUpdateFormInputValues) => void;
    onError?: (fields: WorkOrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkOrderUpdateFormInputValues) => WorkOrderUpdateFormInputValues;
    onValidate?: WorkOrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkOrderUpdateForm(props: WorkOrderUpdateFormProps): React.ReactElement;
