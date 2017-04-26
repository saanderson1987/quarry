import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';
class CommentIndexItem extends React.Component {

  render() {
    const comment = this.props.comment;
    return (
      <li>
        <div className="CommentAuthorHeader">
          <img className="CommentUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
          <a>{comment.author.username}</a>
        </div>
        <div>{comment.text} </div>
      </li>

    );
  }

}

export default CommentIndexItem;
