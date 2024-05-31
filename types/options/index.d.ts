import { EchartsTitleOption } from "./title";
import { EchartsXAxisOption, EchartsYAxisOption } from "./axis";
import { EchartsLegendOption } from "./legend";
import { EchartsTooltipOption } from "./tooltip";
import { EchartsGridOption } from "./grid";
import { EchartsToolboxOption } from "./toolbox";
import { EchartsRadarOption } from "./radar";
import { SeriesOption } from "../../echartsTypes/dist/echarts";
import { ZRColor } from "../../echartsTypes/dist/shared";
import { EchartsVisualMapOption } from "./visualMap";
export interface EchartsOption {
    title?: EchartsTitleOption;
    legend?: EchartsLegendOption;
    grid?: EchartsGridOption;
    xAxis?: EchartsXAxisOption;
    yAxis?: EchartsYAxisOption;
    radar?: EchartsRadarOption;
    visualMap?: EchartsVisualMapOption[];
    tooltip?: EchartsTooltipOption;
    toolbox?: EchartsToolboxOption;
    series?: SeriesOption[];
    color?: ZRColor | ZRColor[];
}
export declare class EchartsComponentBaseOption {
    zlevel?: number;
    z?: number;
}
