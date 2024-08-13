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
export declare type CompanyInformationCreateFormInputValues = {
    ID?: string;
    Name?: string;
    Address?: string;
    Pin_Code?: string;
    State?: string;
    Country?: string;
    Mobile?: string;
    Email?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type CompanyInformationCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Pin_Code?: ValidationFunction<string>;
    State?: ValidationFunction<string>;
    Country?: ValidationFunction<string>;
    Mobile?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyInformationCreateFormOverridesProps = {
    CompanyInformationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Pin_Code?: PrimitiveOverrideProps<TextFieldProps>;
    State?: PrimitiveOverrideProps<TextFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
    Mobile?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CompanyInformationCreateFormProps = React.PropsWithChildren<{
    overrides?: CompanyInformationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyInformationCreateFormInputValues) => CompanyInformationCreateFormInputValues;
    onSuccess?: (fields: CompanyInformationCreateFormInputValues) => void;
    onError?: (fields: CompanyInformationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyInformationCreateFormInputValues) => CompanyInformationCreateFormInputValues;
    onValidate?: CompanyInformationCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyInformationCreateForm(props: CompanyInformationCreateFormProps): React.ReactElement;
