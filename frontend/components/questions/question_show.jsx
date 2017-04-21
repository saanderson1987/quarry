import React from 'react';
import { Link, hashHistory } from 'react-router';

class QuestionShow extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchQuestion(this.props.params.questionId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchQuestion(nextProps.params.questionId);
  // }

  deleteQuestion() {
    return e => {
      this.props.deleteQuestion(this.props.question.id);
      hashHistory.push('/');
    };
  }

  render () {
    const {question} = this.props;

    if (!question) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <p>topics</p>
        <h3>{question.question}</h3>
        <div>...</div>
        <span>Edit (click me)</span>
        <span onClick={this.deleteQuestion()}>Delete (click me)</span>
        <div>AnswerIndexContainer</div>
      </div>

    );
  }

}

export default QuestionShow;
