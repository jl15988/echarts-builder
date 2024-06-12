import echartsBuilder from "../EchartsBuilder";
import ObjectUtil from "../utils/ObjectUtil";
import {OptionDataValue, OptionDataValueNumeric} from "echarts/types/src/util/types";
import {LineDataItemOption} from "echarts/types/src/chart/line/LineSeries";
import {BarDataItemOption} from "echarts/types/src/chart/bar/BarSeries";
import {PieDataItemOption} from "echarts/types/src/chart/pie/PieSeries";
import {ScatterDataItemOption} from "echarts/types/src/chart/scatter/ScatterSeries";
import {CandlestickDataItemOption} from "echarts/types/src/chart/candlestick/CandlestickSeries";
import {RadarSeriesDataItemOption} from "echarts/types/src/chart/radar/RadarSeries";

// 图表类型，折线、柱状、饼图、散点、k线、雷达
export type EchartsType = "line" | "bar" | "pie" | "scatter" | "candlestick" | "radar"

export type LineDataValue = OptionDataValue | OptionDataValue[]
export type CandlestickDataValue = OptionDataValue[]
export type RadarSeriesDataValue = OptionDataValue[]

export type LineSeriesDataOption = (LineDataValue | LineDataItemOption)[]
export type BarSeriesDataOption = (BarDataItemOption | OptionDataValue | OptionDataValue[])[]
export type PieSeriesDataOption = (OptionDataValueNumeric | OptionDataValueNumeric[] | PieDataItemOption)[]
export type ScatterSeriesDataOption = (ScatterDataItemOption | OptionDataValue | OptionDataValue[])[] | ArrayLike<number>
export type CandlestickSeriesDataOption = (CandlestickDataValue | CandlestickDataItemOption)[]
export type RadarSeriesDataOption = (RadarSeriesDataItemOption | RadarSeriesDataValue)[]

export type SeriesDataType = LineSeriesDataOption | BarSeriesDataOption | PieSeriesDataOption | ScatterSeriesDataOption | CandlestickSeriesDataOption | RadarSeriesDataOption

export class EchartsSeriesBuilder<T, D> {
    options: T[] = []

    static builder<T, D>() {
        return new EchartsSeriesBuilder<T, D>()
    }

    series(type: EchartsType, data?: D)
    series(option: T)

    series(option: T | EchartsType, data?: D) {
        if (typeof option === "string") {
            // @ts-ignore
            this.options.push(ObjectUtil.deepAssign({}, echartsBuilder.defaultOption.series, {
                type: option,
                data: data
            }))
        } else {
            // @ts-ignore
            this.options.push(ObjectUtil.deepAssign({}, echartsBuilder.defaultOption.series, option))
        }
        return this;
    }
}
