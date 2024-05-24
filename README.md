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

```js
import {EchartsBuilder, EchartsType} from "echarts-builder";

EchartsBuilder.builder("ech")
    .title("echarts图表数据")
    .xAxis(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
    .yAxis()
    .series(EchartsType.LINE, [150, 230, 224, 218, 135, 147, 260])
    .series(EchartsType.BAR, [150, 230, 224, 218, 135, 147, 260])
    .build()
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
