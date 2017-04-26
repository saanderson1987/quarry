import {connect} from 'react-redux';
import Search from './search';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = state => {
  return {
    questions: Object.keys(state.questions).map(id => state.questions[id])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
