import Quiz from 'react-quiz-component';
import { questions } from './Questions';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

const onCompleteAction = (obj) => {
    console.log(obj);
    // YOUR LOGIC GOES HERE
  }

  const renderCustomResultPage = (obj) => {
    console.log(obj);
    return (
      
        <Result
        status="success"
        title="Successfully finished the quiz"
        subTitle="The result will be told after a while, stay pacient."
        extra={[
          <Button type="primary" key="console" href="./quiz">
            Go Back to your account
          </Button>
        ]}
      />
    )
  }
export default class TakeQuiz extends React.Component{

    render(){
        return(
            // <div className="quiz-page">
                 <div className="quiz-container">
                    <Quiz 
                    className="test" 
                    quiz={questions} 
                    showDefaultResult={false} 
                    onComplete={onCompleteAction}
                    customResultPage={renderCustomResultPage}
                    />
                 </div>
            //</div> 
            
        );

    };
}