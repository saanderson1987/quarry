import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, oldState, {[action.question.id]: action.question});
    case REMOVE_QUESTION:
      let newState = merge({}, oldState);
      delete newState[action.question.id];
      return newState;
    default:
      return oldState;
  }
};

export default QuestionsReducer;
