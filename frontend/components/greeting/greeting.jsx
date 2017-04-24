import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userDropDownClicked: false };
  }

  clickUserDropDownMenu() {
    return (e) => {
      if (this.state.userDropDownClicked === false) {
        this.setState({ userDropDownClicked: true });
      } else {
        this.setState({ userDropDownClicked: false });
      }
    };
  }

  userDropDownMenu() {
    if (this.state.userDropDownClicked === false) {
      return <div></div>;
    } else {
      return(
        <div className="UserMenu">
          <ul className="UserMenuMain">
            <li>Profile</li>
            <li>Blogs</li>
            <li>Messages</li>
            <li>Your Content</li>
            <li>Stats</li>
            <li>Settings</li>
          </ul>
          <ul className="UserMenuSub">
            <li>Contact Us · Report a Bug</li>
            <li>About · Careers</li>
            <li>Privacy · Terms · Conduct</li>
            <li>Languages · <button className="header-button" onClick={this.props.logout}>
              Logout
            </button></li>
          </ul>
        </div>

      );
    }
  }

  personalGreeting() {
    return (
      <div className="NavBar">
        <nav>
          <div className="NavBegin">
        	  <a className="HomeLink" href='/'>Quarry</a>
        	  <form>
        	    <input className="AskOrSearch" type="text" placeholder="Ask or Search Quora"></input>
        	    <input className="NavAskQuestionButton" type="submit" value="Ask Question" />
        	  </form>
          </div>
          <div className="NavMiddle">
            <a>Read</a>
            <a>Answer</a>
            <a>Notifications</a>
          </div>
      		<div onClick={this.clickUserDropDownMenu()} className="NavEnd">
      			<img className="NavUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
      		  <div className="NavUserName">{this.props.currentUser.username}</div>
      		  <div>{this.userDropDownMenu()}</div>
      		</div>
      	</nav>
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.personalGreeting();
    } else {
      return <div></div>;
    }

  }

}

export default Greeting;
