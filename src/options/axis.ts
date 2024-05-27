import {XAXisComponentOption, YAXisComponentOption} from "echarts";

interface EchartsAxisBaseOption {
    type?: EchartsAxisType
    data?: any[]
    /**
     * 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
     * <li>
     *     类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
     * </li>
     * <li>
     *     非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效
     * </li>
     */
    boundaryGap?: boolean
}

export interface EchartsXAxisOption extends EchartsAxisBaseOption, XAXisComponentOption {

}

export interface EchartsYAxisOption extends EchartsAxisBaseOption, YAXisComponentOption {

}

export enum EchartsAxisType {
    // 数值轴（如200、300、400），适用于连续数据
    VALUE = "value",
    // 类目轴（如：今天、明天、后天），适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 yAxis.data 设置类目数据
    CATEGORY = "category",
    // 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度
    TIME = "time",
    // 对数轴。适用于对数数据。对数轴下的堆积柱状图或堆积折线图可能带来很大的视觉误差，并且在一定情况下可能存在非预期效果，应避免使用
    LOG = "log"
}
