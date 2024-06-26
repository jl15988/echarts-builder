import EchartsStyleBase from "./index";
import { ZRColor } from "echarts/types/dist/shared";
declare class EchartsBarStyle extends EchartsStyleBase {
    static builder(): EchartsBarStyle;
    /**
     * 背景色，默认 rgba(180, 180, 180, 0.2)
     */
    background(color?: ZRColor): EchartsBarStyle;
}
export default EchartsBarStyle;
