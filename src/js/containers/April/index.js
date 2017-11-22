import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { Link } from 'react-router'
import { Layout, Menu, Icon } from 'antd';

import styles from './index.scss'


const { Header, Sider, Content, Footer } = Layout;

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
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo} />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Link to='/april/books'>
                                <Icon type="user" />
                                <span>Books</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>other</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 580 }}>
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
