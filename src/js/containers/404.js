import React, { Component } from 'react'
import { Link } from 'react-router'


export default class Tour extends Component {
  render() {
    return (
      <div className="center-center-column" style={{height: '100vh'}}>
        <span style={{fontSize: '24px'}}>404!wmsfront页面没有找到，请</span>
        <Link to="/" className="main-color" style={{fontSize: '20px'}}>返回首页</Link>
      </div>
    )
  }
}