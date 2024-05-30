import {ColorString, SeriesLabelOption, TextCommonOption} from "../../../types/echartsTypes/src/util/types";
import ObjectUtil from "../ObjectUtil";
import {Dictionary, ImageLike} from "zrender/lib/core/types";
import IDUtil from "../IDUtil";

type LabelPosition =
    'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'inside'
    | 'insideLeft'
    | 'insideRight'
    | 'insideTop'
    | 'insideBottom'
    | 'insideTopLeft'
    | 'insideTopRight'
    | 'insideBottomLeft'
    | 'insideBottomRight'
    | 'start'
    | 'insideStart'
    | 'middle'
    | 'insideEnd'
    | 'end'

class SeriesBuilder {

}

export class SeriesLabelFormatterBuilder {
    formatter: string = ""
    rich: Dictionary<TextCommonOption> = {}

    static builder() {
        return new SeriesLabelFormatterBuilder()
    }

    private buildFormatter(style: TextCommonOption, name?: "a" | "b" | "c" | "d" | string, append?: string) {
        const uuid = IDUtil.uuid(true);
        this.formatter += `{${uuid}|${name ? '{' + name + '}' : ''}${append || ''}}`
        this.rich[uuid.toString()] = style
    }

    /**
     * 系列名
     * @param style 样式
     * @param append 追加字符串
     */
    sname(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder {
        this.buildFormatter(style, "a", append)
        return this
    }

    /**
     * 数据名
     * @param style 样式
     * @param append 追加字符串
     */
    name(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder {
        this.buildFormatter(style, "b", append)
        return this
    }

    /**
     * 数据值
     * @param style 样式
     * @param append 追加字符串
     */
    value(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder {
        this.buildFormatter(style, "c", append)
        return this
    }

    /**
     * 百分比
     * @param style 样式
     * @param append 追加字符串
     */
    pvalue(style?: TextCommonOption, append?: string): SeriesLabelFormatterBuilder {
        this.buildFormatter(style, "d", append)
        return this
    }

    /**
     * 换行
     */
    br(): SeriesLabelFormatterBuilder {
        this.formatter += "\n"
        return this
    }

    /**
     * 横线
     */
    hr(): SeriesLabelFormatterBuilder {
        this.buildFormatter({
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
        })
        return this
    }

    /**
     * 空格
     */
    space(): SeriesLabelFormatterBuilder {
        this.formatter += " "
        return this
    }

    /**
     * tab，占四个空格
     */
    tab(): SeriesLabelFormatterBuilder {
        this.formatter += "    "
        return this
    }

    /**
     * 创建一个元素
     * @param style 样式
     */
    div(style?: TextCommonOption): SeriesLabelFormatterBuilder {
        this.buildFormatter(style)
        return this
    }

    /**
     * 自定义
     * @param value 内容
     * @param style 样式
     */
    custom(value: string, style?: TextCommonOption): SeriesLabelFormatterBuilder {
        this.formatter += value
        if (style) {
            this.rich[value] = style
        }
        return this
    }
}

export class SeriesLabelBuilder {
    option: SeriesLabelOption = {}

    static builder(): SeriesLabelBuilder {
        return new SeriesLabelBuilder()
    }

    setStyle(option: SeriesLabelOption): SeriesLabelBuilder {
        ObjectUtil.deepAssign(this.option, option)
        return this
    }

    backgroundColor(color: ColorString | {
        image: ImageLike | string;
    }): SeriesLabelBuilder {
        return this.setStyle({
            backgroundColor: color
        })
    }

    borderColor(color: string): SeriesLabelBuilder {
        return this.setStyle({
            borderColor: color
        })
    }

    borderWidth(width: number): SeriesLabelBuilder {
        return this.setStyle({
            borderWidth: width
        })
    }

    borderRadius(radius: number | number[]): SeriesLabelBuilder {
        return this.setStyle({
            borderRadius: radius
        })
    }

    formatter(option: SeriesLabelFormatterBuilder): SeriesLabelBuilder {
        this.option.formatter = option.formatter
        this.option.rich = option.rich
        return this
    }

    build(): SeriesLabelOption {
        return this.option
    }
}

export default new SeriesBuilder()
