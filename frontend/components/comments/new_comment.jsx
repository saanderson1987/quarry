import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class NewComment extends React.Component {

  constructor(props) {
    super(props);
    this.submitNewComment = this.submitNewComment.bind(this);
    this.state = {
      comment: {
        text: "",
        answer_id: this.props.answerId,
        author_id: this.props.currentUser.id
      }
    };
  }

  submitNewComment(e) {
    e.preventDefault();
    this.props.createComment(this.state.comment).then(() => {
      let newState = merge( {}, this.state,
        { comment: { text: "" } }
      );
      this.setState(newState);
    });
  }

  updateCommentField() {
    return e => {
      let newState = merge( {}, this.state,
        { comment: { text: e.target.value } }
      );
      this.setState(newState);
    };
  }

  render() {

    return (
      <div>
        <form onSubmit={this.submitNewComment}>
          <input
            type="text"
            placeholder="Add a comment"
            onChange={this.updateCommentField()}
            value={this.state.comment.text} />
          <input type="submit" value="Comment button" />
        </form>
      </div>
    );
  }


}

export default NewComment;
