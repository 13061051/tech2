(function ($) {
    var fontFamily = 'PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans'



    $.fn.lineChart = function (options) {
        if (!this.data('lineChart')) {
            this.data('lineChart', new LineChart(this, options));
        } else {
            this.data('lineChart').update(options);
        }
    };


    function LineChart($el, options) {
        this.$el = $el;
        this.options = options;
        this.chart = echarts.init(this.$el.get(0));
        this.draw();
    };

    LineChart.prototype.draw = function () {
        var option = this.getEchartsOption();
        this.chart.clear();
        this.chart.setOption(option);
    };

    LineChart.prototype.update = function (options) {
        this.options = options;
        this.draw();
    };

    LineChart.prototype.getEchartsOption = function () {
        let data = [];
        let options = this.options;
        
        let years = Object.keys(options.data);

        let theme = options.theme || 'white';

        var option = {
            title: {
                text: options.title || ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: years
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '1%',
                top: '4%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    // saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: years,
                axisLabel: {
                    show: true,
                    color: theme == 'white' ? '#000' : '#fff'
                },
                nameTextStyle:{
                    color:  theme == 'white' ? '#000' : '#fff' 
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    color:  theme == 'white' ? '#000' : '#fff'
                },
                nameTextStyle:{
                    color:  theme == 'white' ? '#000' : '#fff'
                }
            },
            series: this._buildLineChartSeriesData(options.data)
        };


        return option;
    };

    LineChart.prototype._buildLineChartSeriesData = function(data){
        let cityMap = {};

        for (let year in data) {
            let cityHeatValueMap = data[year];

            for (let city in cityHeatValueMap) {
                if (!(city in cityMap)) {
                    cityMap[city] = [];
                }

                cityMap[city].push(cityHeatValueMap[city]);
            }
        }

        cityList = [];

        for (let city in cityMap) {
            cityList.push({
                name: city,
                type: "line",
                data: cityMap[city]
            });
        }

        let maxLen = -1;
        cityList.sort((a, b) => {
            let aLen = a.data.length;
            let bLen = b.data.length;

            if(aLen > maxLen){
                maxLen = aLen;
            }

            if(bLen > maxLen){
                maxLen = bLen;
            }

            if(bLen != aLen){
                return bLen - aLen;
            }

            return b.data[0] - a.data[0];
        });

        if(cityList.length > 8){
            cityList = cityList.slice(0, 8);
        }

        return cityList;
    };

    LineChart.prototype.override = function (chartOption) {
        if (this.options.override) {
            this.options.override(chartOption)
        }
    };



})(jQuery);