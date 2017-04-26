import React from 'react';
import { Link, hashHistory } from 'react-router';
import AnswerIndexItem from '../answers/answer_index_item';

const QuestionIndexItem = ({ question }) => {

  let index = Math.floor(Math.random()*question.answers.length);
  let answer = question.answers[index];

  return (
    <li className="QuestionItem">
      <div className="QuestionItemTopics">(Question Topics)</div>
      <Link to={`/questions/${question.id}`}>
        <h2 className="QuestionItemQuestion">{question.question}</h2>
      </Link>
      <AnswerIndexItem answered={answer}/>
  </li>
  );
};

export default QuestionIndexItem;

// generate random answer by using math.random and the number of answer objects:
// https://www.freecodecamp.com/challenges/generate-random-whole-numbers-with-javascript#?solution=%0Avar%20randomNumberBetween0and19%20%3D%20Math.floor(Math.random()%20*%2020)%3B%0A%0Afunction%20randomWholeNum()%20%7B%0A%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%20%20return%20Math.random()%3B%0A%7D%0A
// https://www.hacksparrow.com/javascript-get-the-number-of-properties-in-an-object-without-looping.html

// question.answers
// const answer =
