import EchartsStyleBase from "./index";
import {ZRColor} from "../../types/echartsTypes/dist/shared";

class EchartsBarStyle extends EchartsStyleBase {
    static builder() {
        return new EchartsBarStyle()
    }

    /**
     * 背景色，默认 rgba(180, 180, 180, 0.2)
     */
    background(color: ZRColor = 'rgba(180, 180, 180, 0.2)'): EchartsBarStyle {
        this.setStyle({
            series: {
                showBackground: true,
                backgroundStyle: {
                    color: color
                }
            }
        })
        return this
    }


}

export default EchartsBarStyle
