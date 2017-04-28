import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creds: { username: "", password: "" }, signupClicked: false};
    this.submitSignup = this.submitSignup.bind(this);
  }

  updateSignupClicked(boolean) {
    return e => this.setState({ signupClicked: boolean });
  }

  signupLink() {
    return (
      <div >
      <h3 className="signupLink" onClick={this.updateSignupClicked(true)}>Signup</h3>
      <p>By signing up you indicate that you have read and agree to the Terms of Service and Privacy Policy.</p>
      </div>
    );
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
        <div className="form-left">{this.signupLink()}</div>
      );
    } else {
      return(
        <div className="form-left">
          <form onSubmit={this.submitSignup} >
            <h3>Sign Up</h3>
          
              <input type="text"
                value={this.state.creds.username}
                onChange={this.update("username")}
                className="session-input"
                placeholder="Username" />

            <br/>

              <input type="password"
                value={this.state.creds.password}
                onChange={this.update("password")}
                className="session-input"
                placeholder="Password" />

            <br/>
            <input type="submit" value="Sign Up" className="session-submit"/>

          </form>
        </div>

      );
    }

  }

}

export default Signup;
