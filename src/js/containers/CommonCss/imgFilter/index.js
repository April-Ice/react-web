import React, {Component} from 'react'
import {Layout, Button, Row, Col, Collapse} from 'antd';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css'

import styles from './index.scss'
import codeObj from './data.js'

export default class ImgFilter extends Component {
    render() {
        const Panel = Collapse.Panel;

        function callback(key) {
            console.log(key);
        }

        
        return (
            <div className={styles.imgPage}>
                <Row gutter={24}>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.greyscale}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.greyscale}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.blur}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.blur}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.saturate}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.saturate}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.sepia}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.sepia}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.hueRotate}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.hueRotate}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.invert}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.invert}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.brightness}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.brightness}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={6}>
                        <div className={styles.imgbox}>
                            <div className={styles.imgShadow}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{codeObj.imgShadow}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        );
    }
}
