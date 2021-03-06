import React from 'react';
import merge from 'lodash/merge';

class NewAnswer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: {
        text: "",
        author_id: this.props.currentUser.id,
        question_id: this.props.questionId
      },
    };
    this.submitNewAnswer = this.submitNewAnswer.bind(this);
  }



  submitNewAnswer(e) {
    e.preventDefault();
    this.props.createAnswer(this.state.answer).then(() => {
      let newState = merge( {}, this.state,
        { answer: { text: "" } }
      );
      this.setState(newState);
      this.props.closeDropdown();
    });
  }

  updateAnswerField() {
    return e => {
      let newState = merge( {}, this.state,
        { answer: { text: e.target.value } }
      );
      this.setState(newState);
    };
  }




  render() {
    if (this.props.answerClicked === true) {
      return (
        <div className="NewAnswer">
          <div className="NewAnswerAuthorHeader">
            <img className="QuestionItemAnswerUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
            <a className="NewAnswerUserName">{this.props.currentUser.username}</a>
          </div>
          <textarea
            className="NewAnswerText"
            placeholder="Write your answer"
            onChange={this.updateAnswerField()}
            value={this.state.answer.text}/>
          <div className="NewAnswerButtonBar">
            <button className="SubmitNewAnswerButton" onClick={this.submitNewAnswer}>Submit</button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default NewAnswer;
