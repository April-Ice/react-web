import React, {Component} from 'react'
import {Link} from 'react-router'
import {Layout, Menu, Icon} from 'antd';

import styles from './index.scss'

const {Header, Sider, Content, Footer} = Layout;

export default class April extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            children: this.props.children
        };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={styles.logo}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to='/april/intro'>
                                <Icon type="user"/>
                                <span>Intro</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/april/books'>
                                <Icon type="video-camera"/>
                                <span>Books</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span>other</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                        background: '#fff',
                        padding: 0
                    }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed
                            ? 'menu-unfold'
                            : 'menu-fold'}
                            onClick={this.toggle}/>
                    </Header>
                    <Content
                        style={{
                        margin: '24px 16px',
                        // background: '#fff',
                        minHeight: 580
                    }}>
                        {this.props.children}
                    </Content>
                    <Footer>
                        copyright
                    </Footer>
                </Layout>
            </Layout >
        );
    }
}
