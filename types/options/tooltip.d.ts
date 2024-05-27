import { TooltipComponentOption } from "echarts";
export interface EchartsTooltipOption extends TooltipComponentOption {
    trigger?: "item" | "axis" | "none";
}
