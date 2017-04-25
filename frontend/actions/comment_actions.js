import * as CommentApiUtil from '../util/comment_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComments = () => dispatch => {
  return CommentApiUtil.fetchComments().then(comments => dispatch(receiveAllComments(comments)));
};

export const fetchComment = id => dispatch => (
  CommentApiUtil.fetchComment(id).then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(newComment => dispatch(receiveComment(newComment)));
};

export const updateComment = comment => dispatch => (
  CommentApiUtil.updateComment(comment).then(updatedComment => dispatch(receiveComment(updatedComment)))
);

export const deleteComment = id => dispatch => (
  CommentApiUtil.deleteComment(id).then(comment => dispatch(removeComment(comment)))
);

const receiveAllComments = comments => {

  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});
