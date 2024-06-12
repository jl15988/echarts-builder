import { PlainLegendComponentOption } from "echarts";
import { LabelOption } from "echarts/types/src/util/types";
import { LegendStyleOption } from "echarts/types/src/component/legend/LegendModel";
export interface EchartsLegendDataOption extends LegendStyleOption {
    name?: string;
    icon?: string;
    textStyle?: LabelOption;
    tooltip?: unknown;
}
export interface EchartsLegendOption extends PlainLegendComponentOption {
    /**
     * 图例的类型
     * - plain 普通图例。缺省就是普通图例。
     * - scroll 可滚动翻页的图例。当图例数量较多时可以使用。
     */
    type?: "plain" | "scroll";
    left?: "left" | "center" | "right" | string | number;
    top?: "top" | "middle" | "bottom" | string | number;
    right?: "auto" | string | number;
    bottom?: "auto" | string | number;
    width?: "auto" | string | number;
    height?: "auto" | string | number;
    orient?: "horizontal" | "vertical";
    align?: "auto" | "left" | "right";
    padding?: number | number[];
    itemGap?: number;
    itemWidth?: number;
    itemHeight?: number;
    data?: (string | EchartsLegendDataOption)[];
}
