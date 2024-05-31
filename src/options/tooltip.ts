import {TooltipComponentOption} from "../../typesecharts/dist/echarts";

// 提示框组件
export interface EchartsTooltipOption extends TooltipComponentOption {
    // 触发类型
    trigger?: "item" | "axis" | "none"
}
