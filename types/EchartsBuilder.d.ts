import { EchartsTitleOption } from "./options/title";
import { EchartsXAxisOption, EchartsYAxisOption } from "./options/axis";
import { EchartsLegendOption } from "./options/legend";
import EchartsBuild from "./EchartsBuild";
import { EchartsTooltipOption } from "./options/tooltip";
import { EchartsGridOption } from "./options/grid";
import { EchartsToolboxOption } from "./options/toolbox";
import { EchartsRadarOption } from "./options/radar";
import { SeriesOption } from "echarts";
import { ZRColor } from "echarts/types/dist/shared";
/**
 * 默认配置项
 */
export declare class EchartsDefaultOption {
    title: EchartsTitleOption;
    legend: EchartsLegendOption;
    grid: EchartsGridOption;
    xAxis: EchartsXAxisOption;
    yAxis: EchartsYAxisOption;
    radar: EchartsRadarOption;
    tooltip: EchartsTooltipOption;
    toolbox: EchartsToolboxOption;
    series: SeriesOption;
    seriesList: SeriesOption[];
    color: ZRColor | ZRColor[];
    getDefaultOption(): {
        title: EchartsTitleOption;
        legend: EchartsLegendOption;
        grid: EchartsGridOption;
        xAxis: {} & import("echarts").XAXisComponentOption;
        yAxis: {} & import("echarts").YAXisComponentOption;
        radar: EchartsRadarOption;
        tooltip: EchartsTooltipOption;
        toolbox: EchartsToolboxOption;
        series: any[];
        color: ZRColor | ZRColor[];
    };
}
/**
 * echarts 构建器
 */
declare class EchartsBuilder {
    readonly defaultOption: EchartsDefaultOption;
    builder(id: string): EchartsBuild;
    builder(element: HTMLElement): EchartsBuild;
    defaultTitle(option: EchartsTitleOption): void;
    defaultGrid(option: EchartsGridOption): void;
    defaultXAxis(option: EchartsXAxisOption): void;
    defaultYAxis(option: EchartsYAxisOption): void;
    defaultTooltip(option: EchartsTooltipOption): void;
    defaultSeries(option: SeriesOption): void;
    defaultColor(colors: ZRColor | ZRColor[]): void;
}
declare const echartsBuilder: EchartsBuilder;
export default echartsBuilder;
