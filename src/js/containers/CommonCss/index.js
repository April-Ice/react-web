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
                </Row>
            </div>
        );
    }
}
