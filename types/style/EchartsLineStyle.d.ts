import { EchartsDefaultOption } from "../EchartsBuilder";
declare class EchartsLineStyle {
    common(): EchartsDefaultOption;
    /**
     * 平滑
     */
    smooth(): EchartsDefaultOption;
    /**
     * 面积图
     */
    area(): EchartsDefaultOption;
    /**
     * 堆叠，提供stack-Total，如需分组堆叠需自定义
     */
    stack(): EchartsDefaultOption;
    /**
     * 面积堆叠
     */
    areaStack(): EchartsDefaultOption;
    /**
     * 渐变
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     */
    gradient(colors: string[][]): EchartsDefaultOption;
}
declare const _default: EchartsLineStyle;
export default _default;
