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
export declare type OperationMasterCreateFormInputValues = {
    ID?: string;
    Workstation?: string;
    Opn_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type OperationMasterCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Workstation?: ValidationFunction<string>;
    Opn_Name?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OperationMasterCreateFormOverridesProps = {
    OperationMasterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Workstation?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OperationMasterCreateFormProps = React.PropsWithChildren<{
    overrides?: OperationMasterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OperationMasterCreateFormInputValues) => OperationMasterCreateFormInputValues;
    onSuccess?: (fields: OperationMasterCreateFormInputValues) => void;
    onError?: (fields: OperationMasterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OperationMasterCreateFormInputValues) => OperationMasterCreateFormInputValues;
    onValidate?: OperationMasterCreateFormValidationValues;
} & React.CSSProperties>;
export default function OperationMasterCreateForm(props: OperationMasterCreateFormProps): React.ReactElement;
