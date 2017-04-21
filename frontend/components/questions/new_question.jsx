import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class NewQuestion extends React.Component {

  constructor(props) {
    super(props);
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
    };
  }

  submitNewQuestion(e) {
    e.preventDefault();
    const question = this.state.question;
    this.props.createQuestion(question);
  }

  render() {
    if (this.state.newQuestionClicked === false) {
      return (
        <span class="newQuestionLink" onClick={this.updateNewQuestionClicked(true)}>
          What is your question?
        </span>
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
              onChange={this.updateQuestionField()}/>
            <input type="submit" value="Ask Question" />
          </form>
        </div>
      );
    }


  }

}


export default NewQuestion;
