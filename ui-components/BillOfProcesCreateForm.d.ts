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
export declare type BillOfProcesCreateFormInputValues = {
    ID?: string;
    Drawing_float?: string;
    Operation_float?: string;
    Workstation?: string;
    Opn_Name?: string;
    Operation_Description?: string;
    Time_Min?: number;
    Cost?: number;
    Is_Scrap_Applicable?: boolean;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type BillOfProcesCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Drawing_float?: ValidationFunction<string>;
    Operation_float?: ValidationFunction<string>;
    Workstation?: ValidationFunction<string>;
    Opn_Name?: ValidationFunction<string>;
    Operation_Description?: ValidationFunction<string>;
    Time_Min?: ValidationFunction<number>;
    Cost?: ValidationFunction<number>;
    Is_Scrap_Applicable?: ValidationFunction<boolean>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BillOfProcesCreateFormOverridesProps = {
    BillOfProcesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Drawing_float?: PrimitiveOverrideProps<TextFieldProps>;
    Operation_float?: PrimitiveOverrideProps<TextFieldProps>;
    Workstation?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Operation_Description?: PrimitiveOverrideProps<TextFieldProps>;
    Time_Min?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Is_Scrap_Applicable?: PrimitiveOverrideProps<SwitchFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BillOfProcesCreateFormProps = React.PropsWithChildren<{
    overrides?: BillOfProcesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BillOfProcesCreateFormInputValues) => BillOfProcesCreateFormInputValues;
    onSuccess?: (fields: BillOfProcesCreateFormInputValues) => void;
    onError?: (fields: BillOfProcesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BillOfProcesCreateFormInputValues) => BillOfProcesCreateFormInputValues;
    onValidate?: BillOfProcesCreateFormValidationValues;
} & React.CSSProperties>;
export default function BillOfProcesCreateForm(props: BillOfProcesCreateFormProps): React.ReactElement;
