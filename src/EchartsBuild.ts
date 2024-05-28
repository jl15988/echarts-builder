import * as echarts from "echarts";
import {EChartsType} from "echarts";
import {EchartsOption} from "./options";
import {EchartsTitleOption} from "./options/title";
import {EchartsType} from "./options/series";
import {EchartsAxisDataOption, EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption} from "./options/axis";
import {EchartsLegendDataOption, EchartsLegendOption} from "./options/legend";
import echartsBuilder, {EchartsDefaultOption} from "./EchartsBuilder";
import {EchartsTooltipOption} from "./options/tooltip";
import {EchartsGridOption} from "./options/grid";
import {EchartsToolboxOption, FeatureType} from "./options/toolbox";
import {EchartsRadarIndicatorOption, EchartsRadarOption} from "./options/radar";
import {ZRColor} from "echarts/types/dist/shared";
import ObjectUtil from "./utils/ObjectUtil";

class EchartsBuild {

    instance: EChartsType | undefined
    option: EchartsOption = echartsBuilder.defaultOption.getDefaultOption()
    assignOption: EchartsDefaultOption = new EchartsDefaultOption()

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

    assign(option: EchartsDefaultOption): EchartsBuild {
        // 非 series 的挨个赋值
        for (let optionKey in option) {
            if (!option[optionKey]) continue;
            if (optionKey !== "series" && optionKey !== "seriesList") {
                const optionItem = this.option[optionKey]
                if (!optionItem) {
                    this.option[optionKey] = option[optionKey]
                    continue
                }
                if (optionItem instanceof Array) {
                    this.option[optionKey] = option[optionKey]
                } else {
                    ObjectUtil.deepAssign(this.option[optionKey], option[optionKey])
                }
            }
        }
        // 保留
        ObjectUtil.deepAssign(this.assignOption, option)
        return this;
    }

