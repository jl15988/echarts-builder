import EchartsStyleBase from "./index";
import StrUtil from "../utils/StrUtil";

class EchartsTooltipStyle extends EchartsStyleBase {
    static builder() {
        return new EchartsTooltipStyle()
    }

    /**
     * 指示器类型，默认 line
     */
    pointer(type: 'line' | 'shadow' | 'cross' | 'none' = 'line'): EchartsTooltipStyle {
        this.setStyle({
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: type
                }
            }
        })
        return this
    }

    /**
     * 格式化
     * - sname 系列名
     * - name 数据名
     * - value 数值
     * - pvalue 饼图/漏斗图的百分比
     * @param format 格式化字符串
     */
    formatter(format: string): EchartsTooltipStyle {
        format = format.replace(/{sname}/g, '{a}')
        format = format.replace(/{name}/g, '{b}')
        format = format.replace(/{value}/g, '{c}')
        format = format.replace(/{pvalue}/g, '{d}')
        this.setStyle({
            tooltip: {
                formatter: format
            }
        })
        return this
    }

    /**
     * 格式化
     * @param formats 格式化字符串
     *
     * - seriesType 系列类型
     * - seriesIndex 系列在传入的 option.series 中的 index
     * - seriesName 系列名称
     * - name 数据名
     * - dataIndex 数据在传入的 data 数组中的 index
     * - value 传入的数据值
     * - percent 饼图/漏斗图的百分比
     * - color 数据图形的颜色
     * <p>
     *  示例：'{name} {seriesName}: {value}'
     * </p>
     */
    formatters(...formats: string[]): EchartsTooltipStyle {
        this.setStyle({
            tooltip: {
                formatter: (params) => {
                    let result = []
                    if (!params) return ''
                    if (params instanceof Array) {
                        for (let i = 0; i < params.length; i++) {
                            const param = params[i]
                            const str = i > formats.length - 1 ? formats[formats.length - 1] : formats[i];
                            result.push(StrUtil.formatMap(str, param))
                        }
                    } else {
                        result.push(StrUtil.formatMap(formats[0], params))
                    }
                    return result.join("<br/>")
                }
            }
        })
        return this
    }
}

export default EchartsTooltipStyle
