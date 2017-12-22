import React, {Component} from 'react'
import {Link} from 'react-router'
import {Button, Row, Col} from 'antd';

import ReactEcharts from 'echarts-for-react';
import Echarts from 'echarts'

import styles from './mapAni.scss'

export default class Charts extends Component {
    constructor() {
        super();
        this.options1 = {};
        this.options2 = {};
        // this.myChart1;
        this.myChart2;
        const option = {
            title: {
                text: ''
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            legend: {
                x: "center",
                show: false,
                data: ["朋友", "战友", '亲戚']
            },
            series: [
        
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 45,
                    focusNodeAdjacency: true,
                    roam: true,
                    categories: [{
                        name: '朋友',
                        itemStyle: {
                            normal: {
                                color: "#009800",
                            }
                        }
                    }, {
                        name: '战友',
                        itemStyle: {
                            normal: {
                                color: "#4592FF",
                            }
                        }
                    }, {
                        name: '亲戚',
                        itemStyle: {
                            normal: {
                                color: "#3592F",
                            }
                        }
                    }],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 12
                            },
                        }
                    },
                    force: {
                        repulsion: 1000
                    },
                    edgeSymbolSize: [4, 50],
                    edgeLabel: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 10
                            },
                            formatter: "{c}"
                        }
                    },
                    data: [{
                        name: '徐贱云',
                        draggable: true,
                    }, {
                        name: '冯可梁',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '邓志荣',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '李荣庆',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '郑志勇',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '赵英杰',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '王承军',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '陈卫东',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '邹劲松',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '赵成',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '陈现忠',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '陶泳',
                        category: 1,
                        draggable: true,
                    }, {
                        name: '王德福',
                        category: 1,
                        draggable: true,
                    }],
                    links: [{
                        source: 0,
                        target: 1,
                        category: 0,
                        value: '朋友'
                    }, {
                        source: 0,
                        target: 2,
                        value: '战友'
                    }, {
                        source: 0,
                        target: 3,
                        value: '房东'
                    }, {
                        source: 0,
                        target: 4,
                        value: '朋友'
                    }, {
                        source: 1,
                        target: 2,
                        value: '表亲'
                    }, {
                        source: 0,
                        target: 5,
                        value: '朋友'
                    }, {
                        source: 4,
                        target: 5,
                        value: '姑姑'
                    }, {
                        source: 2,
                        target: 8,
                        value: '叔叔'
                    }, {
                        source: 0,
                        target: 12,
                        value: '朋友'
                    }, {
                        source: 6,
                        target: 11,
                        value: '爱人'
                    }, {
                        source: 6,
                        target: 3,
                        value: '朋友'
                    }, {
                        source: 7,
                        target: 5,
                        value: '朋友'
                    }, {
                        source: 9,
                        target: 10,
                        value: '朋友'
                    }, {
                        source: 3,
                        target: 10,
                        value: '朋友'
                    }, {
                        source: 2,
                        target: 11,
                        value: '同学'
                    }],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 1,
                            curveness: 0
                        }
                    }
                }
            ]
        };
    }

    componentDidMount() {
        this.fetchOption();
    }

    fetchOption = () =>{
        // this.myChart1 = Echarts.init(document.getElementById('finish'));
        this.myChart2 = Echarts.init(document.getElementById('person'));
        this.options1 = {
            color: ['#5793f3', '#fe0000'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 60,
                data: [
                    '车辆数', '运单数'
                ],
                right: '40%',
                top: 20,
                textStyle: {
                    fontSize: 12,
                    color: '#F1F1F3'
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '15%',
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: ' #fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '运单数'
                            }
                        }
                    },
                    data: [
                        "8:00",
                        "10:00",
                        "12:00",
                        "2:00",
                        "4:00",
                        "6:00"
                    ]
                }, {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#132760'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '车辆数'
                            }
                        }
                    },
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: ' #fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#132760'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '运单数',
                    type: 'line',
                    xAxisIndex: 1,
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 4,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: [
                        2.6,
                        5.9,
                        9.0,
                        26.4,
                        28.7,
                        0.7,
                        48.7,
                        18.8,
                        6.0,
                        2.3
                    ]
                }, {
                    name: '车辆数',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 4,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: [
                        3.9,
                        5.9,
                        11.1,
                        68.7,
                        8.3,
                        0.7
                    ]
                }
            ]
        };
        this.options2 ={
            color: ['#4882ff'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [
                        '张姐',
                        '王功伟',
                        '张旭',
                        '李小东',
                        '刘宏伟',
                        '张倩'
                    ],
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: ' #fff'
                        }
                    },
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: ' #fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#132760'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '40%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    data: [
                        200,
                        400,
                        700,
                        500,
                        700,
                        400
                    ]
                }
            ]
        };
        this.drawEcharts(); 
    }
    drawEcharts = () =>{
        // this.myChart1.setOption(this.options1, true);
        this.myChart2.setOption(this.options2, true);
        window.onresize = () => {
            // this.myChart1.resize();
            this.myChart2.resize();
        }
    }


    render() {
        return (
            <div>
                {/* <ReactEcharts
                    option={this.option}
                    style={{height: '300px', width: '100%'}}
                    className={'react_for_echarts'}
                /> */}
                <Row gutter={16}>
                    <Col span={12}>
                        <ReactEcharts
                            option={this.options1}
                            style={{height: '300px', width: '100%'}}
                            className={'react_for_echarts'}
                        />
                        {/* <div className={styles.bottomBox} id='finish'></div> */}
                    </Col>
                    <Col span={12}>
                        <div className={styles.bottomBox} id='person'></div>
                    </Col>
                </Row>
            </div>
        )
    }
}