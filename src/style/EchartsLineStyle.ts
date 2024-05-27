import {EchartsDefaultOption} from "../EchartsBuilder";

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
        echartsDefaultOption.xAxis = {
            boundaryGap: false
        }
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
        echartsDefaultOption.xAxis = {
            boundaryGap: false
        }
        echartsDefaultOption.series = {
            areaStyle: {},
            stack: "Total",
            emphasis: {
                focus: 'series'
            }
        }
        return echartsDefaultOption
    }
}

export default new EchartsLineStyle()
