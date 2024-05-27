import values from "./values";
import EchartsBuilder from "./EchartsBuilder";
import { EchartsAxisType } from "./options/axis";
import { EchartsSeriesBuilder } from "./options/series";
import EchartsLineStyle from "./style/EchartsLineStyle";
export { EchartsBuilder, EchartsAxisType, EchartsSeriesBuilder, EchartsLineStyle };
declare const echartsBuilder: typeof values;
export default echartsBuilder;
