import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Row, Col, Card } from 'antd';


export default class EchartsList extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <Link to="/april/gdmap">
                            <Card title="高德轨迹图" bordered={false}>高德轨迹图</Card>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Link to="/april/mapAni">
                            <Card title="Echarts轨迹图" bordered={false}>Echarts轨迹图</Card>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Link to="/april/charts">
                            <Card title="常规图表" bordered={false}>折线图、柱形图等</Card>
                        </Link>
                    </Col>
                </Row>
            </div>
            
        );
    }
}
