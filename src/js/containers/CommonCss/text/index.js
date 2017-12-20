import React, {Component} from 'react'
import {Layout, Button, Row, Col} from 'antd';

import Highlight from 'react-highlight';

import styles from './index.scss'

export default class CommonText extends Component {
    render() {
        return (
            <div>
                <div className={styles.textbox}>
                    <div className={styles.text11}>
                        1.1 文字效果 text-shadow
                    </div>
                </div>

                <div className={styles.textbox}>
                    <div className={styles.text12}>
                        1.2 文字效果 text-shadow 模糊
                    </div>
                </div>

                <div className={styles.textbox}>
                    <div className={styles.text13}>
                        1.3 文字效果 text-shadow 多组阴影
                    </div>
                </div>

                <div className={styles.textbox}>
                    <div className={styles.text21}>
                        <p>2.1 内阴影 text-shadow</p>
                    </div>
                </div>

                <div className={styles.textbox}>
                    <div className={styles.text31}>
                       <p> 3.1 文字扫光效果 -webkit-keyframes</p>
                    </div>
                </div>

                <div className={styles.textbox}>
                    <div className={styles.text41}>4.1 文字淡入淡出效果 -webkit-keyframes</div>
                </div>

            </div>
        );
    }
}
