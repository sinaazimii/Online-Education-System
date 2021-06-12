import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button } from 'antd';

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
const onFinish = values => {
  console.log(values);
};

export default class  Demo extends React.Component  { 
  render(){
    return (
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
       style={{marginTop:-25}}>
          <Form.Item name={['Question']} label="Question"          
          rules={[
            {
              required: true,
            },
          ]}>
              <Input.TextArea style={{height:200}} className="question-box"/>
          </Form.Item>
        <Form.Item
          name={['Options', '1']}
          label="Option 1"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="question-box" />
        </Form.Item>
        <Form.Item
          name={['Options', '2']}
          label="Option 2"
          rules={[{},]}
        >
          <Input className="question-box" />
        </Form.Item>
       
        <Form.Item name={['Options', '3']} label="Option 3">
          <Input  className="question-box" />
        </Form.Item>
        <Form.Item name={['Options', '4']} label="Option 4">
          <Input  className="question-box" style={{float:'left'}} />
        </Form.Item>
        <Form.Item
          name={['Option', 'Count']}
          label="How many to choose "
          rules={[
            {
              type: 'number',
              min: 0,
              max: 4,
            },
          ]}
        >
          <InputNumber className="question-box" style={{float:'left'}} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" style={{margin:20}} className="question-box">
            Submit Quiz
          </Button>
          <Button type="primary" htmlType="submit" style={{margin:20}} className="question-box">
            Next Question
          </Button>
        </Form.Item>
      </Form>
    );
  }

};

