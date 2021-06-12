import CreateQuiz from './CreateQuiz'
import CreateQuestion from './CreateQuestion'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link , useHistory , useLocation} from "react-router-dom";

export default class QQ extends React.Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);

        this.state = {
            view :'quiz' , 

        };
    };   
    changeView(){
        this.setState({
            view : 'question'
        });
    }

    render(){
        if(this.state.view == 'quiz'){
            return <CreateQuiz action={this.changeView}/>
        }
        if(this.state.view == 'question'){
            return(
                <CreateQuestion/>
            );
        }
    };
}
