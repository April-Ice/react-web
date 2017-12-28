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

        let code1 = ` 
        .text11 {
            background: #434d56;
            color: #8c99a6;
            text-shadow: 0 -1px 1px black;
        }`;
        return (
            <div className={styles.imgPage}>
                <div className={styles.imgbox}>
                    <div className={styles.greyscale}>
                        <img src="images/a.jpg" />
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{code1}</Highlight>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
