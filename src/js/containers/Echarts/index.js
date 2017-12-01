import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'antd';

export default class EchartsList extends Component {
    render() {
        return (
            <div>
                <Link to="/april/mapAni"> 
                    <Button type="primary">MapAni</Button>
                </Link>
            </div>
        );
    }
}
