import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
	<nav>
	  <a className="HomeLink" href='/'>Quarry</a>
	  <form>
	    <input className="AskOrSearch" type="text" placeholder="Ask or Search Quora"></input>
	    <input className="NavAskQuestionButton" type="submit" value="Ask Question" />
	  </form>
		<div className="NavEnd">
			<img className="UserPhoto"></img>
		  <span>{currentUser.username}</span>
		  <div className="UserMenu"></div>
		  <button className="header-button" onClick={logout}>
		    Log Out
		  </button>
		</div>
	</nav>
);

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout)
  } else {
    return <div></div>
  }
};

export default Greeting;
