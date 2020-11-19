import { connect } from 'react-redux';
import { signupUser, clearErrors, loginDemo } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: user => dispatch(signupUser(user)),
        loginDemo: () => dispatch(loginDemo()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);