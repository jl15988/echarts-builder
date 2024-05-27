// 提示框组件
import {TooltipComponentOption} from "echarts";

export interface EchartsTooltipOption extends TooltipComponentOption {
    // 触发类型
    trigger?: "item" | "axis" | "none"
}
