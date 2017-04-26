import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {
  fetchComments,
  deleteComment,
  createComment
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: Object.keys(state.comments).map(id => state.comments[id]),
    answerId: ownProps.answerId,
    currentUser: state.session.currentUser
  };

};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
