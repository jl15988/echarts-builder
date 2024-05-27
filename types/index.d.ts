import values from "./values";
import EchartsBuilder from "./EchartsBuilder";
import { EchartsAxisType } from "./options/axis";
import { EchartsSeriesBuilder, EchartsType } from "./options/series";
import EchartsLineStyle from "./style/EchartsLineStyle";
export { EchartsBuilder, EchartsAxisType, EchartsType, EchartsSeriesBuilder, EchartsLineStyle };
declare const echartsBuilder: typeof values;
export default echartsBuilder;
