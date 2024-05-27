import { XAXisComponentOption, YAXisComponentOption } from "echarts";
import { OrdinalRawValue, TextCommonOption } from "echarts/types/src/util/types";
export interface EchartsAxisDataOption {
    value: OrdinalRawValue;
    textStyle?: TextCommonOption;
}
export type EchartsXAxisOption = XAXisComponentOption;
export type EchartsYAxisOption = YAXisComponentOption;
export declare enum EchartsAxisType {
    VALUE = "value",
    CATEGORY = "category",
    TIME = "time",
    LOG = "log"
}
