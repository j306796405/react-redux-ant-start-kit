import React from 'react'
import {IndexLink, Link} from 'react-router'
import { Menu, Breadcrumb, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

const LeftNav = React.createClass({
    getInitialState() {
        return {
            current: '1',
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <Menu onClick={this.handleClick}
                  style={{width: 240}}
                  selectedKeys={['index']}
                  mode="inline"
            >
                <Menu.Item key="index">首页</Menu.Item>
                <SubMenu key="activity" title={<span><Icon type="appstore" /><span>活动</span></span>}>
                    <Menu.Item key="activity-manage">
                        <IndexLink to='/'>
                            活动管理
                        </IndexLink>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="member" title={<span><Icon type="appstore" /><span>会员</span></span>}>
                    <Menu.Item key="member-type">
                        <Link to='/counter'>
                            分类管理
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="member-manage">
                        <Link to='/notFound'>
                            会员管理
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="account">
                    <Link to='/account'>
                        账务
                    </Link>
                </Menu.Item>
            </Menu>
        );
    },
});

export default LeftNav;
