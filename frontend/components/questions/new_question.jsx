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
        <div>
          <img className="UserPhoto"></img>
          <span>{this.props.currentUser.username} asks</span>
          <form onSubmit={this.submitNewQuestion}>
            <input
              type="text"
              placeholder="What is your question?"
              onChange={this.updateQuestionField()}
              value={this.state.question.question}/>
            <input type="submit" value="Ask Question" />
          </form>
        </div>
      );
    }
  }
}


export default NewQuestion;
