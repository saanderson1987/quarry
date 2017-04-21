import React from 'react';
import { Link, hashHistory } from 'react-router';

const QuestionIndexItem = ({ question }) => {
  return (
    <li>
      <h3>{question.question}</h3>
      <div className="Answer">
        <div className="AnswerAuthorHeader">
          <img className="UserPhoto"></img>
          <div>question.answer.author.username</div>
        </div>
        <div>question.answer.text</div>
        <div className="Comments"></div>
      </div>
  </li>
  );
};

export default QuestionIndexItem;

// need answer db migration and relations
  //
