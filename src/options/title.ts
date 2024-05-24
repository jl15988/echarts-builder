import {EchartsComponentBaseOption} from "./index";

export class EchartsTitleStyle {
    // 主标题文字的颜色
    color?: string
    // 主标题文字字体的风格
    fontStyle?: "normal" | "italic" | "oblique"
    // 主标题文字字体的粗细
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number
    // 主标题文字的字体系列
    fontFamily?: string
    // 主标题文字的字体大小
    fontSize?: number
    // 行高
    lineHeight?: number
    // 文本显示宽度
    width?: number
    // 文本显示高度
    height?: number
    // 文字本身的描边颜色
    textBorderColor?: string
    // 文字本身的描边宽度
    textBorderWidth?: number
    // 文字本身的描边类型
    textBorderType?: "solid" | "dashed" | "dotted" | number | number[]
    // 用于设置虚线的偏移量
    textBorderDashOffset?: number
    // 文字本身的阴影颜色
    textShadowColor?: string
    // 文字本身的阴影长度
    textShadowBlur?: number
    // 文字本身的阴影 X 偏移
    textShadowOffsetX?: number
    // 文字本身的阴影 Y 偏移
    textShadowOffsetY?: number
    /**
     * 文字超出宽度是否截断或者换行
     * - truncate 截断
     * - break 换行
     * - breakAll 换行，跟'break'不同的是，在英语等拉丁文中，'breakAll'还会强制单词内换行
     */
    overflow?: "truncate" | "break" | "breakAll"
    // 在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本
    ellipsis?: string
    // 在 rich 里面，可以自定义富文本样式
    rich?: object
}

export class EchartsTitleOption extends EchartsComponentBaseOption {
    text?: string
    // 主标题文本超链接
    link?: string
    // 指定窗口打开主标题超链接
    target?: "self" | "blank"
    // 标题样式
    textStyle?: EchartsTitleStyle
    // 副标题文本，支持使用 \n 换行
    subtext?: string
    // 副标题文本超链接
    sublink?: string
    // 指定窗口打开副标题超链接
    subtarget?: "self" | "blank"
    // 副标题样式
    subtextStyle?: EchartsTitleStyle
    // 整体（包括 text 和 subtext）的水平对齐
    textAlign?: "auto" | "left" | "right" | "center"
    // 整体（包括 text 和 subtext）的垂直对齐
    textVerticalAlign?: "auto" | "top" | "bottom" | "middle"
    // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
    padding?: number | number[]
    // 主副标题之间的间距
    itemGap?: number
    // title 组件离容器左侧的距离，像素值或百分比
    left?: "left" | "center" | "right" | string | number
    // title 组件离容器上侧的距离，像素值或百分比
    top?: "top" | "middle" | "bottom" | string | number
    // title 组件离容器右侧的距离，像素值或百分比
    right?: "auto" | string | number
    // title 组件离容器下侧的距离，像素值或百分比
    bottom?: "auto" | string | number
    // 标题背景色，默认透明
    backgroundColor?: string
    // 标题的边框颜色
    borderColor?: string
    // 标题的边框线宽
    borderWidth?: number
    // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径
    borderRadius?: number | number[]
    // 图形阴影的模糊大小
    shadowBlur?: number
    // 阴影颜色
    shadowColor?: string
    // 阴影水平方向上的偏移距离
    shadowOffsetX?: number
    // 阴影垂直方向上的偏移距离
    shadowOffsetY?: number
}
