////////////////////人才培养////////////////////
people_option = {
    title: {
        text: '全国',
        x: '5%',
        y: '2%',
        textStyle: {
            color:  '#6692e2',
            fontSize: '16',
            fontWeight: 'normal',
            top: '0',
        },
    },
    backgroundColor: 'transparent',
    color: ['#00c2ff', '#f9cf67', '#e92b77'],
    legend: {
        show: true,
        // icon: 'circle',//图例形状
        bottom: 0,
        center: 0,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#ade3ff'
        },
        data: ['2016', '2017', '2018'],
    },
    radar: [{

        indicator: [{
                text: '科研人才孵化',
                max: 100
            },
            {
                text: '先进人才引进',
                max: 100
            },
            {
                text: '人才保障支持',
                max: 100
            },
            {
                text: '重点研发机构',
                max: 100
            },
            {
                text: '科研成果转化',
                max: 100
            }
        ],

        textStyle: {
            color: 'red'
        },
        center: ['50%', '50%'],
        radius: 142,
        startAngle: 90,
        splitNumber: 3,
        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
        // shape: 'circle',
        // backgroundColor: {
        //     image:imgPath[0]
        // },
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 14, //外圈标签字体大小
                color: '#ade3ff' //外圈标签字体颜色
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgba(20,28,66,0)', 'rgba(20,28,66,0.3)', 'rgba(20,28,66,0.6)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
            emphasis: {
                lineStyle: {
                    width: 4
                }
            }
        },
        data: [{
            name: '2016',
            value: [85, 65, 55, 90, 82],
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#00c2ff'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#00c2ff'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            },
            symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
             label: {                    // 单个拐点文本的样式设置
                    normal: {
                        show: true,             // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top',        // 标签的位置。[ default: top ]
                        distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: '#fff' ]
                        fontSize: 14,           // 文字的字体大小
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                },
            itemStyle: {
                normal: { //图形悬浮效果
                    borderColor: '#00c2ff',
                    borderWidth: 2.5
                }
            },
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
        }, {
            name: '2017',
            value: [50, 20, 45, 30, 75],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#f9cf67',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#f9cf67'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#f9cf67'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            },
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
        }, {
            name: '2018',
            value: [37, 80, 12, 50, 25],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#e92b77',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#e92b77'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#e92b77'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }]
    }, ]
};
/////////////////////参数///////////////////////////////
var data = {
    title: '人工智能相关领域',
    dataName: ['人工智能', '模式识别', '神经网络', 'agent', '自然语言处理', '机器学习', '数据挖掘', '遗传算法', '信息处理', '专家系统', '粗糙集理论'],
    dataLink: [
        [
            '人工智能',
            '粗糙集理论',
            4.1,
            1
        ],
        [
            '人工智能',
            '模式识别',
            36.1,
            1
        ],
        [
            '人工智能',
            'agent',
            11.7,
            1
        ],
        [
            '人工智能',
            '机器学习',
            11.7,
            1
        ],
        [
            '人工智能',
            '遗传算法',
            5.5,
            1
        ],
        [
            '专家系统',
            '粗糙集理论',
            10.1,
            10
        ],
        [
            '专家系统',
            '模式识别',
            0.7,
            10
        ],
        [
            '专家系统',
            'agent',
            15.4,
            10
        ],
        [
            '专家系统',
            '机器学习',
            24.9,
            10
        ],
        [
            '专家系统',
            '遗传算法',
            12.8,
            10
        ],
        [
            '粗糙集理论',
            '人工智能',
            0.3,
            11
        ],
        [
            '粗糙集理论',
            '专家系统',
            17.3,
            11
        ],
        [
            '粗糙集理论',
            '神经网络',
            1.3,
            11
        ],
        [
            '粗糙集理论',
            '自然语言处理',
            19.4,
            11
        ],
        [
            '粗糙集理论',
            '数据挖掘',
            6.8,
            11
        ],
        [
            '粗糙集理论',
            '信息处理',
            12.9,
            11
        ],
        [
            '模式识别',
            '人工智能',
            41.1,
            2
        ],
        [
            '模式识别',
            '专家系统',
            3,
            2
        ],
        [
            '模式识别',
            '神经网络',
            5.1,
            2
        ],
        [
            '模式识别',
            '自然语言处理',
            9.3,
            2
        ],
        [
            '模式识别',
            '数据挖掘',
            5.6,
            2
        ],
        [
            '模式识别',
            '信息处理',
            6.3,
            2
        ],
        [
            '神经网络',
            '粗糙集理论',
            0.6,
            3
        ],
        [
            '神经网络',
            '模式识别',
            1.2,
            3
        ],
        [
            '神经网络',
            'agent',
            7.7,
            3
        ],
        [
            '神经网络',
            '机器学习',
            44.3,
            3
        ],
        [
            '神经网络',
            '遗传算法',
            4,
            3
        ],
        [
            'agent',
            '人工智能',
            0.4,
            4
        ],
        [
            'agent',
            '专家系统',
            16.4,
            4
        ],
        [
            'agent',
            '神经网络',
            1.6,
            4
        ],
        [
            'agent',
            '自然语言处理',
            24.9,
            4
        ],
        [
            'agent',
            '数据挖掘',
            4.5,
            4
        ],
        [
            'agent',
            '信息处理',
            23.6,
            4
        ],
        [
            '自然语言处理',
            '粗糙集理论',
            5.8,
            5
        ],
        [
            '自然语言处理',
            '模式识别',
            0.5,
            5
        ],
        [
            '自然语言处理',
            'agent',
            57.2,
            5
        ],
        [
            '自然语言处理',
            '机器学习',
            7.5,
            5
        ],
        [
            '自然语言处理',
            '遗传算法',
            5,
            5
        ],
        [
            '机器学习',
            '人工智能',
            0.4,
            6
        ],
        [
            '机器学习',
            '专家系统',
            23.6,
            6
        ],
        [
            '机器学习',
            '神经网络',
            6.6,
            6
        ],
        [
            '机器学习',
            '自然语言处理',
            8.3,
            6
        ],
        [
            '机器学习',
            '数据挖掘',
            5.5,
            6
        ],
        [
            '机器学习',
            '信息处理',
            14.6,
            6
        ],
        [
            '数据挖掘',
            '粗糙集理论',
            2.5,
            7
        ],
        [
            '数据挖掘',
            '模式识别',
            1.1,
            7
        ],
        [
            '数据挖掘',
            'agent',
            7.9,
            7
        ],
        [
            '数据挖掘',
            '机器学习',
            6.2,
            7
        ],
        [
            '数据挖掘',
            '遗传算法',
            24.5,
            7
        ],
        [
            '遗传算法',
            '人工智能',
            0.3,
            8
        ],
        [
            '遗传算法',
            '专家系统',
            16,
            8
        ],
        [
            '遗传算法',
            '神经网络',
            1.5,
            8
        ],
        [
            '遗传算法',
            '自然语言处理',
            8.8,
            8
        ],
        [
            '遗传算法',
            '数据挖掘',
            15.9,
            8
        ],
        [
            '遗传算法',
            '信息处理',
            39.7,
            8
        ],
        [
            '信息处理',
            '粗糙集理论',
            5.9,
            9
        ],
        [
            '信息处理',
            '模式识别',
            0.4,
            9
        ],
        [
            '信息处理',
            'agent',
            19.8,
            9
        ],
        [
            '信息处理',
            '机器学习',
            5.1,
            9
        ],
        [
            '信息处理',
            '遗传算法',
            25.9,
            9
        ],
        [
            '人工智能',
            '专家系统',
            3.6,
            1
        ],
        [
            '人工智能',
            '神经网络',
            3,
            1
        ],
        [
            '人工智能',
            '自然语言处理',
            6.8,
            1
        ],
        [
            '人工智能',
            '数据挖掘',
            12.6,
            1
        ],
        [
            '人工智能',
            '信息处理',
            4.9,
            1
        ],
        [
            '专家系统',
            '人工智能',
            0.7,
            10
        ],
        [
            '专家系统',
            '神经网络',
            1.9,
            10
        ],
        [
            '专家系统',
            '自然语言处理',
            5.2,
            10
        ],
        [
            '专家系统',
            '数据挖掘',
            10.2,
            10
        ],
        [
            '专家系统',
            '信息处理',
            18.1,
            10
        ],
        [
            '粗糙集理论',
            '模式识别',
            0.4,
            11
        ],
        [
            '粗糙集理论',
            'agent',
            30.6,
            11
        ],
        [
            '粗糙集理论',
            '机器学习',
            7.7,
            11
        ],
        [
            '粗糙集理论',
            '遗传算法',
            3.3,
            11
        ],
        [
            '模式识别',
            '粗糙集理论',
            1.9,
            2
        ],
        [
            '模式识别',
            'agent',
            15.6,
            2
        ],
        [
            '模式识别',
            '机器学习',
            3.9,
            2
        ],
        [
            '模式识别',
            '遗传算法',
            8.1,
            2
        ],
        [
            '神经网络',
            '人工智能',
            1.4,
            3
        ],
        [
            '神经网络',
            '专家系统',
            16.8,
            3
        ],
        [
            '神经网络',
            '自然语言处理',
            6.1,
            3
        ],
        [
            '神经网络',
            '数据挖掘',
            4,
            3
        ],
        [
            '神经网络',
            '信息处理',
            13.9,
            3
        ],
        [
            'agent',
            '粗糙集理论',
            6.7,
            4
        ],
        [
            'agent',
            '模式识别',
            1.6,
            4
        ],
        [
            'agent',
            '机器学习',
            8.6,
            4
        ],
        [
            'agent',
            '遗传算法',
            11.8,
            4
        ],
        [
            '自然语言处理',
            '人工智能',
            0.9,
            5
        ],
        [
            '自然语言处理',
            '专家系统',
            4.6,
            5
        ],
        [
            '自然语言处理',
            '神经网络',
            2.4,
            5
        ],
        [
            '自然语言处理',
            '数据挖掘',
            2.1,
            5
        ],
        [
            '自然语言处理',
            '信息处理',
            14,
            5
        ],
        [
            '机器学习',
            '粗糙集理论',
            5.9,
            6
        ],
        [
            '机器学习',
            '模式识别',
            1.6,
            6
        ],
        [
            '机器学习',
            'agent',
            29,
            6
        ],
        [
            '机器学习',
            '遗传算法',
            4.4,
            6
        ],
        [
            '数据挖掘',
            '人工智能',
            0.4,
            7
        ],
        [
            '数据挖掘',
            '专家系统',
            8.7,
            7
        ],
        [
            '数据挖掘',
            '神经网络',
            2.4,
            7
        ],
        [
            '数据挖掘',
            '自然语言处理',
            3.6,
            7
        ],
        [
            '数据挖掘',
            '信息处理',
            42.6,
            7
        ],
        [
            '遗传算法',
            '粗糙集理论',
            1.5,
            8
        ],
        [
            '遗传算法',
            '模式识别',
            1,
            8
        ],
        [
            '遗传算法',
            'agent',
            11.5,
            8
        ],
        [
            '遗传算法',
            '机器学习',
            3.8,
            8
        ],
        [
            '信息处理',
            '人工智能',
            0.3,
            9
        ],
        [
            '信息处理',
            '专家系统',
            13.8,
            9
        ],
        [
            '信息处理',
            '神经网络',
            5.7,
            9
        ],
        [
            '信息处理',
            '自然语言处理',
            7.9,
            9
        ],
        [
            '信息处理',
            '数据挖掘',
            15.4,
            9
        ]
    ],
    // size:20,  //默认是dataName的长度，size可自行设置，取值范围(x>=5||x<=20)
    color: [
        '#4CB7F2',
        '#458FF0',
        '#F5B751',
        '#70C6A2',
        '#70649A',
        '#4F726C',
        '#E58980',
        '#BC9F77',
        '#EDC7C7',
        '#B55D4C',
        '#69A8A0',
        '#4CB7F2',
        '#458FF0',
        '#F5B751',
        '#70C6A2',
        '#B28ECC',
        '#68A79F',
        '#E58980',
        '#BC9F77',
        '#EDC7C7',
        '#E19665',
        '#8AA38A',
        // '#B28FCE',
        // '#6DA8C1',
        // '#A4809D',
        // '#7087B6',
        // '#AAB06A',
        // '#8AA38A',
        // '#D0A28F',
        // '#58AFA2',
        // '#6FBC89',
    ]  //颜色种类根据dataName长度定制
}
//////////////////////////////////////////////

