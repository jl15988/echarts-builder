import {DataItem, PlainLegendComponentOption} from "../../types/echartsTypes/dist/echarts";

export interface EchartsLegendDataOption extends DataItem {

}

export interface EchartsLegendOption extends PlainLegendComponentOption {
    /**
     * 图例的类型
     * - plain 普通图例。缺省就是普通图例。
     * - scroll 可滚动翻页的图例。当图例数量较多时可以使用。
     */
    type?: "plain" | "scroll"
    // 组件离容器左侧的距离，像素值或百分比
    left?: "left" | "center" | "right" | string | number
    // 组件离容器上侧的距离，像素值或百分比
    top?: "top" | "middle" | "bottom" | string | number
    // 组件离容器右侧的距离，像素值或百分比
    right?: "auto" | string | number
    // 组件离容器下侧的距离，像素值或百分比
    bottom?: "auto" | string | number
    // 图例组件的宽度。默认自适应
    width?: "auto" | string | number
    // 图例组件的高度。默认自适应。
    height?: "auto" | string | number
    // 图例列表的布局朝向
    orient?: "horizontal" | "vertical"
    // 图例标记和文本的对齐
    align?: "auto" | "left" | "right"
    // 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
    padding?: number | number[]
    // 图例每项之间的间隔
    itemGap?: number
    // 图例标记的图形宽度
    itemWidth?: number
    // 图例标记的图形高度
    itemHeight?: number
    data?: (string | EchartsLegendDataOption)[]
}
