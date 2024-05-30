import EchartsStyleBase from "./index";
declare class EchartsPieStyle extends EchartsStyleBase {
    static builder(): EchartsPieStyle;
    /**
     * 环形圆角
     */
    doughnutRounded(): EchartsPieStyle;
    /**
     * 半圆
     */
    halfDoughnut(): EchartsPieStyle;
    /**
     * 南丁格尔玫瑰图
     */
    nightingale(): EchartsPieStyle;
}
export default EchartsPieStyle;
