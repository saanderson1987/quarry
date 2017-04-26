import React from 'react';
import AnswerIndexItem from './answer_index_item';
import AnswerIndexItemContainer from './answer_index_item_container';

class AnswerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAnswers();
  }

  render() {

    const questionId = this.props.questionId;
    const answers = this.props.answers.map (answer => {
      if (answer.question_id === questionId) {
        return (
          <AnswerIndexItemContainer key={answer.id} answerId={answer.id} />
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
