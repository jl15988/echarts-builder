import EchartsStyleBase from "./index";
import { MarkPointDataItemOption } from "echarts/types/src/component/marker/MarkPointModel";
import { MarkerStatisticType } from "echarts/types/src/component/marker/MarkerModel";
declare class EchartsSeriesMarkPoint extends EchartsStyleBase {
    static builder(): EchartsSeriesMarkPoint;
    private initAll;
    private initIndex;
    common(type: MarkerStatisticType, index: number | 'all', name?: string): EchartsSeriesMarkPoint;
    max(index?: number | 'all', name?: string): EchartsSeriesMarkPoint;
    min(index?: number | 'all', name?: string): EchartsSeriesMarkPoint;
    average(index?: number | 'all', name?: string): EchartsSeriesMarkPoint;
    custom(option: MarkPointDataItemOption, index?: number | 'all'): EchartsSeriesMarkPoint;
}
export default EchartsSeriesMarkPoint;
