import { ToolboxComponentOption } from "../../typesecharts/dist/echarts";
export interface EchartsToolboxOption extends ToolboxComponentOption {
}
export type FeatureType = "saveAsImage" | "restore" | "dataView" | "dataZoom" | "brush" | ("line" | "bar" | "stack")[];
