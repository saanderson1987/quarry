import React from 'react';
import { Link, withRouter } from 'react-router';
import Signup from './signup';

class SessionForm1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
		this.submitLogin = this.submitLogin.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  submitLogin(e) {
		e.preventDefault();
		const user = this.state;
		this.props.login({user});
	}

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  renderErrors() {

		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render() {
    return(

      <div className="session-form-box">
        <h1>Quarry</h1>
        <h2>A place to share knowledge and better understand the world</h2>
       <Signup signup={this.props.signup}/>
       <form onSubmit={this.submitLogin} >
         <p>Login</p>
         <label> Username:
           <input type="text"
             value={this.state.username}
             onChange={this.update("username")}
             className="session-input" />
         </label>
         <br/>
         <label> Password:
           <input type="password"
             value={this.state.password}
             onChange={this.update("password")}
             className="session-input" />
         </label>
         <br/>
         <input type="submit" value="Login" />

       </form>
       {this.renderErrors()}
      </div>

    );
  }





}


export default withRouter(SessionForm1);
