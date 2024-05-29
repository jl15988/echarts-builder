import { TextCommonOption } from "../../types/echartsTypes/src/util/types";
import { XAXisComponentOption, YAXisComponentOption } from "../../types/echartsTypes/dist/echarts";
export interface EchartsAxisDataOption {
    value: string | number;
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
