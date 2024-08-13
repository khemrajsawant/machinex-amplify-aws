import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { GeneralWorkDetails } from "./graphql/types";
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
export declare type GeneralWorkDetailsUpdateFormInputValues = {
    ID?: string;
    Report_No?: string;
    Sr_No?: string;
    Misc_Work?: string;
    Hrs?: number;
    Remark?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type GeneralWorkDetailsUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Report_No?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    Misc_Work?: ValidationFunction<string>;
    Hrs?: ValidationFunction<number>;
    Remark?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeneralWorkDetailsUpdateFormOverridesProps = {
    GeneralWorkDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Report_No?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    Misc_Work?: PrimitiveOverrideProps<TextFieldProps>;
    Hrs?: PrimitiveOverrideProps<TextFieldProps>;
    Remark?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GeneralWorkDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: GeneralWorkDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    generalWorkDetails?: GeneralWorkDetails;
    onSubmit?: (fields: GeneralWorkDetailsUpdateFormInputValues) => GeneralWorkDetailsUpdateFormInputValues;
    onSuccess?: (fields: GeneralWorkDetailsUpdateFormInputValues) => void;
    onError?: (fields: GeneralWorkDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeneralWorkDetailsUpdateFormInputValues) => GeneralWorkDetailsUpdateFormInputValues;
    onValidate?: GeneralWorkDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GeneralWorkDetailsUpdateForm(props: GeneralWorkDetailsUpdateFormProps): React.ReactElement;
