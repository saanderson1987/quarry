import * as AnswerApiUtil from '../util/answer_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export const fetchAnswers = () => dispatch => {
  return AnswerApiUtil.fetchAnswers().then(answers => dispatch(receiveAllAnswers(answers)));
};

export const fetchAnswer = id => dispatch => (
  AnswerApiUtil.fetchAnswer(id).then(answer => dispatch(receiveAnswer(answer)))
);

export const createAnswer = answer => dispatch => {
  return AnswerApiUtil.createAnswer(answer).then(newAnswer => dispatch(receiveAnswer(newAnswer)));
};

export const updateAnswer = answer => dispatch => (
  AnswerApiUtil.updateAnswer(answer).then(updatedAnswer => dispatch(receiveAnswer(updatedAnswer)))
);

export const deleteAnswer = id => dispatch => (
  AnswerApiUtil.deleteAnswer(id).then(answer => dispatch(removeAnswer(answer)))
);

const receiveAllAnswers = answers => {

  return {
    type: RECEIVE_ALL_ANSWERS,
    answers
  };
};

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

const removeAnswer = answer => ({
  type: REMOVE_ANSWER,
  answer
});
