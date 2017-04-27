import React from 'react';
import CommentIndexItem from './comment_index_item';
import NewComment from './new_comment.jsx';


class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {

    const answerId = this.props.answerId;
    const comments = this.props.comments.map (comment => {
      if (comment.answer_id === answerId) {
        return (
          <CommentIndexItem key={comment.id} comment={comment} />
        );
      }
    });

    return (
      <div className="CommentsContainer">
        <NewComment
          currentUser={this.props.currentUser}
          answerId={this.props.answerId}
          createComment={this.props.createComment}/>
        <ul>
          {comments}
        </ul>
      </div>
    );
  }
}

export default CommentIndex;
