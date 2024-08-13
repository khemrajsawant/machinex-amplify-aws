import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DailyWorkReport } from "./graphql/types";
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
export declare type DailyWorkReportUpdateFormInputValues = {
    ID?: string;
    Report_No?: string;
    Worker_No?: string;
    Date?: string;
    Check_In?: string;
    Check_Out?: string;
    Approval?: boolean;
    Break_In_Hours?: number;
    timeStamp?: string;
    Month?: string;
    Year?: string;
    Work_Hours?: number;
    OverTime_Hours?: number;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type DailyWorkReportUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Report_No?: ValidationFunction<string>;
    Worker_No?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Check_In?: ValidationFunction<string>;
    Check_Out?: ValidationFunction<string>;
    Approval?: ValidationFunction<boolean>;
    Break_In_Hours?: ValidationFunction<number>;
    timeStamp?: ValidationFunction<string>;
    Month?: ValidationFunction<string>;
    Year?: ValidationFunction<string>;
    Work_Hours?: ValidationFunction<number>;
    OverTime_Hours?: ValidationFunction<number>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DailyWorkReportUpdateFormOverridesProps = {
    DailyWorkReportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Report_No?: PrimitiveOverrideProps<TextFieldProps>;
    Worker_No?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Check_In?: PrimitiveOverrideProps<TextFieldProps>;
    Check_Out?: PrimitiveOverrideProps<TextFieldProps>;
    Approval?: PrimitiveOverrideProps<SwitchFieldProps>;
    Break_In_Hours?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    Month?: PrimitiveOverrideProps<TextFieldProps>;
    Year?: PrimitiveOverrideProps<TextFieldProps>;
    Work_Hours?: PrimitiveOverrideProps<TextFieldProps>;
    OverTime_Hours?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DailyWorkReportUpdateFormProps = React.PropsWithChildren<{
    overrides?: DailyWorkReportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dailyWorkReport?: DailyWorkReport;
    onSubmit?: (fields: DailyWorkReportUpdateFormInputValues) => DailyWorkReportUpdateFormInputValues;
    onSuccess?: (fields: DailyWorkReportUpdateFormInputValues) => void;
    onError?: (fields: DailyWorkReportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DailyWorkReportUpdateFormInputValues) => DailyWorkReportUpdateFormInputValues;
    onValidate?: DailyWorkReportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DailyWorkReportUpdateForm(props: DailyWorkReportUpdateFormProps): React.ReactElement;
