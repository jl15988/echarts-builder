import {RadarComponentOption} from "../../echartsTypes/dist/echarts";
import {RadarIndicatorOption} from "../../echartsTypes/src/coord/radar/RadarModel";

export interface EchartsRadarIndicatorOption extends RadarIndicatorOption {
    // 指示器名称
    name?: string
    // 指示器的最大值，可选，建议设置
    max?: number
    // 指示器的最小值，可选，默认为 0
    min?: number
    // 标签特定的颜色
    color?: string
}

export interface EchartsRadarOption extends RadarComponentOption {
    // 雷达图的指示器，用来指定雷达图中的多个变量（维度）
    indicator?: EchartsRadarIndicatorOption[]
}
