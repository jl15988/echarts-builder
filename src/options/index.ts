import {EchartsTitleOption} from "./title";
import {EchartsXAxisOption, EchartsYAxisOption} from "./axis";
import {EchartsSeriesOption} from "./series";
import {EchartsLegendOption} from "./legend";
import {EchartsTooltipOption} from "./tooltip";

export interface EchartsOption {
    title: EchartsTitleOption
    legend: EchartsLegendOption
    xAxis: EchartsXAxisOption
    yAxis: EchartsYAxisOption
    series: EchartsSeriesOption[]
    tooltip: EchartsTooltipOption
}


export class EchartsComponentBaseOption {
    // 所有图形的 zlevel 值，用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
    zlevel?: number
    // 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖，比zlevel优先级更低，而且不会创建新的 Canvas
    z?: number
}


export class EchartsPositionOption {
    // 组件离容器左侧的距离，像素值或百分比
    left?: "left" | "center" | "right" | string | number
    // 组件离容器上侧的距离，像素值或百分比
    top?: "top" | "middle" | "bottom" | string | number
    // 组件离容器右侧的距离，像素值或百分比
    right?: "auto" | string | number
    // 组件离容器下侧的距离，像素值或百分比
    bottom?: "auto" | string | number
}
