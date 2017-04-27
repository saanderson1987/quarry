import * as TopicApiUtil from '../util/topic_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_TOPICS = "RECEIVE_ALL_TOPICS";
export const RECEIVE_TOPIC = "RECEIVE_TOPIC";
export const REMOVE_TOPIC = "REMOVE_TOPIC";

export const fetchTopics = () => dispatch => (
  TopicApiUtil.fetchTopics().then(topics => dispatch(receiveAllTopics(topics)))
);

export const fetchTopic = id => dispatch => (
  TopicApiUtil.fetchTopic(id).then(topic => dispatch(receiveTopic(topic)))
);

export const createTopic = topic => dispatch => (
  TopicApiUtil.createTopic(topic).then(topic => dispatch(receiveTopic(topic)))
);

export const updateTopic = topic => dispatch => (
  TopicApiUtil.updateTopic(topic)
             .then(topic => dispatch(receiveTopic(topic)))
             .then(hashHistory.push('/'))
);

export const deleteTopic = topic => dispatch => (
  TopicApiUtil.deleteTopic(topic).then(topic => dispatch(removeTopic(topic)))
);

const receiveAllTopics = topics => ({
  type: RECEIVE_ALL_TOPICS,
  topics
});

const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic
});

const removeTopic = topic => ({
  type: REMOVE_TOPIC,
  topic
});
