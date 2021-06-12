import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './styles.css'
import axios from 'axios'

const getInfo = (event) => {
    axios.get('/api')
    .then((response) => {
        const data = response.data;
        const name = data.name ; 
        const id = data.username ; 
        console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Error retrieving data!!!');
    });
  }

export const AccNavbar = () =>{
    return(
        <div className="acc-navbar">
            <Avatar size={110} src={require('./../../assets/profile.jpg')} style={{marginLeft:'40px' , marginTop:'8px'}} />
            <div className="info-container">
                <p className="name">Sina Azimi</p>
                {/* <p className="type">Student</p> */}
                
            </div>
            <p className="id">@sinaazimi</p>
            <p className="logout"><a href="./">Logout</a></p>
        </div>
    );

}
