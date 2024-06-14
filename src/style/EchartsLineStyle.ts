import {IEchartsAssign} from "../EchartsBuilder";
import * as echarts from "echarts";
import {LineSeriesOption} from "echarts";
import EchartsStyleBase from "./index";
import ObjectUtil from "../utils/ObjectUtil";
import {GradientColorStop} from "../../types/echarts";
import {AreaStyleOption} from "echarts/types/src/util/types";
import {MarkerStatisticType} from "echarts/types/src/component/marker/MarkerModel";

class EchartsLineStyle extends EchartsStyleBase {

    static builder() {
        return new EchartsLineStyle()
    }

    /**
     * 平滑
     */
    smooth(smooth: number | boolean) {
        this.setStyle({
            series: {
                smooth: smooth || true
            }
        })
        return this
    }

    /**
     * 面积图
     */
    area() {
        this.setStyle({
            series: {
                areaStyle: {}
            }
        })
        return this
    }

    /**
     * 堆叠，提供stack-Total，如需分组堆叠需自定义
     */
    stack(stack: string = "Total") {
        this.setStyle({
            series: {
                stack: stack
            }
        })
        return this
    }

    /**
     * 面积堆叠
     */
    areaStack() {
        this.setStyle({
            series: {
                areaStyle: {},
                stack: "Total",
                emphasis: {
                    focus: 'series'
                }
            }
        })
        return this
    }

    /**
     * 渐变
     * @param colors 渐变颜色二维数组；第一层数组下标为 series 下标 ；第二层则是渐变层数，多条将自动平均分配 offset 数值；
     * 如：
     * ```js
     * [['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     * // 或
     * [
     *  [{
     *      offset: 0,
     *      color: 'red'
     *  }, {
     *      offset: 1,
     *      color: 'blue'
     *  }, 'green']
     * ]
     * // 也可传入一个方法，来返回颜色数值
     * ```
     * @param option 通用配置
     */
    gradient(colors: (string | Partial<GradientColorStop>)[][] | (() => (string | Partial<GradientColorStop>)[][]), option?: AreaStyleOption & {
        origin?: 'auto' | 'start' | 'end' | number;
    }) {
        if (!colors) {
            return this;
        }
        if (colors instanceof Function) {
            colors = colors()
        }
        const style: IEchartsAssign = {
            seriesList: []
        }

        // 将一维颜色数组解析成 echarts 类型的数据
        function relColors(colors: (string | Partial<GradientColorStop>)[]): GradientColorStop[] {
            return colors.map((color: string | Partial<GradientColorStop>, index: number) => {
                let offset = 0;
                if (index !== 0) {
                    offset = index / (colors.length - 1);
                }
                if (typeof color === "string") {
                    return {
                        offset: offset,
                        color: color
                    } as GradientColorStop
                } else {
                    if (!color.offset) {
                        color.offset = offset
                    }
                    return color as GradientColorStop;
                }
            })
        }

        // 构建渐变配置
        function buildGradient(colorStops: GradientColorStop[]) {
            return ObjectUtil.deepAssign({
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, colorStops)
                }
            } as LineSeriesOption, option || {})
        }

        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            if (!color) continue
            style.seriesList[i] = buildGradient(relColors(color))
        }
        // for (let i = 0; i < colors.length; i++) {
        //     style.seriesList[i] = {
        //         areaStyle: {
        //             opacity: 0.8,
        //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //                 {
        //                     offset: 0,
        //                     color: colors[i][0] || undefined
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: colors[i][1] || undefined
        //                 }
        //             ])
        //         }
        //     }
        // }
        this.setStyle(style)
        return this
    }

    /**
     * 折线图的渐变
     * @param min 最小值
     * @param max 最大值
     * @param color 颜色，由小到大
     */
    lineGradient(min: number, max: number, color?: string[]) {
        const style: IEchartsAssign = {
            visualMap: {
                type: "continuous",
                min,
                max,
            }
        }
        if (color) {
            style.visualMap['inRange'] = {}
            style.visualMap['inRange']['color'] = color
        }
        ObjectUtil.deepAssign(this.option, style)
        return this
    }

    markLine(type: MarkerStatisticType, name: string) {
        this.setStyle({
            series: {
                markLine: {
                    data: [{
                        type
                    }]
                }
            }
        })
    }
}

export default EchartsLineStyle
