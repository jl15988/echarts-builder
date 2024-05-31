import { ColorString, SeriesLabelOption, TextCommonOption } from "../../../typesecharts/src/util/types";
import { Dictionary, ImageLike } from "zrender/lib/core/types";
declare class SeriesBuilder {
}
export declare class SeriesLabelFormatterBuilder {
    formatter: string;
    rich: Dictionary<TextCommonOption>;
    static builder(): SeriesLabelFormatterBuilder;
    private buildFormatter;
    /**
     * 系列名
     * @param style 样式
     * @param append 追加字符串
     */
    sname(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder;
    /**
     * 数据名
     * @param style 样式
     * @param append 追加字符串
     */
    name(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder;
    /**
     * 数据值
     * @param style 样式
     * @param append 追加字符串
     */
    value(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder;
    /**
     * 百分比
     * @param style 样式
     * @param append 追加字符串
     */
    pvalue(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder;
    /**
     * 换行
     */
    br(): SeriesLabelFormatterBuilder;
    /**
     * 横线
     */
    hr(): SeriesLabelFormatterBuilder;
    /**
     * 圆点
     * @param color 颜色
     * @param width 宽度
     */
    dot(color?: ColorString | {
        image: ImageLike | string;
    }, width?: number): SeriesLabelFormatterBuilder;
    /**
     * 空格
     */
    space(): SeriesLabelFormatterBuilder;
    /**
     * tab，占四个空格
     */
    tab(): SeriesLabelFormatterBuilder;
    /**
     * 创建一个元素
     * @param style 样式
     * @param text 文字内容
     */
    span(style?: TextCommonOption, text?: string): SeriesLabelFormatterBuilder;
    /**
     * 自定义内容
     * @param value 内容
     * @param richName 富文本名称
     * @param style 样式
     */
    custom(value: string, richName?: string, style?: TextCommonOption): SeriesLabelFormatterBuilder;
}
export declare class SeriesLabelBuilder {
    option: SeriesLabelOption;
    static builder(): SeriesLabelBuilder;
    setStyle(option: SeriesLabelOption): SeriesLabelBuilder;
    backgroundColor(color: ColorString | {
        image: ImageLike | string;
    }): SeriesLabelBuilder;
    borderColor(color: string): SeriesLabelBuilder;
    borderWidth(width: number): SeriesLabelBuilder;
    borderRadius(radius: number | number[]): SeriesLabelBuilder;
    formatter(option: SeriesLabelFormatterBuilder): SeriesLabelBuilder;
    build(): SeriesLabelOption;
}
declare const _default: SeriesBuilder;
export default _default;
