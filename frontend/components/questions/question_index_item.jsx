import React from 'react';
import { Link, hashHistory } from 'react-router';

const QuestionIndexItem = ({ question }) => {
  return (
    <li className="QuestionItem">
      <div className="QuestionItemTopics">(Question Topics)</div>
      <Link to={`/questions/${question.id}`}>
        <h2 className="QuestionItemQuestion">{question.question}</h2>
      </Link>
      <div className="Answer">
        <div className="AnswerAuthorHeader">
          <img className="QuestionItemAnswerUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
          <a>Random answer username</a>
        </div>
        <div className="AnswerText">Random answer text</div>
        <div className="Comments"> Random answer comments</div>
      </div>
  </li>
  );
};

export default QuestionIndexItem;

// need answer db migration and relations -- question.answers
  //