    build(option?: EchartsOption) {
        // @ts-ignore
        this.instance.setOption(ObjectUtil.deepAssign({}, this.option, option));
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
    title(option: EchartsTitleOption | string, subtext?: string): EchartsBuild {
        if (typeof option === "string") {
            this.option.title.text = option
            if (subtext) {
                this.option.title.subtext = subtext
            }
        } else {
            ObjectUtil.deepAssign(this.option.title, option)
        }
        return this;
    }

    /**
     * 图例组件
     * @param data 图例数据
     */
    legend(data: (string | EchartsLegendDataOption)[]): EchartsBuild
    /**
     * 图例组件
     * @param option 配置项
     */
    legend(option: EchartsLegendOption): EchartsBuild

    /**
     * 图例组件
     * @param option 图例数据或配置项
     */
    legend(option: (string | EchartsLegendDataOption)[] | EchartsLegendOption): EchartsBuild {
        if (option instanceof Array) {
            this.option.legend.data = option
        } else {
            ObjectUtil.deepAssign(this.option.legend, option)
        }
        return this;
    }

    /**
     * 直角坐标系内绘图网格
     * @param left 离容器左侧的距离
     * @param top 离容器上侧的距离
     * @param right 离容器右侧的距离
     * @param bottom 离容器下侧的距离
     */
    grid(left: string | number, top?: string | number, right?: string | number, bottom?: string | number): EchartsBuild
    /**
     * 直角坐标系内绘图网格
     * @param option 配置项
     */
    grid(option: EchartsGridOption): EchartsBuild

    /**
     * 直角坐标系内绘图网格
     * @param option 配置项或离容器左侧的距离
     * @param top 离容器上侧的距离
     * @param right 离容器右侧的距离
     * @param bottom 离容器下侧的距离
     */
    grid(option: EchartsGridOption | string | number, top?: string | number, right?: string | number, bottom?: string | number): EchartsBuild {
        if (typeof option === "string" || typeof option === "number") {
            this.option.grid.left = option
            if (top) this.option.grid.top = top
            if (right) this.option.grid.right = right
            if (bottom) this.option.grid.bottom = bottom
        } else {
            ObjectUtil.deepAssign(this.option.grid, option)
        }
        return this;
    }

    /**
     * x 轴
     * @param data x 轴数据
     * @param type x 轴类型
     */
    xAxis(data: (string | number | EchartsAxisDataOption)[], type?: EchartsAxisType): EchartsBuild;
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
    xAxis(option: EchartsXAxisOption | (string | number | EchartsAxisDataOption)[], type?: EchartsAxisType): EchartsBuild {
        if (option instanceof Array) {
            // @ts-ignore
            this.option.xAxis.data = option
            if (type) {
                // @ts-ignore
                this.option.xAxis.type = type
            }
        } else {
            ObjectUtil.deepAssign(this.option.xAxis, option)
        }
        return this;
    }

    /**
     * y 轴
     * @param data y 轴数据
     * @param type y 轴类型
     */
    yAxis(data: (string | number | EchartsAxisDataOption)[], type?: EchartsAxisType): EchartsBuild;
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
    yAxis(option: EchartsYAxisOption | (string | number | EchartsAxisDataOption)[], type?: EchartsAxisType): EchartsBuild {
        if (option instanceof Array) {
            // @ts-ignore
            this.option.yAxis.data = option
            if (type) {
                // @ts-ignore
                this.option.yAxis.type = type
            }
        } else {
            ObjectUtil.deepAssign(this.option.yAxis, option)
        }
        return this;
    }

    /**
     * 雷达图坐标系组件，只适用于雷达图
     * @param indicator 雷达图的指示器，用来指定雷达图中的多个变量（维度）
     */
    radar(indicator: EchartsRadarIndicatorOption[]): EchartsBuild
    /**
     * 雷达图坐标系组件，只适用于雷达图
     * @param option 配置项
     */
    radar(option: EchartsRadarOption): EchartsBuild

    /**
     * 雷达图坐标系组件，只适用于雷达图
     * @param option 雷达图的指示器或配置项
     */
    radar(option: EchartsRadarIndicatorOption[] | EchartsRadarOption): EchartsBuild {
        if (option instanceof Array) {
            this.option.radar.indicator = option;
        } else {
            ObjectUtil.deepAssign(this.option.radar, option)
        }
        return this;
    }

    /**
     * 提示框组件
     * @param type 触发类型
     */
    tooltip(type: "item" | "axis" | "none"): EchartsBuild
    /**
     * 提示框组件
     * @param option 配置
     */
    tooltip(option: EchartsTooltipOption): EchartsBuild

    /**
     * 提示框组件
     */
    tooltip(option: EchartsTooltipOption | "item" | "axis" | "none"): EchartsBuild {
        if (typeof option === "string") {
            this.option.tooltip.trigger = option
        } else {
            ObjectUtil.deepAssign(this.option.tooltip, option)
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
    toolbox(types: FeatureType[]): EchartsBuild
    /**
     * 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
     * @param option 配置项
     */
    toolbox(option: EchartsToolboxOption): EchartsBuild

    /**
     * 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
     * @param option 工具类型或配置项
     */
    toolbox(option: FeatureType[] | EchartsToolboxOption): EchartsBuild {
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
            ObjectUtil.deepAssign(this.option.toolbox, option)
        }
        return this;
    }

    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param type 图表类型
     * @param data 数据
     * @param name 数据名
     */
    series<T, D>(type: EchartsType, data: D, name?: string): EchartsBuild
    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param option 配置
     */
    series<T, D>(option: T): EchartsBuild

    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param option 图表类型或配置
     * @param data 数据，仅 option 为图表类型时有效
     * @param name 数据名
     */
    series<T extends object, D extends Array<any>>(option: T | EchartsType, data?: D, name?: string): EchartsBuild {
        let assignOption = {}
        if (this.assignOption && this.assignOption.series) {
            assignOption = ObjectUtil.deepAssign({}, this.assignOption.series);
            if (this.assignOption.seriesList) {
                const assignItem = this.assignOption.seriesList[this.option.series.length];
                if (assignItem) {
                    ObjectUtil.deepAssign(assignOption, assignItem)
                }
            }
        }
        if (typeof option === "string") {
            this.option.series.push(ObjectUtil.deepAssign({}, echartsBuilder.defaultOption.series, assignOption, {
                type: option,
                data: data,
                name: name
            }))
        } else {
            this.option.series.push(ObjectUtil.deepAssign({}, echartsBuilder.defaultOption.series, assignOption, option))
        }
        // 根据不同类型赋值提示框触发类型
        if (this.option.series && this.option.series[0] && ['pie', 'radar'].includes(this.option.series[0].type)) {
            this.option.tooltip.trigger = "item"
        } else {
            this.option.tooltip.trigger = "axis"
        }
        return this;
    }

    /**
     * 调色盘颜色列表
     * @param colors 颜色列表
     */
    color(colors: ZRColor | ZRColor[]) {
        this.option.color = colors;
        return this;
    }
}

export default EchartsBuild
