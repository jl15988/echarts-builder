import {EchartsTitleOption} from "./options/title";
import {EchartsXAxisOption, EchartsYAxisOption} from "./options/axis";
import {EchartsLegendOption} from "./options/legend";
import EchartsBuild from "./EchartsBuild";
import {EchartsTooltipOption} from "./options/tooltip";
import {EchartsGridOption} from "./options/grid";
import {EchartsToolboxOption} from "./options/toolbox";
import {EchartsRadarOption} from "./options/radar";
import ObjectUtil from "./utils/ObjectUtil";
import {SeriesOption} from "echarts/types/dist/echarts";
import {ZRColor} from "echarts/types/dist/shared";
import {EchartsVisualMapOption} from "./options/visualMap";

export interface IEchartsAssign {
    title?: EchartsTitleOption
    legend?: EchartsLegendOption
    grid?: EchartsGridOption
    xAxis?: EchartsXAxisOption
    yAxis?: EchartsYAxisOption
    radar?: EchartsRadarOption
    visualMap?: EchartsVisualMapOption
    tooltip?: EchartsTooltipOption
    toolbox?: EchartsToolboxOption
    series?: SeriesOption
    seriesList?: SeriesOption[]
    color?: ZRColor | ZRColor[]
}

/**
 * 默认配置项
 */
export class EchartsDefaultOption implements IEchartsAssign {
    title: EchartsTitleOption
    legend: EchartsLegendOption
    grid: EchartsGridOption
    xAxis: EchartsXAxisOption
    yAxis: EchartsYAxisOption
    radar: EchartsRadarOption
    visualMap: EchartsVisualMapOption
    tooltip: EchartsTooltipOption
    toolbox: EchartsToolboxOption
    series: SeriesOption
    seriesList: SeriesOption[]
    color: ZRColor | ZRColor[]

    getDefaultOption() {
        const result = {};
        const keys: (keyof EchartsDefaultOption)[] = ["title", "legend", "grid", "xAxis", "yAxis", "radar", "tooltip", "toolbox", "series", "color"];
        for (let key of keys) {
            if (this[key]) {
                // @ts-ignore
                ObjectUtil.deepAssignByKey(result, key, this[key])
            }
            if (echartsBuilder.defaultOption[key]) {
                // @ts-ignore
                ObjectUtil.deepAssignByKey(result, key, echartsBuilder.defaultOption[key])
            }
        }
        return result
    }
}

/**
 * echarts 构建器
 */
class EchartsBuilder {

    readonly defaultOption = new EchartsDefaultOption()

    builder(id: string): EchartsBuild;
    builder(element: HTMLElement): EchartsBuild;

    builder(element: string | HTMLElement | null) {
        return new EchartsBuild(element);
    }

    // 默认标题组件配置
    defaultTitle(option: EchartsTitleOption) {
        ObjectUtil.deepAssignByKey(this.defaultOption, "title", option)
    }

    // 默认网格配置
    defaultGrid(option: EchartsGridOption) {
        ObjectUtil.deepAssignByKey(this.defaultOption, "grid", option)
    }

    // 默认x轴配置
    defaultXAxis(option: EchartsXAxisOption) {
        ObjectUtil.deepAssignByKey(this.defaultOption, "xAxis", option)
    }

    // 默认y轴配置
    defaultYAxis(option: EchartsYAxisOption) {
        ObjectUtil.deepAssignByKey(this.defaultOption, "yAxis", option)
    }

    // 默认提示框配置
    defaultTooltip(option: EchartsTooltipOption) {
        ObjectUtil.deepAssignByKey(this.defaultOption, "tooltip", option)
    }

    // 默认图表配置
    defaultSeries(option: SeriesOption) {
        ObjectUtil.deepAssignByKey(this.defaultOption, "series", option)
    }

    // 默认调色盘颜色列表
    defaultColor(colors: ZRColor | ZRColor[]) {
        this.defaultOption.color = colors;
    }

}

const echartsBuilder = new EchartsBuilder()

export default echartsBuilder
