declare class ObjectUtil {
    /**
     * 深匹配，对于 source 中没有的属性不会覆盖
     * @param target 目标
     * @param sources 源
     */
    deepAssign(target: object, ...sources: object[]): object;
}
declare const _default: ObjectUtil;
export default _default;
