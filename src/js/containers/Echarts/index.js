import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'antd';

import EchartMapAni from './demo/mapAni.js'
import GDMap from './demo/mapAni2.js'


export default class EchartsList extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <GDMap />
                {/* <EchartMapAni/> */}
            </div>
        );
    }
}
