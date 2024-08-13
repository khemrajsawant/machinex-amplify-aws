import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OperationMaster } from "./graphql/types";
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
export declare type OperationMasterUpdateFormInputValues = {
    ID?: string;
    Workstation?: string;
    Opn_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type OperationMasterUpdateFormValidationValues = {
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
export declare type OperationMasterUpdateFormOverridesProps = {
    OperationMasterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Workstation?: PrimitiveOverrideProps<TextFieldProps>;
    Opn_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OperationMasterUpdateFormProps = React.PropsWithChildren<{
    overrides?: OperationMasterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    operationMaster?: OperationMaster;
    onSubmit?: (fields: OperationMasterUpdateFormInputValues) => OperationMasterUpdateFormInputValues;
    onSuccess?: (fields: OperationMasterUpdateFormInputValues) => void;
    onError?: (fields: OperationMasterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OperationMasterUpdateFormInputValues) => OperationMasterUpdateFormInputValues;
    onValidate?: OperationMasterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OperationMasterUpdateForm(props: OperationMasterUpdateFormProps): React.ReactElement;
