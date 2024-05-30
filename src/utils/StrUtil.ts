class StrUtil {

    /**
     * 字符串 Map 格式化
     * @param str 字符串
     * @param map 参数
     */
    formatMap(str: string, map: {
        [key: string]: any
    }) {
        for (let jsonKey in map) {
            str = str.replace(new RegExp(`{${jsonKey}}`, 'g'), map[jsonKey]);
        }
        return str;
    }
}

export default new StrUtil()
