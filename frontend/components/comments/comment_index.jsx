import React from 'react';
import CommentIndexItem from './comment_index_item';
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
      <div>
        <ul>
          {comments}
        </ul>
      </div>
    );
  }
}

export default CommentIndex;
