import EchartsStyleBase from "./index";

class EchartsPieStyle extends EchartsStyleBase {
    static builder() {
        return new EchartsPieStyle()
    }

    /**
     * 环形圆角
     */
    doughnutRounded(): EchartsPieStyle {
        this.setStyle({
            series: {
                radius: ['40%', '70%'],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
            }
        })
        return this
    }

    /**
     * 半圆
     */
    halfDoughnut(): EchartsPieStyle {
        this.setStyle({
            series: {
                radius: ['40%', '70%'],
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 360,
            }
        })
        return this
    }

    /**
     * 南丁格尔玫瑰图
     */
    nightingale(): EchartsPieStyle {
        this.setStyle({
            series: {
                radius: [20, 140],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
            }
        })
        return this
    }
}

export default EchartsPieStyle
