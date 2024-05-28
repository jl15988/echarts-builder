import ObjectUtil from "./ObjectUtil";

class ArrayUtil {

    /**
     * 深匹配
     * @param targets 目标
     * @param sources 源
     */
    deepAssign(targets: any[], sources: any[]): any[] {
        if (!sources || !Array.isArray(sources)) {
            return targets
        }
        return sources.map((item, index) => {
            if (item === undefined || item === null) {
                return targets[index]
            }
            if (Array.isArray(item)) {
                return this.deepAssign(targets[index] || [], item);
            } else if (typeof item === 'object') {
                return ObjectUtil.deepAssign(targets[index] || {}, item);
            }
            return item;
        });
    }

}

export default new ArrayUtil()
