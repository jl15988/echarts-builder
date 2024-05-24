import { EchartsTitleOption } from "./title";
import { EchartsXAxisOption, EchartsYAxisOption } from "./axis";
import { EchartsSeriesOption } from "./series";
import { EchartsLegendOption } from "./legend";
import { EchartsTooltipOption } from "./tooltip";
export interface EchartsOption {
    title: EchartsTitleOption;
    legend: EchartsLegendOption;
    xAxis: EchartsXAxisOption;
    yAxis: EchartsYAxisOption;
    series: EchartsSeriesOption[];
    tooltip: EchartsTooltipOption;
}
export declare class EchartsComponentBaseOption {
    zlevel?: number;
    z?: number;
}
export declare class EchartsPositionOption {
    left?: "left" | "center" | "right" | string | number;
    top?: "top" | "middle" | "bottom" | string | number;
    right?: "auto" | string | number;
    bottom?: "auto" | string | number;
}
