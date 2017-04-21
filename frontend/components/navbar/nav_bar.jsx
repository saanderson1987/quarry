import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavBar extends React.Component {

  render() {
    return (

    );
  }

}

const logout = (logout) => {
  logout;
  hashHistory.push('/session');
};

const NavBar = (props) => {
  return (
    <nav>
      <a className="HomeLink" href='/'>Quarry</a>
      <form>
        <input type="text" placeholder="Ask or Search Quora"></input>
        <input type="submit" value="Ask Question" />
      </form>
      <img className="UserPhoto"></img>
      <span>{props.currentUser.username}</span>
      <div className="UserMenu"></div>
      <button className="header-button" onClick={logout(props.logout)}>Log Out</button>
    </nav>
  );

};

export default NavBar;


//convert nav bar to class in order to use logout function
