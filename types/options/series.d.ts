import { OptionDataValue, OptionDataValueNumeric } from "../../types/echartsTypes/src/util/types";
import { LineDataItemOption } from "../../types/echartsTypes/src/chart/line/LineSeries";
import { BarDataItemOption } from "../../types/echartsTypes/src/chart/bar/BarSeries";
import { PieDataItemOption } from "../../types/echartsTypes/src/chart/pie/PieSeries";
import { ScatterDataItemOption } from "../../types/echartsTypes/src/chart/scatter/ScatterSeries";
import { CandlestickDataItemOption } from "../../types/echartsTypes/src/chart/candlestick/CandlestickSeries";
import { RadarSeriesDataItemOption } from "../../types/echartsTypes/src/chart/radar/RadarSeries";
export type EchartsType = "line" | "bar" | "pie" | "scatter" | "candlestick" | "radar";
export type LineDataValue = OptionDataValue | OptionDataValue[];
export type CandlestickDataValue = OptionDataValue[];
export type RadarSeriesDataValue = OptionDataValue[];
export type LineSeriesDataOption = (LineDataValue | LineDataItemOption)[];
export type BarSeriesDataOption = (BarDataItemOption | OptionDataValue | OptionDataValue[])[];
export type PieSeriesDataOption = (OptionDataValueNumeric | OptionDataValueNumeric[] | PieDataItemOption)[];
export type ScatterSeriesDataOption = (ScatterDataItemOption | OptionDataValue | OptionDataValue[])[] | ArrayLike<number>;
export type CandlestickSeriesDataOption = (CandlestickDataValue | CandlestickDataItemOption)[];
export type RadarSeriesDataOption = (RadarSeriesDataItemOption | RadarSeriesDataValue)[];
export declare class EchartsSeriesBuilder<T, D> {
    options: T[];
    static builder<T, D>(): EchartsSeriesBuilder<T, D>;
    series(type: EchartsType, data?: D): any;
    series(option: T): any;
}
