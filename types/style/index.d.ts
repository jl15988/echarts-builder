import { IEchartsAssign } from "../EchartsBuilder";
export declare function buildStyle(option: IEchartsAssign): IEchartsAssign;
declare class EchartsStyleBase {
    option: IEchartsAssign;
    build(): IEchartsAssign;
    protected setStyle(option: IEchartsAssign): void;
}
export default EchartsStyleBase;
