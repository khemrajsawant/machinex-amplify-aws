import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SaleChallan } from "./graphql/types";
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
export declare type SaleChallanUpdateFormInputValues = {
    ID?: string;
    Challan_No?: string;
    Date?: string;
    Account_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type SaleChallanUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Challan_No?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Account_Name?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaleChallanUpdateFormOverridesProps = {
    SaleChallanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Challan_No?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Account_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SaleChallanUpdateFormProps = React.PropsWithChildren<{
    overrides?: SaleChallanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    saleChallan?: SaleChallan;
    onSubmit?: (fields: SaleChallanUpdateFormInputValues) => SaleChallanUpdateFormInputValues;
    onSuccess?: (fields: SaleChallanUpdateFormInputValues) => void;
    onError?: (fields: SaleChallanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SaleChallanUpdateFormInputValues) => SaleChallanUpdateFormInputValues;
    onValidate?: SaleChallanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SaleChallanUpdateForm(props: SaleChallanUpdateFormProps): React.ReactElement;