var {
    title,
    dataName,
    dataLink,
    color
} = data
var le = data.size || dataName.length;

/////////////根据dataName的多上生成球的位置//////////////////
////////////具体位置还需要根据画布大小定制并进行微调/////////
if (le == 5) {
    // dataName = [
    //     'c1', 'c2', 'c3', 'c4', '模式识别',
    // ];
    var symbolSize = 54;
    var xIndex = [
        '100', '80', '120', '85', '115',

    ];
    var yIndex = [
        '80',
        '95', '95',
        '115', '115',
    ];

} else if (le == 6) {
    // dataName = [
    //     'c1', 'c2', 'c3', 'c4', '模式识别','c6'
    // ];
    var symbolSize = 55;
    var xIndex = [
        '100', '70', '130', '70', '130', '100',

    ];
    var yIndex = [
        '80',
        '95', '95',
        '120', '120',
        '135',
    ];

} else if (le == 7) {
    var symbolSize = 50;
    // dataName = [
    //  'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7'
    //  ];
    var xIndex = [
        '100', '60', '140', '50', '150', '75',
        '125',
    ];
    var yIndex = [
        '55',
        '75', '75',
        '110', '110',
        '145', '145',
    ];

} else if (le == 8) {
    var symbolSize = 50;
    // dataName = [
    //  'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8'
    //  ];
    var xIndex = [
        '100', '60', '140', '40', '160', '60',
        '140', '100',

    ];
    var yIndex = [
        '35',
        '60', '60',
        '100', '100',
        '135', '135',
        '155',
    ];

} else if (le == 9) {
    var symbolSize = 44;
    dataName = [
        'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9'
    ];
    var xIndex = [
        '100', '40', '160', '15', '185', '40',
        '100', '160', '100',

    ];
    var yIndex = [
        '18',
        '45', '45',
        '100', '100',
        '150', '100', '150',
        '180',
    ];

} else if (le == 10) {
    var symbolSize = 44;
    /*  dataName = [
                    'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                    'c10',
                    ];*/
    var xIndex = [
        '100', '40', '160', '15', '185', '40',
        '100', '165', '75', '125',

    ];
    var yIndex = [
        '18',
        '45', '45',
        '100', '100',
        '150', '100', '145',
        '180', '180',
    ];

} else if (le == 11) {
    var symbolSize = 43;
    /*  dataName = [
                    'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                    'c10', 'c11',
                    //  ];*/
    var xIndex = [
        '100', '40', '160', '15', '185', '40',
        '70', '130', '165', '75', '125',

    ];
    var xIndex = [
        '110', '50', '170', '25', '195', '50',
        '80', '140', '175', '85', '135',

    ];
    var yIndex = [
        '20',
        '45', '45',
        '100', '100',
        '150', '100', '100', '150',
        '180', '180',
    ];

} else if (le == 12) {
    var symbolSize = 42;
    /*  dataName = [
                    'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                    'c10', 'c11', 'c12',
                    ];*/
    // var xIndex = [
    //  '100', '40', '160', '15', '185', '70', '130', '40',
    //  '70', '130', '165', '100',

    // ];
    var xIndex = [
        '110', '50', '170', '25', '195', '80', '140', '50',
        '80', '140', '175', '110',

    ];
    var yIndex = [
        '15',
        '45', '45',
        '100', '100',
        '80', '80',
        '150', '120', '120', '150',
        '180',
    ];

} else if (le == 13) {
    var symbolSize = 40;
    /*  dataName = [
                    'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                    'c10', 'c11', 'c12', 'c13',
                    ];*/
    var xIndex = [
        '100', '40', '160', '15', '185', '70', '130', '40',
        '70', '130', '165', '75', '125',

    ];
    var yIndex = [
        '15',
        '45', '45',
        '100', '100',
        '80', '80',
        '150', '120', '120', '145',
        '180', '180',
    ];


} else if (le == 14) {
    var symbolSize = 39;
    /*dataName = [
                'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                'c10', 'c11', 'c12', 'c13', 'c14',
                ];*/
    var xIndex = [
        '100', '40', '160', '15', '100', '185', '65', '135', '40',
        '75', '125', '165', '75', '125',

    ];
    var yIndex = [
        '15',
        '45', '45',
        '100', '60', '100',
        '85', '85',
        '150', '130', '130', '145',
        '180', '180',
    ];
} else if (le == 15) {
    var symbolSize = 39;
    /*  dataName = [
                    'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                    'c10', 'c11', 'c12', 'c13', 'c14', 'c15'
                    ];*/
    var xIndex = [
        '100', '40', '160', '15', '100', '185', '65', '135', '40',
        '60', '135', '165', '100', '75', '125',

    ];
    var yIndex = [
        '15',
        '45', '45',
        '100', '50', '100',
        '80', '80',
        '150', '120', '120', '145',
        '150',
        '180', '180',
    ];
} else if (le == 16) {
    var symbolSize = 38;
    /*dataName = [
                'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16',
                ];*/
    var xIndex = [
        '100', '40', '160', '15', '100', '185', '65', '135', '40',
        '60', '100', '135', '165', '100', '75', '125',

    ];
    var yIndex = [
        '15',
        '45', '45',
        '100', '50', '100',
        '80', '80',
        '150', '120', '100', '120', '145',
        '150',
        '180', '180',
    ];

} else if (le == 17) {
    var symbolSize = 36;
    /*dataName = [
                'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17',
                ];*/
    var xIndex = [
        '100', '40', '160', '15', '100', '185', '65', '135', '40',
        '60', '100', '150', '165', '83', '123', '80', '130',

    ];
    var yIndex = [
        '15',
        '45', '45',
        '100', '50', '100',
        '65', '65',
        '150', '100', '100', '100', '145',
        '140', '140',
        '180', '180',
    ];

} else if (le == 18) {

    var symbolSize = 36;
    /*  dataName = [
                    'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                    'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18',
                    ];*/
    var xIndex = [
        '100', '50', '150', '15', '100', '185', '65', '135', '15',
        '50', '100', '150', '190', '83', '123', '50', '150', '100',

    ];
    var yIndex = [
        '10',
        '25', '25',
        '65', '50', '65',
        '65', '65',
        '120', '100', '100', '100', '120',
        '140', '140',
        '165', '165',
        '185',
    ];
} else if (le == 19) {
    var symbolSize = 35;
    /*  dataName = [
                    'c1', 'c2', 'c3', 'c4', '模式识别', 'c6', 'c7', 'c8', 'c9',
                    'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18',
                    'c19'
                    ];*/
    var xIndex = [
        '100', '50', '150', '15', '100', '185', '65', '135', '10',
        '50', '100', '150', '190', '83', '123', '35', '170', '75',
        '130',

    ];
    var yIndex = [
        '10',
        '25', '25',
        '65', '50', '65',
        '65', '65',
        '110', '100', '100', '100', '110',
        '140', '140',
        '150', '150',
        '180', '180',
    ];
}
if (le == 20) {
    var symbolSize = 35;
    var xIndex = [
        '100', '50', '150', '15', '100', '185', '65', '135', '0',
        '50', '100', '150', '200', '83', '123', '15', '185', '50',
        '150', '100',
    ];
    var yIndex = [
        '0',
        '15', '15',
        '55', '50', '55',
        '65', '65',
        '100', '100', '100', '100', '100',
        '140', '140',
        '140', '140',
        '175', '175',
        '190',
    ];
}

