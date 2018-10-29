(function ($) {
    var fontFamily = 'PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans'

    var NODAL_HTML = [
        '<div class="attr-modal modal fade" tabindex="-1" role="dialog" aria-labelledby="entityInfoModalTitle" aria-hidden="true">',
            '<div class="modal-dialog modal-lg">',
                '<div class="modal-content">',
                    '<div class="modal-header">',
                        '<h4 class="modal-title">详细信息</h4>',
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
                    '</div>',
                    '<div class="modal-body" style="max-height:800px;overflow:auto;">',
                        '<img class="entity-info-img center-block pb-3" style="max-width: 200px;"/>',
                        '<table class="table">',
                            '<tbody class="info-table"></tbody>',
                        '</table>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
    ].join('\n');

    /**
     * 
     * options.data:  后端传来的数据
     */
    $.fn.graph = function (options) {
        if (!this.data('graph')) {
            this.data('graph', new Graph(this, options));
        } else {
            this.data('graph').update(options);
        }
    };


    function Graph($el, options) {
        this.$el = $el;
        this.options = options;
        this.$modal = this.createModal();
        this.chart = echarts.init(this.$el.get(0));
        if (options.click !== false) {
            this.bindClickEvent();
        }
        this.draw();
    };

    Graph.prototype.draw = function () {
        var option = this.getEchartsOption();
        this.chart.clear();
        this.chart.setOption(option);
    };

    Graph.prototype.createModal = function () {
        var $div = $('<div></div>').html(NODAL_HTML);
        let $modal = $div.find('.modal');
        $('body').append($modal);
        return $modal;
    };

    Graph.prototype.update = function (options) {
        this.options = options;
        this.draw();
    };

    Graph.prototype.bindClickEvent = function () {
        var _this = this;
        this.chart.on('click', function (event) {
            if (event.dataType === 'node') {
                var neoId = event.data.neoId;
                var name = event.name;
                var $title = _this.$modal.find('.modal-title');
                var $table = _this.$modal.find('.info-table');
                var $image = _this.$modal.find('.entity-info-img');
                var url = "/api/graph/entity?id=" + neoId;

                // if(event.data.category == '游戏公司'){
                //     var url = "http://10.1.1.28:8000/api/graph/entity?name=" + encodeURIComponent(event.data.name);
                // }else{

                // }

                $image.prop('src', '');

                $title.text("正在查询...");
                
                $.getJSON(url, function (result) {
                    $title.text(name);
                    
                    if(event.data.category === '游戏'){
                        $image.prop('src', '/image/?url=' + encodeURIComponent(result['游戏图片']));
                    }

                    $table.empty();
                    for (let key in result) {
                        let value = result[key];
                        if (result.hasOwnProperty(key)) {
                            $table.append("<tr><td>" + key + "</td><td>" + value + "</td></tr>");
                        }
                    }
                });
                _this.$modal.modal();
            }
        })
    };

    Graph.prototype.getEchartsOption = function () {
        var result = this.options.data;

        let nodeSize = 80;
        let dnodeSize = 19;
        let fontSize = 14;
        let nodes = [];
        let links = [];
        let categories = [];
        let answerpath = result.answerpath || [];
        result.nodes.forEach(function (node) {
            if (!node.category) {
                node.category = node.label;
            }

            if (categories.indexOf(node.category) == -1) {
                categories.push(node.category);
            }

            node.value = node.value || 0;
            node.symbol = 'circle';
            node.symbolSize = nodeSize - node.value * dnodeSize;
            node.x = null;
            node.y = null;
            node.itemStyle = null;
            node.label = {
                normal: {
                    show: true,
                    position: 'right'
                }
            };
            nodes.push(node);
        });
        result.links.forEach(function (edge) {
            links.push(edge);
        });
        //点亮寻找的答案轨迹
        nodes.forEach(function (node) {
            if (answerpath.indexOf(node.id) >= 0)
                node.itemStyle = {
                    normal: {
                        borderColor: 'yellow',
                        borderWidth: 10
                    }
                };
        });
        links.forEach(function (link) {
            if ((answerpath.indexOf(link.source) >= 0) && (answerpath.indexOf(link.target) >= 0))
                link.lineStyle = {
                    normal: {
                        color: 'yellow',
                        width: 10
                    }
                };
        });
        categories = categories.map(category => ({
            name: category
        }));

        //开始绘制图像
        let colorPalette = ["#f44336", "#673ab7", "#607d8b", "#009688", "#e91e63", "#ff5722", "#4caf50", "#ff9800", "#8bc34a", "#00bcd4", "#9c27b0"]
        
        let theme = this.options.theme || 'white';

        let option = {
            color: colorPalette,
            backgroundColor: theme == 'white' ? '#fff' : '#050c19',
            title: {
                text: result.answer,
                top: '1%',
                left: '1%',
                textStyle: {
                    color: theme == 'white' ? '#000' : "#fff",
                    fontSize: fontSize * 1.8,
                    fontWeight: 'normal'
                },
                subtext: '图中共有 ' + result.nodes.length + ' 个节点以及 ' + result.links.length + ' 条关系',
                subtextStyle: {
                    color: theme == 'white' ? '#000' : "#fff",
                    fontSize: fontSize,
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                formatter: function (params) {
                    if (params.dataType === 'node')
                        return params.data.category;
                    else
                        return params.data.name;
                }
            },
            legend: {
                data: categories,
                bottom: '1%',
                left: '1%',
                orient: 'vertical',
                selectedMode: false,
                textStyle: {
                    color: '#333',
                    fontSize: fontSize * 0.9,
                    fontWeight: 'bold'
                }
            },
            series: [{
                type: 'graph',
                layout: 'force',
                data: nodes,
                links: links,
                // edgeSymbol: ['', 'arrow'],
                categories: categories,
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                },
                emphasis: {
                    lineStyle: {
                        width: 5
                    }
                },
                force: {
                    repulsion: 1000,
                    layoutAnimation: false
                },
                roam: true,
                focusNodeAdjacency: true,
                animationDuration: 2000
            }],
            textStyle: {
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: 'bold'
            }
        };

        this.override(option)

        return option;
    };

    Graph.prototype.override = function(chartOption){
        if(this.options.override){
            this.options.override(chartOption)
        }
    };



})(jQuery);