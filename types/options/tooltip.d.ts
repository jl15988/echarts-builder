import { TooltipComponentOption } from "../../echartsTypes/dist/echarts";
export interface EchartsTooltipOption extends TooltipComponentOption {
    trigger?: "item" | "axis" | "none";
}
