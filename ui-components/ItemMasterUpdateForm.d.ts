import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ItemMaster } from "./graphql/types";
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
export declare type ItemMasterUpdateFormInputValues = {
    ID?: string;
    Drawing_float?: string;
    Description?: string;
    Size?: string;
    Item_Group?: string;
    UOM?: string;
    Item_Material?: string;
    Rough_Weight?: number;
    Finish_Weight?: number;
    Scrap_Value?: number;
    Material_Handling_Charges?: number;
    timeStamp?: string;
    isServer?: boolean;
    isNew?: boolean;
    isModified?: boolean;
    isDeleted?: boolean;
};
export declare type ItemMasterUpdateFormValidationValues = {
    ID?: ValidationFunction<string>;
    Drawing_float?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Size?: ValidationFunction<string>;
    Item_Group?: ValidationFunction<string>;
    UOM?: ValidationFunction<string>;
    Item_Material?: ValidationFunction<string>;
    Rough_Weight?: ValidationFunction<number>;
    Finish_Weight?: ValidationFunction<number>;
    Scrap_Value?: ValidationFunction<number>;
    Material_Handling_Charges?: ValidationFunction<number>;
    timeStamp?: ValidationFunction<string>;
    isServer?: ValidationFunction<boolean>;
    isNew?: ValidationFunction<boolean>;
    isModified?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemMasterUpdateFormOverridesProps = {
    ItemMasterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    Drawing_float?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Size?: PrimitiveOverrideProps<TextFieldProps>;
    Item_Group?: PrimitiveOverrideProps<TextFieldProps>;
    UOM?: PrimitiveOverrideProps<TextFieldProps>;
    Item_Material?: PrimitiveOverrideProps<TextFieldProps>;
    Rough_Weight?: PrimitiveOverrideProps<TextFieldProps>;
    Finish_Weight?: PrimitiveOverrideProps<TextFieldProps>;
    Scrap_Value?: PrimitiveOverrideProps<TextFieldProps>;
    Material_Handling_Charges?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    isServer?: PrimitiveOverrideProps<SwitchFieldProps>;
    isNew?: PrimitiveOverrideProps<SwitchFieldProps>;
    isModified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ItemMasterUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItemMasterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    itemMaster?: ItemMaster;
    onSubmit?: (fields: ItemMasterUpdateFormInputValues) => ItemMasterUpdateFormInputValues;
    onSuccess?: (fields: ItemMasterUpdateFormInputValues) => void;
    onError?: (fields: ItemMasterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemMasterUpdateFormInputValues) => ItemMasterUpdateFormInputValues;
    onValidate?: ItemMasterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItemMasterUpdateForm(props: ItemMasterUpdateFormProps): React.ReactElement;
