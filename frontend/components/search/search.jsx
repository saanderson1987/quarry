import React from 'react';
import merge from 'lodash/merge';
import { Link, hashHistory } from 'react-router';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchField: ""};
  }

  componentDidMount() {
    if (!this.props.questions) {
      this.props.fetchQuestions();
    }
    // this.props.fetchQuestions();
  }

  updateSearchField() {
    return e => {
      let newState = merge( {}, this.state,
        { searchField: e.target.value }
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

    const questions = this.props.questions;
    if (this.state.searchField) {
      questions.forEach( question => {
        if (question.question.toLowerCase().includes(this.state.searchField.toLowerCase())) {
          matches.push(question);
        }
      });
    }

    return matches;

  }

  redirectToQuestion(id) {
    return (e) => {
      hashHistory.push(`/questions/${id}`);
      let newState = merge( {}, this.state,
        { searchField: "" }
      );
      this.setState(newState);
    };
  }

  results(){
    let results = this.matches().map((question, i) => {
      return (
        <li key={i}><a onClick={this.redirectToQuestion(question.id)}>{question.question}</a></li>
      );
    });


    return results;
  }

  renderResults() {
    if (this.state.searchField === "") {
      return <div></div>;
    } else {
      return (
        <div className="SearchResultsContainerBackdrop">
          <div className="SearchResultsContainer">
            <ul>{this.results()}</ul>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="SearchContainer">
        <form>
          <input
          className ="AskOrSearch"
          type="text"
          onChange={this.updateSearchField()}
          value={this.state.searchField}
          placeholder="Search Quora" />
          <button className="NavAskQuestionButton" type="submit" >
            Search Questions
          </button>
        </form>
        <div>{this.renderResults()}</div>
      </div>
    );
  }

}

export default Search;
