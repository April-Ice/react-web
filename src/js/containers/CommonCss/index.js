import React, { Component } from 'react'
import { Link } from 'react-router'
import { Layout } from 'antd';


import styles from './index.scss'


export default class CommonMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/april/commonText">commonText</Link>
            </div>
        );
    }
}
