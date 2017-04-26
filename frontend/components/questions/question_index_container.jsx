import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import {
  fetchQuestions,
  deleteQuestion,
  createQuestion
} from '../../actions/question_actions';
import { fetchAnswers } from '../../actions/answer_actions';

const mapStateToProps = state => {
  return {
    questions: Object.keys(state.questions).map(id => state.questions[id]),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createQuestion: question => dispatch(createQuestion(question)),
  fetchAnswers: () => dispatch(fetchAnswers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
