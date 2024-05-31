import { TextCommonOption } from "../../typesecharts/src/util/types";
import { XAXisComponentOption, YAXisComponentOption } from "../../typesecharts/dist/echarts";
export interface EchartsAxisDataOption {
    value: string | number;
    textStyle?: TextCommonOption;
}
export type EchartsXAxisOption = XAXisComponentOption;
export type EchartsYAxisOption = YAXisComponentOption;
export type AxisType = "value" | "category" | "time" | "log";
export declare enum EchartsAxisType {
    VALUE = "value",
    CATEGORY = "category",
    TIME = "time",
    LOG = "log"
}
