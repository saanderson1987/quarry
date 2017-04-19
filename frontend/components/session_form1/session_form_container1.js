import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm1 from './session_form1';

const mapStateToProps = ({ session }) => {
  // debugger
  return({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm1);
