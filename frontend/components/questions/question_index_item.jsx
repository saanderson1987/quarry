import React from 'react';
import { Link, hashHistory } from 'react-router';

const QuestionIndexItem = ({ question }) => {
  return (
    <li>
      <h3>{question.question}</h3>
      <div class="Answer">
        <div class="AnswerAuthorHeader">
          <img class="UserPhoto"></img>
          <div>question.answer.author.username</div>
        </div>
        <div>question.answer.text</div>
        <div class="Comments"></div>
      </div>
  </li>
  );
};

export default QuestionIndexItem;

// need answer db migration and relations
  //
