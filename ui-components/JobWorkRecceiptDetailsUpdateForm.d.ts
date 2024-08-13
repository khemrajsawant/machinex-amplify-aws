import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { JobWorkRecceiptDetails } from "./graphql/types";
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
export declare type JobWorkRecceiptDetailsUpdateFormInputValues = {
    ID?: string;
    Inword_No?: string;
    JWI_Sr_No?: string;
    JWO_No?: string;
    PO_Ref?: string;
    Work_Details?: string;
    Quantity?: number;
    Rate?: number;
    Total_Cost?: number;
    Remark?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type JobWorkRecceiptDetailsUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Inword_No?: ValidationFunction<string>;
    JWI_Sr_No?: ValidationFunction<string>;
    JWO_No?: ValidationFunction<string>;
    PO_Ref?: ValidationFunction<string>;
    Work_Details?: ValidationFunction<string>;
    Quantity?: ValidationFunction<number>;
    Rate?: ValidationFunction<number>;
    Total_Cost?: ValidationFunction<number>;
    Remark?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobWorkRecceiptDetailsUpdateFormOverridesProps = {
    JobWorkRecceiptDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Inword_No?: PrimitiveOverrideProps<TextFieldProps>;
    JWI_Sr_No?: PrimitiveOverrideProps<TextFieldProps>;
    JWO_No?: PrimitiveOverrideProps<TextFieldProps>;
    PO_Ref?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Details?: PrimitiveOverrideProps<TextFieldProps>;
    Quantity?: PrimitiveOverrideProps<TextFieldProps>;
    Rate?: PrimitiveOverrideProps<TextFieldProps>;
    Total_Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Remark?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobWorkRecceiptDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobWorkRecceiptDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobWorkRecceiptDetails?: JobWorkRecceiptDetails;
    onSubmit?: (fields: JobWorkRecceiptDetailsUpdateFormInputValues) => JobWorkRecceiptDetailsUpdateFormInputValues;
    onSuccess?: (fields: JobWorkRecceiptDetailsUpdateFormInputValues) => void;
    onError?: (fields: JobWorkRecceiptDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobWorkRecceiptDetailsUpdateFormInputValues) => JobWorkRecceiptDetailsUpdateFormInputValues;
    onValidate?: JobWorkRecceiptDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobWorkRecceiptDetailsUpdateForm(props: JobWorkRecceiptDetailsUpdateFormProps): React.ReactElement;
