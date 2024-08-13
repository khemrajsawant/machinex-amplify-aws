import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { GeneralWorkList } from "./graphql/types";
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
export declare type GeneralWorkListUpdateFormInputValues = {
    ID?: string;
    Sr_No?: string;
    General_Work?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type GeneralWorkListUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Sr_No?: ValidationFunction<string>;
    General_Work?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeneralWorkListUpdateFormOverridesProps = {
    GeneralWorkListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    General_Work?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GeneralWorkListUpdateFormProps = React.PropsWithChildren<{
    overrides?: GeneralWorkListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    generalWorkList?: GeneralWorkList;
    onSubmit?: (fields: GeneralWorkListUpdateFormInputValues) => GeneralWorkListUpdateFormInputValues;
    onSuccess?: (fields: GeneralWorkListUpdateFormInputValues) => void;
    onError?: (fields: GeneralWorkListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeneralWorkListUpdateFormInputValues) => GeneralWorkListUpdateFormInputValues;
    onValidate?: GeneralWorkListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GeneralWorkListUpdateForm(props: GeneralWorkListUpdateFormProps): React.ReactElement;
