class IDUtil {
    /**
     * 生成UUID
     * @param simple 是否简单的，为true时会去掉“-”
     */
    uuid(simple: boolean = false) {
        let d = new Date().getTime();
        let template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        if (simple) {
            template = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx";
        }
        return template.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}

export default new IDUtil()
