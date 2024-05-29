declare class ObjectUtil {
    /**
     * 深匹配，对于 source 中没有的属性不会覆盖
     * @param target 目标
     * @param sources 源
     */
    deepAssign(target: object, ...sources: object[]): object;
    /**
     * 深匹配，target 不可为空，target[targetKey] 可为空，且必须是对象类型
     * @param target 目标对象
     * @param targetKey 目标对象 key
     * @param sources 源
     */
    deepAssignByKey<T extends object>(target: T, targetKey: keyof T, ...sources: object[]): object;
}
declare const _default: ObjectUtil;
export default _default;
