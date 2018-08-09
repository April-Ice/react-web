import React, {Component} from 'react'
import {Layout, Button, Row, Col, Collapse} from 'antd';

// import Highlight from 'react-highlight';
import PropTypes from 'prop-types'
import ParticleEffectButton from 'react-particle-effect-button'

import styles from './index.scss'

export default class CommonButton extends Component {
    constructor(){
        super();
        this.state ={
            hidden: false
        }
    }
    
    render() {
        return (
            <div className={styles.pageCon}>
                 <ParticleEffectButton
                    color='#ff0000'
                    hidden={this.state.hidden}
                >
                    BUTTON CONTENT GOES HERE
                    <button
                        style={{
                        background: '#121019',
                        color: '#fff',
                        padding: '1.5rem 3rem',
                        border: '0',
                        borderRadius: 5,
                        cursor: 'pointer',
                        fontSize: '1.2em',
                        }}
            onClick={this._onToggle}
          >
          aaa
          </button>
                </ParticleEffectButton>
                <p>
                    执行命令
                </p>
                <p>
                    npm install --save react-particle-effect-button
                </p>
                <p>
                    git地址：https://github.com/transitive-bullshit/react-particle-effect-button
                </p>
            </div>
        );
    }
}
