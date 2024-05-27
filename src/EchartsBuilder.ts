import {EchartsTitleOption} from "./options/title";
import {EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption} from "./options/axis";
import {EchartsLegendOption} from "./options/legend";
import EchartsBuild from "./EchartsBuild";
import {EchartsTooltipOption} from "./options/tooltip";
import {EchartsSeriesOption} from "./options/series";
import {EchartsGridOption} from "./options/grid";

/**
 * 默认配置项
 */
export class EchartsDefaultOption {
    title: EchartsTitleOption = {
        left: "center"
    }
    legend: EchartsLegendOption = {}
    grid: EchartsGridOption = {}
    xAxis: EchartsXAxisOption = {
        type: EchartsAxisType.CATEGORY
    }
    yAxis: EchartsYAxisOption = {
        type: EchartsAxisType.VALUE
    }
    tooltip: EchartsTooltipOption = {
        trigger: "item"
    }
    series: EchartsSeriesOption = {}
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
        Object.assign(this.defaultOption.title, option)
    }

    // 默认x轴配置
    defaultXAxis(option: EchartsXAxisOption) {
        Object.assign(this.defaultOption.xAxis, option)
    }

    // 默认y轴配置
    defaultYAxis(option: EchartsYAxisOption) {
        Object.assign(this.defaultOption.yAxis, option)
    }

    // 默认提示框配置
    defaultTooltip(option: EchartsTooltipOption) {
        Object.assign(this.defaultOption.tooltip, option)
    }

    defaultSeries(option: EchartsSeriesOption) {
        Object.assign(this.defaultOption.series, option)
    }

}

const echartsBuilder = new EchartsBuilder()

export default echartsBuilder
