import { RadarComponentOption } from "echarts";
import { RadarIndicatorOption } from "echarts/types/src/coord/radar/RadarModel";
export interface EchartsRadarIndicatorOption extends RadarIndicatorOption {
    name?: string;
    max?: number;
    min?: number;
    color?: string;
}
export interface EchartsRadarOption extends RadarComponentOption {
    indicator?: EchartsRadarIndicatorOption[];
}
