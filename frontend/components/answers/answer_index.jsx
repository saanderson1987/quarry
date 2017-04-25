import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAnswers();
  }

  render() {

    const questionId = this.props.questionId;
    const answers = this.props.answers.map (answer => {
      if (answer.question_id === questionId) {
        return (
          <AnswerIndexItem key={answer.id} answer={answer} />
        );
      }
    });

    return (
      <div>
        <ul>
          {answers}
        </ul>
      </div>

    );
  }

}

export default AnswerIndex;
