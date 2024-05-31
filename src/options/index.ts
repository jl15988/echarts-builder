import {EchartsTitleOption} from "./title";
import {EchartsXAxisOption, EchartsYAxisOption} from "./axis";
import {EchartsLegendOption} from "./legend";
import {EchartsTooltipOption} from "./tooltip";
import {EchartsGridOption} from "./grid";
import {EchartsToolboxOption} from "./toolbox";
import {EchartsRadarOption} from "./radar";
import {SeriesOption} from "../../echartsTypes/dist/echarts";
import {ZRColor} from "../../echartsTypes/dist/shared";
import {EchartsVisualMapOption} from "./visualMap";

export interface EchartsOption {
    title?: EchartsTitleOption
    legend?: EchartsLegendOption
    grid?: EchartsGridOption
    xAxis?: EchartsXAxisOption
    yAxis?: EchartsYAxisOption
    radar?: EchartsRadarOption
    visualMap?: EchartsVisualMapOption[]
    tooltip?: EchartsTooltipOption
    toolbox?: EchartsToolboxOption
    series?: SeriesOption[]
    color?: ZRColor | ZRColor[]
}


export class EchartsComponentBaseOption {
    // 所有图形的 zlevel 值，用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
    zlevel?: number
    // 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖，比zlevel优先级更低，而且不会创建新的 Canvas
    z?: number
}
