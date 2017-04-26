import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';
import AnswerIndexContainer from '../answers/answer_index_container.jsx';
import NewAnswer from '../answers/new_answer';


class QuestionShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { editQuestionClicked: false, question: this.props.question };
    this.submitQuestionEdits = this.submitQuestionEdits.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.questionId);
  }

  componentWillReceiveProps(newProps) {
    let newState = merge( {}, this.state, {question: newProps.question} );
    this.setState(newState);
  }

  deleteQuestion() {
    return e => {
      this.props.deleteQuestion(this.props.question.id);
      hashHistory.push('/');
    };
  }

  updateEditQuestionClicked(boolean) {

    return e => {
      let newState = merge( {}, this.state,
        { editQuestionClicked: boolean }
      );
      this.setState(newState);
    };
  }

  submitQuestionEdits(e) {
    e.preventDefault();
    this.props.updateQuestion(this.state.question);
    let newState = merge( {}, this.state,
      { editQuestionClicked: false }
    );
    this.setState(newState);
  }

  update(field) {
    return e => {
      let newState = merge( {}, this.state,
        { question: { [field]: e.target.value } }
      );
      this.setState(newState);
    };
  }

  questionBody() {
    const {question} = this.props;

    if (this.state.editQuestionClicked === false) {
      return (
        <div>
          <h1>{question.question}</h1>
          <p className="QuestionShowDetails">{question.details}</p>
          <div className="Dots">
            <div>...</div>
            <div className="dotDropdown">
              <button onClick={this.updateEditQuestionClicked(true)}>Edit (click me)</button>
              <button onClick={this.deleteQuestion()}>Delete (click me)</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.submitQuestionEdits}>
            <input
              type="text"
              value={this.state.question.question}
              onChange={this.update('question')} />
            <textarea
              value={this.state.question.details}
              onChange={this.update('details')} />
            <span onClick={this.updateEditQuestionClicked(false)} >Cancel (click me)</span>
            <input type="submit" value="Update" />
          </form>
        </div>
      );
    }
  }

  render () {
    const {question} = this.props;

    if (!question) {
      return <div>Loading...</div>;
    }

    return (
      <div className="QuestionShow">
        <ul className="QuestionShowTopics">
          <li>Topic 1</li>
          <li>Topic 2</li>
        </ul>
        {this.questionBody()}
        <NewAnswer
          questionId={question.id}
          createAnswer={this.props.createAnswer}
          currentUser={this.props.currentUser} />
        <AnswerIndexContainer questionId={question.id} />
      </div>

    );
  }

}

export default QuestionShow;
