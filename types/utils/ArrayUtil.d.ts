declare class ArrayUtil {
    /**
     * 深匹配
     * @param targets 目标
     * @param sources 源
     */
    deepAssign(targets: any[], sources: any[]): any[];
    /**
     * 判断数组是否为二维数组
     * @param arr 数组
     */
    is2DArray(arr: any[]): boolean;
}
declare const _default: ArrayUtil;
export default _default;