/////////////////////////////////////////////////

function getDate() {
    let _data = [];
    for (var i = 0, le = dataName.length; i < le; i++) {
        _data.push({
            name: dataName[i],
            x: xIndex[i],
            y: yIndex[i],
            itemStyle: {
                normal: {
                    color: color[i],
                }
            },
            label: {
                normal: {
                    x: 'center',
                    y: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: '600',
                        lineHeight: '40',
                        color: '#e92b77',
                    }
                }
            },
        })
    }
    return _data;
}

function getLinks() {
    let _data = [];
    for (var i = 0, le = dataLink.length; i < le; i++) {

        _data.push({
            source: dataLink[i][0],
            target: dataLink[i][1],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: dataLink[i][2] * (.1),
                    curveness: 0.3,
                    color: color[dataLink[i][3] - 1]
                }
            },
        })
    }
    return _data;
}

var domain_option = {
    title: {
        text: title,
        x: '5%',
        y: '2%',
        textStyle: {
            color:  '#6692e2',
            fontSize: '16',
            fontWeight: 'normal',
            top: '0',
        },
    },
    // grid: {
    //  'top': '8%'
    // },
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: symbolSize,  //需要根据dataName多少进行调整
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'none'],
        edgeSymbolSize: [0, 0],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        data: getDate(),
        links: getLinks(),
    }]
};


