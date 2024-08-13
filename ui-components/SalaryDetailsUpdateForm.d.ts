import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SalaryDetails } from "./graphql/types";
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
export declare type SalaryDetailsUpdateFormInputValues = {
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
export declare type SalaryDetailsUpdateFormValidationValues = {
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
export declare type SalaryDetailsUpdateFormOverridesProps = {
    SalaryDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type SalaryDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SalaryDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    salaryDetails?: SalaryDetails;
    onSubmit?: (fields: SalaryDetailsUpdateFormInputValues) => SalaryDetailsUpdateFormInputValues;
    onSuccess?: (fields: SalaryDetailsUpdateFormInputValues) => void;
    onError?: (fields: SalaryDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SalaryDetailsUpdateFormInputValues) => SalaryDetailsUpdateFormInputValues;
    onValidate?: SalaryDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SalaryDetailsUpdateForm(props: SalaryDetailsUpdateFormProps): React.ReactElement;
