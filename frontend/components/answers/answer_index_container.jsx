import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import {
  fetchAnswers,
  deleteAnswer,
  createAnswer
} from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    answers: Object.keys(state.answers).map(id => state.answers[id]),
    questionId: ownProps.questionId
  };

};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnswers: () => dispatch(fetchAnswers()),
    deleteAnswer: id => dispatch(deleteAnswer(id)),
    createAnswer: answer => dispatch(createAnswer(answer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);
