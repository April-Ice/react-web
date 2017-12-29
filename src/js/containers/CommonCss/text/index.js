import React, {Component} from 'react'
import {Layout, Button, Row, Col, Collapse} from 'antd';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css'

import styles from './index.scss'
import codeObj from './data.js'

export default class CommonText extends Component {
    render() {
        const Panel = Collapse.Panel;

        function callback(key) {
            // console.log(key);
        }

        return (
            <div className={styles.textPage}>
                <div className={styles.textbox}>
                    <div className={styles.text11}>
                        1.1 文字效果 text-shadow
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.code1}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text12}>
                        1.2 文字效果 text-shadow 模糊
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.code2}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text13}>
                        1.3 文字效果 text-shadow 多组阴影
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.code3}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text21}>
                        <p>2.1 内阴影 text-shadow</p>
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.code4}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text31}>
                        <p>3.1 文字扫光效果 -webkit-keyframes</p>
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.code5}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text41}>4.1 文字淡入淡出效果 -webkit-keyframes</div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.code6}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.clipText}>5.1文字镂空效果</div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.clipText}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.zebraText}>5.1文字斑马线效果</div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{codeObj.zebraText}</Highlight>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
