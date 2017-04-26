import React from 'react';
import { Link, hashHistory } from 'react-router';
import AnswerIndexItemContainer from '../answers/answer_index_item_container';

class QuestionIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { index: null };

  }

  componentDidMount(){
    this.setAnswerIndex();
  }

  setAnswerIndex() {
    if (this.state.index === null) {
      let index1 = Math.floor(Math.random()*this.props.question.answers.length);
      this.setState({index: index1});
    }
  }

  render() {
    const question = this.props.question;

    let answer = question.answers[this.state.index];

    if (!answer) {
      return (
        <li className="QuestionItem">
          <div className="QuestionItemTopics">(Question Topics)</div>
          <Link to={`/questions/${question.id}`}>
            <h2 className="QuestionItemQuestion">{question.question}</h2>
          </Link>
      </li>
      );
    }



    return (
      <li className="QuestionItem">
        <div className="QuestionItemTopics">(Question Topics)</div>
        <Link to={`/questions/${question.id}`}>
          <h2 className="QuestionItemQuestion">{question.question}</h2>
        </Link>
        <AnswerIndexItemContainer answerId={answer.id}/>
    </li>
    );
  }

}

export default QuestionIndexItem;


// const QuestionIndexItem = ({ question }) => {
//
//   let index = Math.floor(Math.random()*question.answers.length);
//   let answer = question.answers[index];
//   // debugger;
//   if (!answer) {
//     return (
//       <li className="QuestionItem">
//         <div className="QuestionItemTopics">(Question Topics)</div>
//         <Link to={`/questions/${question.id}`}>
//           <h2 className="QuestionItemQuestion">{question.question}</h2>
//         </Link>
//     </li>
//     );
//   }
//   return (
//     <li className="QuestionItem">
//       <div className="QuestionItemTopics">(Question Topics)</div>
//       <Link to={`/questions/${question.id}`}>
//         <h2 className="QuestionItemQuestion">{question.question}</h2>
//       </Link>
//       <AnswerIndexItemContainer answerId={answer.id}/>
//   </li>
//   );
// };
