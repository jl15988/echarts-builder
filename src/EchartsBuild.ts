import * as echarts from "echarts";
import {EChartsType} from "echarts";
import {EchartsOption} from "./options";
import {EchartsTitleOption} from "./options/title";
import {EchartsSeriesOption, EchartsType} from "./options/series";
import {EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption} from "./options/axis";
import {EchartsLegendOption} from "./options/legend";
import echartsBuilder from "./EchartsBuilder";
import {EchartsTooltipOption} from "./options/tooltip";
import {EchartsGridOption} from "./options/grid";
import {EchartsToolboxOption, FeatureType} from "./options/toolbox";

class EchartsBuild {

    instance: EChartsType | undefined
    option: EchartsOption = {
        title: Object.assign({}, echartsBuilder.defaultOption.title),
        legend: Object.assign({}, echartsBuilder.defaultOption.legend),
        grid: Object.assign({}, echartsBuilder.defaultOption.grid),
        xAxis: Object.assign({}, echartsBuilder.defaultOption.xAxis),
        yAxis: Object.assign({}, echartsBuilder.defaultOption.yAxis),
        tooltip: Object.assign({}, echartsBuilder.defaultOption.tooltip),
        toolbox: Object.assign({}, echartsBuilder.defaultOption.toolbox),
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
     * 图例组件
     * @param option 配置项
     */
    legend(option: EchartsLegendOption) {
        Object.assign(this.option.legend, option)
        return this;
    }

    /**
     * 直角坐标系内绘图网格
     * @param left 离容器左侧的距离
     * @param top 离容器上侧的距离
     * @param right 离容器右侧的距离
     * @param bottom 离容器下侧的距离
     */
    grid(left: string | number, top?: string | number, right?: string | number, bottom?: string | number)
    /**
     * 直角坐标系内绘图网格
     * @param option 配置项
     */
    grid(option: EchartsGridOption)

    /**
     * 直角坐标系内绘图网格
     * @param option 配置项或离容器左侧的距离
     * @param top 离容器上侧的距离
     * @param right 离容器右侧的距离
     * @param bottom 离容器下侧的距离
     */
    grid(option: EchartsGridOption | string | number, top?: string | number, right?: string | number, bottom?: string | number) {
        if (typeof option === "string" || typeof option === "number") {
            this.option.grid.left = option
            if (top) this.option.grid.top = top
            if (right) this.option.grid.right = right
            if (bottom) this.option.grid.bottom = bottom
        } else {
            Object.assign(this.option.grid, option)
        }
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
     * @param type 触发类型
     */
    tooltip(type: "item" | "axis" | "none")
    /**
     * 提示框组件
     * @param option 配置
     */
    tooltip(option: EchartsTooltipOption)

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

    /**
     * 工具栏
     * - saveAsImage 保存为图片
     * - restore 配置项还原
     * - dataView 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
     * - dataZoom 数据区域缩放。目前只支持直角坐标系的缩放
     * - 数组`("line" | "bar" | "stack")[]` 动态类型切换，分别为：折线、柱状、堆叠
     * - brush 选框组件的控制按钮
     * @param types 工具类型集合
     */
    toolbox(types: FeatureType[])
    /**
     * 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
     * @param option 配置项
     */
    toolbox(option: EchartsToolboxOption)

    /**
     * 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
     * @param option 工具类型或配置项
     */
    toolbox(option: FeatureType[] | EchartsToolboxOption) {
        if (option instanceof Array) {
            const feature = {}
            for (let type of option) {
                if (type instanceof Array) {
                    feature['magicType'] = type
                } else {
                    feature[type] = {}
                }
            }

            this.option.toolbox.feature = feature
        } else {
            Object.assign(this.option.toolbox, option)
        }
        return this;
    }

    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param type 图表类型
     * @param data 数据
     */
    series(type: EchartsType, data: any[])
    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param option 配置
     */
    series(option: EchartsSeriesOption)

    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param option 图表类型
     * @param data 数据
     */
    series(option: EchartsType | EchartsSeriesOption, data?: any[]) {
        if (option instanceof EchartsType) {
            this.option.series.push(Object.assign({}, echartsBuilder.defaultOption.series, {
                type: option,
                data: data
            }))
        } else {
            this.option.series.push(Object.assign({}, echartsBuilder.defaultOption.series, option))
        }
        return this;
    }
}

export default EchartsBuild
