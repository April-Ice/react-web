import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './mapAni.scss'

export default class GDMap extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log("gd_map");
        let map = new AMap.Map('container_id', {
            mapStyle: 'amap://styles/darkblue'
        });

        let colors = ['#0cc2f2','#4fd2b1','#90e36f','#ffe700','#ff9e00','#ff6700','#ff1800'];

        AMapUI.load(['ui/misc/PathSimplifier', 'ui/misc/PointSimplifier', 'lib/$'], function (PathSimplifier,PointSimplifier, $) {
            
            let pointSimplifierIns2 = new PointSimplifier({
                zIndex: 115,
                autoSetFitView: false,
                map: map, //所属的地图实例

                getPosition: function (item) {
                    if (!item) {
                        return null;
                    }
                    let parts = item.split(',');
                    return [parseFloat(parts[0]), parseFloat(parts[1])];
                },
                getHoverTitle: function (dataItem, idx) {
                    return '序号: ' + idx;
                },
                //使用GroupStyleRender
                renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                renderOptions: {
                    eventSupport: false, //禁止事件,对性能更友好
                    //点的样式
                    pointStyle: {
                        fillStyle: null,
                        width: 20,
                        height: 20
                    },
                    topNAreaStyle: null,
                    getGroupId: function (item, idx) { //随机返回一个组ID
                        return Math.ceil(colors.length * Math.random());
                    },
                    groupStyleOptions: function (gid) {
                        //随机设置大小
                        var radius = 12 + 8 * Math.random();
                        return {
                            pointStyle: radius > 0 ? {
                                content: function (ctx, x, y, width, height) {
                                    var p = {
                                        x: x + width / 2,
                                        y: y + height / 2,
                                        radius: radius
                                    };

                                    ctx.beginPath();
                                    var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x,
                                        p.y, p.radius);
                                    gradient.addColorStop(0, "rgba(37,165,247,0.9)");
                                    gradient.addColorStop(1, "rgba(255,255,22,0.3)");
                                    ctx.fillStyle = gradient;
                                    ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
                                    ctx.fill();
                                },

                                // fillStyle: colors[gid % colors.length],
                                width: radius * 2,
                                height: radius * 2
                            } : null,
                            pointHardcoreStyle: {
                                width: radius * 2 + 3,
                                height: radius * 2 + 3
                            }
                        };
                    }
                }

            });
            //重复render
            setInterval(function () {
                pointSimplifierIns2.render();
            }, 500);
            let dataPoint = ['123.38, 41.8'];
            pointSimplifierIns2.setData(dataPoint.slice(0, 5000));


            let pathSimplifierIns = new PathSimplifier({
                zIndex: 100,
                //autoSetFitView:false,
                map: map, //所属的地图实例
        
                getPath: function (pathData, pathIndex) {
                    return pathData.path;
                },
                getHoverTitle: function (pathData, pathIndex, pointIndex) {
                    return pathData.name ;
                },
                renderOptions: {
                    renderAllPointsIfNumberBelow: 100, //绘制路线节点，如不需要可设置为-1
                      //路径的样式
                      pathLineStyle: {
                        strokeStyle: 'rgba(97, 230, 223,0.6)',
                        lineWidth: 1,
                        dirArrowStyle: true
                    },
                }
            });
        
            window.pathSimplifierIns = pathSimplifierIns;
        
            var QDtoSY = [
                [120.33, 36.07],
                [123.38, 41.8],
            ]
            var QDtoSYplane = [
                [120.33, 36.07],
                [121.586156,38.483935],
            ]
            var QDtoSYBg = [
                [121.586156,38.483935],
                [123.38, 41.8],
            ]
        
            //设置数据
            pathSimplifierIns.setData([{
                name: '青岛-沈阳',
                path: QDtoSY
            }, {
                name: '等待到达',
                path: QDtoSYBg
            }, {
                name: '已经行驶路程',
                path: QDtoSYplane
            }]);
            
            //对第三条线路（即索引 0）创建一个巡航器
            var navg1 = pathSimplifierIns.createPathNavigator(2, {
                zIndex: 180,
                // loop: true, //循环播放
                speed: 1000000, //巡航速度，单位千米/小时
                pathNavigatorStyle: {
                    initRotateDegree: 0,
                    width: 16,
                    height: 16,
                    autoRotate: true,
                    lineJoin: 'round',
                    content: 'plane_icon',
                    fillStyle: '#ff0000',
                    strokeStyle: '#ff0000', //'#eeeeee',
                    lineWidth: 5,
                    pathLinePassedStyle: {
                        lineWidth: 2,
                        strokeStyle: 'rgba(7, 200, 39, 0.6)',
                        borderWidth: 0,
                        // borderStyle: '#eeeeee',
                        dirArrowStyle: true
                    }
                }

            });
            navg1.start();
            //对第二条线路（即索引 0）创建一个动态轨迹
            var navg2 = pathSimplifierIns.createPathNavigator(1, {
                loop: true, //循环播放
                speed: 400000, //巡航速度，单位千米/小时
                pathNavigatorStyle: {
                    initRotateDegree: 0,
                    width: 20,
                    height: 20,
                    autoRotate: true,
                    lineJoin: 'round',
                    content: 'defaultArrow',
                    fillStyle: 'rgba(0,0,0,1)',
                    strokeStyle: '', //'#eeeeee',
                    lineWidth: 1,
                    borderWidth: 0,
                    pathLinePassedStyle: {
                        lineWidth: 1,
                        strokeStyle: 'rgba(99, 155, 202, 0.2)',
                        borderWidth: 0,
                        borderStyle: '#eeeeee',
                        dirArrowStyle: false
                    }
                }
            });
            navg2.start();
            });
    }

render() {
    return (
        <div className={styles.conBox}>
            <div id='container_id' className={styles.chartBox} ></div>
            <div className={styles.map_board}>
                <p className={styles.title}>显示运输信息</p>
            </div>
        </div>
    );
}
}