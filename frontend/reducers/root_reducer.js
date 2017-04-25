import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionsReducer,
  answers: AnswersReducer,
  comments: CommentsReducer
});

export default RootReducer;
