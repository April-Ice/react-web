import React, {Component} from 'react'
import {Link} from 'react-router'
import {Layout, Button, Row, Col} from 'antd';

import styles from './index.scss'

export default class BoxBorder extends Component {
    render() {
        return (
            <div className={styles.seabord}>
                <Row>
                    <Col span={6}><div className={styles.border}></div></Col>
                    <Col span={6}><div className={styles.border}></div></Col>
                    <Col span={6}><div className={styles.border}></div></Col>
                    <Col span={6}><div className={styles.border}></div></Col>
                </Row>
            </div>
        );
    }
}
