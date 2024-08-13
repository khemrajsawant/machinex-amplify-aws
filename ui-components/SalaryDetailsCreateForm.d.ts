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
export declare type SalaryDetailsCreateFormInputValues = {
    ID?: string;
    Emp_ID?: string;
    From_Date?: string;
    Designation?: string;
    Salary_Per_Day?: number;
    Overtime_Ratio?: number;
    Earning_Ratio?: number;
    Incentive_Ratio?: number;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type SalaryDetailsCreateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Emp_ID?: ValidationFunction<string>;
    From_Date?: ValidationFunction<string>;
    Designation?: ValidationFunction<string>;
    Salary_Per_Day?: ValidationFunction<number>;
    Overtime_Ratio?: ValidationFunction<number>;
    Earning_Ratio?: ValidationFunction<number>;
    Incentive_Ratio?: ValidationFunction<number>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SalaryDetailsCreateFormOverridesProps = {
    SalaryDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Emp_ID?: PrimitiveOverrideProps<TextFieldProps>;
    From_Date?: PrimitiveOverrideProps<TextFieldProps>;
    Designation?: PrimitiveOverrideProps<TextFieldProps>;
    Salary_Per_Day?: PrimitiveOverrideProps<TextFieldProps>;
    Overtime_Ratio?: PrimitiveOverrideProps<TextFieldProps>;
    Earning_Ratio?: PrimitiveOverrideProps<TextFieldProps>;
    Incentive_Ratio?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SalaryDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: SalaryDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SalaryDetailsCreateFormInputValues) => SalaryDetailsCreateFormInputValues;
    onSuccess?: (fields: SalaryDetailsCreateFormInputValues) => void;
    onError?: (fields: SalaryDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SalaryDetailsCreateFormInputValues) => SalaryDetailsCreateFormInputValues;
    onValidate?: SalaryDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SalaryDetailsCreateForm(props: SalaryDetailsCreateFormProps): React.ReactElement;
