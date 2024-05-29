import values from "./values";
import EchartsBuilder from "./EchartsBuilder";
import {EchartsAxisType} from "./options/axis";
import type {
    BarSeriesDataOption,
    CandlestickSeriesDataOption,
    EchartsSeriesBuilder,
    LineSeriesDataOption,
    PieSeriesDataOption,
    RadarSeriesDataOption,
    ScatterSeriesDataOption
} from "./options/series";
import EchartsLineStyle from "./style/EchartsLineStyle";

export {
    EchartsBuilder,
    EchartsAxisType,
    EchartsSeriesBuilder,
    EchartsLineStyle,
    LineSeriesDataOption,
    BarSeriesDataOption,
    PieSeriesDataOption,
    ScatterSeriesDataOption,
    CandlestickSeriesDataOption,
    RadarSeriesDataOption
}

const echartsBuilder = values;
export default echartsBuilder;
