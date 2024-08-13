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
export declare type WorkstationMasterCreateFormInputValues = {
    ID?: string;
    Workstation?: string;
    Per_Hrs_Rate?: number;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type WorkstationMasterCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Workstation?: ValidationFunction<string>;
    Per_Hrs_Rate?: ValidationFunction<number>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkstationMasterCreateFormOverridesProps = {
    WorkstationMasterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Workstation?: PrimitiveOverrideProps<TextFieldProps>;
    Per_Hrs_Rate?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WorkstationMasterCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkstationMasterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkstationMasterCreateFormInputValues) => WorkstationMasterCreateFormInputValues;
    onSuccess?: (fields: WorkstationMasterCreateFormInputValues) => void;
    onError?: (fields: WorkstationMasterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkstationMasterCreateFormInputValues) => WorkstationMasterCreateFormInputValues;
    onValidate?: WorkstationMasterCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkstationMasterCreateForm(props: WorkstationMasterCreateFormProps): React.ReactElement;
