import { ToolboxComponentOption } from "echarts";
import { ToolboxSaveAsImageFeatureOption } from "echarts/types/src/component/toolbox/feature/SaveAsImage";
import { ToolboxRestoreFeatureOption } from "echarts/types/src/component/toolbox/feature/Restore";
import { ToolboxDataViewFeatureOption } from "echarts/types/src/component/toolbox/feature/DataView";
import { ToolboxDataZoomFeatureOption } from "echarts/types/src/component/toolbox/feature/DataZoom";
import { ToolboxMagicTypeFeatureOption } from "echarts/types/src/component/toolbox/feature/MagicType";
import { ToolboxBrushFeatureOption } from "echarts/types/src/component/toolbox/feature/Brush";
import { ToolboxFeatureOption } from "echarts/types/src/component/toolbox/featureManager";
interface EchartsToolboxFeatureOption {
    saveAsImage?: ToolboxSaveAsImageFeatureOption;
    restore?: ToolboxRestoreFeatureOption;
    dataView?: ToolboxDataViewFeatureOption;
    dataZoom?: ToolboxDataZoomFeatureOption;
    magicType?: ToolboxMagicTypeFeatureOption;
    brush?: ToolboxBrushFeatureOption;
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
    feature?: EchartsToolboxFeatureOption;
}
export type FeatureType = "saveAsImage" | "restore" | "dataView" | "dataZoom" | "brush" | ("line" | "bar" | "stack")[];
export {};
