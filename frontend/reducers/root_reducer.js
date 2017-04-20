import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import QuestionsReducer from './questions_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionsReducer
});

export default RootReducer;
