let myChart = echarts.init(document.querySelector('.data'))
setTimeout(function() {
    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2016', '2017', '2018', '2019', '2020', '2021'],
                ['全球变暖', 56.5, 82.1, 88.7, 70.1, 75.4, 71.2],
                ['物种加速灭亡', 51.1, 51.4, 55.1, 53.3, 50.8, 48.3],
                ['臭氧层破坏', 40.1, 62.2, 69.5, 60.4, 70.2, 41.5],
                ['淡水资源危机', 25.2, 60.1, 41.2, 50.0, 33.9, 32.8],
                ['能源短缺', 52.2, 47.1, 50.2, 45.0, 35.9, 27.0]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [{
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            }, {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {
                    focus: 'self'
                },
                label: {
                    formatter: '{b}: {@2016} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2016',
                    tooltip: '2016'
                }
            }
        ]
    };
    myChart.on('updateAxisPointer', function(event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    myChart.setOption(option);
});