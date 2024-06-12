import EchartsStyleBase from "./index";
import {MarkPointDataItemOption} from "echarts/types/src/component/marker/MarkPointModel";
import {MarkerStatisticType} from "echarts/types/src/component/marker/MarkerModel";

class EchartsSeriesMarkPoint extends EchartsStyleBase {
    static builder() {
        return new EchartsSeriesMarkPoint()
    }

    private initAll() {
        if (!this.option.series) this.option.series = {}
        if (!this.option.series.markPoint) this.option.series.markPoint = {}
        if (!this.option.series.markPoint.data) this.option.series.markPoint.data = []
    }

    private initIndex(index: number) {
        if (!this.option.seriesList) this.option.seriesList = []
        if (!this.option.seriesList[index]) this.option.seriesList[index] = {}
        if (!this.option.seriesList[index].markPoint) this.option.seriesList[index].markPoint = {}
        if (!this.option.seriesList[index].markPoint.data) this.option.seriesList[index].markPoint.data = []
    }

    common(type: MarkerStatisticType, index: number | 'all', name?: string): EchartsSeriesMarkPoint {
        const markPoint: MarkPointDataItemOption = {
            type: type,
            name: name || type
        }
        if (index === 'all') {
            this.initAll()
            this.option.series.markPoint.data.push(markPoint)
        } else {
            this.initIndex(index)
            this.option.seriesList[index].markPoint.data.push(markPoint)
        }
        return this
    }

    max(index: number | 'all' = 'all', name?: string): EchartsSeriesMarkPoint {
        return this.common('max', index, name)
    }

    min(index: number | 'all' = 'all', name?: string): EchartsSeriesMarkPoint {
        return this.common('min', index, name)
    }

    average(index: number | 'all' = 'all', name?: string): EchartsSeriesMarkPoint {
        return this.common('average', index, name)
    }

    custom(option: MarkPointDataItemOption, index?: number | 'all'): EchartsSeriesMarkPoint {
        if (index === 'all') {
            this.initAll()
            this.option.series.markPoint.data.push(option)
        } else {
            this.initIndex(index)
            this.option.seriesList[index].markPoint.data.push(option)
        }
        return this
    }
}

export default EchartsSeriesMarkPoint
