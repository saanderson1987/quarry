import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';
class CommentIndexItem extends React.Component {

  render() {
    const comment = this.props.comment;

    return (
      <li>
        <div>{comment.text} </div>
      </li>

    );
  }

}

export default CommentIndexItem;
