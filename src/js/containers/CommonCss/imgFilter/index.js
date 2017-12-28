import React, {Component} from 'react'
import {Layout, Button, Row, Col, Collapse} from 'antd';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css'

import styles from './index.scss'

export default class ImgFilter extends Component {
    render() {
        const Panel = Collapse.Panel;

        function callback(key) {
            console.log(key);
        }

        let greyscale = ` 
        .greyscale img {
            filter: grayscale(1);
        }
        .greyscale img:hover {
            filter: grayscale(0);
        }`;
        let blur = ` 
        .blur img {
            filter: url(/static/svg/filter.svg#blur);
            filter: blur(2px);
        }
        .blur img:hover {
            filter: blur(0);
        }`;
        let saturate = ` 
        .saturate img {
            filter: saturate(300%);
        }
        .saturate img:hover {
            filter: saturate(100%);
        }`;
        let sepia = ` 
        .sepia img {
            filter: sepia(1);
        }
        .sepia img:hover {
            filter: sepia(0);
        }`;
        let hueRotate = ` 
        .hueRotate img {
            filter: hue-rotate(30deg);
        }
        .hueRotate img:hover {
            filter: hue-rotate(0);
        }`;

        let invert = ` 
        .invert img {
            filter: invert(1);
        }
        .invert img:hover {
            filter: invert(0);
        }`;

        let brightness = ` 
        .brightness img {
            filter: brightness(50%);
        }
        .brightness img:hover {
            filter: brightness(100%);
        }`;

        let contrast = ` 
        .contrast img {
            filter: contrast(0.7);
        }
        .contrast img:hover {
            filter: contrast(1);
        }`;
        let imgShadow = ` 
        .imgShadow {
            margin-bottom: 20em;
            -webkit-box-reflect: below -8px -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(255, 255, 255, 0.5)));
        }`;

        return (
            <div className={styles.imgPage}>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.greyscale}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{greyscale}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.blur}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{blur}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.saturate}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{saturate}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.sepia}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{sepia}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.hueRotate}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{hueRotate}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.invert}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{invert}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.brightness}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{brightness}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className={styles.imgbox}>
                            <div className={styles.imgShadow}>
                                <img src="images/a.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Collapse onChange={callback}>
                            <Panel header="查看代码" key="1">
                                <Highlight>{imgShadow}</Highlight>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        );
    }
}
