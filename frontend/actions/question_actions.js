import * as QuestionApiUtil from '../util/question_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const fetchQuestions = () => dispatch => {
  return QuestionApiUtil.fetchQuestions().then(questions => dispatch(receiveAllQuestions(questions)));
};

export const fetchQuestion = id => dispatch => (
  QuestionApiUtil.fetchQuestion(id).then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = question => dispatch => {
  return QuestionApiUtil.createQuestion(question).then(newQuestion => dispatch(receiveQuestion(newQuestion)));
};

export const updateQuestion = question => dispatch => (
  QuestionApiUtil.updateQuestion(question).then(updatedQuestion => dispatch(receiveQuestion(updatedQuestion)))
);

export const deleteQuestion = id => dispatch => (
  QuestionApiUtil.deleteQuestion(id).then(question => dispatch(removeQuestion(question)))
);

const receiveAllQuestions = questions => {

  return {
    type: RECEIVE_ALL_QUESTIONS,
    questions
  };
};

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});
