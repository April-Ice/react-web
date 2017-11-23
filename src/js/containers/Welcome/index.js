import React, {Component} from 'react'
import {Link, hashHistory} from 'react-router'
import {Tabs, Icon, Button} from 'antd';

import Actions from '../../actions';
import {TopHeader, SideAntd, Footer} from '../../components'
import styles from './index.scss'
import classnames from 'classnames'

const TabPane = Tabs.TabPane;

export default class Welcome extends Component {

    handleScroll() {
        console.log('鼠标滚动事件');
        hashHistory.push({  
            pathname: '/april/',  
            query: { },  
        })      
    }

    render() {
        return (
            <div>
                <div className={classnames(styles.section, styles.s1)} onWheel={this.handleScroll}>
                    <header>
                        <h1>
                            Hello,world
                        </h1>
                    </header>
                    <section className={styles.ssStyleTriangles}>
                        <div className={styles.columnLeft}>
                            <h1>April随想</h1>
                            <p>
                                曾经的梦想是仗剑天涯。现在则期待自己成为一个前端大神。<br/>
                                人生总是过得很匆忙，追求和理想也会不断的变化。
                                <br/>
                                时光总是悄然雕琢你我，
                                <br/>
                                平淡中创造闪光。
                            </p>
                        </div>
                        <div className={styles.columnRight}>
                            <Link to='/april'>
                                <div className={styles.imgBox}>
                                    {/* <img src="images/a.jpg"/> */}
                                </div>
                                <div className={styles.arrow} />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
