import {IEchartsAssign} from "../EchartsBuilder";
import * as echarts from "echarts";
import EchartsStyleBase from "./index";

class EchartsSeriesCommonStyle extends EchartsStyleBase {

    static builder() {
        return new EchartsSeriesCommonStyle()
    }

    /**
     * 渐变
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     * @param index 系列下标，配置所在 series 中的下标
     */
    gradient(colors: string[][], index: number = 0) {
        const style: IEchartsAssign = {
            seriesList: []
        }
        for (let color of colors) {
            style.seriesList[index] = {
                itemStyle: {
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
            }
        }
        this.setStyle(style)
        return this
    }
}

export default EchartsSeriesCommonStyle
