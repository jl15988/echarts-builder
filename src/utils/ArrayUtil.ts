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
        const result = []
        for (let i = 0; i < sources.length; i++) {
            const item = sources[i]
            if (item === undefined || item === null) {
                result.push(targets[i])
                continue
            }
            if (Array.isArray(item)) {
                result.push(this.deepAssign(targets[i] || [], item))
                continue
            } else if (typeof item === 'object') {
                result.push(ObjectUtil.deepAssign(targets[i] || {}, item))
                continue
            }
            result.push(item)
        }
        return result
    }

    /**
     * 判断数组是否为二维数组
     * @param arr 数组
     */
    is2DArray(arr: any[]) {
        return Array.isArray(arr[0]) || arr.every(item => Array.isArray(item));
    }

}

export default new ArrayUtil()
