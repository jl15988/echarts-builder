import {EchartsTitleOption} from "./options/title";
import {EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption} from "./options/axis";
import {EchartsLegendOption} from "./options/legend";
import EchartsBuild from "./EchartsBuild";
import {EchartsTooltipOption} from "./options/tooltip";

/**
 * 默认配置项
 */
export class EchartsDefaultOption {
    title: EchartsTitleOption = {
        left: "center"
    }
    legend: EchartsLegendOption = {}
    xAxis: EchartsXAxisOption = {
        type: EchartsAxisType.CATEGORY
    }
    yAxis: EchartsYAxisOption = {
        type: EchartsAxisType.VALUE
    }
    tooltip: EchartsTooltipOption = {
        trigger: "item"
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

    defaultTitle(option: EchartsTitleOption) {
        Object.assign(this.defaultOption.title, option)
    }

    defaultXAxis(option: EchartsXAxisOption) {
        Object.assign(this.defaultOption.xAxis, option)
    }

    defaultYAxis(option: EchartsYAxisOption) {
        Object.assign(this.defaultOption.yAxis, option)
    }

    defaultTooltip(option: EchartsTooltipOption) {
        Object.assign(this.defaultOption.tooltip, option)
    }

}

const echartsBuilder = new EchartsBuilder()

export default echartsBuilder
