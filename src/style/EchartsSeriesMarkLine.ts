import EchartsStyleBase from "./index";
import {MarkerStatisticType} from "echarts/types/src/component/marker/MarkerModel";
import {MarkLine1DDataItemOption} from "echarts/types/src/component/marker/MarkLineModel";
import {MarkLine2DDataItemDimOption} from "../../types/echarts";
import {MarkLineOption} from "echarts/types/dist/shared";
import ObjectUtil from "../utils/ObjectUtil";

class EchartsSeriesMarkLine extends EchartsStyleBase {
    static builder() {
        return new EchartsSeriesMarkLine()
    }

    private initAll() {
        if (!this.option.series) this.option.series = {}
        if (!this.option.series.markLine) this.option.series.markLine = {}
        if (!this.option.series.markLine.data) this.option.series.markLine.data = []
    }

    private initIndex(index: number) {
        if (!this.option.seriesList) this.option.seriesList = []
        if (!this.option.seriesList[index]) this.option.seriesList[index] = {}
        if (!this.option.seriesList[index].markLine) this.option.seriesList[index].markLine = {}
        if (!this.option.seriesList[index].markLine.data) this.option.seriesList[index].markLine.data = []
    }

    common(type: MarkerStatisticType, index: number | 'all' = 'all', name?: string): EchartsSeriesMarkLine {
        const markLine: MarkLine1DDataItemOption = {
            type: type,
            name: name || type
        }
        if (index === 'all') {
            this.initAll()
            this.option.series.markLine.data.push(markLine)
        } else {
            this.initIndex(index)
            this.option.seriesList[index].markLine.data.push(markLine)
        }
        return this
    }

    average(index: number | 'all' = 'all', name?: string): EchartsSeriesMarkLine {
        return this.common('average', index, name || 'Avg')
    }

    max(index: number | 'all' = 'all', name?: string): EchartsSeriesMarkLine {
        return this.common('max', index, name || 'Max')
    }

    min(index: number | 'all' = 'all', name?: string): EchartsSeriesMarkLine {
        return this.common('min', index, name || 'Min')
    }

    median(index: number | 'all' = 'all', name?: string): EchartsSeriesMarkLine {
        return this.common('median', index, name || 'Med')
    }

    custom(option: MarkLine1DDataItemOption, index?: number | 'all'): EchartsSeriesMarkLine {
        if (index === 'all') {
            this.initAll()
            this.option.series.markLine.data.push(option)
        } else {
            this.initIndex(index)
            this.option.seriesList[index].markLine.data.push(option)
        }
        return this
    }

    custom2(start: MarkLine2DDataItemDimOption, end: MarkLine2DDataItemDimOption, index: number | 'all' = 'all'): EchartsSeriesMarkLine {
        if (index === 'all') {
            this.initAll()
            this.option.series.markLine.data.push([start, end])
        } else {
            this.initIndex(index)
            this.option.seriesList[index].markLine.data.push([start, end])
        }
        return this
    }

    areaPieces(area: number[], type: 'x' | 'y' = 'x', index: number | 'all' = 'all', option: MarkLineOption) {
        if (index === 'all') {
            this.initAll()
            for (let po of area) {
                this.option.series.markLine.data.push({
                    [type === 'x' ? 'xAxis' : 'yAxis']: po
                })
            }
            ObjectUtil.deepAssign(this.option.series.markLine, option)
        } else {
            this.initIndex(index)
            for (let po of area) {
                this.option.seriesList[index].markLine.data.push({
                    [type === 'x' ? 'xAxis' : 'yAxis']: po
                })
            }
            ObjectUtil.deepAssign(this.option.seriesList[index].markLine, option)
        }
        return this
    }
}

export default EchartsSeriesMarkLine
