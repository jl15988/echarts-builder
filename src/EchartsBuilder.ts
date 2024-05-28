import {EchartsTitleOption} from "./options/title";
import {EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption} from "./options/axis";
import {EchartsLegendOption} from "./options/legend";
import EchartsBuild from "./EchartsBuild";
import {EchartsTooltipOption} from "./options/tooltip";
import {EchartsGridOption} from "./options/grid";
import {EchartsToolboxOption} from "./options/toolbox";
import {EchartsRadarOption} from "./options/radar";
import {SeriesOption} from "echarts";
import {ZRColor} from "echarts/types/dist/shared";
import ObjectUtil from "./utils/ObjectUtil";

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
    radar: EchartsRadarOption = {}
    tooltip: EchartsTooltipOption = {
        trigger: "item"
    }
    toolbox: EchartsToolboxOption = {}
    series: SeriesOption = {}
    seriesList: SeriesOption[] = []
    color: ZRColor | ZRColor[] = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']

    getDefaultOption() {
        return {
            title: Object.assign({}, echartsBuilder.defaultOption.title),
            legend: Object.assign({}, echartsBuilder.defaultOption.legend),
            grid: Object.assign({}, echartsBuilder.defaultOption.grid),
            xAxis: Object.assign({}, echartsBuilder.defaultOption.xAxis),
            yAxis: Object.assign({}, echartsBuilder.defaultOption.yAxis),
            radar: Object.assign({}, echartsBuilder.defaultOption.radar),
            tooltip: Object.assign({}, echartsBuilder.defaultOption.tooltip),
            toolbox: Object.assign({}, echartsBuilder.defaultOption.toolbox),
            series: [],
            color: echartsBuilder.defaultOption.color || ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
        }
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
        ObjectUtil.deepAssign(this.defaultOption.title, option)
    }

    // 默认网格配置
    defaultGrid(option: EchartsGridOption) {
        ObjectUtil.deepAssign(this.defaultOption.grid, option)
    }

    // 默认x轴配置
    defaultXAxis(option: EchartsXAxisOption) {
        ObjectUtil.deepAssign(this.defaultOption.xAxis, option)
    }

    // 默认y轴配置
    defaultYAxis(option: EchartsYAxisOption) {
        ObjectUtil.deepAssign(this.defaultOption.yAxis, option)
    }

    // 默认提示框配置
    defaultTooltip(option: EchartsTooltipOption) {
        ObjectUtil.deepAssign(this.defaultOption.tooltip, option)
    }

    // 默认图表配置
    defaultSeries(option: SeriesOption) {
        ObjectUtil.deepAssign(this.defaultOption.series, option)
    }

    // 默认调色盘颜色列表
    defaultColor(colors: ZRColor | ZRColor[]) {
        this.defaultOption.color = colors;
    }

}

const echartsBuilder = new EchartsBuilder()

export default echartsBuilder
