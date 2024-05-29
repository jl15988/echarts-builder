import { TooltipComponentOption } from "../../types/echartsTypes/dist/echarts";
export interface EchartsTooltipOption extends TooltipComponentOption {
    trigger?: "item" | "axis" | "none";
}
