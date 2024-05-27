import {
    BarSeriesOption,
    CandlestickSeriesOption,
    LineSeriesOption,
    PieSeriesOption,
    RadarSeriesOption,
    ScatterSeriesOption
} from "echarts";

type SeriesOption =
    LineSeriesOption
    & BarSeriesOption
    & PieSeriesOption
    & ScatterSeriesOption
    & CandlestickSeriesOption
    & RadarSeriesOption;

export interface EchartsSeriesOption extends SeriesOption {
    // 图表数据
    data?: any[]
    // 平滑
    smooth?: boolean
}

export enum EchartsType {
    // 折线
    LINE = "line",
    // 柱状
    BAR = "bar",
    // 饼图
    PIE = "pie",
    // 散点
    SCATTER = "scatter",
    // k线
    CANDLESTICK = "candlestick",
    // 雷达
    RADAR = "radar"
}
