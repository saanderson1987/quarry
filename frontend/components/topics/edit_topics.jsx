import React from 'react';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

class EditTopics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topicsField: ""
    };
  }

  componentDidMount() {
    this.props.fetchTopics();
  }


  updateTopicsField() {
    return e => {
      let newState = merge( {}, this.state,
        { topicsField: e.target.value }
      );
      this.setState(newState);
    };
  }

  matches() {
    const matches = [];
    // const questions = this.props.questions.map((question) => question.question);
    // if (this.state.searchField) {
    //   questions.forEach( question => {
    //     if (question.toLowerCase().includes(this.state.searchField.toLowerCase())) {
    //       matches.push(question);
    //     }
    //   });
    // }

    const topics = this.props.topics;
    if (this.state.topicsField) {
      topics.forEach( topic => {
        if (topic.name.toLowerCase().includes(this.state.topicsField.toLowerCase())) {
          matches.push(topic);
        }
      });
    }

    return matches;

  }

  addTopic(topic) {
    return e => {
      this.props.createQuestionTopicLink(topic).then(()=> {
        let newState = merge( {}, this.state,
          { topicsField: "" }
        );
        this.setState(newState);
      });
      hashHistory.push(`/questions/${this.props.question.id}`)
    };
  }

  results() {
    let results = this.matches().map((topic, i) => {
      return (
        <li key={i}>
          <a onClick={this.addTopic(
              { topic_id: topic.id, question_id: this.props.question.id }
          )}>
            {topic.name}
          </a>
        </li>
      );
    });
    return results;
  }

  render() {
    const question = this.props.question;
    const currentTopics = question.topics.map( (topic) => {
      return <li key={topic.id}>{topic.name}</li>;
    });

    if (this.props.editTopicsClicked === false) {
      return <div></div>;
    } else {
      return (
        <div>
          <h3>Edit Topics</h3>
          <p>Topics are used to find the best experts to answer the question.</p>
          <form>
            <input
            type="text"
            onChange={this.updateTopicsField()}
            value={this.state.topicsField}
            placeholder="Select Topic" />
          </form>
          <ul>{this.results()}</ul>
          <div>
            <ul>
              {currentTopics}
            </ul>
          </div>
        </div>
      );
    }
  }

}

export default EditTopics;
