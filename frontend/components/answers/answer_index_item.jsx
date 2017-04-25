import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';
import CommentIndexContainer from '../comments/comment_index_container';
class AnswerIndexItem extends React.Component {

  render() {
    const answer = this.props.answer;

    return (
      <li>
        <div className="Answer">
          <div className="AnswerAuthorHeader">
            <img className="QuestionItemAnswerUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
            <a>{answer.author.username}</a>
          </div>
          <div className="AnswerText">{answer.text}</div>
          <CommentIndexContainer answerId={answer.id} />
        </div>
      </li>

    );
  }

}

export default AnswerIndexItem;
