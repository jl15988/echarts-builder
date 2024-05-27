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
}
declare const _default: EchartsLineStyle;
export default _default;
