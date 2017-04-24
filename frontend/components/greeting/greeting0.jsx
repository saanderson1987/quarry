import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <div className="NavBar">
    <nav>
      <div className="NavBegin">
    	  <a className="HomeLink" href='/'>Quarry</a>
    	  <form>
    	    <input className="AskOrSearch" type="text" placeholder="Ask or Search Quora"></input>
    	    <input className="NavAskQuestionButton" type="submit" value="Ask Question" />
    	  </form>
      </div>
  		<div className="NavEnd">
  			<img className="NavUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
  		  <div className="NavUserName">{currentUser.username}</div>
  		  <div className="UserMenu"></div>
  		</div>
  	</nav>
  </div>
);

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout)
  } else {
    return <div></div>
  }
};


export default Greeting;
