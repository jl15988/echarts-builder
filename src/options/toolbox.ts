import {ToolboxComponentOption} from "../../echartsTypes/dist/echarts";

export interface EchartsToolboxOption extends ToolboxComponentOption {

}

export type FeatureType = "saveAsImage" | "restore" | "dataView" | "dataZoom" | "brush" | ("line" | "bar" | "stack")[]
