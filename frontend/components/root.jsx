import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import test from './test';
import SessionFormContainer1 from './session_form1/session_form_container1';
import Signup from './session_form1/signup';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/session');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  // debugger
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={test} onEnter={_ensureLoggedIn}/>
          <Route
            path="/login"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn}
          />
          <Route
            path="/signup"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn}
          />
          <Route path="/session" component={SessionFormContainer1}>
            <Route path="/session/signup" component={Signup} />
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;