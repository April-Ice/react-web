import React, {Component} from 'react'
import {Layout, Button, Row, Col, Collapse} from 'antd';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css'

import styles from './index.scss'

export default class CommonText extends Component {
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
        let code2 = ` 
        .text12 {
            background: #191919;
            color: #ffc;
            text-shadow: 0 0 .1em, 0 0 .3em;
        }`;
        let code3 = ` 
        .text13 {
            color: #fff;
            background: hsl(0, 50%, 45%);
            text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black;
        }`;
        let code4 = ` 
        .text21 {
            background-color: #fff;
            p {
                font-weight: bold;
                font-size: 1.4em;
                color: transparent;
                background-color: #000;
                text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px, rgba(255, 255, 255, 0.2) 1px 3px 3px;
                -webkit-background-clip: text;
            }
        }`;
        let code5 = ` 
        .text31 {
            background: #191919;
        }
        
        .text31>p {
            background: -webkit-linear-gradient(90deg, #111, #fff) 0 0 no-repeat;
            -webkit-background-size: 1em;
            -webkit-background-clip: text;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.3);
            -webkit-animation: slideShine 3s infinite;
        }
        
        @keyframes slideShine {
            0% {
                background-position: 0 0;
            }
            100% {
                background-position: 100% 100%;
            }
        }`;
        let code6 = ` 
        .text41 {
            color: #000;
            animation-name: fadeIn;
            /*动画名称*/
            animation-duration: 5s;
            /*动画持续时间*/
            animation-iteration-count: 1000;
            /*动画次数*/
            animation-delay: 0s;
            /*延迟时间*/
        }
        
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }`;
        return (
            <div className={styles.textPage}>
                <div className={styles.textbox}>
                    <div className={styles.text11}>
                        1.1 文字效果 text-shadow
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{code1}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text12}>
                        1.2 文字效果 text-shadow 模糊
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{code2}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text13}>
                        1.3 文字效果 text-shadow 多组阴影
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{code3}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text21}>
                        <p>2.1 内阴影 text-shadow</p>
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{code4}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text31}>
                        <p>
                            3.1 文字扫光效果 -webkit-keyframes</p>
                    </div>
                </div>
                <Collapse onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{code5}</Highlight>
                    </Panel>
                </Collapse>
                <div className={styles.textbox}>
                    <div className={styles.text41}>4.1 文字淡入淡出效果 -webkit-keyframes</div>
                </div>
                <Collapse  onChange={callback}>
                    <Panel header="查看代码" key="1">
                        <Highlight>{code6}</Highlight>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
