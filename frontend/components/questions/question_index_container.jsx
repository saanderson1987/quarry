import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import {
  fetchQuestions,
  deleteQuestion,
  createQuestion
} from '../../actions/question_actions';
import { fetchAnswers } from '../../actions/answer_actions';
import { fetchTopics } from '../../actions/topic_actions';


const mapStateToProps = state => {
  return {
    questions: Object.keys(state.questions).map(id => state.questions[id]),
    topics: Object.keys(state.topics).map(id => state.topics[id]),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createQuestion: question => dispatch(createQuestion(question)),
  fetchAnswers: () => dispatch(fetchAnswers()),
  fetchTopics: () => dispatch(fetchTopics())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
