import {
  RECEIVE_ALL_QUESTIONTOPICLINKS,
  RECEIVE_QUESTIONTOPICLINK,
  REMOVE_QUESTIONTOPICLINK
} from '../actions/question_topic_link_actions';
import merge from 'lodash/merge';

const QuestionTopicLinksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONTOPICLINKS:
      return merge({}, action.questionTopicLinks);
    case RECEIVE_QUESTIONTOPICLINK:
      return merge({}, oldState, {[action.questionTopicLink.id]: action.questionTopicLink});
    case REMOVE_QUESTIONTOPICLINK:
      let newState = merge({}, oldState);
      delete newState[action.QuestionTopicLink.id];
      return newState;
    default:
      return oldState;
  }
};

export default QuestionTopicLinksReducer;
