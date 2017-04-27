import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';
import CommentIndexContainer from '../comments/comment_index_container';
class AnswerIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { commentsClicked: false };
  }

  updateCommentsClicked() {
    return(e) => {
      let boolean;
      if (this.state.commentsClicked === false) {
        boolean = true;
      } else {
        boolean = false;
      }
      let newState = merge( {}, this.state,
        { commentsClicked: boolean }
      );
      this.setState(newState);
    };
  }

  comments(){
    if (this.state.commentsClicked === false) {
      return <div></div>;
    } else {
      return <CommentIndexContainer answerId={this.props.answer.id} />;
    }

  }

  render() {
    const answer = this.props.answer;

    if (!answer) {
      return <div></div>;
    }

    return (
      <li className="Answer">
        <div>
          <div className="AnswerAuthorHeader">
            <img className="QuestionItemAnswerUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
            <a>{answer.author.username}</a>
          </div>
          <div className="AnswerText">{answer.text}</div>
          <a className="CommentsLink" onClick={this.updateCommentsClicked()}>Comments</a>
          <div>{this.comments()}</div>
        </div>
      </li>

    );
  }

}

export default AnswerIndexItem;


//SEE QUESTION INDEX ITEM CSS FILE FOR ANSWER AUTHOR HEADER STUFF
