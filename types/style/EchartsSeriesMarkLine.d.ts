import EchartsStyleBase from "./index";
import { MarkerStatisticType } from "echarts/types/src/component/marker/MarkerModel";
import { MarkLine1DDataItemOption } from "echarts/types/src/component/marker/MarkLineModel";
import { MarkLine2DDataItemDimOption } from "../../types/echarts";
import { MarkLineOption } from "echarts/types/dist/shared";
declare class EchartsSeriesMarkLine extends EchartsStyleBase {
    static builder(): EchartsSeriesMarkLine;
    private initAll;
    private initIndex;
    common(type: MarkerStatisticType, index?: number | 'all', name?: string): EchartsSeriesMarkLine;
    average(index?: number | 'all', name?: string): EchartsSeriesMarkLine;
    max(index?: number | 'all', name?: string): EchartsSeriesMarkLine;
    min(index?: number | 'all', name?: string): EchartsSeriesMarkLine;
    median(index?: number | 'all', name?: string): EchartsSeriesMarkLine;
    custom(option: MarkLine1DDataItemOption, index?: number | 'all'): EchartsSeriesMarkLine;
    custom2(start: MarkLine2DDataItemDimOption, end: MarkLine2DDataItemDimOption, index?: number | 'all'): EchartsSeriesMarkLine;
    areaPieces(area: number[], type: 'x' | 'y', index: number | 'all', option: MarkLineOption): this;
}
export default EchartsSeriesMarkLine;
