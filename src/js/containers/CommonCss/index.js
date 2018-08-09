import React, {Component} from 'react'
import {Link} from 'react-router'
import {Layout, Button, Row, Col, Card} from 'antd';

import styles from './index.scss'

export default class CommonMenu extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <Link to="/april/commonText">
                            <Card title="文字效果" bordered={false}>扫光阴影等常见效果</Card>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Link to="/april/boxBorder">
                            <Card title="镶边边框" bordered={false}>四角镶边</Card>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Link to="/april/aniCss">
                            <Card title="CSS3动画" bordered={false}>基本样式，纯CSS3</Card>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <a href="https://uigradients.com/#Portrait" target="_blank">
                            <Card title="CSS3渐变色" bordered={false}>高质感配色方案</Card>
                        </a>
                    </Col>
                    <Col span={4}>
                        <Link to="/april/imgFilter">
                            <Card title="css图片滤镜" bordered={false}>黑白，倒影等</Card>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Link to="/april/button">
                            <Card title="button动画特效" bordered={false}>碎化消失</Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}
