import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import merge from 'lodash/merge';

class NewQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.submitNewQuestion = this.submitNewQuestion.bind(this);
    this.state = {
      newQuestionClicked: false,
      question: {
        question: "",
        details: "",
        author_id: this.props.currentUser.id
      }
    };
  }

  updateNewQuestionClicked(boolean) {
    return e => this.setState({ newQuestionClicked: boolean });
  }

  updateQuestionField() {
    return e => {
      let newState = merge( {}, this.state,
        { question: { question: e.target.value } }
      );
      this.setState(newState);
    };
  }

  submitNewQuestion(e) {
    e.preventDefault();
    const question = this.state.question;
    this.props.createQuestion(question).then((newQuestion) => {
      let newState = merge( {}, this.state,
        { question: { question: "" }, newQuestionClicked: false }
      );
      this.setState(newState);
      hashHistory.push(`/questions/${newQuestion.question.id}`);
    });
  }

  render() {
    if (this.state.newQuestionClicked === false) {
      return (
        <a
          className="NewQuestionLink"
          onClick={this.updateNewQuestionClicked(true)}>
            What is your question?
        </a>
      );
    } else {
      return(
        <div className="NewQuestionContainer">
          <div className="NewQuestionContaining">
            <div className="NewQuestionBox">
              <div className="NewQuestionBody">
                <img className="QuestionIndexUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
                <span className= "QuestionIndexUserName"><a>{this.props.currentUser.username}</a> asks</span>
                <textarea
                  className="NewQuestionInput"
                  placeholder="What is your question?"
                  onChange={this.updateQuestionField()}
                  value={this.state.question.question}/>
              </div>
              <div className="NewQuestionButtonBar">
                <button onClick={this.updateNewQuestionClicked(false)}>Cancel</button>
                <button className="NewQuestionButton" onClick={this.submitNewQuestion}>Ask Question</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}


export default NewQuestion;
