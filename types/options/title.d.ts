import { EchartsComponentBaseOption } from "./index";
export declare class EchartsTitleStyle {
    color?: string;
    fontStyle?: "normal" | "italic" | "oblique";
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number;
    fontFamily?: string;
    fontSize?: number;
    lineHeight?: number;
    width?: number;
    height?: number;
    textBorderColor?: string;
    textBorderWidth?: number;
    textBorderType?: "solid" | "dashed" | "dotted" | number | number[];
    textBorderDashOffset?: number;
    textShadowColor?: string;
    textShadowBlur?: number;
    textShadowOffsetX?: number;
    textShadowOffsetY?: number;
    /**
     * 文字超出宽度是否截断或者换行
     * - truncate 截断
     * - break 换行
     * - breakAll 换行，跟'break'不同的是，在英语等拉丁文中，'breakAll'还会强制单词内换行
     */
    overflow?: "truncate" | "break" | "breakAll";
    ellipsis?: string;
    rich?: object;
}
export declare class EchartsTitleOption extends EchartsComponentBaseOption {
    text?: string;
    link?: string;
    target?: "self" | "blank";
    textStyle?: EchartsTitleStyle;
    subtext?: string;
    sublink?: string;
    subtarget?: "self" | "blank";
    subtextStyle?: EchartsTitleStyle;
    textAlign?: "auto" | "left" | "right" | "center";
    textVerticalAlign?: "auto" | "top" | "bottom" | "middle";
    padding?: number | number[];
    itemGap?: number;
    left?: "left" | "center" | "right" | string | number;
    top?: "top" | "middle" | "bottom" | string | number;
    right?: "auto" | string | number;
    bottom?: "auto" | string | number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number | number[];
    shadowBlur?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
}
