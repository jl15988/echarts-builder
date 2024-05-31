import { TooltipComponentOption } from "../../typesecharts/dist/echarts";
export interface EchartsTooltipOption extends TooltipComponentOption {
    trigger?: "item" | "axis" | "none";
}
