import { RadarComponentOption } from "../../echartsTypes/dist/echarts";
import { RadarIndicatorOption } from "../../echartsTypes/src/coord/radar/RadarModel";
export interface EchartsRadarIndicatorOption extends RadarIndicatorOption {
    name?: string;
    max?: number;
    min?: number;
    color?: string;
}
export interface EchartsRadarOption extends RadarComponentOption {
    indicator?: EchartsRadarIndicatorOption[];
}
