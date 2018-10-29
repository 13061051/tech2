(function ($) {
    var fontFamily = 'PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans'



    $.fn.wordCloud = function (wordsMap) {
        if (!this.data('words')) {
            this.data('words', new WordCloud(this, wordsMap));
        } else {
            this.data('words').update(wordsMap);
        }
    };


    function WordCloud($el, wordsMap) {
        this.$el = $el;
        this.wordsMap = wordsMap;
        this.chart = echarts.init(this.$el.get(0));
        this.draw();
    };

    WordCloud.prototype.draw = function () {
        var option = this.getEchartsOption();
        this.chart.clear();
        this.chart.setOption(option);
    };

    WordCloud.prototype.update = function (wordsMap) {
        this.wordsMap = wordsMap;
        this.draw();
    };

    WordCloud.prototype.getEchartsOption = function () {
        let data = [];
        let wordsMap = this.wordsMap;
        for (let word in wordsMap) {
            data.push({
                name: word,
                value: wordsMap[word]
            });
        }


        let option = {
            series: [{
                type: 'wordCloud',

                // The shape of the "cloud" to draw. Can be any polar equation represented as a
                // callback function, or a keyword present. Available presents are circle (default),
                // cardioid (apple or heart shape curve, the most known polar equation), diamond (
                // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

                shape: 'circle',

                // A silhouette image which the white area will be excluded from drawing texts.
                // The shape option will continue to apply as the shape of the cloud to grow.

                // maskImage: maskImage,

                // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
                // Default to be put in the center and has 75% x 80% size.

                left: 'center',
                top: 'center',
                width: '70%',
                height: '80%',
                right: null,
                bottom: null,

                // Text size range which the value in data will be mapped to.
                // Default to have minimum 12px and maximum 60px size.

                sizeRange: [12, 60],

                // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

                rotationRange: [-60, 60],
                rotationStep: 30,

                // size of the grid in pixels for marking the availability of the canvas
                // the larger the grid size, the bigger the gap between words.

                gridSize: 8,

                // set to true to allow word being draw partly outside of the canvas.
                // Allow word bigger than the size of the canvas to be drawn
                drawOutOfBound: false,

                // Global text style
                textStyle: {
                    normal: {
                        fontFamily: fontFamily,
                        fontWeight: 'bold',
                        // Color can be a callback function or a color string
                        color: function () {
                            let offset = 100;
                            // Random color
                            return 'rgb(' + [
                                Math.round(offset + Math.random() * 155),
                                Math.round(offset + Math.random() * 155),
                                Math.round(offset + Math.random() * 155)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: data
            }]
        }

        return option;
    };

    WordCloud.prototype.override = function (chartOption) {
        if (this.options.override) {
            this.options.override(chartOption)
        }
    };



})(jQuery);