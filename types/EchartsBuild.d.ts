import { EChartsType } from "echarts";
import { EchartsOption } from "./options";
import { EchartsTitleOption } from "./options/title";
import { EchartsType } from "./options/series";
import { EchartsAxisDataOption, EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption } from "./options/axis";
import { EchartsLegendDataOption, EchartsLegendOption } from "./options/legend";
import { EchartsDefaultOption } from "./EchartsBuilder";
import { EchartsTooltipOption } from "./options/tooltip";
import { EchartsGridOption } from "./options/grid";
import { EchartsToolboxOption, FeatureType } from "./options/toolbox";
import { EchartsRadarIndicatorOption, EchartsRadarOption } from "./options/radar";
declare class EchartsBuild {
    instance: EChartsType | undefined;
    option: EchartsOption;
    assignOption: EchartsDefaultOption;
    constructor(element: string | HTMLElement | null);
    assign(option: EchartsDefaultOption): EchartsBuild;
    build(option?: EchartsOption): void;
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
     * 图例组件
     * @param data 图例数据
     */
    legend(data: (string | EchartsLegendDataOption)[]): EchartsBuild;
    /**
     * 图例组件
     * @param option 配置项
     */
    legend(option: EchartsLegendOption): EchartsBuild;
    /**
     * 直角坐标系内绘图网格
     * @param left 离容器左侧的距离
     * @param top 离容器上侧的距离
     * @param right 离容器右侧的距离
     * @param bottom 离容器下侧的距离
     */
    grid(left: string | number, top?: string | number, right?: string | number, bottom?: string | number): EchartsBuild;
    /**
     * 直角坐标系内绘图网格
     * @param option 配置项
     */
    grid(option: EchartsGridOption): EchartsBuild;
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
     * y 轴
     * @param title y 轴数据
     * @param type y 轴类型
     */
    yAxis(title: (string | number | EchartsAxisDataOption)[], type?: EchartsAxisType): EchartsBuild;
    /**
     * y 轴
     * @param option y 轴配置
     */
    yAxis(option: EchartsYAxisOption): EchartsBuild;
    /**
     * 雷达图坐标系组件，只适用于雷达图
     * @param indicator 雷达图的指示器，用来指定雷达图中的多个变量（维度）
     */
    radar(indicator: EchartsRadarIndicatorOption[]): EchartsBuild;
    /**
     * 雷达图坐标系组件，只适用于雷达图
     * @param option 配置项
     */
    radar(option: EchartsRadarOption): EchartsBuild;
    /**
     * 提示框组件
     * @param type 触发类型
     */
    tooltip(type: "item" | "axis" | "none"): EchartsBuild;
    /**
     * 提示框组件
     * @param option 配置
     */
    tooltip(option: EchartsTooltipOption): EchartsBuild;
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
    toolbox(types: FeatureType[]): EchartsBuild;
    /**
     * 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
     * @param option 配置项
     */
    toolbox(option: EchartsToolboxOption): EchartsBuild;
    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param type 图表类型
     * @param data 数据
     */
    series<T, D>(type: EchartsType, data?: D): EchartsBuild;
    /**
     * 目前仅支持：折线、柱状、饼图、散点、k线、雷达
     * @param option 配置
     */
    series<T, D>(option: T): EchartsBuild;
}
export default EchartsBuild;
