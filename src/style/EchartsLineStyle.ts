import {EchartsDefaultOption} from "../EchartsBuilder";
import {graphic} from "echarts";

class EchartsLineStyle {
    common() {
        return new EchartsDefaultOption()
    }

    /**
     * 平滑
     */
    smooth() {
        const echartsDefaultOption = new EchartsDefaultOption();
        echartsDefaultOption.series = {
            smooth: true
        }
        return echartsDefaultOption
    }

    /**
     * 面积图
     */
    area() {
        const echartsDefaultOption = new EchartsDefaultOption();
        echartsDefaultOption.series = {
            areaStyle: {}
        }
        return echartsDefaultOption
    }

    /**
     * 堆叠，提供stack-Total，如需分组堆叠需自定义
     */
    stack() {
        const echartsDefaultOption = new EchartsDefaultOption();
        echartsDefaultOption.series = {
            stack: "Total"
        }
        return echartsDefaultOption
    }

    /**
     * 面积堆叠
     */
    areaStack() {
        const echartsDefaultOption = new EchartsDefaultOption();
        echartsDefaultOption.series = {
            areaStyle: {},
            stack: "Total",
            emphasis: {
                focus: 'series'
            }
        }
        return echartsDefaultOption
    }

    /**
     * 渐变
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     */
    gradient(colors: string[][]) {
        const echartsDefaultOption = new EchartsDefaultOption();
        for (let color of colors) {
            echartsDefaultOption.seriesList.push({
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
        return echartsDefaultOption
    }
}

export default new EchartsLineStyle()
