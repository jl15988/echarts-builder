import {IEchartsAssign} from "../EchartsBuilder";
import * as echarts from "echarts";
import EchartsStyleBase from "./index";
import ObjectUtil from "../utils/ObjectUtil";

class EchartsLineStyle extends EchartsStyleBase {

    static builder() {
        return new EchartsLineStyle()
    }

    /**
     * 平滑
     */
    smooth() {
        const style: IEchartsAssign = {
            series: {
                smooth: true
            }
        }
        ObjectUtil.deepAssign(this.option, style)
        return this
    }

    /**
     * 面积图
     */
    area() {
        const style: IEchartsAssign = {
            series: {
                areaStyle: {}
            }
        }
        ObjectUtil.deepAssign(this.option, style)
        return this
    }

    /**
     * 堆叠，提供stack-Total，如需分组堆叠需自定义
     */
    stack() {
        const style: IEchartsAssign = {
            series: {
                stack: "Total"
            }
        }
        ObjectUtil.deepAssign(this.option, style)
        return this
    }

    /**
     * 面积堆叠
     */
    areaStack() {
        const style: IEchartsAssign = {
            series: {
                areaStyle: {},
                stack: "Total",
                emphasis: {
                    focus: 'series'
                }
            }
        }
        ObjectUtil.deepAssign(this.option, style)
        return this
    }

    /**
     * 渐变
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     */
    gradient(colors: string[][]) {
        const style: IEchartsAssign = {
            seriesList: []
        }
        for (let color of colors) {
            style.seriesList.push({
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: color[0] || undefined
                        },
                        {
                            offset: 1,
                            color: color[1] || undefined
                        }
                    ])
                }
            })
        }
        ObjectUtil.deepAssign(this.option, style)
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
}

export default EchartsLineStyle
