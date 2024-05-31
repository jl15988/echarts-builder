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
