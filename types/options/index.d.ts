import { EchartsTitleOption } from "./title";
import { EchartsXAxisOption, EchartsYAxisOption } from "./axis";
import { EchartsLegendOption } from "./legend";
import { EchartsTooltipOption } from "./tooltip";
import { EchartsGridOption } from "./grid";
import { EchartsToolboxOption } from "./toolbox";
import { EchartsRadarOption } from "./radar";
import { SeriesOption } from "echarts";
import { ZRColor } from "echarts/types/dist/shared";
export interface EchartsOption {
    title: EchartsTitleOption;
    legend: EchartsLegendOption;
    grid: EchartsGridOption;
    xAxis: EchartsXAxisOption;
    yAxis: EchartsYAxisOption;
    radar: EchartsRadarOption;
    tooltip: EchartsTooltipOption;
    toolbox: EchartsToolboxOption;
    series: SeriesOption[];
    color: ZRColor | ZRColor[];
}
export declare class EchartsComponentBaseOption {
    zlevel?: number;
    z?: number;
}
