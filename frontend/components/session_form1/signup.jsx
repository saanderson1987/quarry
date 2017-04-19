import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {creds: { username: "", password: "" }, signupClicked: false};
    this.submitSignup = this.submitSignup.bind(this);
  }

  updateSignupClicked(boolean) {
    return e => this.setState({signupClicked: boolean});
  }

  signupLink() {
    return <button onClick={this.updateSignupClicked(true)}>Signup</button>;
  }

  submitSignup(e) {
    e.preventDefault();
    const user = this.state.creds;
    this.props.signup({user});
  }

  update(field) {
    return e => {
      let newState = merge({}, this.state, {creds: { [field]: e.currentTarget.value }});
      this.setState(newState);
    };
  }

  // renderErrors() {
	// 	return(
	// 		<ul>
	// 			{this.props.errors.map((error, i) => (
	// 				<li key={`error-${i}`}>
	// 					{error}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

  render() {

    if (this.state.signupClicked === false) {
      return (
        <div>{this.signupLink()}</div>
      );
    } else {
      return(
        <form onSubmit={this.submitSignup} >
          <p>Sign Up</p>
          <label> Username:
            <input type="text"
              value={this.state.creds.username}
              onChange={this.update("username")}
              className="session-input" />
          </label>
          <br/>
          <label> Password:
            <input type="password"
              value={this.state.creds.password}
              onChange={this.update("password")}
              className="session-input" />
          </label>
          <br/>
          <input type="submit" value="Sign Up" />

        </form>


      );
    }

  }

}

export default Signup;
