import React, {Component} from 'react'
import routes from '../routes'
// import {Router, browserHistory} from 'react-router'
import {Router, hashHistory} from 'react-router'

import '../../styles/app.scss'
import '../../styles/common.scss'

export default class Root extends Component {
    render() {
        //const {history} = this.props;
        return (
            // <Router history={browserHistory} routes={routes} />
            <Router history={hashHistory} routes={routes} />
        )
    }
}
