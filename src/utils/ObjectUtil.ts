import ArrayUtil from "./ArrayUtil";

class ObjectUtil {

    /**
     * 深匹配，对于 source 中没有的属性不会覆盖
     * @param target 目标
     * @param sources 源
     */
    deepAssign(target: object, ...sources: object[]): object {
        if (!sources) {
            return target;
        }
        for (let source of sources) {
            if (typeof source !== "object") {
                continue
            }
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    const value = source[key];
                    if (value === undefined || value === null) continue
                    if (Array.isArray(value)) {
                        target[key] = ArrayUtil.deepAssign(target[key] || [], source[key])
                    } else {
                        if (typeof value !== 'object') {
                            target[key] = value
                        } else {
                            target[key] = this.deepAssign(target[key] || {}, value)
                        }
                    }
                }
            }
        }
        return target;
    }

    /**
     * 深匹配，target 不可为空，target[targetKey] 可为空，且必须是对象类型
     * @param target 目标对象
     * @param targetKey 目标对象 key
     * @param sources 源
     */
    deepAssignByKey<T extends object>(target: T, targetKey: keyof T, ...sources: object[]): object {
        if (!sources) {
            return target;
        }
        if (!target[targetKey]) {
            // @ts-ignore
            target[targetKey] = {}
        }
        // @ts-ignore
        return this.deepAssign(target[targetKey], ...sources);
    }
}

export default new ObjectUtil()
