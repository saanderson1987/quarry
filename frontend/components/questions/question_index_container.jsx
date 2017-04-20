import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions, deleteQuestion, createQuestion } from '../../actions/question_actions';

const mapStateToProps = state => {
  return { questions: Object.keys(state.questions).map(id => state.questions[id]) };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createQuestion: question => dispatch(createQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
