import * as echarts from "echarts";
import {EChartsType} from "echarts";
import {EchartsOption} from "./options";
import {EchartsTitleOption} from "./options/title";
import {EchartsSeriesOption, EchartsType} from "./options/series";
import {EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption} from "./options/axis";
import {EchartsLegendOption} from "./options/legend";
import echartsBuilder from "./EchartsBuilder";
import {EchartsTooltipOption} from "./options/tooltip";

class EchartsBuild {

    instance: EChartsType | undefined
    option: EchartsOption = {
        title: Object.assign({}, echartsBuilder.defaultOption.title),
        legend: Object.assign({}, echartsBuilder.defaultOption.legend),
        xAxis: Object.assign({}, echartsBuilder.defaultOption.xAxis),
        yAxis: Object.assign({}, echartsBuilder.defaultOption.yAxis),
        tooltip: Object.assign({}, echartsBuilder.defaultOption.tooltip),
        series: []
    }

    constructor(element: string | HTMLElement | null) {
        if (typeof element === "string") {
            element = document.getElementById(element);
        }
        if (!(element instanceof HTMLElement)) {
            throw new Error("element error");
        }
        this.instance = echarts.getInstanceByDom(element);
        if (!this.instance) {
            this.instance = echarts.init(element);
        }
    }

    build() {
        // @ts-ignore
        this.instance.setOption(this.option);
    }

    /**
     * 标题组件，包含主标题和副标题
     * @param text 标题内容
     * @param subtext 副标题内容
     */
    title(text: string, subtext?: string): EchartsBuild;
    /**
     * 标题组件，包含主标题和副标题
     * @param option 标题配置
     */
    title(option: EchartsTitleOption): EchartsBuild;

    /**
     * 标题组件，包含主标题和副标题
     * @param option 标题内容或者标题配置
     * @param subtext 副标题，只有在 option 为标题时有效
     */
    title(option: EchartsTitleOption | string, subtext?: string) {
        if (typeof option === "string") {
            this.option.title.text = option
            if (subtext) {
                this.option.title.subtext = subtext
            }
        } else {
            Object.assign(this.option.title, option)
        }
        return this;
    }

    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param type 图表类型
     * @param data 数据
     * @param option 配置
     */
    series(type: EchartsType, data: any[], option: EchartsSeriesOption) {
        if (!option) {
            option = {}
        }
        this.option.series.push(Object.assign({}, echartsBuilder.defaultOption.series, option, {
            type: type,
            data: data
        }))
        return this;
    }

    /**
     * x 轴
     * @param title x 轴数据
     * @param type x 轴类型
     */
    xAxis(title: any[], type?: EchartsAxisType): EchartsBuild;
    /**
     * x 轴
     * @param option x 轴配置
     */
    xAxis(option: EchartsXAxisOption): EchartsBuild;

    /**
     * x 轴
     * @param option x 轴数据或配置
     * @param type x 轴类型，只有在 option 为数据时有效
     */
    xAxis(option: EchartsXAxisOption | any[], type?: EchartsAxisType) {
        if (option instanceof Array) {
            this.option.xAxis.data = option
            if (type) {
                this.option.xAxis.type = type
            }
        } else {
            Object.assign(this.option.xAxis, option)
        }
        return this;
    }

    /**
     * y 轴
     * @param title y 轴数据
     * @param type y 轴类型
     */
    yAxis(title: any[], type?: EchartsAxisType): EchartsBuild;
    /**
     * y 轴
     * @param option y 轴配置
     */
    yAxis(option: EchartsYAxisOption): EchartsBuild;

    /**
     * y 轴
     * @param option y 轴数据或配置
     * @param type y 轴类型，只有在 option 为数据时有效
     */
    yAxis(option: EchartsYAxisOption | any[], type?: EchartsAxisType) {
        if (option instanceof Array) {
            this.option.yAxis.data = option
            if (type) {
                this.option.yAxis.type = type
            }
        } else {
            Object.assign(this.option.yAxis, option)
        }
        return this;
    }

    /**
     * 提示框组件
     */
    tooltip(option: EchartsTooltipOption | "item" | "axis" | "none") {
        if (typeof option === "string") {
            this.option.tooltip.trigger = option
        } else {
            Object.assign(this.option.tooltip, option)
        }
        return this;
    }

    legend(option: EchartsLegendOption) {

    }
}

export default EchartsBuild
