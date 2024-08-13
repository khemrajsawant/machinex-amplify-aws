import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MachineMaster } from "./graphql/types";
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
export declare type MachineMasterUpdateFormInputValues = {
    ID?: string;
    Machine_float?: string;
    Machine_Name?: string;
    Machine_Specification?: string;
    Workstation?: string;
    Machine_Per_Hrs_Rate?: number;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type MachineMasterUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Machine_float?: ValidationFunction<string>;
    Machine_Name?: ValidationFunction<string>;
    Machine_Specification?: ValidationFunction<string>;
    Workstation?: ValidationFunction<string>;
    Machine_Per_Hrs_Rate?: ValidationFunction<number>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MachineMasterUpdateFormOverridesProps = {
    MachineMasterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Machine_float?: PrimitiveOverrideProps<TextFieldProps>;
    Machine_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Machine_Specification?: PrimitiveOverrideProps<TextFieldProps>;
    Workstation?: PrimitiveOverrideProps<TextFieldProps>;
    Machine_Per_Hrs_Rate?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type MachineMasterUpdateFormProps = React.PropsWithChildren<{
    overrides?: MachineMasterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    machineMaster?: MachineMaster;
    onSubmit?: (fields: MachineMasterUpdateFormInputValues) => MachineMasterUpdateFormInputValues;
    onSuccess?: (fields: MachineMasterUpdateFormInputValues) => void;
    onError?: (fields: MachineMasterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MachineMasterUpdateFormInputValues) => MachineMasterUpdateFormInputValues;
    onValidate?: MachineMasterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MachineMasterUpdateForm(props: MachineMasterUpdateFormProps): React.ReactElement;
