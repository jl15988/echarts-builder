import {
    ItemStyleOption,
    LineStyleOption,
    SeriesLineLabelOption,
    StatesMixinBase,
    StatesOptionMixin,
    SymbolOptionMixin
} from "echarts/types/src/util/types";
import {MarkerPositionOption} from "echarts/types/src/component/marker/MarkerModel";

export interface GradientColorStop {
    offset: number;
    color: string;
}

export interface MarkLineStateOption {
    lineStyle?: LineStyleOption;
    /**
     * itemStyle for symbol
     */
    itemStyle?: ItemStyleOption;
    label?: SeriesLineLabelOption;
}

export interface MarkLineDataItemOptionBase extends MarkLineStateOption, StatesOptionMixin<MarkLineStateOption, StatesMixinBase> {
    name?: string;
}

export interface MarkLine2DDataItemDimOption extends MarkLineDataItemOptionBase, SymbolOptionMixin, MarkerPositionOption {
}