var xData = function() {
    var data = [];
    for (var i = 2014; i < 2019; i++) {
        data.push(i + '年');
    }
    return data;
}();
var color = ['#1a9bfc', '#99da69', '#e32f46', '#7049f0', '#fa704d', '#01babc'];
var laber_list = ['科技人才', '研发机构', '科学领域', '产业发展'];
var data = [
    [13.7, 3.4, 13.5, 16.1, 7.4, 15.2],
    [17.4, 13.7, 13.5, 3.4, 15.2, 13.5],
    [13.4, 7.4, 13.7, 13.5, 16.1, 13.7],
    [3.5, 15.2, 16.1, 17.4, 13.4, 6.1],
];

var series = [];
for (var i = 0; i < 4; i++) {
    series.push({
        name: laber_list[i],
        type: 'line',
        symbolSize: 3,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
        symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        smooth: true, //是否平滑曲线显示
        showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[i]
                }, {
                    offset: 0.8,
                    color: 'rgba(255,255,255,0)'
                }], false),
                // shadowColor: 'rgba(255,255,255, 0.1)',
                shadowBlur: 10,
                opacity:0.3,
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
                lineStyle: {
                    width: 1,
                    type: 'solid' //'dotted'虚线 'solid'实线
                },
                borderColor: color[i], //图形的描边颜色。支持的格式同 color
                borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ]
                barBorderRadius: 0,
                label: {
                    show: false,
                },
                opacity:0.5,
            }
        },
        data: data[i],

    })
}
trend_option = {
    backgroundColor: 'transparent',
    legend: {
            top: 35,
            itemGap:5,
            itemWidth:5,
            textStyle: {
                color: '#fff',
                fontSize: '10'
            },
            data: laber_list
    },
    title: {
        text: '地区产学研指数趋势',
        textStyle: {
            color: '#ccc',
            fontSize: '22',
            fontWeight: 'normal',
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            lineStyle: {
                color: '#57617B'
            }
        },
        formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    grid: {
        borderWidth: 0,
        top: 60,
        bottom: 40,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#32346c'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#32346c ',
            }
        },
        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
        data: xData,
    }],
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#32346c',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#32346c ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}%',
        },
    },
    series: series,
}

