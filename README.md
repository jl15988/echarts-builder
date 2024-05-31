# echarts-builder

[![License](https://img.shields.io/npm/l/@jl15988/echarts-builder?color=5470c6)](https://github.com/jl15988/echarts-builder/blob/master/LICENSE) [![Latest npm release](https://img.shields.io/npm/v/@jl15988/echarts-builder?color=91cc75)](https://www.npmjs.com/package/@jl15988/echarts-builder) [![NPM downloads](https://img.shields.io/npm/dm/@jl15988/echarts-builder.svg?label=npm%20downloads&style=flat&color=fac858)](https://www.npmjs.com/package/@jl15988/echarts-builder)

因为直接使用 echarts 太过繁杂，即使目前 echarts 支持 ts 语法，但配置仍然过于繁重，所以我们对其进行了优化增强，使构建 echarts 配置能够像写代码一样顺畅！

## 1. 安装

使用前请先安装 echarts

```
npm i echarts
```

然后安装 echarts-builder

```
npm i @jl15988/echarts-builder
```

也可以通过 CDN 引入

```js
<script src="https://unpkg.com/echarts@5.5.0/dist/echarts.js"></script>
<script src="https://unpkg.com/@jl15988/echarts-builder@1.0.1/lib/echarts-builder.min.js"></script>
```

## 2. 使用

使用很简单，只需通过 builder 传入组件 id 或组件即可开始构建 echarts

```ts
import {
    EchartsBuilder,
    EchartsLineStyle,
    EchartsTooltipStyle,
    EchartsBarStyle,
    SeriesLabelBuilder,
    SeriesLabelFormatterBuilder
} from "@jl15988/echarts-builder";

// 通过 dom 获取 echarts 构建器
const echartsBuilder = EchartsBuilder.builder("ech")
// 监听窗口变化
// ec.listenWindowResize()
// 使用 EchartsLineStyle 给折线图添加圆角、渐变效果
echartsBuilder.assign(
    EchartsLineStyle
        .builder()
        .smooth()
        .gradient(
            [
                ['rgb(128, 255, 165)', 'rgb(1, 191, 236)']
            ]
        )
        .lineGradient(150, 200)
        .build()
)

// 使用 EchartsTooltipStyle 修改提示框触发效果、内容格式化
echartsBuilder.assign(
    EchartsTooltipStyle.builder()
        .pointer("shadow")
        // .formatter("{sname} {name}: {value}")
        .formatters("{name}: {value}")
        .build()
)

// 使用 EchartsBarStyle 给柱状图添加背景
echartsBuilder.assign(
    EchartsBarStyle.builder()
        .background()
        .build()
)

// 添加 echarts 属性
echartsBuilder.title("echarts图表数据")
    .xAxis({
        type: 'category',
        boundaryGap: true,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    })
    .legend(['折线', '柱状'])
    .yAxis()
    .series("line", [150, 230, 224, 218, 135, 147, 260], '折线')
    .series("bar", [150, 230, 224, 218, 135, 147, 260], '柱状')

console.log(echartsBuilder)
// 构建渲染
echartsBuilder.build()
```

## 3. 全局配置

当然，你也可以在项目入口处，通过 EchartsBuilder 的默认方法进行全局化配置，优先级低于 echarts 构建器中的方法

```js
EchartsBuilder.defaultTooltip({
    trigger: "item"
})
EchartsBuilder.defaultXAxis({
    boundaryGap: true
})
```

## 4. 图表 label 构建器

在 series 中有一个 label，如果我们想要对它进行样式更改需要用到 formatter + rich 来完成，但这太过复杂，所以我们通过函数形式，实现了富文本构建

```js
import {
    EchartsBuilder,
    EchartsLineStyle,
    EchartsBarStyle,
    SeriesLabelBuilder,
    SeriesLabelFormatterBuilder
} from "@jl15988/echarts-builder";

const ec = EchartsBuilder.builder("ech")

// 构建 label 格式化
const labelFormatterBuilder = SeriesLabelFormatterBuilder
    .builder()
    .sname({
        color: '#6E7079',
        lineHeight: 22,
        align: 'center'
    })
    .br().hr().br().space()
    .name({
        color: '#4C5058',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 33,
        padding: [0, 0, 0, 10]
    }, "： ")
    .value({
        padding: [0, 10, 0, 0]
    })
    .pvalue({
        color: '#fff',
        backgroundColor: '#4C5058',
        padding: [3, 4],
        borderRadius: 4
    }, '%')
    .tab();

// 构建 label 配置
const labelOption = SeriesLabelBuilder
    .builder()
    .backgroundColor("#F6F8FC")
    .borderColor("#8C8D8E")
    .borderWidth(1)
    .borderRadius(4)
    .formatter(labelFormatterBuilder)
    .build()


console.log(labelOption)

// 添加 echarts 属性
ec.legend([
    'Direct',
    'Marketing',
    'Search Engine',
    'Email',
    'Union Ads',
    'Video Ads',
    'Baidu',
    'Google',
    'Bing',
    'Others'
])
.series({
    name: 'Access From',
    type: 'pie',
    selectedMode: 'single',
    radius: ['45%', '60%'],
    labelLine: {
        length: 30
    },
    data: [
        {value: 1048, name: 'Baidu'},
        {value: 335, name: 'Direct'},
        {value: 310, name: 'Email'},
        {value: 251, name: 'Google'},
        {value: 234, name: 'Union Ads'},
        {value: 147, name: 'Bing'},
        {value: 135, name: 'Video Ads'},
        {value: 102, name: 'Others'}
    ],
    label: labelOption
})
console.log(ec)
// 渲染
ec.build()
```

## 5. 配置合并

配置合并能够让 echarts 配置构建更上一层楼，通过深度合并算法实现各属性的合并能力，包括数组类配置的合并

优先级高于全局配置，且低于各属性单独的配置

由此，你的配置可以单独抽离封装，使用的时候再拿来合并到所需要的地方，减少了繁琐配置的频繁使用，解决了了大量配置占用代码空间问题

```js
// 折线图添加圆角、渐变
ec.assign(
    EchartsLineStyle
        .builder()
        .smooth()
        .gradient(
            [
                ['rgb(128, 255, 165)', 'rgb(1, 191, 236)']
            ]
        )
        // .lineGradient(150, 200)
        .build()
)

// 给特定系列添加渐变效果
ec.assign(
    EchartsSeriesCommonStyle.builder()
        .gradient(
            [
                ['rgb(128, 255, 165)', 'rgb(1, 191, 236)']
            ],
            1
        )
        .build()
)

// 指定提示框触发效果，格式化内容
ec.assign(
    EchartsTooltipStyle.builder()
        .pointer("shadow")
        // .formatter("{sname} {name}: {value}")
        .formatters("{name}: {value}")
        .build()
)

// 给柱状图添加背景
ec.assign(
    EchartsBarStyle.builder()
        .background()
        .build()
)
```

## 6. 配置库

我们根据官网示例提供了几个样式配置，如渐变折线，可通过 EchartsLineStyle.gradient 获取配置，然后通过 assign 合并到配置中

```js
ec.assign(
    EchartsLineStyle
        .builder()
        .gradient(
            [
                ['rgb(128, 255, 165)', 'rgb(1, 191, 236)']
            ]
        )
        .build()
)
```

另外，你也可以自己创建配置库，通过继承 EchartsStyleBase 你可以更好的完成构建，或者你可以使用 IEchartsAssign 类型来给对象赋予属性协助配置库的建立

```js
import {
    EchartsStyleBase
} from "@jl15988/echarts-builder";

class EchartsLineStyle extends EchartsStyleBase {

    static builder() {
        return new EchartsLineStyle()
    }

    /**
     * 平滑
     */
    smooth() {
        // 通过继承的 EchartsStyleBase 中的 setStyle 来添加属性，会自动合并到 option 中
        this.setStyle({
            series: {
                smooth: true
            }
        })
        // 返回当前实例实现链式构建
        return this
    }

    area() {

    }

    stack() {

    }

    areaStack() {

    }

    gradient() {

    }

    lineGradient() {

    }
}

// 使用

// 构建样式
const lineStyle = EchartsLineStyle.builder().smooth().build();
// 合并到 echarts 构建器
ec.assign(lineStyle)
```

或者

```js
import {
    IEchartsAssign
} from "@jl15988/echarts-builder";

const lineStyle: IEchartsAssign = {
    series: {
        smooth: true
    }
}

ec.assign(lineStyle)
```
