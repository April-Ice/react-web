import React, { Component } from 'react'
import { Layout } from 'antd';


export default class Intro extends Component {
    render() {
        return (
            <div>
                IntroDuction

                 手机调用
                <input type="file" accept="image/*" capture="camera" />  
                <input type="file" accept="video/*" capture="camcorder" />  
                <input type="file" accept="audio/*" capture="microphone" />  

            </div>
        );
    }
}
