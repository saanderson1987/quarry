import * as QuestionTopicLinkApiUtil from '../util/question_topic_link_api_util';
import { hashHistory } from 'react-router';
import { receiveQuestion } from './question_actions';

export const RECEIVE_ALL_QUESTIONTOPICLINKS = 'RECEIVE_ALL_QUESTIONTOPICLINKS';
export const RECEIVE_QUESTIONTOPICLINK = 'RECEIVE_QUESTIONTOPICLINK';
export const REMOVE_QUESTIONTOPICLINK = 'REMOVE_QUESTIONTOPICLINK';

export const fetchQuestionTopicLinks = () => dispatch => {
  return QuestionTopicLinkApiUtil.fetchQuestionTopicLinks().then(questionTopicLinks => dispatch(receiveAllQuestionTopicLinks(questionTopicLinks)));
};

export const fetchQuestionTopicLink = id => dispatch => (
  QuestionTopicLinkApiUtil.fetchQuestionTopicLink(id).then(questionTopicLink => dispatch(receiveQuestionTopicLink(questionTopicLink)))
);

export const createQuestionTopicLink = questionTopicLink => dispatch => {
  return QuestionTopicLinkApiUtil.createQuestionTopicLink(questionTopicLink).then(question => dispatch(receiveQuestion(question)));
};

export const updateQuestionTopicLink = questionTopicLink => dispatch => (
  QuestionTopicLinkApiUtil.updateQuestionTopicLink(questionTopicLink).then(updatedQuestionTopicLink => dispatch(receiveQuestionTopicLink(updatedQuestionTopicLink)))
);

export const deleteQuestionTopicLink = id => dispatch => (
  QuestionTopicLinkApiUtil.deleteQuestionTopicLink(id).then(questionTopicLink => dispatch(removeQuestionTopicLink(questionTopicLink)))
);

const receiveAllQuestionTopicLinks = questionTopicLinks => {

  return {
    type: RECEIVE_ALL_QUESTIONTOPICLINKS,
    questionTopicLinks
  };
};

const receiveQuestionTopicLink = questionTopicLink => ({
  type: RECEIVE_QUESTIONTOPICLINK,
  questionTopicLink
});

const removeQuestionTopicLink = questionTopicLink => ({
  type: REMOVE_QUESTIONTOPICLINK,
  questionTopicLink
});
