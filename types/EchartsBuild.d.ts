import { EChartsType } from "echarts";
import { EchartsOption } from "./options";
import { EchartsTitleOption } from "./options/title";
import { EchartsSeriesOption, EchartsType } from "./options/series";
import { EchartsAxisType, EchartsXAxisOption, EchartsYAxisOption } from "./options/axis";
import { EchartsLegendOption } from "./options/legend";
import { EchartsTooltipOption } from "./options/tooltip";
declare class EchartsBuild {
    instance: EChartsType | undefined;
    option: EchartsOption;
    constructor(element: string | HTMLElement | null);
    build(): void;
    /**
     * 标题组件，包含主标题和副标题
     * @param text 标题内容
     * @param subtext 副标题内容
     */
    title(text: string, subtext?: string): EchartsBuild;
    /**
     * 标题组件，包含主标题和副标题
     * @param option 标题配置
     */
    title(option: EchartsTitleOption): EchartsBuild;
    series(type: EchartsType, data: any[], option: EchartsSeriesOption): this;
    /**
     * x 轴
     * @param title x 轴数据
     * @param type x 轴类型
     */
    xAxis(title: any[], type?: EchartsAxisType): EchartsBuild;
    /**
     * x 轴
     * @param option x 轴配置
     */
    xAxis(option: EchartsXAxisOption): EchartsBuild;
    /**
     * y 轴
     * @param title y 轴数据
     * @param type y 轴类型
     */
    yAxis(title: any[], type?: EchartsAxisType): EchartsBuild;
    /**
     * y 轴
     * @param option y 轴配置
     */
    yAxis(option: EchartsYAxisOption): EchartsBuild;
    /**
     * 提示框组件
     */
    tooltip(option: EchartsTooltipOption | "item" | "axis" | "none"): this;
    legend(option: EchartsLegendOption): void;
}
export default EchartsBuild;
