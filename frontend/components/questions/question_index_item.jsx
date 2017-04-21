import React from 'react';
import { Link, hashHistory } from 'react-router';

const QuestionIndexItem = ({ question }) => {
  return (
    <li>
      <span>topics</span>
      <Link to={`/questions/${question.id}`}>
        <h3>{question.question}</h3>
      </Link>
      <div className="Answer">
        <div className="AnswerAuthorHeader">
          <img className="UserPhoto"></img>
          <div>Random Answer Username</div>
        </div>
        <div className="AnswerText">Random Answer Text</div>
        <div className="Comments"> Random Answer Comments</div>
      </div>
  </li>
  );
};

export default QuestionIndexItem;

// need answer db migration and relations -- question.answers
  //
