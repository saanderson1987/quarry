import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {

  componentDidMount() {

    this.props.fetchQuestions();
  }

  createTestQuestion() {
    return (e) => {
      e.preventDefault();
      return this.props.createQuestion({
        question:"Is this a test question?",
        details: "These are details",
        author_id: 1
      });
    };
  }

  render() {

    const questions = this.props.questions.map( question => (
      <QuestionIndexItem key={question.id} question={question} />
    ));

    return (
      <nav></nav>
      <div class="Feeds"></div>
      <div class="QuestionIndex">
        <div className="CreateQuestion"></div>
        <ul>
          {questions}
        </ul>
      </div>
    );
  }


}

export default QuestionIndex;
