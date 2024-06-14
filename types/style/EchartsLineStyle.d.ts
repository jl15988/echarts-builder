import EchartsStyleBase from "./index";
import { GradientColorStop } from "../../types/echarts";
import { AreaStyleOption } from "echarts/types/src/util/types";
import { MarkerStatisticType } from "echarts/types/src/component/marker/MarkerModel";
declare class EchartsLineStyle extends EchartsStyleBase {
    static builder(): EchartsLineStyle;
    /**
     * 平滑
     */
    smooth(smooth: number | boolean): this;
    /**
     * 面积图
     */
    area(): this;
    /**
     * 堆叠，提供stack-Total，如需分组堆叠需自定义
     */
    stack(stack?: string): this;
    /**
     * 面积堆叠
     */
    areaStack(): this;
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
    }): this;
    /**
     * 折线图的渐变
     * @param min 最小值
     * @param max 最大值
     * @param color 颜色，由小到大
     */
    lineGradient(min: number, max: number, color?: string[]): this;
    markLine(type: MarkerStatisticType, name: string): void;
}
export default EchartsLineStyle;
