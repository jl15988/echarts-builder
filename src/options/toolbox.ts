import {ToolboxComponentOption} from "echarts";
import {ToolboxSaveAsImageFeatureOption} from "echarts/types/src/component/toolbox/feature/SaveAsImage";
import {ToolboxRestoreFeatureOption} from "echarts/types/src/component/toolbox/feature/Restore";
import {ToolboxDataViewFeatureOption} from "echarts/types/src/component/toolbox/feature/DataView";
import {ToolboxDataZoomFeatureOption} from "echarts/types/src/component/toolbox/feature/DataZoom";
import {ToolboxMagicTypeFeatureOption} from "echarts/types/src/component/toolbox/feature/MagicType";
import {ToolboxBrushFeatureOption} from "echarts/types/src/component/toolbox/feature/Brush";
import {ToolboxFeatureOption} from "echarts/types/src/component/toolbox/featureManager";

interface EchartsToolboxFeatureOption {
    // 保存为图片
    saveAsImage?: ToolboxSaveAsImageFeatureOption
    // 配置项还原
    restore?: ToolboxRestoreFeatureOption
    // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
    dataView?: ToolboxDataViewFeatureOption
    // 数据区域缩放。目前只支持直角坐标系的缩放
    dataZoom?: ToolboxDataZoomFeatureOption
    // 动态类型切换
    magicType?: ToolboxMagicTypeFeatureOption
    // 选框组件的控制按钮
    brush?: ToolboxBrushFeatureOption

    [key: string]: ToolboxFeatureOption | {
        [key: string]: any;
    } | undefined;
}

export interface EchartsToolboxOption extends ToolboxComponentOption {
    /**
     * 各工具配置项
     *
     * 除了各个内置的工具按钮外，还可以自定义工具按钮
     *
     * 注意，自定义的工具名字，只能以 my 开头
     */
    feature?: EchartsToolboxFeatureOption
}

export type FeatureType = "saveAsImage" | "restore" | "dataView" | "dataZoom" | "brush" | ("line" | "bar" | "stack")[]
