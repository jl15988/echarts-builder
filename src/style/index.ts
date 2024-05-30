import {IEchartsAssign} from "../EchartsBuilder";
import ObjectUtil from "../utils/ObjectUtil";

export function buildStyle(option: IEchartsAssign) {
    return option;
}

class EchartsStyleBase {
    option: IEchartsAssign = {}

    build() {
        return this.option
    }

    protected setStyle(option: IEchartsAssign) {
        ObjectUtil.deepAssign(this.option, option)
    }
}

export default EchartsStyleBase
