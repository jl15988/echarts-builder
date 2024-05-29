import {IEchartsAssign} from "../EchartsBuilder";

class EchartsStyleBase {
    option: IEchartsAssign = {}

    build() {
        return this.option
    }
}

export default EchartsStyleBase
