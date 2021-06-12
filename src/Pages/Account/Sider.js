import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link , useHistory , useLocation} from "react-router-dom";
import 'antd/dist/antd.css';
import { Menu, Divider } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';



const { SubMenu } = Menu;

export default class Sider extends React.Component {

  state = {
    mode: 'inline',
    theme: 'lite',
    
    selectedKeys : '3'
  };
  changeActive(key) {
    console.log(key)
  }
  onSelect = info => {
    console.log(info.selectedKeys);

    this.setState({
      selectedKeys: info.selectedKeys[0],
      
    });
    console.log(this.state.selectedKeys)
  };


  render() {
    return (
      <>
        <Menu
          style={{ width: 256 , backgroundColor:"a9a9a9" }}
          defaultSelectedKeys={this.state.selectedKeys[0]}
          defaultOpenKeys={['sub1','sub2']}
          mode={this.state.mode}
          theme={this.state.theme}
          onSelect={this.onSelect}
        >

          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Quiz">
            <Menu.Item key="3">Quiz List</Menu.Item>
            
            <Menu.Item key="4">Upcoming quizes</Menu.Item>
            <Menu.Item key="5">Create new quiz</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title="Class">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
          <Menu.Item key="1" icon={<MailOutlined />}>
            Messages
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined/>}>
            Your Calender
          </Menu.Item>
          <Menu.Item key="link" icon={<LinkOutlined />}>
            <a href="./" target="_blank" rel="noopener noreferrer">
              Ant Design
            </a>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}


