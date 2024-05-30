import EchartsStyleBase from "./index";
declare class EchartsTooltipStyle extends EchartsStyleBase {
    static builder(): EchartsTooltipStyle;
    /**
     * 指示器类型，默认 line
     */
    pointer(type?: 'line' | 'shadow' | 'cross' | 'none'): EchartsTooltipStyle;
    formatter(format: string): EchartsTooltipStyle;
    /**
     * 格式化
     * @param formats 格式化字符串
     *
     * - seriesType 系列类型
     * - seriesIndex 系列在传入的 option.series 中的 index
     * - seriesName 系列名称
     * - dataIndex 数据在传入的 data 数组中的 index
     * - value 传入的数据值
     * - percent 饼图/漏斗图的百分比
     * - color 数据图形的颜色
     * <p>
     *  示例：'{name} {seriesName}: {value}'
     * </p>
     */
    formatters(...formats: string[]): EchartsTooltipStyle;
}
export default EchartsTooltipStyle;
