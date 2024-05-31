import EchartsStyleBase from "./index";
declare class EchartsSeriesCommonStyle extends EchartsStyleBase {
    static builder(): EchartsSeriesCommonStyle;
    /**
     * 渐变
     * @param colors 渐变颜色，如：[['rgb(128, 255, 165)', 'rgb(1, 191, 236)']]
     * @param index 系列下标，配置所在 series 中的下标
     */
    gradient(colors: string[][], index?: number): this;
}
export default EchartsSeriesCommonStyle;
