import EchartsStyleBase from "./index";
declare class EchartsLineStyle extends EchartsStyleBase {
    static builder(): EchartsLineStyle;
    /**
     * 平滑
     */
    smooth(): this;
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
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     */
    gradient(colors: string[][]): this;
    /**
     * 折线图的渐变
     * @param min 最小值
     * @param max 最大值
     * @param color 颜色，由小到大
     */
    lineGradient(min: number, max: number, color?: string[]): this;
}
export default EchartsLineStyle;
