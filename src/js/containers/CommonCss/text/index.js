import React, { Component } from 'react'
import { Layout } from 'antd';
import Highlight from 'react-highlight';
import styles from './index.scss'


export default class CommonText extends Component {
    render() {
        return (
            <div>
                <div class="content">
                    <div class="row">
                        <div class="textbox text1-1">
                            1.1 文字效果 text-shadow
                        </div>
                        <pre>
                            <code>
                                .text1-1 background: #434d56; 
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}
