import React from 'react';
import QuestionIndexItem from './question_index_item';
import NewQuestion from './new_question';

class QuestionIndex extends React.Component {

  componentDidMount() {

    this.props.fetchQuestions();
  }

  createTestQuestion() {
    return (e) => {
      e.preventDefault();
      return this.props.createQuestion({
        question:"Is this a test question?",
        details: "These are details",
        author_id: 1
      });
    };
  }

  render() {

    const questions = this.props.questions.map( question => (
      <QuestionIndexItem key={question.id} question={question} />
    ));

    if (this.props.currentUser === null) {
      return <div></div>;
    }

    return (
      <div className="QuestionIndex">
        <div className="QuestionIndexFeeds">
          <h3>Feeds</h3>
          <ul>
            <li>Top Stories</li>
            <li>New Questions</li>
          </ul>
        </div>


        <div className="QuestionIndexMain">
          <h1>Top Stories For You</h1>
          <div className="CreateQuestion">
            <img className="UserPhoto"></img>
            <span>{this.props.currentUser.username}</span>
            <NewQuestion
              createQuestion={this.props.createQuestion}
              currentUser={this.props.currentUser} />
          </div>

          <ul>
            {questions}
          </ul>

        </div>

      </div>
    );
  }


}

export default QuestionIndex;
