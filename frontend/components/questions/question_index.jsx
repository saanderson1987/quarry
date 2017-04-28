import React from 'react';
import QuestionIndexItem from './question_index_item';
import NewQuestion from './new_question';

class QuestionIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchAnswers();
    this.props.fetchTopics();
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

    const questions = this.props.questions.map( question => {
      return <QuestionIndexItem key={question.id} question={question} />;
    });

    if (this.props.currentUser === null) {
      return <div></div>;
    }

    return (
      <div className="QuestionIndex">
        <div className="QuestionIndexFeeds">
          <h3>Feeds</h3>
          <ul>
            <li><a>Top Stories</a></li>
            <li><a>New Questions</a></li>
          </ul>
        </div>


        <div className="QuestionIndexMain">
          <h3 className="QuestionIndexMainHeader">Top Stories For You</h3>
          <div className="QuestionIndexFormNew">
            <div className="QuestionIndexUserHeader">
              <img className="QuestionIndexUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
              <a className= "QuestionIndexUserName">{this.props.currentUser.username}</a>
            </div>
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
