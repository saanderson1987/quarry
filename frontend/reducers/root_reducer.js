import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';
import CommentsReducer from './comments_reducer';
import TopicsReducer from './topics_reducer';
import QuestionTopicLinksReducer from './question_topic_links_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionsReducer,
  answers: AnswersReducer,
  comments: CommentsReducer,
  topics: TopicsReducer,
  questionTopicLinks: QuestionTopicLinksReducer
});

export default RootReducer;
