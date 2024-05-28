import {EchartsDefaultOption, IEchartsAssign} from "../EchartsBuilder";
import {graphic} from "echarts";

class EchartsLineStyle {
    common() {
        return {}
    }

    /**
     * 平滑
     */
    smooth() {
        const result: IEchartsAssign = {
            series: {
                smooth: true
            }
        }
        return result
    }

    /**
     * 面积图
     */
    area() {
        const result: IEchartsAssign = {
            series: {
                areaStyle: {}
            }
        }
        return result
    }

    /**
     * 堆叠，提供stack-Total，如需分组堆叠需自定义
     */
    stack() {
        const result: IEchartsAssign = {
            series: {
                stack: "Total"
            }
        }
        return result
    }

    /**
     * 面积堆叠
     */
    areaStack() {
        const result: IEchartsAssign = {
            series: {
                areaStyle: {},
                stack: "Total",
                emphasis: {
                    focus: 'series'
                }
            }
        }
        return result
    }

    /**
     * 渐变
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     */
    gradient(colors: string[][]) {
        const result: IEchartsAssign = {
            seriesList: []
        }
        for (let color of colors) {
            result.seriesList.push({
                areaStyle: {
                    opacity: 0.8,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
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
        return result
    }
}

export default new EchartsLineStyle()
