import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RejectionReport } from "./graphql/types";
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
export declare type RejectionReportUpdateFormInputValues = {
    ID?: string;
    Report_No?: string;
    Date?: string;
    Account_Name?: string;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type RejectionReportUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Report_No?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Account_Name?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RejectionReportUpdateFormOverridesProps = {
    RejectionReportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Report_No?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Account_Name?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type RejectionReportUpdateFormProps = React.PropsWithChildren<{
    overrides?: RejectionReportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rejectionReport?: RejectionReport;
    onSubmit?: (fields: RejectionReportUpdateFormInputValues) => RejectionReportUpdateFormInputValues;
    onSuccess?: (fields: RejectionReportUpdateFormInputValues) => void;
    onError?: (fields: RejectionReportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RejectionReportUpdateFormInputValues) => RejectionReportUpdateFormInputValues;
    onValidate?: RejectionReportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RejectionReportUpdateForm(props: RejectionReportUpdateFormProps): React.ReactElement;
