import { EchartsTitleOption } from "./options/title";
import { EchartsXAxisOption, EchartsYAxisOption } from "./options/axis";
import { EchartsLegendOption } from "./options/legend";
import EchartsBuild from "./EchartsBuild";
import { EchartsTooltipOption } from "./options/tooltip";
/**
 * 默认配置项
 */
export declare class EchartsDefaultOption {
    title: EchartsTitleOption;
    legend: EchartsLegendOption;
    xAxis: EchartsXAxisOption;
    yAxis: EchartsYAxisOption;
    tooltip: EchartsTooltipOption;
}
/**
 * echarts 构建器
 */
declare class EchartsBuilder {
    readonly defaultOption: EchartsDefaultOption;
    builder(id: string): EchartsBuild;
    builder(element: HTMLElement): EchartsBuild;
    defaultTitle(option: EchartsTitleOption): void;
    defaultXAxis(option: EchartsXAxisOption): void;
    defaultYAxis(option: EchartsYAxisOption): void;
    defaultTooltip(option: EchartsTooltipOption): void;
}
declare const echartsBuilder: EchartsBuilder;
export default echartsBuilder;
