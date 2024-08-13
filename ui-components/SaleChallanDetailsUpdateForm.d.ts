import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SaleChallanDetails } from "./graphql/types";
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
export declare type SaleChallanDetailsUpdateFormInputValues = {
    ID?: string;
    Challan_No?: string;
    Challan_Sr_No?: string;
    Work_Order_No?: string;
    Work_Order_Sr_No?: string;
    PO_Ref?: string;
    Drawing_float?: string;
    Quantity?: number;
    Rate?: number;
    Remark?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type SaleChallanDetailsUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Challan_No?: ValidationFunction<string>;
    Challan_Sr_No?: ValidationFunction<string>;
    Work_Order_No?: ValidationFunction<string>;
    Work_Order_Sr_No?: ValidationFunction<string>;
    PO_Ref?: ValidationFunction<string>;
    Drawing_float?: ValidationFunction<string>;
    Quantity?: ValidationFunction<number>;
    Rate?: ValidationFunction<number>;
    Remark?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaleChallanDetailsUpdateFormOverridesProps = {
    SaleChallanDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Challan_No?: PrimitiveOverrideProps<TextFieldProps>;
    Challan_Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Order_No?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Order_Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    PO_Ref?: PrimitiveOverrideProps<TextFieldProps>;
    Drawing_float?: PrimitiveOverrideProps<TextFieldProps>;
    Quantity?: PrimitiveOverrideProps<TextFieldProps>;
    Rate?: PrimitiveOverrideProps<TextFieldProps>;
    Remark?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SaleChallanDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SaleChallanDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    saleChallanDetails?: SaleChallanDetails;
    onSubmit?: (fields: SaleChallanDetailsUpdateFormInputValues) => SaleChallanDetailsUpdateFormInputValues;
    onSuccess?: (fields: SaleChallanDetailsUpdateFormInputValues) => void;
    onError?: (fields: SaleChallanDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SaleChallanDetailsUpdateFormInputValues) => SaleChallanDetailsUpdateFormInputValues;
    onValidate?: SaleChallanDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SaleChallanDetailsUpdateForm(props: SaleChallanDetailsUpdateFormProps): React.ReactElement;
