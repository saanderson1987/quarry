import React from 'react';
import QuestionIndexItem from './question_index_item';
import NewQuestion from './new_question';
import merge from 'lodash/merge';


class QuestionIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { feed: "all" };
  }

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

  feeds() {

    return this.props.topics.map ( topic => {
      let topicClass;
      if (topic.name === this.state.feed) {
        topicClass="SelectedTopic";
      } else {
        topicClass="UnselectedTopic";
      }

      return (
        <li className={topicClass} key={topic.id}><a onClick={this.changeFeed(topic.name)}>{topic.name}</a></li>
      );
    });
  }

  changeFeed(feed) {
    return e => {
      let newState = merge( {}, this.state,
        { feed: feed }
      );
      this.setState(newState);
    };
  }

  render() {

    const questions = this.props.questions.map( question => {
      const questionTopics = Object.keys(question.topics).map(id => question.topics[id]);
      const topicNames = questionTopics.map (topic => topic.name);

      if (this.state.feed !== "all") {
        if (topicNames.includes(this.state.feed)){
          return <QuestionIndexItem key={question.id} question={question} />;
        }
      } else
        return <QuestionIndexItem key={question.id} question={question} />;
    });

    if (this.props.currentUser === null) {
      return <div></div>;
    }

    let topStoriesClass;
    if (this.state.feed === "all") {
      topStoriesClass="SelectedTopic";
    } else {
      topStoriesClass="UnselectedTopic";
    }

    return (
      <div className="QuestionIndex">
        <div className="QuestionIndexFeeds">
          <h3>Feeds</h3>
          <ul>
            <li className={topStoriesClass} ><a onClick={this.changeFeed("all")}>Top Stories</a></li>
            {this.feeds()}
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
