import React from 'react';
import {AccNavbar} from './AccNavbar' ;
import axios from 'axios';
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


import QuizTable from './QuizTable'
import UpcomingQuizTable from './UpcomingquizTable'
import CreateQuestion from './CreateQuestion'
import CreateQuiz from './CreateQuiz'
import QQ from './QQ'
import ClassTable from './ClassTable'
import CreateClass from './CreateClass'

const { SubMenu } = Menu;

export default class  Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person : '' ,
            mode: 'inline',
            theme: 'lite',
            selectedKeys : '3'
        };
    };
    onSelect = info => {
        console.log(info.selectedKeys);
    
        this.setState({
          selectedKeys: info.selectedKeys[0],
          
        });

      };
    changeView(){
        this.setState({
            selectedKeys : 'q'
        });
    }
    setPageContent(){
        switch(this.state.selectedKeys){
            case '3': return <QuizTable/>
            case '4' : return <UpcomingQuizTable/>
            case '5': return <QQ/>
            case '7' : return <ClassTable/>
            case '8' : return <CreateClass/>
        }
    }
    getBlogPost = () => {
        axios.get('/api')
          .then((response) => {
            const data = response.data;
            this.setState({
                 person: data 
                });
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
    
    render(){
        return(
            <div className="Quiz">
                <AccNavbar/>
                <div className="sider-container">
                 <>
                    <Menu
                    style={{ width: 256 , backgroundColor:"a9a9a9" }}
                    defaultSelectedKeys={this.state.selectedKeys[0]}
                    defaultOpenKeys={['sub1','sub2','sub3']}
                    mode={this.state.mode}
                    theme={this.state.theme}
                    onSelect={this.onSelect}
                    >

                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Quiz">
                        <Menu.Item key="3">Quiz List</Menu.Item>
                        
                        <Menu.Item key="4">Upcoming quizes</Menu.Item>
                        <Menu.Item key="5">Create new quiz</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<SettingOutlined />} title="Class Managment">
                        <Menu.Item key="7">All Classes</Menu.Item>
                        <Menu.Item key="8">Create New Class</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<SettingOutlined />} title="User Managment">
                        <Menu.Item key="17">Not Sure</Menu.Item>
                        <Menu.Item key="18">Not Sure</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="1" icon={<MailOutlined />}>
                        Messages
                    </Menu.Item>
                    <Menu.Item key="2" icon={<CalendarOutlined/>}>
                        Your Calender
                    </Menu.Item>
                    <Menu.Item key="link" icon={<LinkOutlined />}>
                        <a href="./" target="_blank" rel="noopener noreferrer">
                        Link to somewhere
                        </a>
                    </Menu.Item>
                    </Menu>
                 </>
                </div>
                <div className="quiz-table-container">
                    {this.setPageContent()}
                </div>                
            </div>
        );
    };
}
// document.body.style.overflow = "hidden"