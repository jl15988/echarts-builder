import { IEchartsAssign } from "../EchartsBuilder";
declare class EchartsLineStyle {
    common(): {};
    /**
     * 平滑
     */
    smooth(): IEchartsAssign;
    /**
     * 面积图
     */
    area(): IEchartsAssign;
    /**
     * 堆叠，提供stack-Total，如需分组堆叠需自定义
     */
    stack(): IEchartsAssign;
    /**
     * 面积堆叠
     */
    areaStack(): IEchartsAssign;
    /**
     * 渐变
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     */
    gradient(colors: string[][]): IEchartsAssign;
}
declare const _default: EchartsLineStyle;
export default _default;
