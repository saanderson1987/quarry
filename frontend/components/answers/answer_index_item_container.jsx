import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import {
  fetchAnswer,
  deleteAnswer,
  createAnswer
} from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    answer: state.answers[ownProps.answered.id]
  };

};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnswer: (id) => dispatch(fetchAnswer()),
    deleteAnswer: id => dispatch(deleteAnswer(id)),
    createAnswer: answer => dispatch(createAnswer(answer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);