/////////////////////////研发机构现状/////////////////////////////

var instdata = [156, 86, 143, 1619, 424];
var inst_title_name = ['自然科学', '农业科学', '医药科学', '工程技术', '人文社会'];
var basedata = [78, 86, 72, 81, 85];
var instColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
var instPlace =['北京'];
var inst_option = {
     title: {
        text: instPlace[0],
        textStyle: {
            color:  '#ccc',
            fontSize: '16',
            fontWeight: 'normal',
            top: '0',
        },
    },
    backgroundColor: 'transparent',
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: inst_title_name,
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#ccc',
            formatter: function(value, index) {
                return [
                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#ccc',
                    borderRadius: 15,
                    // padding: 5,
                    align: 'center',
                    width: 15,
                    height: 15
                },
            }
        },


    }, {
        show: true,
        inverse: true,
        data: instdata,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#ccc',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data:basedata,
        barWidth: 15,
        itemStyle: {
            normal: {
                barBorderRadius: 15,
                color: function(params) {
                    var num = instColor.length;
                    return instColor[params.dataIndex % num]
                },
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            }
        },
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100,100,100,100,100],
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15,
            }
        }
    }, ]
};
//////////////////产业///////////////////
      /**
       * [setCatData 设置category]
       * @param {[type]} arr [description]
       * @param {[type]} n   [description]
       */
      function setCatData(arr, n, sm) {
          for (var i = 0; i < arr.length; i++) {
              if (i === 0) {
              listdata.push({
                  "name": arr[i],
                  "symbolSize": sm || 10,
                  "category": n,
                  "label": {
                      "normal": {
                          "show": true,
                          "position":"right",
                          "textStyle": {
                              "color": colors[n]
                          }
                      }
                  }
              })

              } else {
              listdata.push({
                  "name": arr[i],
                  "symbolSize": sm || 10,
                  "category": n,
                  "label": {
                      "normal": {
                          //   "show": true,
                          "textStyle": {
                              "color": colors[n]
                          }
                      }
                  }
              })
              }

          }
      }
      /**
       * [setLinkData 设置关键链]
       * @param {[type]} arr   [description]
       * @param {[type]} title [description]
       */
      function setLinkData(arr, title) {
          for (var i = 0; i < arr.length; i++) {
              links.push({
                  "source": arr[i],
                  "target": title
              })
          }
      }
      var legendes = ['去中心化', '长尾效应', '场景化', '重模式和轻模式', '云计算和大数据', 'UGC、PGC、OGC', '区块链', '众创众包众筹', '去电商化','年度热词'];
      // var colors = ['#dc44c8', '#6444dc', '#dc4474', '#dc4444', '#68b6ef', '#68efb8', '#ef9b68', '#4c6492', '#4a561a', '#fff'];
      //   var colors = ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'];
      var colors = ['#72d3f9', '#4185f7', '#62abe1', '#3060ba', '#0057a6', '#00a3d0', '#03a7dc', '#16dcdc', '#2976b2', '#2976b2'];

      var texts = [];
      for (var i = 0; i < legendes.length; i++) {
          texts.push({
              "name": legendes[i],
              "itemStyle": {
                  "normal": {
                      "color": colors[i],
                      //   "borderWidth": 30,
                      "shadowBlur": 15,
                      "shadowColor": colors[i],
                      //   color: '#66ff00',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      borderWidth: 6
                  }
              }
          })
      }
      var listdata = [];
      var cat1 = ['去中心化','新媒体', '虚拟货币', '传播方式', '碎片化', '传播模式'];
      var cat2 = ['长尾效应','互联网', '商业银行', '推荐系统', '电子商务'];
      var cat3 = [ '场景化','虚拟现实', 'vrml', '可视化', '大数据', '碰撞检测'];
      var cat4 = [ '重模式和轻模式','轻资产',  '培养模式', '教学改革', '重组模式', '管育并重', '轻化工程'];
      var cat5 = [ '云计算和大数据', '虚拟化', '网格计算', '计算模式', '物联网', '云制造', 'mapreduce'];
      var cat6 = ['UGC、PGC、OGC', '视频网站', 'galaxies', '内容生产', '自媒体', '内容营销', '网络直播'];
      var cat7 = ['区块链', '数字货币', '金融科技', '比特币', '互联网金融', '人工智能'];
      var cat8 = ['众创众包众筹','互联网平台', '支撑平台', '创业创新', '分享经济'];
      var cat9 = ['去电商化','消费者', '跨境电商', '价格战', '农产品', '商业模式'];
      var cat10 = ['2017'];

      // 拼装数据
      setCatData(cat1, 0)
      setCatData(cat2, 1)
      setCatData(cat3, 2)
      setCatData(cat4, 3)
      setCatData(cat5, 4)
      setCatData(cat6, 5)
      setCatData(cat7, 6)
      setCatData(cat8, 7)
      setCatData(cat9, 8)
      setCatData(cat10, 9, 10)
      var links = [];

      setLinkData(cat1, "去中心化");
      setLinkData(cat2, "长尾效应");
      setLinkData(cat3, "场景化");
      setLinkData(cat4, "重模式和轻模式");
      setLinkData(cat5, "云计算和大数据");
      setLinkData(cat6, "UGC、PGC、OGC");
      setLinkData(cat7, "区块链");
      setLinkData(cat8, "众创众包众筹");
      setLinkData(cat9, "去电商化");
      setLinkData(legendes, "2017");

       var planePath = 'circle';
      var product_option = {
          backgroundColor: 'transparent',
          legend: {
              data: legendes,
              textStyle: {
                  color: '#fff'
              },
              icon: 'circle',
              type: 'scroll',
              orient: 'vertical',
              left: 10,
              top: 10,
              bottom: 10,
              itemWidth: 10,
              itemHeight: 10

              // width:5,
              // height:5,
              // borderWidth:1,
              // barBorderRadius:10
          },
          tooltip: {
              formatter: function(parmes) {
                  if (parmes.data.name) {
                      return legendes[parmes.data.category] + ">" + parmes.name;
                  }
              }
          },
          animationDurationUpdate: 300,
          animationEasingUpdate: 'quinticInOut',
          series: [{
              type: 'graph',
              layout: 'force',
              symbol: planePath,
              symbolSize: 5,
              roam: true,
              //   focusNodeAdjacency: false,
              focusNodeAdjacency: true,
              legendHoverLink: true,
              draggable: true,
              force: {
                  repulsion: 30,
                  gravity: 0.03,
                  edgeLength: 50,
                  layoutAnimation: true
              },
              categories: texts,
              data: listdata,
              links: links
          }]
      };