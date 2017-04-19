import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
		this.submitLogin = this.submitLogin.bind(this);
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

      <div>
        <div>
          <Link to='/session/signup'>Sign up</Link>
        </div>

        <div>
           <form onSubmit={this.submitLogin} className="login-form-box">
             <h3>Login</h3>
             <label> Username:
               <input type="text"
                 value={this.state.username}
                 onChange={this.update("username")}
                 className="login-input" />
             </label>
             <br/>
             <label> Password:
               <input type="password"
                 value={this.state.password}
                 onChange={this.update("password")}
                 className="login-input" />
             </label>
             <br/>
             <input type="submit" value="Login" />
             {this.renderErrors()}
           </form>
        </div>
      </div>

    );
  }





}


export default withRouter(SessionForm1);
