import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button ,  DatePicker, TimePicker} from 'antd';
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const { MonthPicker, RangePicker } = DatePicker;

const onFinish = values => {
    console.log(values);
    // 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
};
export default class  Demo extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        class : '' ,
      };
    };
    createQuiz = (event) => {
      event.preventDefault();
      const payload = {
          quizTitle: event.target.quizTitle,
          time: event.target.time ,
          date : event.target.date ,
          noOfQuestion : event.target.noOfQuestion 
        };
        axios({
          url: '/api/quiz/save',
          method: 'POST',
          data: payload
        })
          .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            this.getBlogPost();
          })
          .catch(() => {
            console.log('Internal server error');
          });;
    }
  render(){
  return (
    <div className="create-container">
    <h1 className="partition-header">Create Class</h1>
    <Form  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
     style={{marginTop:20}}>
        <Form.Item name={['Title']} label="Class Title"         
        rules={[
          {
            required: true,
          },
        ]}>
            <Input.TextArea style={{height:50 , width:400 , float:'left'}} className="question-box"/>
        </Form.Item>

        <Form.Item name="range-picker" label="Start/End Date" >
        <RangePicker style={{width:250 , float:'left'}} className="question-box"  />
      </Form.Item>

      <Form.Item
          name={['Option', 'Count']}
          label="Maximum Students"
          rules={[
            {
              type: 'number',
              min: 1,
              max: 50,
            },
          ]}
        >
          <InputNumber className="question-box" style={{width:70 , float:'left'}} />
        </Form.Item>
      <Form.Item >
        <p style={{float:'center' , color:"a9a9a9"}} >
          Once you create your class you can get the link and send it to student so they can join.
        </p>
      </Form.Item>
      <Form.Item >
        <Button onClick={this.createClass} type="primary" htmlType="submit" style={{float:'center'}} className="question-box">
          Submit Class
        </Button>
      </Form.Item>
    </Form>
    <img src={require('./../../assets/create-class.png')} 
                            height = '500px'
                            width = '618px'
                            style={{position:'absolute' , right:170 , marginTop:10}}
    />
    </div>
  );
  };

};

