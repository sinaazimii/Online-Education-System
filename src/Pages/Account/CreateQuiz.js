import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button ,  DatePicker, TimePicker} from 'antd';
import axios from 'axios'

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
const onFinish = values => {
    console.log(values);
    // 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
};
export default class  Demo extends React.Component  {
  createQuiz = (event) => {
    event.preventDefault();
    const payload = {
        className: event.target.className,
        classPassword: event.target.classPassword ,
        capacity : event.target.capacity ,
        dates : event.target.dates 
      };
      axios({
        url: '/api/calss/save',
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
    <h1 className="partition-header">Create Quiz</h1>
    <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
     style={{marginTop:20}}>
        <Form.Item name={['Title']} label="Quiz Title"         
        rules={[
          {
            required: true,
          },
        ]}>
            <Input.TextArea style={{height:50 , width:400 , float:'left'}} className="question-box"/>
        </Form.Item>

        <Form.Item         
        rules={[
          {
            required: true,
          },
        ]}name="date-picker" label="Date"  >
        <DatePicker className="question-box"  style={{width:200 , float:'left' , marginLeft:30}}/>
      </Form.Item>


      <Form.Item name="time-picker" label="Time" style={{marginLeft:10}}>
        <TimePicker className="question-box"  style={{width:200 , float:'left' ,marginLeft:38}}/>
      </Form.Item>
      <Form.Item >
        <Button onClick={this.props.action} type="primary" htmlType="submit" style={{float:'center' , marginLeft:70}} className="question-box">
          Submit Quiz and create questions
        </Button>
      </Form.Item>
    </Form>
    <img src={require('./../../assets/quiz.png')} 
                            width = '300px'
                            height = '405px'
                            style={{position:'absolute' , right:200 , marginTop:50}}
    />
    </div>
  );
  };

};

