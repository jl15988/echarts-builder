# echarts-builder

因为直接使用 echarts 太过繁杂，即使目前 echarts 支持 ts 语法，但配置仍然过于繁重，所以我们对其进行了优化增强。

使用前请先安装 echarts

```
npm i echarts
```

然后安装 echarts-builder

```
npm i @jl15988/echarts-builder
```

使用很简单，只需通过 builder 传入组件 id 或组件即可开始构建 echarts

```ts
import {BarSeriesDataOption, EchartsBuilder, EchartsLineStyle, LineSeriesDataOption} from "@jl15988/echarts-builder";
import {BarSeriesOption, LineSeriesOption} from "echarts";

const echartsBuilder = EchartsBuilder.builder("ech")
    .assign(EchartsLineStyle.smooth())
    .assign(EchartsLineStyle.gradient(
        [
            ['rgb(128, 255, 165)', 'rgb(1, 191, 236)']
        ]
    ))
    .title("echarts图表数据")
    .xAxis({
        boundaryGap: true,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    })
    .legend(['折线', '柱状'])
    // .yAxis()
    .series<LineSeriesOption, LineSeriesDataOption>("line", [150, 230, 224, 218, 135, 147, 260], '折线')
    .series<BarSeriesOption, BarSeriesDataOption>("bar", [150, 230, 224, 218, 135, 147, 260], '柱状')
console.log(echartsBuilder)
echartsBuilder.build()
```

当然，你也可以在项目入口处，通过 EchartsBuilder 进行全局化处理

```js
EchartsBuilder.defaultTooltip({
    trigger: "item"
})
EchartsBuilder.defaultXAxis({
    boundaryGap: true
})
```
